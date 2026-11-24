import { ArrowUpRight, Clock } from "lucide-react";

import type { Service } from "@/content/services";
import { whatsappLink } from "@/content/site";

export default function ServiceCard({ service }: { service: Service }) {
  const message = `Hola Gloss & Glam Estudio, me interesa el servicio de ${service.name}. ¿Podrían indicarme disponibilidad y precio?`;

  return (
    <article className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-burgundy/10 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_45px_-30px_rgba(88,20,32,0.45)]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[1.55rem] font-medium leading-tight text-ink">
            {service.name}
          </h3>
          <span className="shrink-0 rounded-full bg-blush/60 px-3 py-1 text-sm font-medium text-burgundy">
            {service.from ? "Desde " : ""}${service.price}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-burgundy/10 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <Clock size={14} aria-hidden="true" />
          {service.duration}
        </span>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-burgundy transition hover:text-burgundy-dark"
        >
          Reservar
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
