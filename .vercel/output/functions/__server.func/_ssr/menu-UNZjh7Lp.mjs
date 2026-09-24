import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-UNZjh7Lp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ShimmerButton({ className, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn("shimmer-btn relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-sm bg-ember px-6 text-sm font-medium tracking-wide text-bg", className),
		...props
	});
}
function SplitText({ text, className, as: Tag = "h1" }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: cn("split-text", className),
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "split-word",
			style: { animationDelay: `${i * 70}ms` },
			children: [word, i < words.length - 1 ? "\xA0" : ""]
		}, `${word}-${i}`))
	});
}
var SITE = {
	name: "Good Luck Drive In",
	tagline: "Oak Cliff since the early 2000s",
	phone: "(214) 371-3348",
	phoneHref: "tel:+12143713348",
	address: "3140 E Ledbetter Dr",
	city: "Dallas, TX 75216",
	neighborhood: "Oak Cliff",
	mapsUrl: "https://www.google.com/maps/place/Good+Luck+Drive+In/@32.7566114,-96.7787784,17z",
	mapsEmbed: "https://maps.google.com/maps?q=3140+E+Ledbetter+Dr,+Dallas,+TX+75216&z=16&output=embed",
	hours: [
		{
			days: "Monday",
			open: "10:30 AM",
			close: "7:30 PM",
			closed: false
		},
		{
			days: "Tuesday",
			open: "10:30 AM",
			close: "7:30 PM",
			closed: false
		},
		{
			days: "Wednesday",
			open: "10:30 AM",
			close: "7:30 PM",
			closed: false
		},
		{
			days: "Thursday",
			open: "10:30 AM",
			close: "7:30 PM",
			closed: false
		},
		{
			days: "Friday",
			open: "10:30 AM",
			close: "8:30 PM",
			closed: false
		},
		{
			days: "Saturday",
			open: "10:30 AM",
			close: "8:30 PM",
			closed: false
		},
		{
			days: "Sunday",
			open: "",
			close: "",
			closed: true
		}
	]
};
var TESTIMONIALS = [
	{
		quote: "This was the most delicious fish sandwich that I have ever had in my life. I wish this restaurant wasn't so far away from me, otherwise I would visit there all the time.",
		name: "Cam Mac",
		dish: "Fish sandwich",
		stars: 5
	},
	{
		quote: "I've been going here for over two decades and the link baskets have always been my (and it seems like 90% of the neighborhood's) go-to meal. The prices are decent and the people that run it are nice.",
		name: "D Howard",
		dish: "Link basket",
		stars: 5
	},
	{
		quote: "The half BBQ chicken and sauce is just as delicious as it's always been. The young lady who took my order at the window had excellent customer service skills and she made my shake to perfection.",
		name: "Racheal Miller",
		dish: "Half BBQ chicken",
		stars: 5
	},
	{
		quote: "They legit have one of the best BLTs and the lady at the front is always super nice!!",
		name: "Donielle Hedden",
		dish: "BLT",
		stars: 5
	},
	{
		quote: "Cheap hood food served up by our Chinese friends. It's a hole in the wall but everything was good. Hot link basket is on point.",
		name: "Sam H.",
		dish: "Hot link basket · Yelp, 2015",
		stars: 4
	},
	{
		quote: "I found the food here to be great and always hot. Small seating area. Prices run high but occasional treats feel worthwhile. Barbecue sauce stands out.",
		name: "Atly diner",
		dish: "BBQ sauce",
		stars: 4
	}
];
var MARQUEE = [
	"HALF BBQ CHICKEN",
	"FISH SANDWICH",
	"HOT LINK BASKET",
	"BLT",
	"CATFISH",
	"PHILLY",
	"CHILI CHEESE FRIES",
	"TEXAS TOAST",
	"SHAKES",
	"OAK CLIFF"
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tracking-[0.12em] text-ember",
					children: "GOOD LUCK"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm text-muted",
					children: "Window service, baskets, and twenty years of Oak Cliff regulars. Not a drive-in in the movie-lot sense — just the luck of a good plate."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-ember",
						children: "Visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-fg",
						children: [
							SITE.address,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							SITE.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.phoneHref,
						className: "mt-2 inline-block text-sm text-fg underline decoration-line underline-offset-4 hover:text-ember",
						children: SITE.phone
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.22em] text-ember",
					children: "Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1 text-sm text-muted",
					children: SITE.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: h.closed ? "Closed" : `${h.open} – ${h.close}`
						})]
					}, h.days))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border py-4 text-center text-xs tracking-[0.16em] text-muted uppercase",
			children: "Oak Cliff · Dallas · Est. two decades"
		})]
	});
}
var links = [
	{
		to: "/",
		hash: "menu",
		label: "Menu"
	},
	{
		to: "/",
		hash: "story",
		label: "Story"
	},
	{
		to: "/",
		hash: "reviews",
		label: "Reviews"
	},
	{
		to: "/",
		hash: "visit",
		label: "Visit"
	},
	{
		to: "/menu",
		hash: void 0,
		label: "Full menu"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2 text-fg no-underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-[0.12em] text-ember",
						children: "GOOD LUCK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-sans text-xs uppercase tracking-[0.28em] text-muted sm:inline",
						children: "Drive In · Oak Cliff"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: [links.map((l) => l.hash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `${l.to}#${l.hash}`,
						className: "text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-fg",
						children: l.label
					}, l.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-fg",
						children: l.label
					}, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShimmerButton, {
						asChild: true,
						className: "h-9 px-4 text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.phoneHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), "Call to order"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center text-fg md:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-border bg-surface md:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1 px-4 py-4",
				children: links.map((l) => l.hash ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `${l.to}#${l.hash}`,
					className: "py-3 text-sm uppercase tracking-[0.18em] text-fg",
					onClick: () => setOpen(false),
					children: l.label
				}, l.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: "py-3 text-sm uppercase tracking-[0.18em] text-fg",
					onClick: () => setOpen(false),
					children: l.label
				}, l.label))
			})
		})]
	});
}
var MENU = [
	{
		id: "mix",
		title: "Mix Baskets",
		blurb: "The combo plates — fish, shrimp, and a full plate of luck.",
		items: [{
			name: "Cod Mix",
			price: "17.95",
			note: "1 cod + 4 shrimp"
		}, {
			name: "Fillet Mix",
			price: "18.95",
			note: "1 catfish + 4 shrimp"
		}]
	},
	{
		id: "baskets",
		title: "Baskets",
		blurb: "The neighborhood order. Sauce on the side if you ask.",
		items: [
			{
				name: "Half BBQ Chicken",
				price: "18.95",
				featured: true
			},
			{
				name: "Hot Link",
				price: "17.50",
				featured: true
			},
			{
				name: "Catfish or Cajun",
				price: "18.95",
				featured: true
			},
			{
				name: "Cod Fish",
				price: "20.95"
			},
			{
				name: "7 Shrimp",
				price: "17.95"
			},
			{
				name: "Chicken Strip",
				price: "15.95"
			},
			{
				name: "3 Chicken Wings",
				price: "15.95"
			},
			{
				name: "5 Wings",
				price: "15.95",
				note: "Buffalo / BBQ / lemon pepper / Cajun"
			},
			{
				name: "Hamburger",
				price: "14.75"
			},
			{
				name: "Cheeseburger",
				price: "15.25"
			},
			{
				name: "Double Meat Hamburger",
				price: "17.25"
			},
			{
				name: "Double Meat Cheeseburger",
				price: "17.75"
			},
			{
				name: "Fried or Grilled Pork Chop",
				price: "19.95"
			},
			{
				name: "Grilled Chicken Salad",
				price: "16.95"
			},
			{
				name: "Chicken Strip Salad",
				price: "16.95"
			}
		]
	},
	{
		id: "sandwiches",
		title: "Sandwiches",
		blurb: "Window food. Built to eat in the car.",
		items: [
			{
				name: "Cod Fish Sandwich",
				price: "11.00",
				featured: true
			},
			{
				name: "Catfish Sandwich",
				price: "11.50",
				featured: true
			},
			{
				name: "BLT Sandwich",
				price: "9.95",
				featured: true
			},
			{
				name: "Hot Link Sandwich",
				price: "11.50"
			},
			{
				name: "Chicken Sandwich",
				price: "9.50"
			},
			{
				name: "Chicken Strip Sandwich",
				price: "9.95"
			},
			{
				name: "Grilled Chicken Sandwich",
				price: "11.25"
			},
			{
				name: "Pork Chop Sandwich",
				price: "12.00"
			},
			{
				name: "Hamburger",
				price: "10.50"
			},
			{
				name: "Cheeseburger",
				price: "11.25"
			},
			{
				name: "Double Meat Hamburger",
				price: "13.50"
			},
			{
				name: "Double Meat Cheeseburger",
				price: "13.75"
			},
			{
				name: "Ham Sandwich",
				price: "10.50"
			},
			{
				name: "Grilled Cheese",
				price: "5.25"
			}
		]
	},
	{
		id: "philly",
		title: "Philly Cheeses",
		blurb: "Griddled, melted, wrapped.",
		items: [{
			name: "Chicken Philly",
			price: "12.00"
		}, {
			name: "Beef Philly",
			price: "13.00"
		}]
	},
	{
		id: "sides",
		title: "Sides & extras",
		blurb: "Fries, toast, sauce cups, the rest of the ritual.",
		items: [
			{
				name: "French Fries",
				price: "6.25"
			},
			{
				name: "Chili Cheese Fries",
				price: "9.25"
			},
			{
				name: "Onion Rings",
				price: "6.25"
			},
			{
				name: "Fried Okra",
				price: "6.25"
			},
			{
				name: "Hush Puppies",
				price: "4.50"
			},
			{
				name: "2 Egg Rolls",
				price: "6.25"
			},
			{
				name: "6 Chicken Nuggets",
				price: "6.00"
			},
			{
				name: "Corny Dog",
				price: "4.75"
			},
			{
				name: "Foot Long Chili Dog",
				price: "9.75"
			},
			{
				name: "Texas Toast",
				price: "0.75"
			},
			{
				name: "BBQ / Ranch / Tartar / Honey Mustard / Cocktail",
				price: "2.75"
			},
			{
				name: "Extra Link",
				price: "4.00"
			},
			{
				name: "Can Drink",
				price: "2.50"
			},
			{
				name: "Bottle Water",
				price: "2.50"
			},
			{
				name: "Bottle Drink",
				price: "3.95"
			}
		]
	}
];
var SIGNATURES = [
	{
		name: "Half BBQ Chicken",
		price: "18.95",
		image: "/food/chicken.jpg",
		copy: "Fall-off-the-bone, swimming in a zesty hickory sauce that regulars have been chasing for twenty years."
	},
	{
		name: "Fish Sandwich",
		price: "11.00",
		image: "/food/fish.jpg",
		copy: "Crispy, flaky, and the sandwich people drive across Dallas for. Cod or catfish — both get the same respect."
	},
	{
		name: "Hot Link Basket",
		price: "17.50",
		image: "/food/links.jpg",
		copy: "The neighborhood go-to. Links, fries, Texas toast, peppers, and lots of sauce."
	},
	{
		name: "The BLT",
		price: "9.95",
		image: "/food/blt.jpg",
		copy: "Thick bacon, real tomato, toasted bread. Regulars will fight you on this one."
	}
];
//#endregion
export { ShimmerButton as a, SplitText as c, SITE as i, TESTIMONIALS as l, MENU as n, SiteFooter as o, SIGNATURES as r, SiteHeader as s, MARQUEE as t, cn as u };
