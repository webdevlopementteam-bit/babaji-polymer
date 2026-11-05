"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { businesses, group } from "@/lib/group";
import { accent } from "./biz";
import Icon from "./Icon";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Group" },
  { href: "#businesses", label: "Our Businesses", menu: true },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (l) => {
    if (l.menu) return businesses.some((b) => pathname.startsWith(b.href));
    return l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
  };
  const close = () => setOpen(false);

  // Clicking anywhere outside the businesses menu closes it.
  const menuRef = useRef(null);
  useEffect(() => {
    if (!menu) return;
    const onDown = (e) => {
      if (!menuRef.current?.contains(e.target)) setMenu(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [menu]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy text-white">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-xs">
          <span className="flex items-center gap-2 truncate">
            <Icon name="pin" className="h-3.5 w-3.5 shrink-0 text-white/70" />
            India&apos;s Trusted Multi-Business Group
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${group.phones[0].tel}`} className="hidden items-center gap-1.5 hover:text-white/80 md:flex">
              <Icon name="call" className="h-3.5 w-3.5" /> {group.phones[0].display}
            </a>
            <a href={`mailto:${group.emails[0]}`} className="hidden items-center gap-1.5 hover:text-white/80 lg:flex">
              <Icon name="mail" className="h-3.5 w-3.5" /> {group.emails[0]}
            </a>
          </div>
        </div>
      </div>

      <div className={`bg-white transition-shadow ${scrolled ? "shadow-[0_8px_24px_rgba(13,39,69,0.08)]" : "shadow-[0_1px_0_#e6e9ed]"}`}>
        <div className="container-x flex h-18 items-center justify-between gap-6 sm:h-20">
          <Link href="/" onClick={close} aria-label="Babaji Group home" className="shrink-0">
            <Logo width={76} className="block sm:hidden" />
            <Logo width={96} className="hidden sm:block" />
          </Link>

          <nav className="hidden h-full items-center gap-7 xl:flex">
            {links.map((l) =>
              l.menu ? (
                <div key={l.label} ref={menuRef} className="relative flex h-full items-center" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                  <button type="button" aria-expanded={menu} onClick={() => setMenu(!menu)} className={`flex items-center gap-1.5 text-[15px] font-medium ${isActive(l) ? "text-brand-red" : "text-graphite hover:text-brand-red"}`}>
                    {l.label}
                    <svg viewBox="0 0 12 12" className={`h-3 w-3 transition ${menu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4.5l3 3 3-3" /></svg>
                  </button>
                  {isActive(l) && <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-t bg-brand-red" />}
                  <div className={`absolute top-full left-1/2 w-80 -translate-x-1/2 transition duration-200 ${menu ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                    <div className="rounded-2xl border border-line bg-white p-2 shadow-lift">
                      {businesses.map((b) => (
                        <Link key={b.key} href={b.href} onClick={() => setMenu(false)} className="group/item flex items-center gap-3 rounded-xl p-3 transition hover:bg-mist">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${accent[b.color].soft} ${accent[b.color].text}`}>
                            <Icon name={b.icon} className="h-5 w-5" />
                          </span>
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-navy">{b.name}</span>
                            <span className="block text-xs text-steel">{b.tagline}</span>
                          </span>
                          <Icon name="arrow" className="h-4 w-4 text-steel transition group-hover/item:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} className={`relative flex h-full items-center text-[15px] font-medium ${isActive(l) ? "text-brand-red" : "text-graphite hover:text-brand-red"}`}>
                  {l.label}
                  {isActive(l) && <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-t bg-brand-red" />}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red-dark sm:inline-flex">
              <Icon name="call" className="h-4 w-4" /> Get In Touch
            </Link>
            <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="-mr-2 p-2 text-navy xl:hidden">
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto border-t border-line bg-white xl:hidden">
            <nav className="container-x flex flex-col py-2">
              {links.map((l) =>
                l.menu ? (
                  <div key={l.label} className="border-b border-line py-3">
                    <p className="pb-2 text-xs font-semibold tracking-wider text-steel uppercase">{l.label}</p>
                    <div className="grid gap-1">
                      {businesses.map((b) => (
                        <Link key={b.key} href={b.href} onClick={close} className="flex items-center gap-3 rounded-xl p-2 hover:bg-mist">
                          <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-lg">
                            <Image src={b.image} alt="" fill sizes="56px" className="object-cover" />
                          </span>
                          <span>
                            <span className={`block font-semibold ${accent[b.color].text}`}>{b.name}</span>
                            <span className="block text-xs text-steel">{b.tagline}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={l.href} href={l.href} onClick={close} className={`border-b border-line py-3.5 font-medium ${isActive(l) ? "text-brand-red" : "text-navy"}`}>
                    {l.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-3 py-5">
                <Link href="/contact" onClick={close} className="rounded-full bg-brand-red px-5 py-3.5 text-center font-semibold text-white">Get In Touch</Link>
                <a href={`tel:${group.phones[0].tel}`} className="rounded-full border border-line px-5 py-3.5 text-center font-semibold text-navy">Call {group.phones[0].display}</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
