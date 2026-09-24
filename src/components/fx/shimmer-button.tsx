import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function ShimmerButton({
  className,
  asChild,
  ...props
}: ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "shimmer-btn relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-sm bg-ember px-6 text-sm font-medium tracking-wide text-bg",
        className,
      )}
      {...props}
    />
  );
}
