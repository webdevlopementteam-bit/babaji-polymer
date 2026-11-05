import Link from "next/link";
import { businesses, group, offices } from "@/lib/group";
import Icon from "./Icon";
import Logo from "./Logo";

const quick = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/infrastructure", "Our Facilities"],
  ["/sustainability", "Sustainability"],
  ["/career", "Career"],
  ["/contact", "Contact Us"],
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.6fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="inline-block rounded-2xl bg-white p-2">
            <Logo width={92} />
          </div>
          <p className="mt-5 font-display text-xl font-bold text-white">{group.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{group.footerLine}</p>
          <div className="mt-6 flex gap-3">
            <a href={group.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-red">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            </a>
            <a href={`https://wa.me/${group.phones[1].tel.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-red">
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <span className="mt-3 block h-0.5 w-8 bg-brand-red" />
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {quick.map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Our Businesses</h4>
          <span className="mt-3 block h-0.5 w-8 bg-brand-red" />
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            {businesses.map((b) => (
              <li key={b.key}><Link href={b.href} className="hover:text-white">{b.name}<span className="block text-xs text-white/40">{b.label}</span></Link></li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-sm font-semibold text-white">Contact Us</h4>
          <span className="mt-3 block h-0.5 w-8 bg-brand-red" />
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex gap-3">
              <Icon name="call" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <span>{group.phones.map((p, i) => <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-white">{i > 0 && "  |  "}{p.display}</a>)}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
              <span className="flex flex-col break-all">{group.emails.map((e) => <a key={e} href={`mailto:${e}`} className="hover:text-white">{e}</a>)}</span>
            </li>
            {offices.map((o) => (
              <li key={o.title} className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <span>{o.address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {group.name}. All Rights Reserved.</span>
          <span>{group.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
