import Image from "next/image";
import Icon from "@/components/Icon";
import LabSection from "@/components/LabSection";
import Reveal from "@/components/Reveal";
import { CTA, ESDScale, IconBadge, PageHeader, SectionHead } from "@/components/ui";
import { facilities } from "@/lib/group";
import { advantages } from "@/lib/site";

export const metadata = {
  title: "Infrastructure & Quality",
  description:
    "Babaji Group manufacturing: a 2-acre food processing facility in Najafgarh with captive wind power and in-house labs, and a polymer plant in Bahadurgarh with 600+ MT monthly sheet capacity.",
};

const quality = [
  { icon: "factory", title: "In-house manufacturing", text: "Our own plants for food products, sheets and compounds." },
  { icon: "gear", title: "Process control", text: "Consistent thickness, finish and forming; consistent purity and taste." },
  { icon: "search", title: "Batch traceability", text: "Documented from raw material to dispatch." },
  { icon: "flask", title: "In-house labs", text: "Every batch tested before it leaves the plant." },
  { icon: "shield", title: "Controlled ESD", text: "Surface resistance verified within spec on every ESD lot." },
  { icon: "truck", title: "Reliable dispatch", text: "Planned production and supply coordination." },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader eyebrow="Infrastructure" title="Built on Quality." highlight="Driven by Precision." text="Modern manufacturing, in-house testing and disciplined processes across all four Babaji businesses." image="/images/poly/mfg-qa.webp" crumbs={[{ label: "Infrastructure" }]} />

      <section className="py-12 sm:py-16">
        <div className="container-x space-y-6">
          {facilities.map((f, i) => (
            <Reveal key={f.title} className={`grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-2 ${i ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[16/10] h-full min-h-64">
                <Image src={f.image} alt={f.title} fill sizes="(min-width:1024px) 50vw, 100vw" className={`object-cover ${f.position ?? ""}`} />
              </div>
              <div className="p-6 sm:p-10">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-red"><Icon name="pin" className="h-4 w-4" /> {f.place}</span>
                <h2 className="mt-2 text-3xl font-extrabold">{f.title}</h2>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-graphite">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Quality Assurance" title="Quality. Safety." highlight="Reliability." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quality.map((q, i) => (
              <Reveal key={q.title} delay={(i % 3) * 70} className="flex gap-4 rounded-3xl border border-line bg-white p-6">
                <IconBadge icon={q.icon} color={["red", "blue", "gold", "green", "blue", "red"][i]} />
                <div>
                  <h3 className="font-bold">{q.title}</h3>
                  <p className="mt-1 text-sm text-steel">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/poly/resistance-meter.webp" alt="Surface resistance testing" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <div>
            <SectionHead color="blue" eyebrow="Polysheet Testing" title="Surface Resistance," highlight="Verified." className="mb-8" />
            <ESDScale />
          </div>
        </div>
        <div className="container-x mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 40} className="flex flex-col items-center gap-3 rounded-2xl border border-line p-4 text-center">
              <Icon name={a.icon} className="h-7 w-7 text-navy" />
              <p className="text-xs font-semibold text-navy">{a.title}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <LabSection className="bg-mist" />


      <CTA />
    </>
  );
}
