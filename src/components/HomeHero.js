import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

// Background photos: public/images/home/hero-food.webp, hero-polymer.webp, hero-sheet.webp.
const panels = [
  {
    href: "/food-products",
    image: "/images/home/hero-food.webp",
    alt: "Grains, pulses and wheat for Babaji food products",
    first: "Food",
    rest: " Products",
    sub: "Quality Food for a Better Life",
    firstColor: "text-brand-red",
    restColor: "text-navy",
    subColor: "text-graphite",
    bar: "bg-brand-red",
    btn: "bg-brand-red text-white hover:bg-brand-red-dark",
    overlay: "bg-gradient-to-r from-white/70 via-white/25 to-transparent",
    pos: "object-[70%_center]",
    // Dividers slant like "/": each panel is wider at the top.
    clip: "lg:[clip-path:polygon(0_0,100%_0,calc(100%-90px)_100%,0_100%)]",
    box: "lg:justify-start lg:pt-14",
  },
  {
    href: "/pvc-compounds",
    image: "/images/home/hero-polymer.webp",
    alt: "Black, orange, white and yellow PVC compound granules",
    first: "Polymer",
    rest: " Compound",
    sub: "Engineering Polymer Solutions",
    firstColor: "text-[#f2b632]",
    restColor: "text-white",
    subColor: "text-white/90",
    bar: "bg-[#f2b632]",
    btn: "bg-[#f2b632] text-navy hover:brightness-95",
    overlay: "bg-gradient-to-r from-black/75 via-black/35 to-black/5",
    pos: "object-center",
    clip: "lg:-ml-[90px] lg:pl-[130px] lg:[clip-path:polygon(90px_0,100%_0,calc(100%-90px)_100%,0_100%)]",
    box: "lg:justify-end lg:pb-14",
  },
  {
    href: "/polysheets",
    image: "/images/home/hero-sheet.webp",
    alt: "Clear, blue and green polysheets",
    first: "Poly",
    rest: "sheet",
    sub: "Durable Sheet Solutions for Multiple Industries",
    firstColor: "text-sky",
    restColor: "text-navy",
    subColor: "text-graphite",
    bar: "bg-sky",
    btn: "bg-sky text-white hover:brightness-95",
    overlay: "bg-gradient-to-r from-white/75 via-white/30 to-transparent",
    pos: "object-[65%_center]",
    clip: "lg:-ml-[90px] lg:pl-[130px] lg:[clip-path:polygon(90px_0,100%_0,calc(100%-90px)_100%,0_100%)]",
    box: "lg:justify-start lg:pt-14",
  },
  {
    href: "/plastic-caps",
    image: "/images/home/cap-handle.png",
    alt: "Colourful plastic caps and handles for packaging",
    first: "Plastic",
    rest: " Caps",
    sub: "Quality Plastic Caps for Diverse Packaging Needs",
    firstColor: "text-brand-red",
    restColor: "text-navy",
    subColor: "text-graphite",
    bar: "bg-brand-red",
    btn: "bg-brand-red text-white hover:bg-brand-red-dark",
    overlay: "bg-gradient-to-t from-white via-white/85 to-transparent",
    pos: "object-[75%_top]",
    clip: "lg:-ml-[90px] lg:pl-[130px] lg:[clip-path:polygon(90px_0,100%_0,100%_100%,0_100%)]",
    box: "lg:justify-end lg:pb-14",
  },
];

export default function HomeHero() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:h-[420px] lg:flex-row xl:h-[460px]">
        {panels.map((p, i) => (
          <Link
            key={p.href}
            href={p.href}
            className={`group relative flex min-h-[260px] flex-1 flex-col justify-center overflow-hidden px-6 py-10 sm:min-h-[300px] sm:px-10 lg:min-h-0 lg:px-12 ${p.clip} ${p.box}`}
          >
            <Image src={p.image} alt={p.alt} fill priority={i === 0} sizes="(min-width:1024px) 40vw, 100vw" className={`object-cover ${p.pos} transition duration-[1.2s] group-hover:scale-105`} />
            <div className={`absolute inset-0 ${p.overlay}`} />
            <div className="relative z-10 max-w-xs">
              <span className={`block h-[3px] w-12 rounded ${p.bar}`} />
              <h2 className="mt-4 text-[28px] leading-none font-extrabold tracking-tight uppercase sm:text-[34px]">
                <span className={p.firstColor}>{p.first}</span>
                <span className={p.restColor}>{p.rest}</span>
              </h2>
              <p className={`mt-3 text-base font-medium sm:text-lg ${p.subColor}`}>{p.sub}</p>
              <span className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-soft transition group-hover:gap-3 ${p.btn}`}>
                Explore <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
