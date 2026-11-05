import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Button, CTA, Crumbs, ESDScale, Eyebrow, ProductTile, SectionHead } from "@/components/ui";
import { group } from "@/lib/group";
import { products } from "@/lib/site";

const swatch = {
  Clear: "bg-gradient-to-br from-white to-slate-300",
  White: "bg-white",
  Black: "bg-graphite",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.intro.slice(0, 160) };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const others = products.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-[#f2f7ff] to-white py-8 sm:py-12">
        <div className="container-x">
          <Crumbs items={[{ label: "Polysheet", href: "/polysheets" }, { label: product.name }]} />
          <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-line bg-white">
              <Image src={product.image} alt={product.name} fill priority sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
              {product.esd && (
                <span className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy shadow-soft">
                  <Icon name="shield" className="h-4 w-4 text-sky" /> ESD SAFE
                </span>
              )}
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow color="blue">{product.esd ? "ESD Sheet" : "Non-ESD Sheet"}</Eyebrow>
              <h1 className="mt-3 text-4xl leading-[1.05] font-extrabold sm:text-5xl">{product.name}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.keywords.map((k) => (
                  <span key={k} className="rounded-full bg-sky/10 px-4 py-1.5 text-sm font-semibold text-sky">{k}</span>
                ))}
              </div>
              <p className="mt-5 leading-relaxed text-steel">{product.intro}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-navy">Colours:</span>
                {product.colours.map((c) => (
                  <span key={c} className="flex items-center gap-2 rounded-full border border-line bg-white py-1 pr-3 pl-1 text-xs font-medium text-navy">
                    <span className={`h-6 w-6 rounded-full border border-line ${swatch[c.split(" ")[0]]}`} /> {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`/contact?product=${product.slug}`} variant="blue">
                  Request Sample / Quote <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
                <a href={`tel:${group.phones[1].tel}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy">
                  <Icon name="call" className="h-4 w-4" /> {group.phones[1].display}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal className="rounded-3xl bg-navy p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold text-white">Why {product.name}?</h2>
            <p className="mt-4 leading-relaxed text-white/75">{product.detail}</p>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl border border-line p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">Key Properties</h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-graphite">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-sky" /> {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160} className="rounded-3xl border border-line p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">Key Uses</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {product.uses.map((u) => (
                <span key={u} className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy">{u}</span>
              ))}
            </div>
            <h3 className="mt-6 text-xs font-bold tracking-widest text-steel uppercase">Industries</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite">{product.industries.join(" · ")}</p>
          </Reveal>
        </div>
      </section>

      {product.esd && (
        <section className="bg-mist py-12 sm:py-16">
          <div className="container-x">
            <SectionHead eyebrow="Tested & Verified" title="Controlled" highlight="Surface Resistance" color="blue" text="Every ESD lot is checked with surface resistance meters, so the grade you order is the grade you receive — before and after vacuum forming." className="mb-8" />
            <ESDScale />
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead eyebrow="Explore More" title="Other" highlight="Materials" color="blue" className="mb-8" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <ProductTile key={p.slug} href={`/polysheets/${p.slug}`} image={p.image} title={p.name} subtitle={p.short} badge={p.esd ? "ESD SAFE" : "NON-ESD"} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
