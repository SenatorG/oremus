/** Local-calendar helpers. Store dates as YYYY-MM-DD to avoid timezone drift. */

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function fromISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function todayISO(): string {
  return toISODate(new Date());
}

export function addDaysISO(iso: string, days: number): string {
  const d = fromISODate(iso);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

export function diffDays(fromISO: string, toISO: string): number {
  const a = fromISODate(fromISO);
  const b = fromISODate(toISO);
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatLong(iso: string): string {
  const d = fromISODate(iso);
  return `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function formatShort(iso: string): string {
  const d = fromISODate(iso);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

export function weekday(iso: string): string {
  return WEEKDAYS[fromISODate(iso).getDay()] ?? "";
}

/** Anonymous Gregorian computus. Returns local date of Easter Sunday. */
export function easterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function easterISO(year: number): string {
  return toISODate(easterSunday(year));
}

/**
 * Annunciation is 25 March, unless that day falls in Holy Week or the Easter
 * octave — then it transfers to the Monday after Divine Mercy Sunday.
 * If 25 March is a Sunday of Lent before Palm Sunday, it transfers to Monday.
 */
export function liturgicalAnnunciationISO(year: number): string {
  const easter = easterISO(year);
  const mar25 = `${year}-03-25`;
  const palmSunday = addDaysISO(easter, -7);
  const divineMercy = addDaysISO(easter, 7);
  if (mar25 >= palmSunday && mar25 <= divineMercy) {
    return addDaysISO(divineMercy, 1);
  }
  if (fromISODate(mar25).getDay() === 0 && mar25 < palmSunday) {
    return addDaysISO(mar25, 1);
  }
  return mar25;
}

/** Sacred Heart is Friday after the second Sunday after Pentecost = Easter + 68. */
export function sacredHeartISO(year: number): string {
  return addDaysISO(easterISO(year), 68);
}

/** Immaculate Heart of Mary: Saturday after Sacred Heart = Easter + 69. */
export function immaculateHeartISO(year: number): string {
  return addDaysISO(easterISO(year), 69);
}

export function startISOFromConsecration(consecrationISO: string): string {
  return addDaysISO(consecrationISO, -33);
}
