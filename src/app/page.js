import Image from "next/image";
import Link from "next/link";
import BusinessTabs from "@/components/BusinessTabs";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import HomeHero from "@/components/HomeHero";
import Icon from "@/components/Icon";
import LabSection from "@/components/LabSection";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { accent } from "@/components/biz";
import { Button, CTA, Eyebrow, IconBadge, SectionHead } from "@/components/ui";
import { achievements, businesses, facilities, group, mission, offices, vision } from "@/lib/group";

function Stat({ s, small = false }) {
  return (
    <p className={`font-display font-extrabold text-navy ${small ? "text-xl sm:text-2xl" : "text-2xl sm:text-[32px]"}`}>
      {s.text ?? <Counter to={s.to} suffix={s.suffix} />}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Achievements */}
      <section className="border-b border-line py-12 sm:py-14">
        <div className="container-x">
          <Reveal className="text-center">
            <Eyebrow center color="gold">Our Achievements</Eyebrow>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl lg:text-[34px]">
              Trusted Legacy. Growing Stronger. <span className="text-gold">Creating Better Tomorrows.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {achievements.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className={`flex flex-col items-center px-2 text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}>
                <IconBadge icon={s.icon} color={s.color} size="lg" />
                <div className="mt-4"><Stat s={s} /></div>
                <p className="mt-1 text-sm text-steel">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About — background: public/images/home/about-bg.webp */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 left-[calc(max(24px,(100%-1600px)/2)+420px)] hidden lg:block">
          <Image src="/images/home/about-home.png" alt="Babaji Group reception with food products, PVC compound granules and polysheets" fill sizes="100vw" className="object-cover object-[80%_center] 2xl:object-[58%_center]" />
          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/50 to-transparent" />
        </div>
        <div className="relative mx-auto w-[min(1600px,calc(100%-32px))] py-12 lg:w-[min(1600px,calc(100%-48px))] sm:py-16 lg:flex lg:min-h-[500px] lg:items-center lg:py-8">
          <div className="max-w-[470px] 2xl:max-w-[500px]">
            <Reveal>
              <Eyebrow>About {group.name}</Eyebrow>
              <h2 className="mt-3 text-[30px] leading-[1.1] font-extrabold sm:text-4xl lg:text-[44px]">
                Building a Better <br className="hidden sm:block" />
                <span className="text-brand-red">Tomorrow</span> Together
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 leading-relaxed text-steel lg:text-[15px]">
                Babaji Group is a diversified business group committed to delivering high-quality products and innovative
                solutions across multiple industries. With a strong foundation of trust, integrity and customer focus, we
                continue to grow and create value for our customers, partners and communities.
              </p>
              <Button href="/about" className="mt-5">Know More <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></Button>
              <div className="mt-7 grid grid-cols-4">
                {achievements.slice(0, 3).concat(achievements[4]).map((s, i) => (
                  <div key={s.label} className={`px-2 text-center ${i ? "border-l border-line" : ""}`}>
                    <Icon name={s.icon} className="mx-auto h-7 w-7 text-brand-red" />
                    <div className="mt-2"><Stat s={s} small /></div>
                    <p className="text-[11px] leading-tight text-steel sm:text-xs">{s.label.split(" ")[0]}<br />{s.label.split(" ").slice(1).join(" ")}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative aspect-[16/10] lg:hidden">
          <Image src="/images/home/about-home.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
      </section>

      {/* Businesses — card images: public/images/home/business1-3.webp */}
      <section id="businesses" className="scroll-mt-28 bg-white py-12 sm:py-16">
        <div className="px-3 lg:px-20">
          <SectionHead center eyebrow="Our Businesses" title="Four Businesses." highlight="One Stronger Group." text={`${group.name} operates across diverse industries, delivering high-quality products and innovative solutions to meet the evolving needs of our customers and communities.`} />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {businesses.map((b, i) => {
              const a = accent[b.color];
              return (
                <Reveal key={b.key} delay={i * 100} className="h-full">
                  <Link href={b.href} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative flex min-h-[480px] flex-1 flex-col overflow-hidden bg-white sm:min-h-[500px]">
                      <div className="absolute inset-x-0 top-[24%] bottom-0">
                        <Image src={b.card.image} alt={b.label} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover object-bottom" />
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white via-white/70 to-transparent" />
                      </div>
                      <div className="relative p-6 sm:p-7">
                        <div className="flex items-center gap-4">
                          <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-soft ${a.soft} ${a.text}`}>
                            <Icon name={b.icon} className="h-8 w-8" strokeWidth={2} />
                          </span>
                          <div>
                            <p className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase ${a.text}`}>
                              <span className={`h-0.5 w-6 rounded ${a.bg}`} /> Babaji Group
                            </p>
                            <h3 className="mt-1 text-[28px] leading-none font-extrabold sm:text-[32px]">
                              <span className={a.text}>{b.card.first}</span>
                              <span className="text-navy">{b.card.rest}</span>
                            </h3>
                          </div>
                        </div>
                        <p className="mt-2 pl-20 text-[15px] font-semibold text-graphite sm:text-base">{b.card.tagline}</p>
                        <p className="mt-3 max-w-[320px] text-sm leading-relaxed text-graphite/80">{b.card.text}</p>
                        <span className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-soft transition group-hover:gap-3 ${a.btn}`}>
                          Explore Products <Icon name="arrow" className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-t border-line bg-white">
                      {b.features.map((ft, k) => (
                        <div key={ft.label} className={`flex flex-col items-center gap-2 px-2 py-4 text-center ${k ? "border-l border-line" : ""}`}>
                          <Icon name={ft.icon} className={`h-6 w-6 ${a.text}`} strokeWidth={2} />
                          <span className="text-xs leading-tight font-medium text-graphite">{ft.label}</span>
                        </div>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHead center eyebrow="Our Products" title="Explore Our" highlight="Product Range" text="Switch between our businesses to see what we make." className="mb-8" />
          <Reveal><BusinessTabs /></Reveal>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHead eyebrow="Manufacturing Capabilities" title="Built on Quality." highlight="Driven by Precision." />
            <Reveal><Button href="/infrastructure" variant="navy">Our Infrastructure <Icon name="arrow" className="h-4 w-4" /></Button></Reveal>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} className="group overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={f.image} alt={f.title} fill sizes="(min-width:1024px) 50vw, 100vw" className={`object-cover ${f.position ?? ""} transition duration-700 group-hover:scale-105`} />
                  <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy">
                    <Icon name="pin" className="h-3.5 w-3.5 text-brand-red" /> {f.place}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{f.title}</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-graphite">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LabSection preview />


      <CTA />

      {/* Vision & Mission — background: public/images/home/vision-bg.webp */}
      <section className="relative overflow-hidden bg-[#f6f8fb] xl:h-[560px] 2xl:h-[620px]">
        <Image src="/images/home/vision-bg.webp" alt="" fill sizes="100vw" className="object-cover opacity-30 xl:opacity-100" />
        <div className="relative xl:absolute xl:inset-0">
          <div className="container-x pt-12 text-center sm:pt-16 xl:pt-8">
            <SectionHead center eyebrow="Our Vision & Mission" title="A Clear Vision." highlight="A Stronger Tomorrow." text="At Babaji Group, our vision and mission guide every step we take, inspiring us to create value, drive innovation and contribute to a better future." />
          </div>
          <div className="container-x mt-8 grid grid-cols-1 gap-5 pb-12 sm:pb-16 md:grid-cols-2 xl:mt-0 xl:block xl:w-auto xl:pb-0">
            <Reveal className="rounded-3xl bg-white/90 p-6 shadow-soft xl:absolute xl:top-[44%] xl:left-[11%] xl:w-[30%] xl:rounded-none xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="flex items-start gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-red text-white shadow-lift xl:h-[76px] xl:w-[76px]">
                    <Icon name="eye" className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand-red">Our Vision</p>
                    <h3 className="mt-1 text-[22px] leading-tight font-extrabold xl:text-[26px]">
                      {vision.title.split(" ").slice(0, 4).join(" ")}{" "}
                      <span className="block text-brand-red">{vision.title.split(" ").slice(4).join(" ")}</span>
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-graphite/80 xl:text-sm">{vision.text}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 pl-0 sm:pl-20">
                  {vision.points.map((p, k) => (
                    <div key={p.label} className={`flex flex-col items-center gap-1.5 text-center ${k ? "border-l border-line" : ""}`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red"><Icon name={p.icon} className="h-5 w-5" /></span>
                      <span className="text-xs leading-tight font-medium text-navy">{p.label}</span>
                    </div>
                  ))}
                </div>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl bg-white/90 p-6 shadow-soft xl:absolute xl:top-[44%] xl:left-[58.5%] xl:w-[30%] xl:rounded-none xl:bg-transparent xl:p-0 xl:shadow-none">
                <div className="flex items-start gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gold text-white shadow-lift xl:h-[76px] xl:w-[76px]">
                    <Icon name="diamond" className="h-8 w-8" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold">Our Mission</p>
                    <h3 className="mt-1 text-[22px] leading-tight font-extrabold xl:text-[26px]">
                      {mission.title.split(" ").slice(0, 2).join(" ")}{" "}
                      <span className="block text-gold">{mission.title.split(" ").slice(2).join(" ")}</span>
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-graphite/80 xl:text-sm">{mission.text}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 pl-0 sm:pl-20">
                  {mission.points.map((p, k) => (
                    <div key={p.label} className={`flex flex-col items-center gap-1.5 text-center ${k ? "border-l border-line" : ""}`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold"><Icon name={p.icon} className="h-5 w-5" /></span>
                      <span className="text-xs leading-tight font-medium text-navy">{p.label}</span>
                    </div>
                  ))}
                </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div>
            <SectionHead eyebrow="Get in Touch" title="We're Here to" highlight="Help" text="Have a question, need more information or want to explore a business opportunity? Our team is always ready to assist you." />
            <div className="mt-8 space-y-5">
              <Reveal className="flex gap-4">
                <IconBadge icon="call" />
                <div>
                  <p className="font-bold text-navy">Call us</p>
                  {group.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="block text-steel hover:text-brand-red">{p.display}</a>)}
                </div>
              </Reveal>
              <Reveal delay={60} className="flex gap-4">
                <IconBadge icon="mail" color="blue" />
                <div className="min-w-0">
                  <p className="font-bold text-navy">Email us</p>
                  {group.emails.map((e) => <a key={e} href={`mailto:${e}`} className="block break-all text-steel hover:text-brand-red">{e}</a>)}
                </div>
              </Reveal>
              <Reveal delay={120} className="flex gap-4">
                <IconBadge icon="pin" color="green" />
                <div>
                  <p className="font-bold text-navy">Visit us</p>
                  {offices.map((o) => <p key={o.title} className="text-steel">{o.address}</p>)}
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={100} className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
            <Eyebrow>Send us a message</Eyebrow>
            <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">Drop Your <span className="text-brand-red">Enquiry</span></h3>
            <p className="mt-2 mb-6 text-sm text-steel">Fill out the form and our team will get back to you shortly.</p>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
