import { MessageCircle } from "lucide-react";

import { defaultWhatsappMessage, whatsappLink } from "@/content/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar una cita por WhatsApp"
      className="group fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1faa59] text-cream shadow-[0_14px_35px_-10px_rgba(31,170,89,0.75)] transition hover:scale-105 hover:bg-[#178f4b] sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:justify-start sm:gap-3 sm:py-3 sm:pl-3 sm:pr-4"
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-cream/25" />
        <MessageCircle size={22} aria-hidden="true" />
      </span>
      <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] sm:block">
        Reservar
      </span>
    </a>
  );
}
