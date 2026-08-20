import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mark } from "@/components/mark";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();
  if (!isPending && user) return <Navigate to="/" />;

  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6 pt-8">
      <div className="flex flex-col items-start gap-3">
        <Mark className="size-10" />
        <h1 className="font-display text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm leading-normal text-muted-foreground text-pretty">
          Save your 33 days to your account so the preparation follows you on every device.
        </p>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-3">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant={p.providerId === "grok-google" ? "default" : "outline"}
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">Sign-in is disabled.</p>
          )}
        </CardContent>
      </Card>
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        Continue without an account
      </Link>
    </div>
  );
}
