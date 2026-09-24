import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { Magnetic } from "@/components/fx/magnetic";
import { Marquee } from "@/components/fx/marquee";
import { ShimmerButton } from "@/components/fx/shimmer-button";
import { SplitText } from "@/components/fx/split-text";
import { SpotlightCard } from "@/components/fx/spotlight-card";
import { OpenBadge } from "@/components/open-badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SIGNATURES } from "@/data/menu";
import { MARQUEE, SITE, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg pb-20 text-fg md:pb-0">
      <SiteHeader />

      <section className="relative min-h-[92dvh] overflow-hidden">
        <img
          src="/food/exterior.jpg"
          alt="Good Luck Drive In walk-up window on E Ledbetter, Oak Cliff"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25" />
        <span className="hero-beam left-[18%]" />
        <span className="hero-beam left-[72%]" style={{ animationDelay: "1.4s" }} />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <OpenBadge />
          <p className="mt-6 text-xs uppercase tracking-[0.32em] text-ember">
            3140 E Ledbetter Dr · Dallas 75216 · Window service
          </p>
          <SplitText
            text="GOOD LUCK DRIVE IN"
            className="mt-3 max-w-4xl font-display text-6xl leading-[0.88] tracking-[0.06em] sm:text-8xl lg:text-9xl"
          />
          <p className="mt-5 max-w-xl font-serif text-lg italic text-fg/90 sm:text-xl">
            Twenty years of hickory chicken, the fish sandwich people drive
            across Dallas for, and a hot-link basket the neighborhood still
            calls dinner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <ShimmerButton asChild>
                <a href={SITE.phoneHref}>
                  <Phone className="size-4" />
                  Call {SITE.phone}
                </a>
              </ShimmerButton>
            </Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href="#menu">See the board</a>
            </Button>
          </div>
        </div>
      </section>

      <Marquee items={[...MARQUEE]} />

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {[
            ["20+", "years on Ledbetter"],
            ["10:30", "window opens"],
            ["Sun", "closed"],
            ["Takeout", "baskets to go"],
          ].map(([k, v]) => (
            <div key={k} className="border-border px-4 py-7 sm:px-6 md:border-r md:last:border-r-0">
              <p className="font-display text-4xl tracking-wide text-ember">{k}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-ember">House plates</p>
            <SplitText
              as="h2"
              text="What the window is for"
              className="mt-2 font-display text-5xl tracking-[0.06em] sm:text-6xl"
            />
          </div>
          <Link
            to="/menu"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ember"
          >
            Full menu with prices <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-6">
          {SIGNATURES.map((s, i) => (
            <SpotlightCard
              key={s.name}
              className={
                i === 0
                  ? "overflow-hidden rounded-md border border-border bg-surface md:col-span-4 md:row-span-2"
                  : "overflow-hidden rounded-md border border-border bg-surface md:col-span-2"
              }
            >
              <article className="relative z-[2] flex h-full flex-col">
                <img
                  src={s.image}
                  alt={s.name}
                  className={i === 0 ? "h-72 w-full object-cover md:h-80" : "h-44 w-full object-cover"}
                />
                <div className="flex flex-1 flex-col justify-end p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-3xl tracking-[0.08em]">{s.name}</h3>
                    <span className="tabular-nums text-ember">${s.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.copy}</p>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3">
        {[
          ["/food/shake.jpg", "Shake and chili cheese fries"],
          ["/food/catfish.jpg", "Catfish basket with hush puppies"],
          ["/food/nachos.jpg", "Loaded nachos"],
        ].map(([src, alt]) => (
          <img key={src} src={src} alt={alt} className="h-56 w-full object-cover md:h-80" />
        ))}
      </section>

      <section id="story" className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src="/food/hero.jpg"
            alt="Night neon at the drive-in"
            className="h-full min-h-72 w-full rounded-md object-cover"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.28em] text-ember">The room</p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em]">
            Not a movie-lot drive-in.
            <span className="block text-ember">A window that stayed.</span>
          </h2>
          <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-muted">
            <p>
              Good Luck Drive In is a walk-up on E Ledbetter in Oak Cliff — a
              small counter, a handful of seats, and a board that has not been
              redesigned by a consultant. Locals have been coming more than
              twenty years for half BBQ chicken, fish sandwiches, and the link
              basket that still feels like the neighborhood default.
            </p>
            <p>
              There is no carhop ballet. There are baskets, Texas toast, sauce
              cups, and people at the window who remember how you take your
              shake. Hannah and the rest of the front keep the line moving
              without making it feel like a factory.
            </p>
            <p>
              Public listings put hours at 10:30 AM weekdays to 7:30 PM, Friday
              and Saturday to 8:30 PM, Sunday closed. Call {SITE.phone} before
              you roll — the kitchen still writes some of it by hand.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.28em] text-ember">From the window</p>
          <h2 className="mt-2 font-display text-5xl tracking-[0.06em]">Regulars, in their words</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Quotes from diners published on the restaurant's own site, Yelp,
            and local listings. Not a star-farm.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <SpotlightCard
                key={t.name}
                className="rounded-md border border-border bg-bg p-6"
              >
                <blockquote className="relative z-[2]">
                  <div className="mb-3 flex gap-0.5 text-ember">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-ember" />
                    ))}
                  </div>
                  <p className="font-serif text-base italic leading-relaxed text-fg">
                    “{t.quote}”
                  </p>
                  <footer className="mt-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-muted">
                    <span className="text-ember">{t.name}</span>
                    <span className="text-right">{t.dish}</span>
                  </footer>
                </blockquote>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ember">Pull up</p>
          <h2 className="mt-2 font-display text-5xl tracking-[0.06em]">
            3140 E Ledbetter
          </h2>
          <p className="mt-4 text-muted">
            Oak Cliff, Dallas 75216. Takeout, window orders, a handful of seats.
            Good for groups. Credit accepted. Call if the line is moving — it
            will be.
          </p>
          <ul className="mt-8 space-y-0 text-sm">
            {SITE.hours.map((h) => (
              <li
                key={h.days}
                className="flex items-center justify-between border-b border-border py-3"
              >
                <span className="uppercase tracking-[0.16em] text-muted">{h.days}</span>
                <span className="tabular-nums">
                  {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ShimmerButton asChild>
              <a href={SITE.phoneHref}>
                <Phone className="size-4" />
                {SITE.phone}
              </a>
            </ShimmerButton>
            <Button asChild variant="outline">
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin className="size-4" />
                Open in Maps
              </a>
            </Button>
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-md border border-border">
          <iframe
            title="Map of Good Luck Drive In"
            src={SITE.mapsEmbed}
            className="h-full min-h-80 w-full grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/food/chicken.jpg"
          alt="Half BBQ chicken basket"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <p className="font-display text-5xl tracking-[0.08em] sm:text-7xl">
            Hungry? Don't press your luck.
          </p>
          <p className="mt-4 text-muted">Call the window. They'll take it from there.</p>
          <Magnetic>
            <ShimmerButton asChild className="mt-8">
              <a href={SITE.phoneHref}>
                <Phone className="size-4" />
                {SITE.phone}
              </a>
            </ShimmerButton>
          </Magnetic>
        </div>
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur md:hidden">
        <ShimmerButton asChild className="w-full">
          <a href={SITE.phoneHref}>
            <Phone className="size-4" />
            Call to order · {SITE.phone}
          </a>
        </ShimmerButton>
      </div>
    </div>
  );
}
