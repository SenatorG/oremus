import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FeastCard } from "@/components/feast-card";
import { Button } from "@/components/ui/button";
import { upcomingOccurrences } from "@/lib/feasts";
import { todayISO } from "@/lib/dates";
import { useJourney } from "@/lib/use-journey";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/feasts")({ component: FeastsPage });

function FeastsPage() {
  const today = todayISO();
  const all = useMemo(() => upcomingOccurrences(today, 2028), [today]);
  const [year, setYear] = useState<"soon" | "2026" | "2027" | "2028">("soon");
  const { journey, resetJourney } = useJourney();
  const [confirm, setConfirm] = useState(false);

  const list =
    year === "soon"
      ? all.slice(0, 12)
      : all.filter((o) => o.consecrationISO.startsWith(year));

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Marian feasts</h1>
        <p className="mt-2 max-w-prose text-sm leading-normal text-muted-foreground text-pretty">
          Begin 33 days before the feast; consecrate on day 34. St. Louis recommended the
          Annunciation above the others.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(["soon", "2026", "2027", "2028"] as const).map((y) => (
          <Button
            key={y}
            size="sm"
            variant={year === y ? "default" : "outline"}
            onClick={() => setYear(y)}
          >
            {y === "soon" ? "Next" : y}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {list.length === 0 ? (
          <p className="text-sm text-muted-foreground">No remaining feasts in this year from today.</p>
        ) : (
          list.map((o) => <FeastCard key={o.id} occurrence={o} />)
        )}
      </div>

      {journey ? (
        <Button variant="ghost" className="self-start text-muted-foreground" onClick={() => setConfirm(true)}>
          Clear current preparation
        </Button>
      ) : null}

      <Dialog open={confirm} onOpenChange={setConfirm}>
        <DialogContent>
          <DialogTitle>Clear this preparation?</DialogTitle>
          <DialogDescription>
            Checked prayers and notes on this preparation will be removed from your account. You can
            begin again on any feast.
          </DialogDescription>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setConfirm(false)}>
              Keep it
            </Button>
            <Button
              onClick={() => {
                void resetJourney();
                setConfirm(false);
              }}
            >
              Clear
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
