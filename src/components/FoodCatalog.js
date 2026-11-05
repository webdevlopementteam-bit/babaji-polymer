"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { foodCategories, foodProducts } from "@/lib/group";

export default function FoodCatalog() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? foodProducts : foodProducts.filter((p) => p.category === cat);
  const tabs = [{ slug: "all", name: "All Products" }, ...foodCategories];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:justify-center" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.slug}
            type="button"
            role="tab"
            aria-selected={cat === t.slug}
            onClick={() => setCat(t.slug)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${cat === t.slug ? "bg-brand-red text-white shadow-soft" : "border border-line bg-white text-navy hover:border-brand-red/40"}`}
          >
            {t.name}
            <span className={`ml-1.5 text-xs ${cat === t.slug ? "text-white/80" : "text-steel"}`}>
              {t.slug === "all" ? foodProducts.length : foodProducts.filter((p) => p.category === t.slug).length}
            </span>
          </button>
        ))}
      </div>

      <div key={cat} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 [&>*]:animate-[catIn_.4s_ease_both]">
        {list.map((p) => (
          <div key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lift">
            <div className="relative aspect-square bg-gradient-to-b from-[#fff7ee] to-white">
              <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-contain p-4 transition duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <p className="text-[10px] font-bold tracking-wider text-brand-red uppercase">{foodCategories.find((c) => c.slug === p.category)?.name}</p>
              <h3 className="mt-1 text-sm font-bold sm:text-base">{p.name}</h3>
              {p.points.length > 0 && <p className="mt-1 text-xs text-steel">{p.points.join(" · ")}</p>}
              <Link href="/contact?product=food-products" className="mt-auto pt-3 text-xs font-semibold text-brand-red hover:underline">Enquire / Bulk order →</Link>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes catIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
