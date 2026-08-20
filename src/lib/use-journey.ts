import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import type { FeastOccurrence } from "@/lib/feasts";
import type { DayLog, Journey } from "@/lib/store";
import {
  getJourney,
  markDayCompleteFn,
  resetJourneyFn,
  setNameFn,
  setNoteFn,
  signConsecrationFn,
  startJourneyFn,
  togglePrayerFn,
} from "@/lib/journey-fns";

function emptyLog(): DayLog {
  return { prayers: [], note: "" };
}

export function useJourney() {
  const { user, isPending: authPending } = useCurrentUserState();
  const qc = useQueryClient();
  const key = ["journey", user?.id] as const;

  const query = useQuery({
    queryKey: key,
    queryFn: () => getJourney(),
    enabled: Boolean(user),
  });

  const journey = user ? (query.data ?? null) : null;
  const pending = authPending || (Boolean(user) && query.isPending);

  const startMut = useMutation({
    mutationFn: (input: {
      feastId: string;
      feastName: string;
      startISO: string;
      consecrationISO: string;
      name: string;
    }) => startJourneyFn({ data: input }),
    onSuccess: (data) => {
      qc.setQueryData(key, data);
    },
  });

  const resetMut = useMutation({
    mutationFn: () => resetJourneyFn(),
    onSuccess: () => {
      qc.setQueryData(key, null);
    },
  });

  const setNameMut = useMutation({
    mutationFn: (name: string) => setNameFn({ data: name }),
    onMutate: async (name) => {
      await qc.cancelQueries({ queryKey: key });
      const prev = qc.getQueryData<Journey | null>(key);
      if (prev) qc.setQueryData(key, { ...prev, name });
      return { prev };
    },
    onError: (_e, _n, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(key, ctx.prev);
    },
    onSuccess: (data) => qc.setQueryData(key, data),
  });

  const toggleMut = useMutation({
    mutationFn: (input: { day: number; prayerId: string }) => togglePrayerFn({ data: input }),
    onMutate: async ({ day, prayerId }) => {
      await qc.cancelQueries({ queryKey: key });
      const prev = qc.getQueryData<Journey | null>(key);
      if (prev) {
        const logKey = String(day);
        const log = prev.logs[logKey] ?? emptyLog();
        const prayers = log.prayers.includes(prayerId)
          ? log.prayers.filter((id) => id !== prayerId)
          : [...log.prayers, prayerId];
        qc.setQueryData(key, {
          ...prev,
          logs: { ...prev.logs, [logKey]: { ...log, prayers } },
        });
      }
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(key, ctx.prev);
    },
    onSuccess: (data) => qc.setQueryData(key, data),
  });

  const noteMut = useMutation({
    mutationFn: (input: { day: number; note: string }) => setNoteFn({ data: input }),
    onMutate: async ({ day, note }) => {
      await qc.cancelQueries({ queryKey: key });
      const prev = qc.getQueryData<Journey | null>(key);
      if (prev) {
        const logKey = String(day);
        const log = prev.logs[logKey] ?? emptyLog();
        qc.setQueryData(key, {
          ...prev,
          logs: { ...prev.logs, [logKey]: { ...log, note } },
        });
      }
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(key, ctx.prev);
    },
    onSuccess: (data) => qc.setQueryData(key, data),
  });

  const completeMut = useMutation({
    mutationFn: (input: { day: number; prayerIds: string[] }) => markDayCompleteFn({ data: input }),
    onMutate: async ({ day, prayerIds }) => {
      await qc.cancelQueries({ queryKey: key });
      const prev = qc.getQueryData<Journey | null>(key);
      if (prev) {
        const logKey = String(day);
        const log = prev.logs[logKey] ?? emptyLog();
        qc.setQueryData(key, {
          ...prev,
          logs: { ...prev.logs, [logKey]: { ...log, prayers: prayerIds, completed: true } },
        });
      }
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(key, ctx.prev);
    },
    onSuccess: (data) => qc.setQueryData(key, data),
  });

  const signMut = useMutation({
    mutationFn: () => signConsecrationFn(),
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: key });
      const prev = qc.getQueryData<Journey | null>(key);
      if (prev) {
        qc.setQueryData(key, {
          ...prev,
          consecrated: { signedAt: new Date().toISOString(), name: prev.name },
        });
      }
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev !== undefined) qc.setQueryData(key, ctx.prev);
    },
    onSuccess: (data) => qc.setQueryData(key, data),
  });

  return {
    journey,
    pending,
    signedIn: Boolean(user),
    startJourney: (o: FeastOccurrence, name: string) =>
      startMut.mutateAsync({
        feastId: o.feastId,
        feastName: o.name,
        startISO: o.startISO,
        consecrationISO: o.consecrationISO,
        name,
      }),
    resetJourney: () => resetMut.mutateAsync(),
    setName: (name: string) => setNameMut.mutate(name),
    togglePrayer: (day: number, prayerId: string) => toggleMut.mutate({ day, prayerId }),
    setNote: (day: number, note: string) => noteMut.mutate({ day, note }),
    markDayComplete: (day: number, prayerIds: string[]) =>
      completeMut.mutate({ day, prayerIds }),
    signConsecration: () => signMut.mutate(),
  };
}
