"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";

// Static export has no server-side searchParams, so ?product= is read in the browser.
export default function ContactFormFromUrl() {
  const product = useSearchParams().get("product") ?? "";
  return <ContactForm key={product} defaultProduct={product} />;
}
