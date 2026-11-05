"use client";

import { useState } from "react";
import { group } from "@/lib/group";
import Icon from "./Icon";

// value, label, routed office (food → Najafgarh, polymer → Bahadurgarh)
const options = [
  ["food-products", "Food Products (Oils, Atta, Pulses, Detergent)", "food"],
  ["distributorship", "Distributorship / Dealership", "food"],
  ["esd-pet-sheets", "ESD PET Sheets", "polymer"],
  ["esd-hips-sheets", "ESD HIPS Sheets", "polymer"],
  ["pet-sheets", "PET Sheets", "polymer"],
  ["hips-sheets", "HIPS Sheets", "polymer"],
  ["thermoformed-trays", "Thermoformed Trays", "polymer"],
  ["pvc-compounds", "PVC Compounds (Polymer Compound)", "polymer"],
  ["career", "Career / Job Application", "food"],
  ["other", "Other Enquiry", "food"],
];

// Enquiries are emailed through FormSubmit (formsubmit.co) — the first submission to each
// address sends a one-time activation email that must be confirmed before messages arrive.
const route = {
  food: group.emails[0],
  polymer: group.emails[1],
};

const box = "flex items-center gap-3 rounded-xl border border-line bg-white px-4 transition focus-within:border-navy focus-within:ring-2 focus-within:ring-navy/10";
const input = "w-full bg-transparent py-3.5 text-[15px] text-navy outline-none placeholder:text-steel/70";

export default function ContactForm({ defaultProduct = "", compact = false }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: options.some(([v]) => v === defaultProduct) ? defaultProduct : "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const selected = options.find(([v]) => v === form.product);
  const target = route[selected?.[2] ?? "food"];

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${target}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website Enquiry - ${selected?.[1] ?? "General"}`,
          _template: "table",
          Name: form.name,
          Phone: form.phone,
          Email: form.email || "-",
          Company: form.company || "-",
          "Enquiry for": selected?.[1] ?? "-",
          Message: form.message || "-",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false" || data.success === false) throw new Error(data.message);
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", company: "", product: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <label className={box}>
        <Icon name="users" className="h-4 w-4 shrink-0 text-steel" />
        <input required name="name" value={form.name} onChange={update} className={input} placeholder="Your Name *" aria-label="Your name" />
      </label>
      <label className={box}>
        <Icon name="mail" className="h-4 w-4 shrink-0 text-steel" />
        <input type="email" name="email" value={form.email} onChange={update} className={input} placeholder="Your Email" aria-label="Your email" />
      </label>
      <label className={box}>
        <Icon name="call" className="h-4 w-4 shrink-0 text-steel" />
        <input required type="tel" name="phone" value={form.phone} onChange={update} className={input} placeholder="Your Phone Number *" aria-label="Your phone number" />
      </label>
      <label className={box}>
        <Icon name="factory" className="h-4 w-4 shrink-0 text-steel" />
        <input name="company" value={form.company} onChange={update} className={input} placeholder="Company Name" aria-label="Company name" />
      </label>
      <label className={`${box} sm:col-span-2`}>
        <Icon name="box" className="h-4 w-4 shrink-0 text-steel" />
        <select required name="product" value={form.product} onChange={update} className={`${input} cursor-pointer`} aria-label="Enquiry for">
          <option value="">Enquiry For *</option>
          {options.map(([v, l]) => (
            <option key={v} value={v}>{l}</option>
          ))}
        </select>
      </label>
      <label className={`${box} items-start sm:col-span-2`}>
        <Icon name="mail" className="mt-4 h-4 w-4 shrink-0 text-steel" />
        <textarea name="message" rows={compact ? 3 : 4} value={form.message} onChange={update} className={`${input} resize-y`} placeholder="Your Message (quantity, size, application…)" aria-label="Your message" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red-dark disabled:opacity-70">
          {status === "sending" ? "Sending…" : "Submit Enquiry"} {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
        </button>
        {status === "sent" && (
          <p className="mt-3 flex items-center gap-2 rounded-xl bg-brand-green/10 px-4 py-3 text-sm font-medium text-brand-green" role="status">
            <Icon name="check" className="h-5 w-5 shrink-0" /> Thank you! Your enquiry has been sent. Our team will contact you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 rounded-xl bg-brand-red/10 px-4 py-3 text-sm font-medium text-brand-red" role="alert">
            Sorry, the enquiry could not be sent. Please call {group.phones[0].display} or email {target}.
          </p>
        )}
      </div>
    </form>
  );
}
