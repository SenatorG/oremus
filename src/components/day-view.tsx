import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { PrayMode } from "./pray-mode";
import { ACT_OF_CONSECRATION, PRAYERS, periodForDay } from "@/lib/prayers";
import { getDay } from "@/lib/days";
import { formatLong, todayISO } from "@/lib/dates";
import { isoForDay } from "@/lib/store";
import { useJourney } from "@/lib/use-journey";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

export function DayView({ day }: { day: number }) {
  const { journey, togglePrayer, setNote, markDayComplete, setName, signConsecration } =
    useJourney();
  const [praying, setPraying] = useState(false);

  if (!journey) return null;

  const period = periodForDay(day);
  const content = getDay(day);
  const dateISO = isoForDay(journey.startISO, day);
  const log = journey.logs[String(day)];
  const isToday = dateISO === todayISO();
  const prev = day > 1 ? day - 1 : null;
  const next = day < 34 ? day + 1 : null;

  if (day === 34) {
    return (
      <ConsecratePanel
        journeyName={journey.name}
        feastName={journey.feastName}
        dateISO={dateISO}
        signed={Boolean(journey.consecrated)}
        onName={setName}
        onSign={signConsecration}
      />
    );
  }

  if (!content) return <p>Unknown day.</p>;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
            {period.days} · {isToday ? "Today" : formatLong(dateISO)}
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-balance">
            Day {day}
            <span className="text-muted-foreground"> · {content.title}</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{period.label}</p>
        </div>
        <div className="flex gap-1">
          {prev ? (
            <Button variant="outline" size="icon" asChild>
              <Link to="/day/$day" params={{ day: String(prev) }} aria-label="Previous day">
                <ChevronLeft />
              </Link>
            </Button>
          ) : null}
          {next ? (
            <Button variant="outline" size="icon" asChild>
              <Link to="/day/$day" params={{ day: String(next) }} aria-label="Next day">
                <ChevronRight />
              </Link>
            </Button>
          ) : null}
        </div>
      </header>

      <p className="max-w-prose text-sm leading-normal text-muted-foreground text-pretty">
        {period.intention}
      </p>

      <Card>
        <CardContent className="flex flex-col gap-3">
          <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
            Reading · {content.source}
          </p>
          <p className="font-display text-lg font-medium leading-snug text-pretty">{content.reading}</p>
          <Separator />
          <p className="text-sm leading-normal text-pretty">
            <span className="font-medium">Examen. </span>
            {content.examen}
          </p>
        </CardContent>
      </Card>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold tracking-tight">Prayers</h2>
          <Button size="sm" onClick={() => setPraying(true)}>
            <Play />
            Pray
          </Button>
        </div>
        <ul className="flex flex-col gap-2">
          {period.prayerIds.map((id) => {
            const prayer = PRAYERS[id];
            if (!prayer) return null;
            const on = log?.prayers.includes(id);
            return (
              <li key={id}>
                <PrayerRow
                  title={prayer.title}
                  latin={prayer.latin}
                  checked={Boolean(on)}
                  onToggle={() => togglePrayer(day, id)}
                  body={prayer.steps
                    .map((s) => (s.response ? `${s.text} ${s.response}` : s.text))
                    .join(" ")}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <label htmlFor={`note-${day}`} className="text-sm font-medium">
          Note for today
        </label>
        <Textarea
          id={`note-${day}`}
          value={log?.note ?? ""}
          onChange={(e) => setNote(day, e.target.value)}
          placeholder="A line from the reading, a resolution, a name to pray for…"
        />
      </section>

      <Button
        variant={log?.completed ? "secondary" : "default"}
        onClick={() => markDayComplete(day, period.prayerIds)}
      >
        {log?.completed ? "Day marked complete" : "Mark day complete"}
      </Button>

      {praying ? (
        <PrayMode
          prayerIds={period.prayerIds}
          onClose={() => setPraying(false)}
          onFinish={() => {
            markDayComplete(day, period.prayerIds);
            setPraying(false);
          }}
        />
      ) : null}
    </div>
  );
}

function PrayerRow({
  title,
  latin,
  checked,
  onToggle,
  body,
}: {
  title: string;
  latin?: string;
  checked: boolean;
  onToggle: () => void;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-card">
      <div className="flex items-center gap-1 p-1.5">
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)]",
            checked ? "text-primary" : "text-muted-foreground",
          )}
          aria-pressed={checked}
          aria-label={`${checked ? "Unmark" : "Mark"} ${title}`}
        >
          <span
            className={cn(
              "flex size-5 items-center justify-center rounded-full border",
              checked ? "border-primary bg-primary text-primary-foreground" : "border-border",
            )}
          >
            {checked ? <Check className="size-3" strokeWidth={3} /> : null}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 flex-1 flex-col items-start rounded-[var(--radius-sm)] px-1 py-2 text-left"
        >
          <span className="text-sm font-medium">{title}</span>
          {latin && latin !== title ? (
            <span className="text-xs italic text-muted-foreground">{latin}</span>
          ) : null}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border px-4 py-3">
          <p className="font-display text-base leading-snug text-pretty">{body}</p>
        </div>
      ) : null}
    </div>
  );
}

function ConsecratePanel({
  journeyName,
  feastName,
  dateISO,
  signed,
  onName,
  onSign,
}: {
  journeyName: string;
  feastName: string;
  dateISO: string;
  signed: boolean;
  onName: (n: string) => void;
  onSign: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
          Day 34 · {formatLong(dateISO)}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-balance">
          Act of Consecration
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{feastName}</p>
      </header>

      <Card>
        <CardContent className="flex flex-col gap-2 text-sm leading-normal">
          <p className="font-medium">Before you pray</p>
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Confession today, or within the eight days prior</li>
            <li>Holy Mass and Communion, offering yourself through Mary</li>
            <li>Fast, give alms, or light a candle if you can</li>
            <li>Pray the Act slowly. Sign it. Keep the copy.</li>
          </ul>
        </CardContent>
      </Card>

      <label className="block text-sm font-medium">
        I, {journeyName || "N."}
        <Input
          className="mt-1.5"
          value={journeyName}
          onChange={(e) => onName(e.target.value)}
          placeholder="Your name"
        />
      </label>

      <article className="rounded-[var(--radius-xl)] border border-border bg-card p-5 sm:p-7">
        <div className="flex flex-col gap-5 font-display text-lg font-medium leading-snug text-pretty">
          {ACT_OF_CONSECRATION.map((p, i) => (
            <p key={i}>{p.replace("{name}", journeyName.trim() || "N.")}</p>
          ))}
        </div>
      </article>

      {signed ? (
        <p className="rounded-[var(--radius-md)] bg-secondary px-4 py-3 text-sm">
          Signed as {journeyName}. Totus tuus. Renew this Act each year on {feastName}, after the same 33 days.
        </p>
      ) : (
        <Button onClick={onSign}>Sign the Act</Button>
      )}

      <Button variant="outline" asChild>
        <Link to="/day/$day" params={{ day: "33" }}>
          <ChevronLeft />
          Back to Day 33
        </Link>
      </Button>
    </div>
  );
}
