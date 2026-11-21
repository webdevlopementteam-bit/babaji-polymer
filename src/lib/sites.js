// The group site and four business pages are deployed separately (see scripts/build-sites.mjs).
// `npm run dev` keeps every page local; production builds turn links into subdomain URLs.
export const SITE = process.env.NEXT_PUBLIC_SITE || "main";

export const MAIN_URL = "https://www.babajigroup.com";

// key = SITE value, path = route of that page in this codebase
export const subsites = [
  { key: "food", path: "/food-products", url: "https://food-products.babajigroup.com" },
  { key: "polymer", path: "/pvc-compounds", url: "https://polymer-compound.babajigroup.com" },
  { key: "polysheet", path: "/polysheets", url: "https://polysheet.babajigroup.com" },
  { key: "caps", path: "/plastic-caps", url: "https://plastic-caps.babajigroup.com" },
];

const external = (base, path, rest) => `${base}${path.endsWith("/") ? path : `${path}/`}${rest}`;

export function resolveHref(href) {
  if (process.env.NODE_ENV !== "production" || typeof href !== "string" || !href.startsWith("/")) return href;

  const [, path, rest] = href.match(/^([^?#]*)(.*)$/);
  const target = subsites.find((s) => path === s.path || path.startsWith(`${s.path}/`));

  if (target) {
    const inner = path.slice(target.path.length) || "/";
    return target.key === SITE ? `${inner}${rest}` : external(target.url, inner, rest);
  }
  return SITE === "main" ? href : external(MAIN_URL, path, rest);
}
