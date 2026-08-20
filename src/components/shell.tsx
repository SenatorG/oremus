import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, CalendarDays, CircleDot } from "lucide-react";
import { Mark } from "./mark";
import { cn } from "@/lib/utils";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";

const NAV = [
  { to: "/", label: "Today", icon: CircleDot },
  { to: "/path", label: "Path", icon: BookOpen },
  { to: "/feasts", label: "Feasts", icon: CalendarDays },
] as const;

function AuthSlot({ onLogin }: { onLogin: boolean }) {
  const { isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="size-8 shrink-0 animate-pulse rounded-full bg-secondary" aria-hidden />;
  }
  return (
    <>
      <SignedOut>
        {onLogin ? null : (
          <Link
            to="/login"
            className="flex h-10 items-center rounded-[var(--radius-md)] px-3 text-sm font-medium text-primary"
          >
            Sign in
          </Link>
        )}
      </SignedOut>
      <SignedIn>
        <div className="max-w-[42vw] min-w-0 [&_span.font-medium]:hidden sm:[&_span.font-medium]:inline">
          <UserButton />
        </div>
      </SignedIn>
    </>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5 text-foreground">
            <Mark className="size-7 shrink-0" />
            <span className="font-display text-lg font-semibold tracking-tight">Totus Tuus</span>
          </Link>
          <div className="flex items-center gap-1">
            <nav className="hidden items-center gap-1 sm:flex">
              {NAV.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/" || pathname.startsWith("/day")
                    : pathname === item.to || pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex h-10 items-center gap-2 rounded-[var(--radius-md)] px-3 text-sm font-medium",
                      active ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <AuthSlot onLogin={pathname === "/login"} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-28 pt-6 sm:pb-12">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] sm:hidden">
        <div className="mx-auto grid max-w-3xl grid-cols-3">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/" || pathname.startsWith("/day")
                : pathname === item.to || pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-[0.6875rem] font-medium tracking-wide uppercase",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <item.icon className="size-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
