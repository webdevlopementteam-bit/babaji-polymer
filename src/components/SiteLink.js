import NextLink from "next/link";
import { resolveHref } from "@/lib/sites";

// next/link for pages on this site, a plain anchor for pages on another subdomain.
export default function SiteLink({ href, ...props }) {
  const to = resolveHref(href);
  return /^https?:/.test(to) ? <a href={to} {...props} /> : <NextLink href={to} {...props} />;
}
