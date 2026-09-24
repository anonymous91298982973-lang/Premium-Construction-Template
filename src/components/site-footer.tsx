import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[0.12em] text-ember">GOOD LUCK</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Window service, baskets, and twenty years of Oak Cliff regulars. Not a
            drive-in in the movie-lot sense — just the luck of a good plate.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-ember">Visit</p>
          <p className="mt-3 text-sm text-fg">
            {SITE.address}
            <br />
            {SITE.city}
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-block text-sm text-fg underline decoration-line underline-offset-4 hover:text-ember"
          >
            {SITE.phone}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-ember">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-fg">
                  {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs tracking-[0.16em] text-muted uppercase">
        Oak Cliff · Dallas · Est. two decades
      </div>
    </footer>
  );
}
