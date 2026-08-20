import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { Beads } from "@/components/beads";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERIODS } from "@/lib/prayers";
import { currentDayNumber } from "@/lib/store";
import { useJourney } from "@/lib/use-journey";
import { todayISO } from "@/lib/dates";

export const Route = createFileRoute("/path")({ component: PathPage });

function PathPage() {
  const { journey } = useJourney();
  const today = todayISO();
  const current = journey ? currentDayNumber(journey, today) : 0;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight">The path</h1>
        <p className="mt-2 max-w-prose text-sm leading-normal text-muted-foreground text-pretty">
          Twelve days to empty the spirit of the world, then a week each of self-knowledge, of Mary,
          and of Jesus. The 34th day is the feast.
        </p>
      </header>

      {journey ? <Beads journey={journey} current={current} /> : null}

      <div className="flex flex-col gap-3">
        {(
          [
            PERIODS.world,
            PERIODS.self,
            PERIODS.mary,
            PERIODS.jesus,
            PERIODS.consecration,
          ] as const
        ).map((p) => (
          <Card key={p.id}>
            <CardContent className="flex flex-col gap-2">
              <p className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
                {p.days}
              </p>
              <h2 className="font-display text-xl font-semibold tracking-tight">{p.label}</h2>
              <p className="text-sm leading-normal text-muted-foreground text-pretty">{p.intention}</p>
              {p.id !== "consecration" ? (
                <p className="text-sm">
                  {p.prayerIds.length} daily prayers
                  {p.id === "mary" ? " plus five decades of the Rosary" : ""}.
                </p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>

      {!journey ? (
        <Button asChild>
          <Link to="/feasts">Choose a feast</Link>
        </Button>
      ) : null}
    </div>
  );
}
