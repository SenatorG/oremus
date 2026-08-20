import {
  addDaysISO,
  formatLong,
  fromISODate,
  immaculateHeartISO,
  liturgicalAnnunciationISO,
  startISOFromConsecration,
  todayISO,
  weekday,
} from "./dates";

export type Rank = "solemnity" | "feast" | "memorial" | "optional";

export type FeastDef = {
  id: string;
  name: string;
  rank: Rank;
  preferred?: boolean;
  holyDayUS?: boolean;
  usFeast?: boolean;
  note?: string;
  kind: "fixed" | "annunciation" | "immaculate-heart";
  month?: number;
  day?: number;
};

export const FEASTS: FeastDef[] = [
  {
    id: "mother-of-god",
    name: "Mary, Mother of God",
    rank: "solemnity",
    holyDayUS: true,
    kind: "fixed",
    month: 1,
    day: 1,
  },
  {
    id: "presentation-lord",
    name: "Presentation of the Lord",
    rank: "feast",
    kind: "fixed",
    month: 2,
    day: 2,
    note: "A feast of the Lord with a strong Marian character.",
  },
  {
    id: "lourdes",
    name: "Our Lady of Lourdes",
    rank: "memorial",
    kind: "fixed",
    month: 2,
    day: 11,
  },
  {
    id: "annunciation",
    name: "The Annunciation",
    rank: "solemnity",
    preferred: true,
    kind: "annunciation",
    note: "The feast St. Louis de Montfort recommended most of all: God himself entrusted to Mary.",
  },
  {
    id: "fatima",
    name: "Our Lady of Fatima",
    rank: "optional",
    kind: "fixed",
    month: 5,
    day: 13,
  },
  {
    id: "visitation",
    name: "The Visitation",
    rank: "feast",
    kind: "fixed",
    month: 5,
    day: 31,
  },
  {
    id: "immaculate-heart",
    name: "Immaculate Heart of Mary",
    rank: "memorial",
    kind: "immaculate-heart",
    note: "Saturday after the Sacred Heart of Jesus.",
  },
  {
    id: "mount-carmel",
    name: "Our Lady of Mount Carmel",
    rank: "optional",
    kind: "fixed",
    month: 7,
    day: 16,
  },
  {
    id: "assumption",
    name: "The Assumption",
    rank: "solemnity",
    holyDayUS: true,
    kind: "fixed",
    month: 8,
    day: 15,
  },
  {
    id: "queenship",
    name: "Queenship of Mary",
    rank: "memorial",
    kind: "fixed",
    month: 8,
    day: 22,
  },
  {
    id: "nativity",
    name: "Nativity of Mary",
    rank: "feast",
    kind: "fixed",
    month: 9,
    day: 8,
  },
  {
    id: "holy-name",
    name: "Holy Name of Mary",
    rank: "optional",
    kind: "fixed",
    month: 9,
    day: 12,
  },
  {
    id: "sorrows",
    name: "Our Lady of Sorrows",
    rank: "memorial",
    kind: "fixed",
    month: 9,
    day: 15,
  },
  {
    id: "rosary",
    name: "Our Lady of the Rosary",
    rank: "memorial",
    kind: "fixed",
    month: 10,
    day: 7,
  },
  {
    id: "presentation-mary",
    name: "Presentation of Mary",
    rank: "memorial",
    kind: "fixed",
    month: 11,
    day: 21,
  },
  {
    id: "immaculate-conception",
    name: "Immaculate Conception",
    rank: "solemnity",
    holyDayUS: true,
    kind: "fixed",
    month: 12,
    day: 8,
    note: "Patronal feast of the United States.",
  },
  {
    id: "guadalupe",
    name: "Our Lady of Guadalupe",
    rank: "feast",
    usFeast: true,
    kind: "fixed",
    month: 12,
    day: 12,
    note: "Feast in the United States; optional memorial elsewhere.",
  },
];

export type FeastOccurrence = {
  id: string;
  feastId: string;
  name: string;
  rank: Rank;
  preferred?: boolean;
  holyDayUS?: boolean;
  note?: string;
  consecrationISO: string;
  startISO: string;
  year: number;
  liturgicalNote?: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function fixedISO(year: number, month: number, day: number) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

export function consecrationISOFor(def: FeastDef, year: number): string {
  if (def.kind === "annunciation") return liturgicalAnnunciationISO(year);
  if (def.kind === "immaculate-heart") return immaculateHeartISO(year);
  return fixedISO(year, def.month!, def.day!);
}

function liturgicalNote(def: FeastDef, consecrationISO: string, year: number): string | undefined {
  const notes: string[] = [];
  if (def.note) notes.push(def.note);
  if (def.kind === "annunciation" && consecrationISO !== `${year}-03-25`) {
    notes.push(
      `Transferred from March 25 because that date falls in Holy Week or the Easter octave. Consecrate on the liturgical celebration (${formatLong(consecrationISO)}).`,
    );
  }
  const dow = fromISODate(consecrationISO).getDay();
  if (def.id === "guadalupe" && dow === 0) {
    notes.push(
      "Falls on a Sunday of Advent this year. The Advent Sunday Mass takes precedence; you may still consecrate privately after Mass.",
    );
  }
  if (def.id === "assumption" && (dow === 0)) {
    notes.push("Falls on Sunday — the solemnity is celebrated with the Sunday Mass.");
  }
  return notes.length ? notes.join(" ") : undefined;
}

export function occurrencesForYear(year: number): FeastOccurrence[] {
  return FEASTS.map((def) => {
    const consecrationISO = consecrationISOFor(def, year);
    return {
      id: `${def.id}-${year}`,
      feastId: def.id,
      name: def.name,
      rank: def.rank,
      preferred: def.preferred,
      holyDayUS: def.holyDayUS,
      note: def.note,
      consecrationISO,
      startISO: startISOFromConsecration(consecrationISO),
      year,
      liturgicalNote: liturgicalNote(def, consecrationISO, year),
    };
  });
}

export function upcomingOccurrences(fromISO = todayISO(), throughYear = 2028): FeastOccurrence[] {
  const fromYear = fromISODate(fromISO).getFullYear();
  const list: FeastOccurrence[] = [];
  for (let y = fromYear - 1; y <= throughYear; y++) {
    list.push(...occurrencesForYear(y));
  }
  return list
    .filter((o) => o.consecrationISO >= fromISO)
    .sort((a, b) => a.consecrationISO.localeCompare(b.consecrationISO));
}

export function nextFullStart(fromISO = todayISO()): FeastOccurrence | undefined {
  return upcomingOccurrences(fromISO).find((o) => o.startISO >= fromISO);
}

export function rankLabel(rank: Rank): string {
  if (rank === "solemnity") return "Solemnity";
  if (rank === "feast") return "Feast";
  if (rank === "memorial") return "Memorial";
  return "Optional memorial";
}

export function windowStatus(o: FeastOccurrence, today = todayISO()) {
  if (o.consecrationISO < today) return "past" as const;
  if (o.startISO > today) return "upcoming" as const;
  if (o.consecrationISO === today) return "consecration" as const;
  return "in-progress" as const;
}

export function describeWindow(o: FeastOccurrence): string {
  return `Begin ${weekday(o.startISO)}, ${formatLong(o.startISO).replace(/^[^,]+, /, "")} · Consecrate ${weekday(o.consecrationISO)}, ${formatLong(o.consecrationISO).replace(/^[^,]+, /, "")}`;
}
