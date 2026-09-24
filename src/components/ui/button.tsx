import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ember:
          "bg-ember text-bg hover:bg-ember-deep",
        outline:
          "border border-line bg-transparent text-fg hover:border-ember hover:text-ember",
        ghost: "text-fg hover:text-ember",
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm",
        sm: "h-9 px-3 text-xs",
      },
    },
    defaultVariants: { variant: "ember", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
