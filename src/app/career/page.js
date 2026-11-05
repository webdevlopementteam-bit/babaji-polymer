import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { IconBadge, PageHeader, SectionHead } from "@/components/ui";
import { group } from "@/lib/group";

export const metadata = {
  title: "Career",
  description: "Build your career with Babaji Group — food products, polysheets and PVC compounds. Send us your CV.",
};

const why = [
  { icon: "chart", title: "Grow with a growing group", text: "Four businesses mean more roles, more learning and more room to move up." },
  { icon: "handshake", title: "A legacy of trust", text: "Join a name families and industries have relied on since 1983." },
  { icon: "factory", title: "Modern manufacturing", text: "Work with modern processing, extrusion and testing technology." },
  { icon: "users", title: "People-first culture", text: "A team that values integrity, ownership and teamwork." },
];

const areas = ["Production & Operations", "Quality Control & Lab", "Sales & Business Development", "Distribution & Logistics", "Accounts & Administration", "Maintenance & Engineering"];

export default function CareerPage() {
  return (
    <>
      <PageHeader eyebrow="Career" title="Build Your Future" highlight="With Babaji Group" text="We are always looking for committed people to grow with us across food products, polysheets and PVC compounds." image="/images/poly/mfg-extrusion.webp" crumbs={[{ label: "Career" }]} />

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Why Join Us" title="Why Work" highlight="With Us" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 70} className="rounded-3xl border border-line bg-white p-6">
                <IconBadge icon={w.icon} color={["red", "gold", "blue", "green"][i]} />
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div>
            <SectionHead eyebrow="Departments" title="Areas We" highlight="Hire For" text="No current opening listed for your role? Send your CV anyway — we keep strong profiles on file." />
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {areas.map((a) => (
                <span key={a} className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-navy">
                  <Icon name="check" className="h-4 w-4 text-brand-red" /> {a}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-steel">
              Or email your CV to <a href={`mailto:${group.emails[0]}?subject=Job%20Application`} className="font-semibold text-brand-red hover:underline">{group.emails[0]}</a>
            </p>
          </div>
          <Reveal delay={100} className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-8">
            <h2 className="text-2xl font-extrabold">Apply Now</h2>
            <p className="mt-2 mb-6 text-sm text-steel">Mention the role you are interested in and your experience. Attach your CV when the email opens.</p>
            <ContactForm defaultProduct="career" compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
