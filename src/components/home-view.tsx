import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Beads } from "./beads";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FeastCard } from "./feast-card";
import { nextFullStart, upcomingOccurrences } from "@/lib/feasts";
import { diffDays, formatLong, todayISO } from "@/lib/dates";
import { currentDayNumber, isoForDay, type Journey } from "@/lib/store";
import { useJourney } from "@/lib/use-journey";
import { getDay } from "@/lib/days";
import { periodForDay } from "@/lib/prayers";
import { Mark } from "./mark";

export function HomeView() {
  const { journey, pending } = useJourney();
  if (pending) return <HomeSkeleton />;
  if (!journey) return <Onboarding />;
  return <ActiveHome journey={journey} />;
}

function HomeSkeleton() {
  return (
    <div className="flex flex-col gap-8 pt-4" aria-hidden>
      <div className="flex flex-col gap-4">
        <div className="size-12 animate-pulse rounded-full bg-secondary" />
        <div className="h-10 w-48 animate-pulse rounded-[var(--radius-md)] bg-secondary" />
        <div className="h-16 max-w-prose animate-pulse rounded-[var(--radius-md)] bg-secondary" />
      </div>
      <div className="h-48 animate-pulse rounded-[var(--radius-lg)] bg-secondary" />
    </div>
  );
}

function Onboarding() {
  const { signedIn } = useJourney();
  const next = nextFullStart();
  const upcoming = upcomingOccurrences().slice(0, 8);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col items-start gap-4 pt-4">
        <Mark className="size-12" />
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
          Totus Tuus
        </h1>
        <p className="max-w-prose text-base leading-normal text-muted-foreground text-pretty">
          33 days of preparation, then the Act of Consecration to Jesus through Mary, according to
          St. Louis de Montfort. Choose a Marian feast. Begin 33 days before it. Consecrate on the
          feast itself.
        </p>
        {!signedIn ? (
          <p className="text-sm text-muted-foreground">
            <Link to="/login" className="font-medium text-primary">
              Sign in
            </Link>{" "}
            to keep the 33 days on every device.
          </p>
        ) : null}
      </section>

      {next ? (
        <div className="flex flex-col gap-3">
          <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
            Next complete cycle
          </p>
          <FeastCard occurrence={next} featured />
        </div>
      ) : null}

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
            Coming feasts
          </p>
          <Link to="/feasts" className="text-sm font-medium text-primary">
            All dates
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {upcoming
            .filter((o) => o.id !== next?.id)
            .slice(0, 5)
            .map((o) => (
              <FeastCard key={o.id} occurrence={o} />
            ))}
        </div>
      </div>
    </div>
  );
}

function ActiveHome({ journey }: { journey: Journey }) {
  const today = todayISO();
  const dayNum = currentDayNumber(journey, today);
  const beforeStart = today < journey.startISO;
  const afterEnd = today > journey.consecrationISO;
  const content = getDay(Math.min(dayNum, 33));
  const period = periodForDay(Math.min(dayNum, 34));
  const daysToStart = diffDays(today, journey.startISO);
  const daysToFeast = diffDays(today, journey.consecrationISO);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
          {journey.feastName}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-balance">
          {beforeStart
            ? "Preparation has not yet begun"
            : afterEnd
              ? journey.consecrated
                ? "Totus tuus"
                : "The feast has come"
              : dayNum === 34
                ? "Day of Consecration"
                : `Day ${dayNum} of 33`}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {beforeStart
            ? `Day 1 is ${formatLong(journey.startISO)} · ${daysToStart} day${daysToStart === 1 ? "" : "s"} from now`
            : `Consecration ${formatLong(journey.consecrationISO)}`}
        </p>
      </header>

      <Card>
        <CardContent className="flex flex-col gap-3">
          {beforeStart ? (
            <>
              <p className="text-sm leading-normal text-pretty">
                Use the days remaining to gather what you need: a quiet time, access to Confession,
                and the intention to belong entirely to Jesus through Mary.
              </p>
              <Button asChild>
                <Link to="/day/$day" params={{ day: "1" }}>
                  Preview Day 1
                  <ArrowRight />
                </Link>
              </Button>
            </>
          ) : afterEnd ? (
            <>
              <p className="text-sm leading-normal text-pretty">
                {journey.consecrated
                  ? "The Act is signed. Renew it each year on this feast, after the same 33 days."
                  : "You can still pray and sign the Act."}
              </p>
              <Button asChild>
                <Link to="/day/$day" params={{ day: "34" }}>
                  Open the Act
                  <ArrowRight />
                </Link>
              </Button>
            </>
          ) : (
            <>
              <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
                {period.label}
                {content ? ` · ${content.title}` : null}
              </p>
              {content ? (
                <p className="font-display text-lg font-medium leading-snug text-pretty">
                  {content.examen}
                </p>
              ) : (
                <p className="text-sm">Go to Confession, hear Mass, and pray the Act.</p>
              )}
              <p className="text-sm text-muted-foreground">
                {daysToFeast === 0
                  ? "Today is the feast."
                  : `${daysToFeast} day${daysToFeast === 1 ? "" : "s"} until consecration · ${formatLong(isoForDay(journey.startISO, dayNum))}`}
              </p>
              <Button asChild>
                <Link to="/day/$day" params={{ day: String(Math.min(dayNum, 34)) }}>
                  {dayNum === 34 ? "Pray the Act" : "Today’s prayers"}
                  <ArrowRight />
                </Link>
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <section className="flex flex-col gap-3">
        <h2 className="font-display text-xl font-semibold tracking-tight">The 33 days</h2>
        <Beads journey={journey} current={beforeStart ? 0 : Math.min(dayNum, 34)} />
      </section>
    </div>
  );
}
