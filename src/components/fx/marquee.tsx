import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("marquee-mask overflow-hidden border-y border-border bg-surface", className)}>
      <div className="marquee-track flex w-max gap-10 py-3">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl tracking-[0.14em] text-muted whitespace-nowrap"
          >
            {item}
            <span className="mx-6 text-ember">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
