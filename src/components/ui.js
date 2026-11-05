import Image from "next/image";
import Link from "next/link";
import { enquiryTypes } from "@/lib/group";
import { esdClasses } from "@/lib/site";
import { accent } from "./biz";
import Icon from "./Icon";
import Reveal from "./Reveal";

// Red uppercase label flanked by short rules, as in the brand layout.
export function Eyebrow({ children, center = false, color = "red", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase ${accent[color].text} ${className}`}>
      <span className={`h-0.5 w-7 rounded ${accent[color].bg}`} />
      {children}
      {center && <span className={`h-0.5 w-7 rounded ${accent[color].bg}`} />}
    </span>
  );
}

// `title` is navy; `highlight` follows in an accent colour.
export function SectionHead({ eyebrow, title, highlight, text, center = false, color = "red", className = "" }) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <Eyebrow center={center} color={color}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-[28px] leading-[1.12] font-extrabold sm:mt-4 sm:text-4xl lg:text-[44px]">
        {title} {highlight && <span className={accent[color].text}>{highlight}</span>}
      </h2>
      {text && <p className={`mt-3 text-base leading-relaxed text-steel sm:mt-4 sm:text-lg ${center ? "mx-auto max-w-2xl" : ""}`}>{text}</p>}
    </Reveal>
  );
}

export function Button({ href, children, variant = "red", className = "" }) {
  const styles = {
    red: "bg-brand-red text-white hover:bg-brand-red-dark shadow-soft",
    navy: "bg-navy text-white hover:bg-navy-deep shadow-soft",
    gold: "bg-gold text-white hover:brightness-95 shadow-soft",
    blue: "bg-sky text-white hover:brightness-95 shadow-soft",
    green: "bg-brand-green text-white hover:brightness-95 shadow-soft",
    outline: "border border-brand-red/40 bg-white text-brand-red hover:bg-brand-red/5",
    light: "bg-white text-navy hover:bg-mist",
  };
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowCircle({ className = "" }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-soft transition group-hover:bg-brand-red group-hover:text-white sm:h-11 sm:w-11 ${className}`}>
      <Icon name="arrow" className="h-4 w-4 -rotate-45 transition group-hover:rotate-0" />
    </span>
  );
}

export function Crumbs({ items = [], light = false }) {
  return (
    <nav className={`flex flex-wrap items-center gap-2 text-xs font-medium ${light ? "text-white/70" : "text-steel"}`}>
      <Link href="/" className={light ? "hover:text-white" : "hover:text-navy"}>Home</Link>
      {items.map((c) => (
        <span key={c.label} className="flex items-center gap-2">
          <span>/</span>
          {c.href ? <Link href={c.href} className={light ? "hover:text-white" : "hover:text-navy"}>{c.label}</Link> : <span className={light ? "text-white" : "text-navy"}>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

// Inner-page hero: photo with a soft white fade so text stays on a light background.
export function PageHeader({ eyebrow, title, highlight, text, image, crumbs = [], color = "red", children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image src={image} alt="" fill priority sizes="60vw" className="object-cover" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
        </div>
      )}
      <div className="container-x relative py-10 sm:py-14 lg:py-20">
        <Crumbs items={crumbs} />
        <div className="mt-6 max-w-xl">
          {eyebrow && <Eyebrow color={color}>{eyebrow}</Eyebrow>}
          <h1 className="mt-3 text-[34px] leading-[1.08] font-extrabold sm:text-5xl lg:text-[56px]">
            {title} {highlight && <span className={accent[color].text}>{highlight}</span>}
          </h1>
          {text && <p className="mt-4 text-base leading-relaxed text-steel sm:text-lg">{text}</p>}
          {children}
        </div>
      </div>
      {image && (
        <div className="relative aspect-[16/9] lg:hidden">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      )}
    </section>
  );
}

// Full banner image (text baked into the artwork).
export function BannerHeader({ src, alt, aspect = "aspect-[5/2]" }) {
  return (
    <section>
      <div className={`relative w-full bg-mist ${aspect}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      </div>
    </section>
  );
}

export function ProductTile({ href, image, title, subtitle, badge, className = "" }) {
  return (
    <Link href={href} className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-3.5 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift sm:p-5 ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
        <Image src={image} alt={title} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
        {badge && <span className="absolute top-2.5 left-2.5 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-wide text-navy shadow-soft sm:text-[11px]">{badge}</span>}
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <h3 className="text-base font-bold sm:text-lg">{title}</h3>
          {subtitle && <p className="mt-1 text-xs text-steel sm:text-sm">{subtitle}</p>}
        </div>
        <ArrowCircle className="hidden sm:flex" />
      </div>
    </Link>
  );
}

export function IconBadge({ icon, color = "red", size = "md" }) {
  const s = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const i = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-5 w-5" : "h-6 w-6";
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full ${s} ${accent[color].soft} ${accent[color].text}`}>
      <Icon name={icon} className={i} />
    </span>
  );
}

export function ESDScale() {
  const span = 9;
  return (
    <div>
      <div className="relative h-4 rounded-full bg-gradient-to-r from-navy via-sky to-[#c5d8f0]">
        {[5, 9].map((e) => (
          <span key={e} className="absolute top-1/2 h-7 w-0.5 -translate-y-1/2 rounded bg-white" style={{ left: `${((e - 3) / span) * 100}%` }} />
        ))}
      </div>
      <div className="relative mt-3 h-5 text-xs font-medium text-steel">
        {[3, 5, 9, 12].map((e) => (
          <span key={e} className="absolute -translate-x-1/2 whitespace-nowrap first:translate-x-0 last:-translate-x-full" style={{ left: `${((e - 3) / span) * 100}%` }}>
            10<sup>{e}</sup> Ω
          </span>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3">
        {esdClasses.map((c, i) => (
          <div key={c.name} className="rounded-2xl border border-line bg-white p-4 sm:p-5">
            <span className={`block h-1.5 w-10 rounded-full ${["bg-navy", "bg-sky", "bg-[#9fc0ea]"][i]}`} />
            <p className="mt-3 font-display font-bold text-navy">{c.name}</p>
            <p className="mt-1 font-display text-2xl font-bold text-navy">
              10<sup className="text-sm">{c.range[0]}</sup>–10<sup className="text-sm">{c.range[1]}</sup> <span className="text-xs font-medium text-steel">Ω/sq</span>
            </p>
            <p className="mt-2 text-sm text-steel">{c.use}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// "Get in touch" band — light card with enquiry types, used on every page.
export function CTA({ title = "Let's Build a Stronger Tomorrow", highlight = "Together.", text = "Whether you are a distributor, business partner or valued customer, we are always open to new opportunities and collaborations across our businesses." }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-white px-5 py-10 text-center shadow-soft sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full border-[28px] border-brand-red/5" />
          <div className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full border-[28px] border-brand-red/5" />
          <Eyebrow center>Get in Touch</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-3xl text-[28px] leading-[1.12] font-extrabold sm:text-4xl lg:text-[44px]">
            {title} <span className="text-brand-red">{highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel sm:text-lg">{text}</p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {enquiryTypes.map((e, i) => (
              <div key={e.label} className="flex flex-col items-center gap-3 sm:flex-row sm:text-left">
                <IconBadge icon={e.icon} color={["blue", "gold", "purple", "green"][i]} />
                <span className="text-sm font-semibold text-navy">{e.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Get In Touch <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
