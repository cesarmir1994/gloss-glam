import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/content/services";
import {
  defaultWhatsappMessage,
  whatsappLink,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre los servicios de uñas, peinados, pestañas y maquillaje de Gloss & Glam Estudio en Baños de Agua Santa. Reserva tu cita por WhatsApp.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-burgundy/10 bg-sand/45">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blush/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="section-shell relative py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Sparkles size={12} aria-hidden="true" />
              Servicios
            </span>
            <h1 className="display-title mt-4">
              Belleza de la cabeza a{" "}
              <span className="font-script text-burgundy">las manos</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Uñas, peinados, pestañas y maquillaje con atención personalizada.
              Estos son nuestros servicios principales; si tienes una idea
              especial, cuéntanos y la hacemos realidad.
            </p>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell space-y-20 sm:space-y-24">
          {services.map((category, index) => (
            <div
              key={category.slug}
              id={category.slug}
              className="scroll-mt-28"
            >
              <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
                <div className="self-start lg:sticky lg:top-28">
                  <span className="eyebrow">
                    <span className="h-px w-6 bg-gold" aria-hidden="true" />
                    0{index + 1} · {category.shortName}
                  </span>
                  <h2 className="display-title mt-4">{category.name}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {category.description}
                  </p>

                  <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((service) => (
                    <ServiceCard key={service.name} service={service} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-burgundy/10 bg-sand/60 p-7 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <SectionHeading
                  eyebrow="Antes de reservar"
                  title={
                    <>
                      Cuéntanos tu idea,{" "}
                      <span className="font-script text-burgundy">
                        nosotras nos encargamos
                      </span>
                    </>
                  }
                />
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Cada cita se adapta a tu estilo y a lo que quieres lograr.
                  Escríbenos por WhatsApp y te ayudamos a elegir el servicio
                  ideal para ti.
                </p>
              </div>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Reservar ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
