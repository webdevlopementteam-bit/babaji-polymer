import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { BannerHeader, Button, CTA, ESDScale, Eyebrow, IconBadge, SectionHead } from "@/components/ui";
import { group, packagingApps, polyRange, polyReviews, polySpecs, polyStats } from "@/lib/group";
import { future, industries } from "@/lib/site";

export const metadata = {
  title: "Polysheet — ESD PET & ESD HIPS Sheets",
  description:
    "High-performance ESD and general-purpose PET & HIPS sheets, rolls and thermoformed trays for electronics packaging and industrial applications — manufactured by Babaji Udyog Pvt. Ltd. in Bahadurgarh, Haryana.",
};

const materials = [
  {
    key: "PET",
    full: "Polyethylene Terephthalate",
    title: "PET Sheets",
    tags: ["Clarity", "Strength", "Versatility"],
    image: "/images/poly/pet-tray-pcb.webp",
    text: "PET sheets are preferred where clarity, product visibility, a premium finish and smooth thermoforming matter. They create transparent or semi-transparent ESD-safe packaging where the packed component can be inspected without opening the tray or cover.",
    props: ["High clarity and excellent surface finish", "Good mechanical strength, dimensionally stable", "Excellent thermoforming capability", "Good chemical resistance", "Lightweight and recyclable", "Stable surface resistance during vacuum forming (ESD grade)"],
    uses: ["Transparent ESD trays", "PCB packaging", "Component visibility trays", "Protective covers", "Precision thermoformed packaging", "Food & pharma packaging (non-ESD)"],
    colours: ["Clear", "White", "Black"],
    href: "/polysheets/esd-pet-sheets",
  },
  {
    key: "HIPS",
    full: "High Impact Polystyrene",
    title: "HIPS Sheets",
    tags: ["Strength", "Impact Resistance", "Cost Effective"],
    image: "/images/poly/hips-tray.webp",
    text: "HIPS sheets are preferred where strength, rigidity, impact resistance and strong tray performance are important. They are the go-to material for black ESD trays and industrial component handling trays.",
    props: ["High impact strength and rigidity", "Good dimensional stability", "Easy to thermoform into custom trays", "Smooth surface finish", "Cost-effective, reliable solution", "Efficient static dissipation (ESD grade)"],
    uses: ["Black ESD trays", "PCB trays", "Electronic component trays", "Industrial handling trays", "Assembly-line trays", "Appliance & consumer goods packaging"],
    colours: ["White", "Black"],
    href: "/polysheets/esd-hips-sheets",
  },
];

const swatch = { Clear: "bg-gradient-to-br from-white to-slate-300", White: "bg-white", Black: "bg-graphite" };

export default function PolysheetsPage() {
  return (
    <>
      <BannerHeader src="/images/banner1.webp" alt="Babaji Udyog — ESD PET & ESD HIPS Sheets" />

      {/* Intro + stats */}
      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <SectionHead color="blue" eyebrow="Babaji Udyog Pvt. Ltd. · Polysheets" title="PET & HIPS Sheets —" highlight="Engineered for Protection. Built for Performance." text="High-performance ESD and general-purpose PET & HIPS sheets for electronics packaging, thermoforming and industrial applications — manufactured in Bahadurgarh, Haryana." />
            <Reveal delay={80} className="mt-5 flex flex-wrap gap-2">
              {["Sheets", "Rolls", "Thermoforming Solutions", "ESD & Non-ESD"].map((t) => (
                <span key={t} className="rounded-full bg-sky/10 px-4 py-1.5 text-sm font-semibold text-sky">{t}</span>
              ))}
            </Reveal>
            <Reveal delay={120} className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact?product=esd-pet-sheets" variant="blue">Get a Quote <Icon name="arrow" className="h-4 w-4" /></Button>
              <Button href="#range" variant="light" className="border border-line">Explore Products</Button>
            </Reveal>
          </div>
          <Reveal delay={100} className="grid grid-cols-2 gap-3">
            {polyStats.map((s, i) => (
              <div key={s.label} className={`rounded-3xl p-5 sm:p-6 ${i === 1 ? "bg-sky text-white" : "border border-line bg-white"}`}>
                <p className={`font-display text-2xl font-extrabold sm:text-3xl ${i === 1 ? "text-white" : "text-navy"}`}>{s.value}</p>
                <p className={`mt-1 text-sm ${i === 1 ? "text-white/80" : "text-steel"}`}>{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Range */}
      <section id="range" className="scroll-mt-28 bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="What We Make" title="Our Polysheet" highlight="Products" text="From raw sheet to finished tray — PET and HIPS in ESD and non-ESD grades, supplied as sheets, rolls or thermoformed packaging." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {polyRange.map((p, i) => {
              const body = (
                <>
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 33vw, 50vw" className="object-contain p-4 transition duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 rounded-full bg-sky px-3 py-1 text-[11px] font-bold text-white">{p.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-extrabold">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.chips.map((c) => <span key={c} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy">{c}</span>)}
                    </div>
                    {p.href && <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-sky">View details <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span>}
                  </div>
                </>
              );
              const cls = "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-500 hover:-translate-y-1 hover:shadow-lift";
              return (
                <Reveal key={p.name} delay={(i % 3) * 80}>
                  {p.href ? <Link href={p.href} className={cls}>{body}</Link> : <div className={cls}>{body}</div>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PET vs HIPS */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="Materials" title="PET for Clarity." highlight="HIPS for Strength." text="Two materials, one standard of quality. Both are available in ESD grades for complete static safety." />
          <div className="mt-10 space-y-6">
            {materials.map((m, i) => (
              <Reveal key={m.key} className={`grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-line bg-white p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 ${i ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist sm:aspect-[4/3] lg:aspect-square">
                  <Image src={m.image} alt={m.title} fill sizes="(min-width:1024px) 35vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-sky uppercase">{m.full}</p>
                  <h3 className="mt-1 text-3xl font-extrabold">{m.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">{m.tags.map((t) => <span key={t} className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">{t}</span>)}</div>
                  <p className="mt-4 text-sm leading-relaxed text-steel">{m.text}</p>
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-navy">Key properties</p>
                      <ul className="mt-2 space-y-2">{m.props.map((p) => <li key={p} className="flex gap-2 text-sm text-graphite"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />{p}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">Key uses</p>
                      <ul className="mt-2 space-y-2">{m.uses.map((u) => <li key={u} className="flex gap-2 text-sm text-graphite"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{u}</li>)}</ul>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-navy">Colours:</span>
                      {m.colours.map((c) => <span key={c} title={c} className={`h-7 w-7 rounded-full border border-line ${swatch[c]}`} />)}
                    </div>
                    <Link href={m.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky">ESD {m.title} <Icon name="arrow" className="h-4 w-4" /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESD grades */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <div>
            <SectionHead color="blue" eyebrow="ESD Grades & Values" title="Controlled" highlight="Surface Resistance" text="ESD (electrostatic discharge) materials control static to protect sensitive components during manufacturing, handling, transport and storage. We make sheets across all three ESD classifications." className="mb-8" />
            <ESDScale />
          </div>
          <Reveal delay={100} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
            <div className="relative aspect-[4/3]">
              <Image src="/images/poly/resistance-meter.webp" alt="Surface resistance meter testing an ESD sheet" fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="flex items-center gap-2 font-display text-lg font-extrabold text-navy"><Icon name="shield" className="h-5 w-5 text-sky" /> Tested &amp; Verified</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">Every ESD lot is checked with surface resistance meters, so the grade you order is the grade you receive — before and after vacuum forming.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="Specifications at a Glance" title="ESD PET vs" highlight="ESD HIPS" className="mb-8" />
          <Reveal className="overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 font-semibold">Property</th>
                  <th className="px-5 py-4 font-semibold">ESD PET Sheets</th>
                  <th className="px-5 py-4 font-semibold">ESD HIPS Sheets</th>
                </tr>
              </thead>
              <tbody>
                {polySpecs.map(([k, a, b], i) => (
                  <tr key={k} className={i % 2 ? "bg-mist" : "bg-white"}>
                    <td className="px-5 py-3.5 font-semibold text-navy">{k}</td>
                    <td className="px-5 py-3.5 text-graphite">{a}</td>
                    <td className="px-5 py-3.5 text-graphite">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="Industries" title="Where Our" highlight="Sheets Are Used" text="Our sheets reach thermoformers, electronics packaging companies, PCB tray makers, EMS units, semiconductor suppliers, automotive and EV manufacturers, LED makers and industrial packaging buyers." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {industries.slice(0, 9).map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 60} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-start sm:p-5">
                <IconBadge icon={ind.icon} color="blue" size="sm" />
                <div>
                  <h3 className="text-sm font-bold sm:text-base">{ind.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-steel sm:text-sm">{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-12 text-center text-xl font-extrabold sm:text-2xl">Packaging &amp; Industrial Applications</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {packagingApps.map((a, i) => (
              <Reveal key={a.name} delay={(i % 5) * 50} className="group overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={a.image} alt={a.name} fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className={`absolute top-2 left-2 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${a.tag === "PET" ? "bg-sky" : "bg-navy"}`}>{a.tag}</span>
                </div>
                <p className="p-3 text-xs font-semibold text-navy sm:text-sm">{a.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selection guide */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="Material Selection Guide" title="Which Sheet Is" highlight="Right for You?" />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              { t: "Choose PET when you need", img: "/images/poly/clear-tray.webp", items: ["Clarity & visibility", "Premium finish", "Smooth thermoforming", "Transparent packaging", "Display-based component protection"], c: "bg-sky" },
              { t: "Choose HIPS when you need", img: "/images/poly/black-roll.webp", items: ["Strength & durability", "Impact resistance", "Strong, rigid trays", "Industrial handling", "Heavy-duty component protection"], c: "bg-navy" },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 100} className="overflow-hidden rounded-3xl border border-line bg-white">
                <div className={`${g.c} px-6 py-4 text-lg font-extrabold text-white`}>{g.t}</div>
                <div className="grid grid-cols-[1fr_0.8fr] items-center gap-4 p-6">
                  <ul className="space-y-3">{g.items.map((x) => <li key={x} className="flex gap-2 text-sm font-medium text-graphite"><Icon name="check" className="h-5 w-5 shrink-0 text-brand-green" />{x}</li>)}</ul>
                  <div className="relative aspect-square"><Image src={g.img} alt="" fill sizes="25vw" className="object-contain" /></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead color="blue" eyebrow="Manufacturing Strength" title="Built to" highlight="Scale With You" text="Modern extrusion lines, dedicated ESD and non-ESD production and in-house testing let us supply consistent material — from sample lots to bulk monthly contracts." />
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <Reveal className="flex flex-col justify-between rounded-3xl bg-navy p-6 text-white sm:p-8">
              <div>
                <p className="text-sm text-white/70">Production capacity</p>
                <p className="mt-1 font-display text-5xl font-extrabold text-white">600+ <span className="text-xl">MT</span></p>
                <p className="text-white/70">per month</p>
              </div>
              <div className="mt-8 space-y-3 border-t border-white/15 pt-5 text-sm">
                <p className="flex justify-between gap-3"><span className="text-white/70">ESD PET &amp; ESD HIPS lines</span><span className="font-semibold">Dedicated</span></p>
                <p className="flex justify-between gap-3"><span className="text-white/70">Non-ESD PET &amp; HIPS lines</span><span className="font-semibold">Dedicated</span></p>
              </div>
            </Reveal>
            {[
              ["/images/poly/mfg-extrusion.webp", "Modern Extrusion Lines", "Dedicated sheet extrusion for ESD PET and ESD HIPS with tight thickness control."],
              ["/images/poly/mfg-qa.webp", "Quality Assurance", "Every lot is surface-resistance tested and verified before dispatch."],
            ].map(([img, t, d], i) => (
              <Reveal key={t} delay={(i + 1) * 80} className="overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[16/9]"><Image src={img} alt={t} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" /></div>
                <div className="p-6"><h3 className="text-lg font-extrabold">{t}</h3><p className="mt-2 text-sm text-steel">{d}</p></div>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-extrabold sm:text-2xl">The future of Babaji Udyog</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {future.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 60} className="rounded-2xl border border-line bg-white p-4 sm:p-5">
                <span className="font-display text-sm font-bold text-sky">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-1 font-bold text-navy">{f.title}</h4>
                <p className="mt-1 text-xs text-steel sm:text-sm">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center color="blue" eyebrow="Client Feedback" title="Trusted by" highlight="Industry" text="Thermoformers, EMS units and packaging buyers rely on Babaji polysheets for consistent quality and supply." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {polyReviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 60} className="flex flex-col rounded-3xl border border-line bg-white p-6">
                <span className="font-display text-5xl leading-none text-sky/30">&ldquo;</span>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-graphite">{r.text}</p>
                <p className="mt-5 font-bold text-navy">{r.name}</p>
                <p className="text-xs text-steel">{r.place}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-sky to-[#3b8ff0] p-6 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.18em] text-white/85 uppercase">Samples &amp; Bulk Supply</span>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Need samples or a bulk quote?</h2>
              <p className="mt-2 max-w-xl text-white/85">Tell us your application, thickness and quantity — our team will recommend the right PET or HIPS grade and share pricing.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${group.phones[1].tel}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-sky"><Icon name="call" className="h-4 w-4" /> Call {group.phones[1].display}</a>
              <Link href="/contact?product=esd-pet-sheets" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Send an Enquiry <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
