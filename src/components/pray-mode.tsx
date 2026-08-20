import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { PRAYERS, type Prayer } from "@/lib/prayers";

type FlatStep = {
  prayerTitle: string;
  text: string;
  response?: string;
  indexInPrayer: number;
  prayerLength: number;
};

function flatten(prayers: Prayer[]): FlatStep[] {
  const out: FlatStep[] = [];
  for (const p of prayers) {
    p.steps.forEach((s, i) => {
      out.push({
        prayerTitle: p.title,
        text: s.text,
        response: s.response,
        indexInPrayer: i,
        prayerLength: p.steps.length,
      });
    });
  }
  return out;
}

export function PrayMode({
  prayerIds,
  onClose,
  onFinish,
}: {
  prayerIds: string[];
  onClose: () => void;
  onFinish: () => void;
}) {
  const prayers = useMemo(
    () => prayerIds.map((id) => PRAYERS[id]).filter(Boolean) as Prayer[],
    [prayerIds],
  );
  const steps = useMemo(() => flatten(prayers), [prayers]);
  const [i, setI] = useState(0);
  const step = steps[i];
  const last = i === steps.length - 1;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setI((n) => Math.min(steps.length - 1, n + 1));
      }
      if (e.key === "ArrowLeft") setI((n) => Math.max(0, n - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, steps.length]);

  if (!step || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed top-0 left-0 z-[100] flex h-dvh w-screen flex-col bg-background text-foreground">
      <div className="flex items-center justify-between px-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {step.prayerTitle}
          <span className="tabular-nums">
            {" "}
            · {step.indexInPrayer + 1}/{step.prayerLength}
          </span>
        </p>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close pray mode">
          <X />
        </Button>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-6">
        <p className="font-display text-2xl font-medium leading-snug tracking-tight text-pretty sm:text-3xl">
          {step.text}
        </p>
        {step.response ? (
          <p className="mt-6 font-display text-xl italic leading-snug text-primary text-pretty">
            {step.response}
          </p>
        ) : null}
      </div>

      <div className="mx-auto flex w-full max-w-xl items-center justify-between gap-3 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <Button
          variant="outline"
          size="icon"
          disabled={i === 0}
          onClick={() => setI((n) => Math.max(0, n - 1))}
          aria-label="Previous"
        >
          <ChevronLeft />
        </Button>
        <p className="text-xs tabular-nums text-muted-foreground">
          {i + 1} / {steps.length}
        </p>
        {last ? (
          <Button onClick={onFinish}>Mark prayed</Button>
        ) : (
          <Button size="icon" onClick={() => setI((n) => Math.min(steps.length - 1, n + 1))} aria-label="Next">
            <ChevronRight />
          </Button>
        )}
      </div>
    </div>,
    document.body,
  );
}
