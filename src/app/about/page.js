import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { accent } from "@/components/biz";
import { CTA, IconBadge, PageHeader, SectionHead } from "@/components/ui";
import { achievements, businesses, group, journey, mission, vision } from "@/lib/group";

export const metadata = {
  title: "Our Group",
  description:
    "Babaji Group — a diversified business group since 1983, with four businesses: food products, PET & HIPS polysheets and PVC compounds. One Group. Four Industries. Endless Possibilities.",
};

const values = [
  { icon: "diamond", title: "Quality First", text: "Strict control at every stage, from raw material to dispatch." },
  { icon: "handshake", title: "Trust & Integrity", text: "Relationships built over four decades of honest business." },
  { icon: "users", title: "Customer Focus", text: "Products and grades tailored to what our customers need." },
  { icon: "leaf", title: "Responsible Growth", text: "Cleaner energy, recyclable materials and less waste." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Babaji Group" title="One Group. Four Industries." highlight="Endless Possibilities." text="A diversified business group committed to delivering high-quality products and innovative solutions — built on a legacy that began in 1983." image="/images/reception.webp" crumbs={[{ label: "Our Group" }]} />

     <section className="py-12 sm:py-16">
  <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
    <div>
      <SectionHead eyebrow="Who We Are" title="A Legacy of Trust," highlight="Built Across Four Industries" />
      <Reveal delay={80} className="mt-5 space-y-4 leading-relaxed text-steel">
        <p>
          {group.name} is a diversified business group delivering quality products and dependable solutions across food
          products, polymer compounds, polysheets and plastic caps. Built on decades of trust, integrity and customer
          commitment, we serve diverse industries and households across India.
        </p>
        <p>
          From food essentials under the Babaji Brand to high-performance polymer compounds, durable sheet solutions and
          reliable plastic closures, our four business verticals reflect our commitment to quality, innovation and
          long-term partnerships.
        </p>
        <p className="font-semibold text-navy">One Trust, Four Industries. One Babaji Group.</p>
      </Reveal>
    </div>

    <Reveal delay={120} className="grid grid-cols-3 gap-3">
      <div className="relative col-span-3 aspect-[16/8] overflow-hidden rounded-3xl">
        <Image src="/images/food/about-banner.webp" alt="Babaji Group food products" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-right" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image src="/images/granules.webp" alt="PVC compound granules" fill sizes="(min-width:1024px) 17vw, 33vw" className="object-cover" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image src="/images/poly/sheets-rolls.webp" alt="Polysheets" fill sizes="(min-width:1024px) 17vw, 33vw" className="object-cover" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-mist">
        <Image src="/images/home/cap-handle.png" alt="Plastic caps" fill sizes="(min-width:1024px) 17vw, 33vw" className="object-cover object-bottom" />
      </div>
    </Reveal>
  </div>

  {/* stats block same rahega */}
  <div className="container-x mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
    {achievements.slice(0, 4).map((s, i) => (
      <Reveal key={s.label} delay={i * 60} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 sm:p-5">
        <IconBadge icon={s.icon} color={s.color} />
        <div>
          <p className="font-display text-2xl font-extrabold text-navy"><Counter to={s.to} suffix={s.suffix} /></p>
          <p className="text-xs text-steel sm:text-sm">{s.label}</p>
        </div>
      </Reveal>
    ))}
  </div>
</section>

      {/* Journey */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Our Journey" title="Four Decades," highlight="One Standard" />
          <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-7 right-[12%] left-[12%] hidden h-0.5 bg-brand-red/20 lg:block" />
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 90} className="relative">
                <span className="relative z-10 mx-auto flex h-14 w-28 items-center justify-center rounded-full bg-brand-red font-display text-lg font-extrabold text-white shadow-soft lg:mx-0 lg:ml-[calc(50%-56px)]">{j.year}</span>
                <div className="mt-4 rounded-3xl border border-line bg-white p-5 text-center">
                  <h3 className="font-bold">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{j.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Our Businesses" title="Four Businesses." highlight="One Stronger Group." />
          <div className="mt-10 space-y-4">
            {businesses.map((b, i) => (
              <Reveal key={b.key} delay={i * 60}>
                <Link href={b.href} className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-white transition hover:shadow-lift sm:grid-cols-[260px_1fr] lg:grid-cols-[340px_1fr_auto]">
                  <div className="relative aspect-[16/9] sm:aspect-auto sm:min-h-44">
                    <Image src={b.image} alt={b.label} fill sizes="340px" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-wider text-steel uppercase">{b.label}</p>
                    <h3 className={`mt-1 text-2xl font-extrabold ${accent[b.color].text}`}>{b.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{b.text}</p>
                  </div>
                  <div className="hidden items-center pr-8 lg:flex">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition group-hover:translate-x-1 ${accent[b.color].bg}`}><Icon name="arrow" className="h-5 w-5" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision mission values */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {[
              ["Our Vision", vision, "eye", "red"],
              ["Our Mission", mission, "diamond", "gold"],
            ].map(([k, d, icon, color], i) => (
              <Reveal key={k} delay={i * 80} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${accent[color].bg}`}><Icon name={icon} className="h-7 w-7" /></span>
                <p className={`mt-5 text-xs font-bold tracking-[0.16em] uppercase ${accent[color].text}`}>{k}</p>
                <h3 className="mt-1 text-2xl font-extrabold">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{d.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="rounded-2xl border border-line bg-white p-4 sm:p-6">
                <IconBadge icon={v.icon} color={["red", "gold", "blue", "green"][i]} />
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-1 text-xs text-steel sm:text-sm">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
