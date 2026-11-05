import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import FoodCatalog from "@/components/FoodCatalog";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BannerHeader, Button, CTA, IconBadge, SectionHead } from "@/components/ui";
import { foodCategories, foodCompany, foodHighlights, foodReviews, foodStats, foodWhy, group, offices } from "@/lib/group";

export const metadata = {
  title: "Food Products — Edible Oils, Atta, Besan, Pulses",
  description:
    "Babaji Group food products since 1983 — mustard oil kachi ghani, MP chakki fresh atta, besan, pulses and OxyBoom detergents. Made in Najafgarh, Delhi with in-house lab testing.",
};

export default function FoodPage() {
  return (
    <>
      <BannerHeader src="/images/food/heros1.webp" alt="Babaji Group — Shuddh bhi, Swadisht bhi. Edible oils, atta, besan and pulses" aspect="aspect-[1827/861]" />

      {/* Highlights ticker */}
      <div className="overflow-hidden border-b border-line bg-brand-red py-3 text-white">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...foodHighlights, ...foodHighlights].map((h, i) => (
            <span key={i} className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
              <Icon name="check" className="h-4 w-4 text-white/80" /> {h}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image src="/images/about-replace.webp" alt="Babaji Brand Oil Industries products" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-right" />
          </Reveal>
          <div>
            <SectionHead eyebrow="About Babaji" title="Babaji Brand" highlight="Oil Industries" text="Excellence in edible oils since 1983 — and today, a full range of everyday food essentials." />
            <Reveal delay={80} className="mt-4 space-y-3 text-sm leading-relaxed text-steel sm:text-base">
              <p>
                A pioneering name in the edible oil industry since 1983. What began as a modest unit in Najafgarh, Delhi has
                grown into a 2-acre manufacturing facility that brings together state-of-the-art technology and four decades
                of hands-on expertise.
              </p>
              <p>
                Our vision is simple yet ambitious: <strong className="text-navy">the best quality at the best price.</strong> Mustard
                oil, MP chakki fresh atta, besan and daily kitchen essentials all carry the same name — and the same promise.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-6 flex flex-wrap gap-2">
              {["FSSAI licensed manufacturing", "No compromise on raw material", "Every batch lab tested", "Fair, transparent pricing"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-semibold text-brand-green">
                  <Icon name="check" className="h-3.5 w-3.5" /> {t}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
        <div className="container-x mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {foodStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className="rounded-2xl border border-line bg-white p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-red sm:text-4xl"><Counter to={s.to} suffix={s.suffix} /></p>
              <p className="mt-1 text-xs text-steel sm:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Our Products" title="Top" highlight="Categories" text="Discover our premium range of high-quality food products crafted to bring purity, freshness and taste to every kitchen." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {foodCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <a href="#catalog" className="group block overflow-hidden rounded-3xl border border-line bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={c.image} alt={c.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="flex items-center justify-between p-4 font-display font-bold text-navy">
                    {c.name} <Icon name="arrow" className="h-4 w-4 text-brand-red transition group-hover:translate-x-1" />
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Our Collection" title="All" highlight="Products" text="Handpicked essentials — loved by families across India." className="mb-8" />
          <FoodCatalog />
        </div>
      </section>

      {/* Why */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Why Choose Us" title="Trusted by Families" highlight="Across India" text="Premium quality and competitive pricing are not a trade-off here. They are the reason people have kept coming back for 40 years." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foodWhy.map((w, i) => (
              <Reveal key={w.title} delay={i * 70} className="rounded-3xl border border-line bg-white p-6">
                <IconBadge icon={w.icon} color={["red", "blue", "green", "gold"][i]} />
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{w.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {[
              { t: "Quality is checked, not assumed", d: "Our in-house quality assessment labs test every batch for purity, consistency and safety before it is packed. Raw material is screened on arrival, and nothing moves forward until it clears.", tags: ["Raw material screening", "Batch testing", "FSSAI compliant"], icon: "flask", c: "bg-navy" },
              { t: "Made with cleaner energy", d: "A captive wind power unit supports our manufacturing, reducing how much we draw from the grid and lowering the footprint of every pack we produce.", tags: ["Captive wind power", "Energy efficient", "Low waste"], icon: "leaf", c: "bg-brand-green" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 80} className={`rounded-3xl p-6 text-white sm:p-8 ${b.c}`}>
                <Icon name={b.icon} className="h-8 w-8 text-white/90" />
                <h3 className="mt-4 text-xl font-extrabold text-white">{b.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{b.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">{b.tags.map((t) => <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">{t}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Customer Reviews" title="What Our" highlight="Customers Say" text="Trusted by families across India for quality, purity and taste." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foodReviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 60} className="flex flex-col rounded-3xl border border-line bg-white p-6">
                <div className="flex gap-0.5 text-gold">{"★★★★★"}</div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-5 font-bold text-navy">{r.name}</p>
                <p className="text-xs text-steel">{r.place}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section className="pb-4">
        <div className="container-x">
          <Reveal className="grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#fff4e6] to-white p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Looking for a <span className="text-brand-red">distribution or bulk supply</span> partner?</h2>
              <p className="mt-2 text-steel">Talk to our team about product range, pricing and dealership across North India.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${group.phones[0].tel}`} className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-brand-red-dark"><Icon name="call" className="h-4 w-4" /> {group.phones[0].display}</a>
                <Button href="/contact?product=distributorship" variant="outline">Become a Distributor <Icon name="arrow" className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 text-sm shadow-soft">
              <p className="font-display text-lg font-bold text-navy">{offices[0].company}</p>
              <dl className="mt-3 space-y-2 text-steel">
                <div className="flex gap-2"><dt className="w-24 shrink-0 font-semibold text-navy">Office</dt><dd>{offices[0].address}</dd></div>
                <div className="flex gap-2"><dt className="w-24 shrink-0 font-semibold text-navy">FSSAI</dt><dd>{foodCompany.fssai}</dd></div>
                <div className="flex gap-2"><dt className="w-24 shrink-0 font-semibold text-navy">GST</dt><dd>{foodCompany.gst}</dd></div>
                <div className="flex gap-2"><dt className="w-24 shrink-0 font-semibold text-navy">Since</dt><dd>{group.since}</dd></div>
              </dl>
              <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-brand-red hover:underline">All contact details →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
