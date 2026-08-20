import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { DayView } from "@/components/day-view";
import { Button } from "@/components/ui/button";
import { useJourney } from "@/lib/use-journey";

export const Route = createFileRoute("/day/$day")({ component: DayPage });

function DayPage() {
  const { day: raw } = Route.useParams();
  const n = Number(raw);
  const { journey, pending, signedIn } = useJourney();

  if (!Number.isFinite(n) || n < 1 || n > 34) {
    return (
      <p className="text-sm text-muted-foreground">
        Unknown day.{" "}
        <Link to="/" className="text-primary">
          Return home
        </Link>
      </p>
    );
  }

  if (pending) {
    return (
      <div className="flex flex-col gap-4" aria-hidden>
        <div className="h-8 w-40 animate-pulse rounded-[var(--radius-md)] bg-secondary" />
        <div className="h-40 animate-pulse rounded-[var(--radius-lg)] bg-secondary" />
      </div>
    );
  }

  if (!journey) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          {signedIn
            ? "Choose a Marian feast to begin the 33 days. You can still read the path of preparation."
            : "Sign in to track the 33 days. You can still read the path and the feast dates."}
        </p>
        {signedIn ? (
          <>
            <Button asChild>
              <Link to="/feasts">Choose a feast</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/path">Read the path</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/feasts">Browse feasts</Link>
            </Button>
          </>
        )}
      </div>
    );
  }

  return <DayView day={n} />;
}
