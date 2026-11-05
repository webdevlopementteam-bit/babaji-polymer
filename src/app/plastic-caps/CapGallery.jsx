"use client";

import Image from "next/image";
import { useState } from "react";

export default function CapGallery({ images, title }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
        <Image
          key={images[active]}
          src={images[active]}
          alt={`${title} ${active + 1}`}
          fill
          sizes="(min-width:1024px) 45vw, 100vw"
          className="object-contain p-4 animate-[capIn_.4s_ease_both]"
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${title} image ${i + 1}`}
                aria-current={i === active}
                className={`relative block aspect-square w-full overflow-hidden rounded-xl border bg-white transition ${
                  i === active ? "border-brand-red ring-2 ring-brand-red/30" : "border-navy/10 hover:border-navy/40"
                }`}
              >
                <Image src={src} alt="" fill sizes="12vw" className="object-contain p-1.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <style>{`@keyframes capIn{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}