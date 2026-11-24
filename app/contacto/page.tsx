import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import FacebookIcon from "@/components/FacebookIcon";
import {
  defaultWhatsappMessage,
  site,
  whatsappLink,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Reserva tu cita en Gloss & Glam Estudio, Baños de Agua Santa. WhatsApp, teléfono, dirección y horarios de atención.",
  alternates: {
    canonical: "/contacto",
  },
};

const contactCards = [
  {
    title: "WhatsApp",
    value: site.phoneDisplay,
    description: "La forma más rápida de reservar.",
    href: whatsappLink(defaultWhatsappMessage),
    icon: MessageCircle,
    external: true,
  },
  {
    title: "Teléfono",
    value: site.phoneDisplay,
    description: "Llámanos durante el horario de atención.",
    href: `tel:${site.phoneHref}`,
    icon: Phone,
    external: false,
  },
  {
    title: "Correo",
    value: site.email,
    description: "Para consultas o colaboraciones.",
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    title: "Estudio",
    value: `${site.address.street}, ${site.address.city}`,
    description: "Barrio La Unión, esquina Pastaza y Oriente.",
    href: site.mapsUrl,
    icon: MapPin,
    external: true,
  },
];

export default function ContactPage() {
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
              Contacto
            </span>
            <h1 className="display-title mt-4">
              Hablemos de tu{" "}
              <span className="font-script text-burgundy">próxima cita</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Escríbenos por WhatsApp, llámanos o visítanos en el estudio.
              Estamos en Baños de Agua Santa, listas para ayudarte a elegir el
              servicio perfecto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group rounded-[1.5rem] border border-burgundy/10 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_45px_-30px_rgba(88,20,32,0.4)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blush/60 text-burgundy">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                    {card.title}
                  </h2>
                  <p className="mt-2 font-display text-xl leading-snug text-ink">
                    {card.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-burgundy">
                    Abrir
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-burgundy/10 bg-sand">
              <iframe
                src={site.mapsEmbed}
                title="Ubicación de Gloss & Glam Estudio en Baños de Agua Santa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[420px] w-full border-0 sm:h-[500px]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[1.75rem] border border-burgundy/10 bg-white/60 p-7">
                <h2 className="font-display text-2xl font-medium text-ink">
                  Horarios
                </h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {site.hours.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start justify-between gap-4 border-b border-burgundy/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="inline-flex items-center gap-2 text-muted">
                        <Clock size={15} className="text-gold" aria-hidden="true" />
                        {item.label}
                      </span>
                      <span className="text-right font-medium text-ink">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Para confirmar disponibilidad y el tiempo de tu servicio,
                  escríbenos por WhatsApp.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-burgundy/10 bg-white/60 p-7">
                <h2 className="font-display text-2xl font-medium text-ink">
                  Síguenos
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Mira nuestros trabajos y promociones en Facebook.
                </p>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-5 w-full"
                >
                  <FacebookIcon size={15} />
                  Gloss &amp; Glam en Facebook
                </a>
              </div>

              <div className="rounded-[1.75rem] bg-burgundy p-7 text-cream">
                <h2 className="font-display text-2xl font-medium">
                  Reserva en 3 pasos
                </h2>
                <ol className="mt-4 space-y-3 text-sm text-cream/75">
                  <li className="flex gap-3">
                    <span className="font-display text-gold">01</span>
                    Elige el servicio que quieres.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-gold">02</span>
                    Escríbenos por WhatsApp con tu idea.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display text-gold">03</span>
                    Confirma el día y la hora de tu cita.
                  </li>
                </ol>
                <a
                  href={whatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light mt-6 w-full"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
