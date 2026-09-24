import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/data/site";
import { ShimmerButton } from "@/components/fx/shimmer-button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", hash: "menu", label: "Menu" },
  { to: "/", hash: "story", label: "Story" },
  { to: "/", hash: "reviews", label: "Reviews" },
  { to: "/", hash: "visit", label: "Visit" },
  { to: "/menu", hash: undefined, label: "Full menu" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-baseline gap-2 text-fg no-underline">
          <span className="font-display text-2xl tracking-[0.12em] text-ember">
            GOOD LUCK
          </span>
          <span className="hidden font-sans text-xs uppercase tracking-[0.28em] text-muted sm:inline">
            Drive In · Oak Cliff
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) =>
            l.hash ? (
              <a
                key={l.label}
                href={`${l.to}#${l.hash}`}
                className="text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ),
          )}
          <ShimmerButton asChild className="h-9 px-4 text-xs">
            <a href={SITE.phoneHref}>
              <Phone className="size-3.5" />
              Call to order
            </a>
          </ShimmerButton>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) =>
            l.hash ? (
              <a
                key={l.label}
                href={`${l.to}#${l.hash}`}
                className="py-3 text-sm uppercase tracking-[0.18em] text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className="py-3 text-sm uppercase tracking-[0.18em] text-fg"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
