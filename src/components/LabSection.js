"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { labCategories, labEquipment, labInstrumentCount } from "@/lib/group";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const catIcon = {
  "Sample Preparation": "gear",
  Mechanical: "dumbbell",
  "Thermal & Ageing": "flame",
  "Fire & Smoke": "shield",
};

// `preview` shows four instruments and links to the full list on /infrastructure.
export default function LabSection({ className = "", preview = false }) {
  const [cat, setCat] = useState("All");
  const all = cat === "All" ? labEquipment : labEquipment.filter((e) => e.category === cat);
  const list = preview ? labEquipment.filter((_, i) => [0, 2, 7, 9].includes(i)) : all;

  return (
    <section id="laboratory" className={`scroll-mt-28 py-12 sm:py-16 ${className}`}>
      <div className="container-x">
        <SectionHead
          center
          eyebrow="Quality Testing Laboratory"
          title="In-House Testing."
          highlight="Proven Performance."
          text="Every compound is checked in our own laboratory — from sample preparation to mechanical, thermal, ageing and fire-safety tests — before it reaches our customers."
        />

        {/* Lab photos */}
        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[400px] lg:grid-cols-[2fr_1fr_1fr]">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl lg:col-span-1 lg:aspect-auto">
            <Image src="/images/lab/lab-hall.webp" alt="Babaji Group testing laboratory" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 flex flex-wrap items-end justify-between gap-3 text-white">
              <div>
                <p className="font-display text-xl font-extrabold text-white sm:text-2xl">Our Testing Laboratory</p>
                <p className="text-sm text-white/80">Modern equipment, controlled conditions</p>
              </div>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-navy shadow-soft">{labInstrumentCount} Testing Instruments</span>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-auto">
            <Image src="/images/lab/lab-bench-1.webp" alt="Laboratory test benches" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-auto">
            <Image src="/images/lab/lab-bench-2.webp" alt="Laboratory instruments" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
          </div>
        </Reveal>

        {/* Category filter */}
        {!preview && (
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:justify-center" role="tablist">
          {["All", ...labCategories].map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                cat === c ? "bg-navy text-white shadow-soft" : "border border-line bg-white text-navy hover:border-navy/40"
              }`}
            >
              {c !== "All" && <Icon name={catIcon[c]} className="h-4 w-4" />}
              {c}
              <span className={`text-xs ${cat === c ? "text-white/70" : "text-steel"}`}>
                {c === "All" ? labEquipment.length : labEquipment.filter((e) => e.category === c).length}
              </span>
            </button>
          ))}
        </div>
        )}

        {/* Equipment */}
        <div key={cat} className={`${preview ? "mt-8" : "mt-6"} grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 [&>*]:animate-[labIn_.4s_ease_both]`}>
          {list.map((e, i) => (
            <div key={e.name} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lift" style={{ animationDelay: `${i * 40}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image src={e.image} alt={e.name} fill sizes="(min-width:1024px) 22vw, (min-width:768px) 30vw, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-navy shadow-soft sm:text-[11px]">
                  <Icon name={catIcon[e.category]} className="h-3.5 w-3.5 text-brand-red" /> {e.category}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm font-bold sm:text-base">{e.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-steel sm:text-sm">{e.text}</p>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-8 text-center">
            <Link href="/infrastructure#laboratory" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-deep">
              View our {labInstrumentCount} testing instruments <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
      <style>{`@keyframes labIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
