import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import type { FeastOccurrence } from "@/lib/feasts";
import { rankLabel, windowStatus } from "@/lib/feasts";
import { diffDays, formatLong, todayISO } from "@/lib/dates";
import { useJourney } from "@/lib/use-journey";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

const rankVariant = {
  solemnity: "solemnity",
  feast: "feast",
  memorial: "memorial",
  optional: "outline",
} as const;

export function FeastCard({
  occurrence,
  featured = false,
}: {
  occurrence: FeastOccurrence;
  featured?: boolean;
}) {
  const today = todayISO();
  const status = windowStatus(occurrence, today);
  const { journey, startJourney } = useJourney();
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(journey?.name ?? "");
  const [busy, setBusy] = useState(false);

  const daysToStart = diffDays(today, occurrence.startISO);
  const daysToFeast = diffDays(today, occurrence.consecrationISO);

  const cta =
    status === "upcoming"
      ? daysToStart === 0
        ? "Begin today"
        : `Begin in ${daysToStart} day${daysToStart === 1 ? "" : "s"}`
      : status === "in-progress"
        ? "Join mid-stream"
        : status === "consecration"
          ? "Consecrate today"
          : "View";

  async function confirm() {
    if (!user) {
      setOpen(false);
      navigate({ to: "/login" });
      return;
    }
    setBusy(true);
    try {
      await startJourney(occurrence, name);
      setOpen(false);
      navigate({ to: "/" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Card className={featured ? "border-primary/30" : undefined}>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-semibold tracking-tight text-balance">
                  {occurrence.name}
                </h3>
                {occurrence.preferred ? (
                  <Badge variant="feast">De Montfort’s choice</Badge>
                ) : null}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Badge variant={rankVariant[occurrence.rank]}>{rankLabel(occurrence.rank)}</Badge>
                {occurrence.holyDayUS ? <Badge variant="outline">US holy day</Badge> : null}
              </div>
            </div>
          </div>

          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
                Begin · Day 1
              </dt>
              <dd className="mt-0.5 font-medium">{formatLong(occurrence.startISO)}</dd>
            </div>
            <div>
              <dt className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
                Consecrate · Day 34
              </dt>
              <dd className="mt-0.5 font-medium">{formatLong(occurrence.consecrationISO)}</dd>
            </div>
          </dl>

          {occurrence.liturgicalNote ? (
            <p className="text-sm leading-normal text-muted-foreground text-pretty">
              {occurrence.liturgicalNote}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              {status === "upcoming" && daysToStart > 0
                ? `${daysToStart} days until Day 1 · ${daysToFeast} until the feast`
                : status === "in-progress"
                  ? "Official start has passed. You can still finish on the feast."
                  : status === "consecration"
                    ? "This is the feast day."
                    : null}
            </p>
            <Button size="sm" onClick={() => setOpen(true)}>
              {cta}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Begin this preparation</DialogTitle>
          <DialogDescription>
            33 days of prayer ending on {occurrence.name}, {formatLong(occurrence.consecrationISO)}.
            {user
              ? journey
                ? " This will replace the preparation you have in progress."
                : " Progress is saved to your account."
              : " Sign in to save the 33 days to your account."}
          </DialogDescription>
          {user ? (
            <label className="mt-4 block text-sm font-medium">
              Name for the Act of Consecration
              <Input
                className="mt-1.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your baptismal name"
                autoComplete="name"
              />
            </label>
          ) : null}
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            {user ? (
              <Button onClick={() => void confirm()} disabled={busy}>
                Begin
              </Button>
            ) : isPending ? (
              <Button disabled>Begin</Button>
            ) : (
              <Button asChild>
                <Link to="/login">Sign in to begin</Link>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
