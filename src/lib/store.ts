import { addDaysISO, diffDays, todayISO } from "./dates";

export type DayLog = {
  prayers: string[];
  note: string;
  completed?: boolean;
};

export type Journey = {
  feastId: string;
  feastName: string;
  startISO: string;
  consecrationISO: string;
  name: string;
  logs: Record<string, DayLog>;
  consecrated?: { signedAt: string; name: string };
};

export function clampDay(n: number) {
  return Math.min(34, Math.max(1, n));
}

export function dayNumberOn(startISO: string, iso: string): number {
  return diffDays(startISO, iso) + 1;
}

export function isoForDay(startISO: string, day: number): string {
  return addDaysISO(startISO, day - 1);
}

export function currentDayNumber(journey: Journey, today = todayISO()): number {
  return clampDay(dayNumberOn(journey.startISO, today));
}

export function completedCount(journey: Journey): number {
  return Object.values(journey.logs).filter((l) => l.completed || l.prayers.length > 0).length;
}
