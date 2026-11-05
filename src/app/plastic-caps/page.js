import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon"; // path apna adjust kar lena
import CapGallery from "./CapGallery"; // app/plastic-caps/CapGallery.jsx

export const metadata = {
  title: "Plastic Caps & Closures | Babaji Group",
  description:
    "PCO caps, spout caps, CTC single & double caps, water caps and more. Quality plastic caps for diverse packaging needs from Babaji Group.",
};

/* ---------- IMAGES ----------
   Banner:    public/images/caps-banner.png
   Category:  public/images/caps/<folder>/1.webp, 2.webp ...  (count = kitni images hain)
*/
const BANNER = "/images/cap-banner.png";
const imgs = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/images/caps/${folder}/${i + 1}.png`);

const categories = [
  {
    id: "pco-caps",
    title: "PCO Caps",
    spec: "1810 Full Neck",
    images: imgs("pco-caps", 6),
    text: "PCO 1810 full neck closures for juices and soft drinks, with a consistent thread and a secure, leak-safe seal. Available in plain and custom printed versions.",
    tags: ["PCO 1810", "Full neck", "Custom printing"],
  },
  {
    id: "spout-caps",
    title: "Spout Caps",
    spec: "42 mm",
    images: imgs("spout-caps", 4),
    text: "Easy-pour spout caps in press fit and ring fit versions, made for pouches, jars and liquid packs.",
    tags: ["42 mm", "Press fit", "Ring fit"],
  },
  {
    id: "ctc-36mm",
    title: "CTC Cap",
    spec: "36 mm",
    images: imgs("ctc-36mm", 5),
    text: "Single-piece 36 mm CTC caps for edible oil and other liquid packaging.",
    tags: ["36 mm", "CTC single cap", "Edible oil"],
  },
  {
    id: "ctc-double",
    title: "CTC Double Caps",
    spec: "29 mm · 3.3 gram",
    images: imgs("ctc-double", 6),
    text: "Lightweight 29 mm double-layer CTC caps at 3.3 gram, built for a tight seal and smooth opening.",
    tags: ["29 mm", "3.3 gram", "Double cap"],
  },
  {
    id: "water-caps",
    title: "Water Caps",
    spec: "26 mm & 22 mm",
    images: imgs("water-caps", 4),
    text: "Flat dome W-18 water bottle caps in 26 mm and 22 mm sizes, available in multiple colours.",
    tags: ["26 mm", "22 mm", "Flat dome W-18"],
  },
];

const features = [
  { icon: "shield", label: "Leak Proof Design" },
  { icon: "link", label: "Durable & Strong" },
  { icon: "layers", label: "Multiple Sizes" },
  { icon: "gear", label: "Wide Applications" },
];

const clients = [
  { name: "Dabur", image: "/images/brands/dabur.png" },
  { name: "Jivo", image: "/images/brands/jivo.png" },
  { name: "Mahesh", image: "/images/brands/mahesh.png" },
  { name: "Bunge", image: "/images/brands/bunge.png" },
  { name: "Patanjali", image: "/images/brands/patanjali.png" },
];

const makes = [
  "Three Start Caps",
  "P.C.O. Caps",
  "Juice Caps",
  "Soft Drink Caps",
  "Edible Oil Caps",
  "CTC Double Caps",
  "CTC Single Caps",
];

export default function PlasticCapsPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-[#f3f6fb]">
        <Image
          src={BANNER}
          alt="Plastic caps in assorted colours and types"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[78%_bottom] lg:object-right"
        />
        {/* mobile: text upar, caps neeche dikhein */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/85 to-transparent lg:hidden" />

        <div className="mx-auto max-w-7xl px-6 pt-12 pb-72 sm:px-10 sm:pb-96 lg:px-12 lg:py-20 lg:pb-24">
          <div className="max-w-xl lg:max-w-[46%]">
            <p className="flex items-center gap-3 text-sm font-bold tracking-wide text-brand-red uppercase">
              <span className="h-[3px] w-12 rounded bg-brand-red" /> Our Products
            </p>
            <h1 className="mt-4 text-5xl leading-none font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-navy">Plastic </span>
              <span className="text-brand-red">Caps</span>
            </h1>
            <p className="mt-5 text-xl font-bold text-navy sm:text-2xl">
              Quality Plastic Caps for Diverse Packaging Needs
            </p>
            <p className="mt-4 text-graphite/80">
              From PCO and CTC closures to spout and water caps, Babaji Group Caps &amp; Closures makes caps
              for oil, juice, beverage and water packaging, trusted by leading brands.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((f) => (
                <li key={f.label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                    <Icon name={f.icon} className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <span className="text-sm leading-tight font-semibold text-navy">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:gap-3 hover:bg-brand-red-dark"
              >
                View Categories <Icon name="arrow" className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-navy/30 bg-white/70 px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY CHIPS ================= */}
      <nav
        aria-label="Cap categories"
        className="sticky top-[72px] z-20 border-y border-navy/10 bg-white/90 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 sm:px-10 lg:px-12">
          {categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="inline-block rounded-full bg-[#f3f6fb] px-4 py-2 text-sm font-semibold text-navy transition hover:bg-brand-red hover:text-white"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= CATEGORIES ================= */}
      <section id="categories" className="mx-auto max-w-7xl scroll-mt-32 px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <span className="block h-[3px] w-12 rounded bg-brand-red" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Our Cap Range</h2>
          <p className="mt-3 text-graphite/80">
            Five product lines, each made to a fixed neck size so it fits your filling line without trial and
            error.
          </p>
        </div>

        <div className="mt-12 space-y-16 lg:space-y-24">
          {categories.map((c, i) => (
            <article
              key={c.id}
              id={c.id}
              className="grid scroll-mt-40 items-start gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <CapGallery images={c.images} title={c.title} />
              </div>

              <div className="lg:sticky lg:top-44 lg:self-center">
                <p className="text-sm font-semibold text-brand-red">{c.spec}</p>
                <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-navy">{c.title}</h3>
                <p className="mt-4 max-w-md text-graphite/80">{c.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-navy/15 px-3 py-1 text-sm font-medium text-navy">
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?enquiry=${encodeURIComponent(c.title)}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:gap-3 hover:bg-brand-red-dark"
                >
                  Enquire Now <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE MAKE ================= */}
      <section className="bg-[#f3f6fb] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <span className="block h-[3px] w-12 rounded bg-sky" />
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Caps for Every Pack</h2>
            <p className="mt-3 max-w-md text-graphite/80">One manufacturer for the closures your product line needs.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {makes.map((m) => (
              <li
                key={m}
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-4 font-semibold text-navy shadow-soft"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Trusted by Leading Brands
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((c) => (
              <li key={c.name} className="relative h-28 rounded-2xl border border-navy/10 bg-white shadow-soft">
                <Image
                  src={c.image}
                  alt={`${c.name} logo`}
                  fill
                  sizes="(min-width:1024px) 18vw, 45vw"
                  className="object-contain p-3"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-navy px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Need caps for your product?</h2>
            <p className="mt-2 max-w-lg text-white/80">
              Share your neck size, colour and quantity. Our team will get back to you with a quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:gap-3 hover:bg-brand-red-dark"
            >
              Get In Touch <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/918076267027?text=Hello%20Babaji%20Group%2C%20I%20would%20like%20to%20enquire%20about%20plastic%20caps."
              className="inline-flex items-center rounded-full bg-[#f2b632] px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-95"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}