import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SplitText } from "@/components/fx/split-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MENU } from "@/data/menu";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({ component: MenuPage });

function MenuPage() {
  const [active, setActive] = useState("all");
  const sections = useMemo(
    () => (active === "all" ? MENU : MENU.filter((s) => s.id === active)),
    [active],
  );

  return (
    <div className="min-h-dvh bg-bg pb-20 text-fg md:pb-0">
      <SiteHeader />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.28em] text-ember">The board</p>
        <SplitText text="Menu" className="mt-2 font-display text-7xl tracking-[0.06em]" />
        <p className="mt-4 max-w-xl text-muted">
          Prices from the current board at {SITE.address}. Call {SITE.phone} to
          confirm today's specials — the kitchen still writes some of it by
          hand.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip label="All" on={active === "all"} onClick={() => setActive("all")} />
          {MENU.map((s) => (
            <FilterChip
              key={s.id}
              label={s.title}
              on={active === s.id}
              onClick={() => setActive(s.id)}
            />
          ))}
        </div>

        <div className="mt-12 space-y-16">
          {sections.map((section) => (
            <section key={section.id}>
              <h2 className="font-display text-4xl tracking-[0.08em] text-ember">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{section.blurb}</p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <div>
                      <p className="text-fg">
                        {item.name}
                        {item.featured ? (
                          <span className="ml-2 text-xs uppercase tracking-[0.18em] text-ember">
                            house
                          </span>
                        ) : null}
                      </p>
                      {item.note ? (
                        <p className="text-xs text-muted">{item.note}</p>
                      ) : null}
                    </div>
                    <span className="shrink-0 font-medium tabular-nums text-ember">
                      ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function FilterChip({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-full border px-4 text-xs uppercase tracking-[0.16em] transition-colors",
        on
          ? "border-ember bg-ember text-bg"
          : "border-border text-muted hover:border-line hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
