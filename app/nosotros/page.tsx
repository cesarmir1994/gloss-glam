import type { Metadata } from "next";
import Image from "next/image";
import { Heart, MessageCircle, Sparkles } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import {
  defaultWhatsappMessage,
  whatsappLink,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce Gloss & Glam Estudio, un espacio de belleza en Baños de Agua Santa creado por Tannia Ortega para cuidar tus uñas, cabello, pestañas y maquillaje.",
  alternates: {
    canonical: "/nosotros",
  },
};

const values = [
  {
    title: "Detalle",
    text: "Nos tomamos el tiempo necesario para que cada acabado quede como imaginas.",
  },
  {
    title: "Calidez",
    text: "Queremos que tu cita se sienta como un momento para ti, sin prisas.",
  },
  {
    title: "Profesionalismo",
    text: "Técnica, higiene y productos seleccionados en cada servicio.",
  },
  {
    title: "Estilo propio",
    text: "Escuchamos tus ideas para crear resultados que te representen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-burgundy/10 bg-sand/45">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blush/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <Sparkles size={12} aria-hidden="true" />
              Nuestra historia
            </span>
            <h1 className="display-title mt-4">
              Belleza con{" "}
              <span className="font-script text-burgundy">nombre propio</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Gloss &amp; Glam Estudio nació en Baños de Agua Santa con una idea
              sencilla: reunir en un solo lugar los detalles que hacen sentir
              bien a una persona.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Liderado por Tannia Ortega, el estudio acompaña a sus clientas con
              servicios de uñas, peinados, pestañas y maquillaje, siempre con
              una atención cercana y personalizada.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-40px_rgba(88,20,32,0.45)]">
              <Image
                src="/images/brand-cover.jpg"
                alt="Imagen de marca de Gloss & Glam Estudio by Tannia Ortega"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/reel-07.jpg"
                alt="Interior de Gloss & Glam Estudio durante una cita"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -right-3 top-6 rounded-full bg-cream px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-burgundy shadow-lg">
              Baños de Agua Santa
            </span>
          </div>

          <div>
            <SectionHeading
              eyebrow="El estudio"
              title={
                <>
                  Un lugar para{" "}
                  <span className="font-script text-burgundy">sentirte bien</span>
                </>
              }
              description="Creemos que la belleza no se trata de cambiar quién eres, sino de resaltar lo que ya tienes."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Cada cita comienza con una conversación. Nos interesa entender
                qué buscas, qué te gusta y cómo quieres sentirte. A partir de
                ahí, diseñamos juntas el resultado.
              </p>
              <p>
                El estudio está pensado para que te sientas cómoda: un espacio
                tranquilo, con música, buena energía y el tiempo necesario para
                consentirte.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-burgundy/10 bg-white/60 p-5"
                >
                  <Heart size={17} className="text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-burgundy py-16 text-cream sm:py-20">
        <div className="section-shell flex flex-col items-center text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            Gracias por confiar en nosotras
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            Tu próxima cita te está esperando.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/70">
            Escríbenos por WhatsApp y con gusto te ayudamos a elegir el servicio
            y el horario que mejor te convenga.
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
      </section>
    </>
  );
}
