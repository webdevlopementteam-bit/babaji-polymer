"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { businesses, foodCategories, foodProducts, polyRange, pvcProducts } from "@/lib/group";
import { accent } from "./biz";
import Icon from "./Icon";

const homeFood = ["Kachi Ghani Mustard Oil (Premium)", "Cold Pressed Canola Oil", "Cold Pressed Yellow Mustard Oil", "Mustard Oil Kachi Ghani", "MP Chakki Fresh Atta", "Besan", "Moong Dhuli", "OxyBoom Bartan Bar"];

const items = {
  food: homeFood.map((n) => foodProducts.find((p) => p.name === n)).filter(Boolean).map((p) => ({ name: p.name, sub: foodCategories.find((c) => c.slug === p.category)?.name, image: p.image, contain: true })),
  sheet: polyRange.map((p) => ({ name: p.name, sub: p.chips.join(" · "), image: p.image, contain: true })),
  pvc: pvcProducts.map((p) => ({ name: p.name, sub: p.text, image: p.image })),
  caps: [
    { name: "PCO Caps", sub: "1810 Full Neck", image: "/images/caps/pco-caps/1.png", contain: true },
    { name: "Spout Caps", sub: "42 mm · Press fit & Ring fit", image: "/images/caps/spout-caps/1.png", contain: true },
    { name: "CTC Cap", sub: "36 mm", image: "/images/caps/ctc-36mm/1.png", contain: true },
    { name: "CTC Double Caps", sub: "29 mm · 3.3 gram", image: "/images/caps/ctc-double/1.png", contain: true },
    { name: "Water Caps", sub: "26 mm & 22 mm · Flat Dome W-18", image: "/images/caps/water-caps/1.png", contain: true },
  ],
};

export default function BusinessTabs() {
  const [active, setActive] = useState(0);
  const b = businesses[active];
  const a = accent[b.color];

  return (
    <div>
      <div className="mx-auto flex w-full max-w-3xl gap-1 rounded-full border border-line bg-mist p-1" role="tablist">
        {businesses.map((x, i) => (
          <button
            key={x.key}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-2 py-2.5 text-xs font-semibold transition sm:text-sm ${i === active ? `${accent[x.color].bg} text-white shadow-soft` : "text-navy hover:bg-white"}`}
          >
            <Icon name={x.icon} className="hidden h-4 w-4 sm:block" /> {x.name}
          </button>
        ))}
      </div>

      <div key={b.key} className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 [&>*]:animate-[tabIn_.45s_ease_both]">
        {items[b.key].slice(0, 8).map((p, i) => (
          <Link key={p.name} href={b.href} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lift" style={{ animationDelay: `${i * 40}ms` }}>
            <div className={`relative aspect-square ${p.contain ? "bg-gradient-to-b from-mist to-white" : "bg-mist"}`}>
              <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 22vw, 45vw" className={`transition duration-500 group-hover:scale-105 ${p.contain ? "object-contain p-4" : "object-cover"}`} />
            </div>
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <h3 className="text-sm font-bold sm:text-base">{p.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-steel">{p.sub}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href={b.href} className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition ${a.btn}`}>
          View all {b.name} <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
      <style>{`@keyframes tabIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
