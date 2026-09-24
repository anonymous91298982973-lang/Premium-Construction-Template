import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as SplitText, i as SITE, n as MENU, o as SiteFooter, s as SiteHeader, u as cn } from "./menu-UNZjh7Lp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-ClRvCkag.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	const [active, setActive] = (0, import_react.useState)("all");
	const sections = (0, import_react.useMemo)(() => active === "all" ? MENU : MENU.filter((s) => s.id === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg pb-20 text-fg md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.28em] text-ember",
						children: "The board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitText, {
						text: "Menu",
						className: "mt-2 font-display text-7xl tracking-[0.06em]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: [
							"Prices from the current board at ",
							SITE.address,
							". Call ",
							SITE.phone,
							" to confirm today's specials — the kitchen still writes some of it by hand."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: "All",
							on: active === "all",
							onClick: () => setActive("all")
						}), MENU.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: s.title,
							on: active === s.id,
							onClick: () => setActive(s.id)
						}, s.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-16",
						children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl tracking-[0.08em] text-ember",
								children: section.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: section.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 divide-y divide-border border-y border-border",
								children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-fg",
										children: [item.name, item.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-xs uppercase tracking-[0.18em] text-ember",
											children: "house"
										}) : null]
									}), item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: item.note
									}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 font-medium tabular-nums text-ember",
										children: ["$", item.price]
									})]
								}, item.name))
							})
						] }, section.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function FilterChip({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-11 rounded-full border px-4 text-xs uppercase tracking-[0.16em] transition-colors", on ? "border-ember bg-ember text-bg" : "border-border text-muted hover:border-line hover:text-fg"),
		children: label
	});
}
//#endregion
export { MenuPage as component };
