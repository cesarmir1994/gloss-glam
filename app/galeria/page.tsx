import type { Metadata } from "next";
import { MessageCircle, Sparkles } from "lucide-react";

import GalleryGrid from "@/components/GalleryGrid";
import { gallery } from "@/content/gallery";
import {
  defaultWhatsappMessage,
  whatsappLink,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Conoce los trabajos de uñas, peinados, pestañas y el espacio de Gloss & Glam Estudio en Baños de Agua Santa.",
  alternates: {
    canonical: "/galeria",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-burgundy/10 bg-sand/45">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blush/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-shell relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles size={12} aria-hidden="true" />
              Galería
            </span>
            <h1 className="display-title mt-4">
              Historias que se cuentan{" "}
              <span className="font-script text-burgundy">con belleza</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Un recorrido por el estudio y por algunos de los trabajos que
              realizamos. Cada imagen es una cita, una idea y un resultado
              pensado para ti.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="section-shell">
          <div className="flex flex-col items-center rounded-[2rem] bg-burgundy px-6 py-12 text-center text-cream sm:px-10">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              ¿Te gustó lo que viste?
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              Cuéntanos qué tienes en mente y lo hacemos realidad.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/70">
              Envíanos una foto de referencia por WhatsApp y te ayudamos a
              elegir el servicio ideal para ti.
            </p>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light mt-7"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
