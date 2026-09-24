import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Phone, o as MapPin, r as Star, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as ShimmerButton, c as SplitText, i as SITE, l as TESTIMONIALS, o as SiteFooter, r as SIGNATURES, s as SiteHeader, t as MARQUEE, u as cn } from "./menu-UNZjh7Lp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CKmieE1P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Magnetic({ children }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left - r.width / 2) * .18;
		const y = (e.clientY - r.top - r.height / 2) * .18;
		el.style.transform = `translate(${x}px, ${y}px)`;
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "translate(0, 0)";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: "magnetic inline-flex",
		children
	});
}
function Marquee({ items, className }) {
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("marquee-mask overflow-hidden border-y border-border bg-surface", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-10 py-3",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-2xl tracking-[0.14em] text-muted whitespace-nowrap",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-6 text-ember",
					children: "/"
				})]
			}, `${item}-${i}`))
		})
	});
}
function SpotlightCard({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
		el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		className: cn("spotlight-card", className),
		children
	});
}
function minutesNow(d) {
	return d.getHours() * 60 + d.getMinutes();
}
function getOpenState(now = /* @__PURE__ */ new Date()) {
	const dallas = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
	const day = dallas.getDay();
	const mins = minutesNow(dallas);
	if (day === 0) return {
		open: false,
		label: "Closed Sunday",
		detail: "Back Monday 10:30 AM"
	};
	const close = day === 5 || day === 6 ? 1230 : 1170;
	if (mins < 630) return {
		open: false,
		label: "Opens today",
		detail: "Window at 10:30 AM"
	};
	if (mins >= close) return {
		open: false,
		label: "Closed for the night",
		detail: `Back ${day === 6 ? "Monday 10:30 AM" : "tomorrow 10:30 AM"}`
	};
	return {
		open: true,
		label: "Window is open",
		detail: `Until ${day === 5 || day === 6 ? "8:30 PM" : "7:30 PM"}`
	};
}
function OpenBadge({ className }) {
	const [state, setState] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setState(getOpenState());
	}, []);
	if (!state) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-border bg-bg/70 px-3 py-1.5 text-xs uppercase tracking-[0.18em] backdrop-blur", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", state.open ? "bg-ember" : "bg-muted") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-fg",
				children: state.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted",
				children: ["· ", state.detail]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			ember: "bg-ember text-bg hover:bg-ember-deep",
			outline: "border border-line bg-transparent text-fg hover:border-ember hover:text-ember",
			ghost: "text-fg hover:text-ember"
		},
		size: {
			default: "h-11 px-5 text-sm",
			lg: "h-12 px-6 text-sm",
			sm: "h-9 px-3 text-xs"
		}
	},
	defaultVariants: {
		variant: "ember",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg pb-20 text-fg md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[92dvh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/food/exterior.jpg",
						alt: "Good Luck Drive In walk-up window on E Ledbetter, Oak Cliff",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-beam left-[18%]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-beam left-[72%]",
						style: { animationDelay: "1.4s" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenBadge, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs uppercase tracking-[0.32em] text-ember",
								children: "3140 E Ledbetter Dr · Dallas 75216 · Window service"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
								text: "GOOD LUCK DRIVE IN",
								className: "mt-3 max-w-4xl font-display text-6xl leading-[0.88] tracking-[0.06em] sm:text-8xl lg:text-9xl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl font-serif text-lg italic text-fg/90 sm:text-xl",
								children: "Twenty years of hickory chicken, the fish sandwich people drive across Dallas for, and a hot-link basket the neighborhood still calls dinner."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerButton, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: SITE.phoneHref,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
											"Call ",
											SITE.phone
										]
									})
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#menu",
										children: "See the board"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { items: [...MARQUEE] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4",
					children: [
						["20+", "years on Ledbetter"],
						["10:30", "window opens"],
						["Sun", "closed"],
						["Takeout", "baskets to go"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border px-4 py-7 sm:px-6 md:border-r md:last:border-r-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl tracking-wide text-ember",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted",
							children: v
						})]
					}, k))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "menu",
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-ember",
						children: "House plates"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
						as: "h2",
						text: "What the window is for",
						className: "mt-2 font-display text-5xl tracking-[0.06em] sm:text-6xl"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/menu",
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ember",
						children: ["Full menu with prices ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid auto-rows-fr gap-4 md:grid-cols-6",
					children: SIGNATURES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotlightCard, {
						className: i === 0 ? "overflow-hidden rounded-md border border-border bg-surface md:col-span-4 md:row-span-2" : "overflow-hidden rounded-md border border-border bg-surface md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "relative z-[2] flex h-full flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.name,
								className: i === 0 ? "h-72 w-full object-cover md:h-80" : "h-44 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-end p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl tracking-[0.08em]",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums text-ember",
										children: ["$", s.price]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: s.copy
								})]
							})]
						})
					}, s.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid md:grid-cols-3",
				children: [
					["/food/shake.jpg", "Shake and chili cheese fries"],
					["/food/catfish.jpg", "Catfish basket with hush puppies"],
					["/food/nachos.jpg", "Loaded nachos"]
				].map(([src, alt]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "h-56 w-full object-cover md:h-80"
				}, src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "story",
				className: "mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/food/hero.jpg",
						alt: "Night neon at the drive-in",
						className: "h-full min-h-72 w-full rounded-md object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-ember",
							children: "The room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-5xl tracking-[0.06em]",
							children: ["Not a movie-lot drive-in.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-ember",
								children: "A window that stayed."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-5 font-serif text-lg leading-relaxed text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Good Luck Drive In is a walk-up on E Ledbetter in Oak Cliff — a small counter, a handful of seats, and a board that has not been redesigned by a consultant. Locals have been coming more than twenty years for half BBQ chicken, fish sandwiches, and the link basket that still feels like the neighborhood default." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There is no carhop ballet. There are baskets, Texas toast, sauce cups, and people at the window who remember how you take your shake. Hannah and the rest of the front keep the line moving without making it feel like a factory." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Public listings put hours at 10:30 AM weekdays to 7:30 PM, Friday and Saturday to 8:30 PM, Sunday closed. Call ",
									SITE.phone,
									" before you roll — the kitchen still writes some of it by hand."
								] })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "reviews",
				className: "border-y border-border bg-surface py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-ember",
							children: "From the window"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-5xl tracking-[0.06em]",
							children: "Regulars, in their words"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm text-muted",
							children: "Quotes from diners published on the restaurant's own site, Yelp, and local listings. Not a star-farm."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
							children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotlightCard, {
								className: "rounded-md border border-border bg-bg p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "relative z-[2]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 flex gap-0.5 text-ember",
											children: Array.from({ length: t.stars }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-ember" }, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-serif text-base italic leading-relaxed text-fg",
											children: [
												"“",
												t.quote,
												"”"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
											className: "mt-5 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ember",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-right",
												children: t.dish
											})]
										})
									]
								})
							}, t.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "visit",
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-ember",
						children: "Pull up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-5xl tracking-[0.06em]",
						children: "3140 E Ledbetter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Oak Cliff, Dallas 75216. Takeout, window orders, a handful of seats. Good for groups. Credit accepted. Call if the line is moving — it will be."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-0 text-sm",
						children: SITE.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between border-b border-border py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "uppercase tracking-[0.16em] text-muted",
								children: h.days
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: h.closed ? "Closed" : `${h.open} – ${h.close}`
							})]
						}, h.days))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerButton, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), SITE.phone]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.mapsUrl,
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), "Open in Maps"]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-80 overflow-hidden rounded-md border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Good Luck Drive In",
						src: SITE.mapsEmbed,
						className: "h-full min-h-80 w-full grayscale contrast-125",
						loading: "lazy"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/food/chicken.jpg",
						alt: "Half BBQ chicken basket",
						className: "absolute inset-0 size-full object-cover opacity-35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl tracking-[0.08em] sm:text-7xl",
								children: "Hungry? Don't press your luck."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: "Call the window. They'll take it from there."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerButton, {
								asChild: true,
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.phoneHref,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), SITE.phone]
								})
							}) })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerButton, {
					asChild: true,
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.phoneHref,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
							"Call to order · ",
							SITE.phone
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Home as component };
