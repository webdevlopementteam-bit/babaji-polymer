import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import ContactFormFromUrl from "@/components/ContactFormFromUrl";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Eyebrow, IconBadge, PageHeader } from "@/components/ui";
import { group, offices } from "@/lib/group";

export const metadata = {
  title: "Contact Us",
  description: "Contact Babaji Group for food products, PET & HIPS polysheets and PVC compounds — distributorship, bulk orders, quotes and product support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact Us" title="We're Here to" highlight="Help" text="Distributorship, bulk orders, quotes or product support — reach the right team directly." image="/images/contact-banner.webp" crumbs={[{ label: "Contact Us" }]} />

      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "call", label: "Call Us", lines: group.phones.map((p) => [p.display, `tel:${p.tel}`]), color: "red" },
            { icon: "mail", label: "Email Us", lines: group.emails.map((e) => [e, `mailto:${e}`]), color: "blue" },
            { icon: "gear", label: "Working Hours", lines: [[group.hours]], color: "green" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 70} className="flex gap-4 rounded-3xl border border-line bg-white p-6">
              <IconBadge icon={c.icon} color={c.color} />
              <div className="min-w-0">
                <p className="font-bold text-navy">{c.label}</p>
                {c.lines.map(([t, href]) => (href ? <a key={t} href={href} className="block break-all text-sm text-steel hover:text-brand-red">{t}</a> : <p key={t} className="text-sm text-steel">{t}</p>))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-x mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-4">
            {offices.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="overflow-hidden rounded-3xl border border-line bg-white">
                <div className="p-6">
                  <p className="text-xs font-bold tracking-wider text-brand-red uppercase">{o.title}</p>
                  <h3 className="mt-1 text-lg font-extrabold">{o.company}</h3>
                  <p className="mt-2 flex gap-2 text-sm text-steel"><Icon name="pin" className="h-4 w-4 shrink-0 text-brand-red" /> {o.address}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    <a href={`tel:${o.phone.tel}`} className="font-semibold text-navy hover:text-brand-red">{o.phone.display}</a>
                    <a href={`mailto:${o.email}`} className="break-all text-steel hover:text-brand-red">{o.email}</a>
                  </div>
                </div>
                <iframe title={`${o.company} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(o.map)}&output=embed`} className="h-48 w-full border-t border-line" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="h-fit rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8 lg:sticky lg:top-32">
            <Eyebrow>Send us a message</Eyebrow>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Drop Your <span className="text-brand-red">Enquiry</span></h2>
            <p className="mt-2 mb-6 text-sm text-steel">Your enquiry goes straight to the right team — food products to our Najafgarh office, polysheets &amp; PVC to Bahadurgarh.</p>
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
