import { company } from "@/lib/site";
import Icon from "./Icon";

export default function WhatsAppButton() {
  const text = encodeURIComponent("Hello Babaji Group, I would like to enquire about your products.");
  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <Icon name="whatsapp" className="h-7 w-7" strokeWidth={2} />
    </a>
  );
}
