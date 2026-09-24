import { useEffect, useState } from "react";
import { getOpenState, type OpenState } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function OpenBadge({ className }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    setState(getOpenState());
  }, []);

  if (!state) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-bg/70 px-3 py-1.5 text-xs uppercase tracking-[0.18em] backdrop-blur",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          state.open ? "bg-ember" : "bg-muted",
        )}
      />
      <span className="text-fg">{state.label}</span>
      <span className="text-muted">· {state.detail}</span>
    </div>
  );
}
