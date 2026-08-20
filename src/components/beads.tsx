import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { periodForDay } from "@/lib/prayers";
import type { Journey } from "@/lib/store";

const GROUPS = [
  { start: 1, end: 12, period: "world" as const },
  { start: 13, end: 19, period: "self" as const },
  { start: 20, end: 26, period: "mary" as const },
  { start: 27, end: 33, period: "jesus" as const },
];

function filled(journey: Journey | null, day: number) {
  const log = journey?.logs[String(day)];
  return Boolean(log?.completed || (log && log.prayers.length > 0));
}

export function Beads({
  journey,
  current,
  compact = false,
}: {
  journey: Journey | null;
  current: number;
  compact?: boolean;
}) {
  return (
    <nav aria-label="33 days" className={cn("flex flex-col gap-3", compact && "gap-2")}>
      {GROUPS.map((g) => (
        <div key={g.period} className="flex flex-wrap items-center gap-1.5">
          {Array.from({ length: g.end - g.start + 1 }, (_, i) => {
            const day = g.start + i;
            const on = filled(journey, day);
            const isCurrent = day === current;
            return (
              <Link
                key={day}
                to="/day/$day"
                params={{ day: String(day) }}
                title={`Day ${day} · ${periodForDay(day).label}`}
                className={cn(
                  "flex size-7 items-center justify-center rounded-full text-[0.625rem] tabular-nums transition-[transform,background-color,color,box-shadow] duration-[var(--motion-quick)]",
                  compact && "size-6 text-[0.5625rem]",
                  on
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40",
                  isCurrent && "ring-2 ring-ring ring-offset-2 ring-offset-background",
                )}
              >
                {day}
              </Link>
            );
          })}
        </div>
      ))}
      <Link
        to="/day/$day"
        params={{ day: "34" }}
        className={cn(
          "flex h-10 items-center justify-center rounded-full border px-4 text-xs font-medium tracking-wide uppercase",
          journey?.consecrated
            ? "border-transparent bg-primary text-primary-foreground"
            : "border-border bg-card text-muted-foreground hover:border-primary/40",
          current === 34 && "ring-2 ring-ring ring-offset-2 ring-offset-background",
        )}
      >
        Day 34 · Consecration
      </Link>
    </nav>
  );
}
