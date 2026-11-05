import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BannerHeader, Button, CTA, IconBadge, SectionHead } from "@/components/ui";
import { group, pvcProducts } from "@/lib/group";
import { pvcApplications } from "@/lib/site";

export const metadata = {
  title: "Polymer Compound — PVC Compounds",
  description:
    "Premium PVC compound solutions manufactured for strength, flexibility and industrial performance — for wires & cables, footwear, automotive, pipes & fittings, profiles and industrial components.",
};

const strengths = [
  { icon: "diamond", title: "Quality Compound", text: "Carefully formulated compounds with consistent properties, batch after batch." },
  { icon: "chart", title: "Consistent Performance", text: "Uniform processing behaviour for smooth extrusion and moulding." },
  { icon: "truck", title: "Reliable Supply", text: "Planned production and dispatch for uninterrupted operations." },
  { icon: "shield", title: "Industrial Strength", text: "Designed for strength, flexibility and long-term durability." },
];

const process = [
  ["Share your requirement", "Application, processing method, hardness, colour and monthly volume."],
  ["Grade recommendation", "Our team suggests the right compound for your end use."],
  ["Sample & approval", "Trial lots so you can validate on your own line."],
  ["Bulk supply", "Planned production and dispatch to keep your line running."],
];

export default function PVCPage() {
  return (
    <>
      <BannerHeader src="/images/banner2.webp" alt="Babaji — PVC Compound Solutions: Better Materials, Brighter Possibilities" />

      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHead color="gold" eyebrow="PVC Compound Solutions" title="Premium PVC Compounds —" highlight="Better Materials, Brighter Possibilities" text="Manufactured for strength, flexibility & industrial performance. Formulated for consistency and durability — with custom colours and grades on request." />
            <Reveal delay={100} className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact?product=pvc-compounds" variant="gold">Enquire Now <Icon name="arrow" className="h-4 w-4" /></Button>
              <a href={`tel:${group.phones[1].tel}`} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy"><Icon name="call" className="h-4 w-4" /> {group.phones[1].display}</a>
            </Reveal>
          </div>
          <Reveal delay={100} className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image src="/images/granules.webp" alt="Colourful PVC compound granules" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
        <div className="container-x mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="rounded-2xl border border-line bg-white p-4 sm:p-6">
              <IconBadge icon={s.icon} color="gold" />
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-steel sm:text-sm">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="gold" eyebrow="Our Products" title="PVC Compound" highlight="Product Range" text="Flexible and rigid PVC compounds, available in custom colours and grades." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {pvcProducts.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold text-white ${p.type === "Rigid" ? "bg-navy" : "bg-gold"}`}>{p.type}</span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="text-base font-extrabold sm:text-xl">{p.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-steel sm:text-sm">{p.text}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="rounded-full bg-gold/10 px-2.5 py-1 text-[11px] font-semibold text-gold">{t}</span>)}
                  </div>
                  <Link href="/contact?product=pvc-compounds" className="mt-auto pt-4 text-sm font-semibold text-gold hover:underline">Enquire →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="gold" eyebrow="Applications" title="Grades for" highlight="Every Application" text="Share your processing method and end use for the right recommendation." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {pvcApplications.map((a, i) => (
              <Reveal key={a.name} delay={(i % 3) * 80} className="group overflow-hidden rounded-3xl border border-line bg-white transition duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={a.image} alt={a.name} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base font-extrabold sm:text-xl">{a.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-steel sm:text-sm">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="gold" eyebrow="How We Work" title="From Requirement to" highlight="Reliable Supply" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="relative rounded-3xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-1 text-sm text-steel">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Looking for a reliable" highlight="PVC compound partner?" text="Tell us your application, hardness, colour and monthly volume — we'll recommend the right compound." />
    </>
  );
}
