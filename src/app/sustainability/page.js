import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { CTA, IconBadge, PageHeader, SectionHead } from "@/components/ui";
import { sustainability } from "@/lib/group";

export const metadata = {
  title: "Sustainability",
  description:
    "Responsible growth at Babaji Group — captive wind power, recyclable PET & HIPS materials, energy-efficient processes and quality systems that reduce waste.",
};

const goals = [
  ["Recyclable & eco-friendly materials", "Expanding recyclable and sustainable grades across our sheet range."],
  ["Cleaner energy", "Building on our captive wind power unit to reduce grid dependence."],
  ["Smarter manufacturing", "Technology upgrades for more efficient, lower-waste production."],
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader color="green" eyebrow="Sustainability" title="Responsible Growth," highlight="Built Into How We Work" text="Sustainability at Babaji is practical — cleaner energy, recyclable materials and processes that waste less." image="/images/poly/sheets-rolls.webp" crumbs={[{ label: "Sustainability" }]} />

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="green" eyebrow="Our Commitments" title="What We" highlight="Do Today" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sustainability.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="flex gap-5 rounded-3xl border border-line bg-white p-6 sm:p-8">
                <IconBadge icon={s.icon} color="green" size="lg" />
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#eaf7ef] to-[#cfeedd]">
            <Image src="/images/poly/ind-food.webp" alt="Recyclable PET food packaging" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div>
            <SectionHead color="green" eyebrow="Looking Ahead" title="Our" highlight="Sustainability Goals" />
            <div className="mt-6 space-y-3">
              {goals.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green font-display text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{t}</h3>
                    <p className="mt-1 text-sm text-steel">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs text-steel">
              <Icon name="check" className="h-4 w-4 shrink-0 text-brand-green" /> We publish only claims we can verify. Detailed figures will be shared as they are measured.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
