import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";
import type { DayLog, Journey } from "@/lib/store";

type JourneyRow = {
  feast_id: string;
  feast_name: string;
  start_iso: string;
  consecration_iso: string;
  name: string;
  consecrated_at: string | Date | null;
  consecrated_name: string | null;
};

type LogRow = {
  day: number;
  prayers: string;
  note: string;
  completed: boolean;
};

function parsePrayers(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function toSignedAt(value: string | Date | null): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString();
  return value;
}

function assemble(row: JourneyRow, logs: LogRow[]): Journey {
  const map: Record<string, DayLog> = {};
  for (const log of logs) {
    map[String(log.day)] = {
      prayers: parsePrayers(log.prayers),
      note: log.note ?? "",
      completed: Boolean(log.completed),
    };
  }
  const signedAt = toSignedAt(row.consecrated_at);
  return {
    feastId: row.feast_id,
    feastName: row.feast_name,
    startISO: row.start_iso,
    consecrationISO: row.consecration_iso,
    name: row.name ?? "",
    logs: map,
    consecrated: signedAt
      ? { signedAt, name: row.consecrated_name ?? row.name }
      : undefined,
  };
}

async function loadJourney(userId: string): Promise<Journey | null> {
  const sql = await getSql();
  const rows = await sql<JourneyRow>`
    select feast_id, feast_name, start_iso, consecration_iso, name, consecrated_at, consecrated_name
    from journeys where user_id = ${userId} limit 1
  `;
  const row = rows[0];
  if (!row) return null;
  const logs = await sql<LogRow>`
    select day, prayers, note, completed from day_logs where user_id = ${userId}
  `;
  return assemble(row, logs);
}

export const getJourney = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => loadJourney(context.userId));

export const startJourneyFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { feastId: string; feastName: string; startISO: string; consecrationISO: string; name: string }) => ({
    feastId: input.feastId.trim(),
    feastName: input.feastName.trim(),
    startISO: input.startISO,
    consecrationISO: input.consecrationISO,
    name: input.name.trim() || "N.",
  }))
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await sql`delete from day_logs where user_id = ${context.userId}`;
    await sql`delete from journeys where user_id = ${context.userId}`;
    await sql`
      insert into journeys (user_id, feast_id, feast_name, start_iso, consecration_iso, name)
      values (${context.userId}, ${data.feastId}, ${data.feastName}, ${data.startISO}, ${data.consecrationISO}, ${data.name})
    `;
    return loadJourney(context.userId);
  });

export const resetJourneyFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    await sql`delete from day_logs where user_id = ${context.userId}`;
    await sql`delete from journeys where user_id = ${context.userId}`;
    return null;
  });

export const setNameFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((name: string) => name)
  .handler(async ({ context, data: name }) => {
    const sql = await getSql();
    await sql`update journeys set name = ${name} where user_id = ${context.userId}`;
    return loadJourney(context.userId);
  });

export const togglePrayerFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { day: number; prayerId: string }) => input)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const existing = await sql<LogRow>`
      select day, prayers, note, completed from day_logs
      where user_id = ${context.userId} and day = ${data.day} limit 1
    `;
    const current = existing[0];
    const prayers = current ? parsePrayers(current.prayers) : [];
    const next = prayers.includes(data.prayerId)
      ? prayers.filter((id) => id !== data.prayerId)
      : [...prayers, data.prayerId];
    const note = current?.note ?? "";
    const completed = current?.completed ?? false;
    const encoded = JSON.stringify(next);
    if (current) {
      await sql`
        update day_logs set prayers = ${encoded}
        where user_id = ${context.userId} and day = ${data.day}
      `;
    } else {
      await sql`
        insert into day_logs (user_id, day, prayers, note, completed)
        values (${context.userId}, ${data.day}, ${encoded}, ${note}, ${completed})
      `;
    }
    return loadJourney(context.userId);
  });

export const setNoteFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { day: number; note: string }) => input)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const existing = await sql<{ day: number }>`
      select day from day_logs where user_id = ${context.userId} and day = ${data.day} limit 1
    `;
    if (existing[0]) {
      await sql`
        update day_logs set note = ${data.note}
        where user_id = ${context.userId} and day = ${data.day}
      `;
    } else {
      await sql`
        insert into day_logs (user_id, day, prayers, note, completed)
        values (${context.userId}, ${data.day}, ${"[]"}, ${data.note}, ${false})
      `;
    }
    return loadJourney(context.userId);
  });

export const markDayCompleteFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: { day: number; prayerIds: string[] }) => input)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const encoded = JSON.stringify(data.prayerIds);
    const existing = await sql<{ day: number }>`
      select day from day_logs where user_id = ${context.userId} and day = ${data.day} limit 1
    `;
    if (existing[0]) {
      await sql`
        update day_logs set prayers = ${encoded}, completed = true
        where user_id = ${context.userId} and day = ${data.day}
      `;
    } else {
      await sql`
        insert into day_logs (user_id, day, prayers, note, completed)
        values (${context.userId}, ${data.day}, ${encoded}, ${""}, ${true})
      `;
    }
    return loadJourney(context.userId);
  });

export const signConsecrationFn = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    await sql`
      update journeys
      set consecrated_at = now(), consecrated_name = name
      where user_id = ${context.userId}
    `;
    return loadJourney(context.userId);
  });
