import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { gallery } from "@/content/gallery";
import { promos } from "@/content/promos";
import { services } from "@/content/services";
import {
  defaultWhatsappMessage,
  site,
  whatsappLink,
} from "@/content/site";

const serviceWords = ["Uñas", "Peinados", "Pestañas", "Maquillaje"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blush/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-sand/80 blur-3xl"
          aria-hidden="true"
        />

        <div className="section-shell relative grid gap-14 pb-20 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Sparkles size={12} aria-hidden="true" />
              Gloss &amp; Glam Estudio · Baños
            </span>

            <h1 className="mt-6 font-display text-[3.6rem] font-medium leading-[0.92] tracking-[-0.035em] text-ink sm:text-7xl lg:text-[5.4rem]">
              Tu belleza,
              <span className="mt-1 block font-script text-[1.08em] font-normal leading-[0.95] text-burgundy">
                nuestra pasión
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Uñas, peinados, pestañas y maquillaje en un espacio pensado para
              que te sientas tu mejor versión. Atención personalizada en el
              corazón de Baños de Agua Santa.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Reservar por WhatsApp
              </a>
              <Link href="/servicios" className="btn-secondary">
                Ver servicios
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-burgundy/10 pt-6 text-xs text-muted">
              <span className="inline-flex items-center gap-2">
                <Heart size={14} className="text-gold" aria-hidden="true" />
                Atención personalizada
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={14} className="text-gold" aria-hidden="true" />
                Productos de calidad
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarCheck size={14} className="text-gold" aria-hidden="true" />
                Con cita previa
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-up-delay lg:max-w-none">
            <div
              className="absolute -inset-3 rounded-[2.6rem] border border-gold/35"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_35px_70px_-35px_rgba(88,20,32,0.55)]">
              <Image
                src="/images/reel-05.jpg"
                alt="Peinado de ondas largas realizado en Gloss & Glam Estudio"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -right-3 top-7 rounded-full border border-gold/40 bg-cream/95 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.24em] text-burgundy shadow-lg">
              Baños · Ecuador
            </div>
          </div>
        </div>
      </section>

      {/* Franja de servicios */}
      <section className="border-y border-burgundy/10 bg-sand/55">
        <div className="section-shell grid grid-cols-2 divide-x divide-burgundy/10 md:grid-cols-4">
          {serviceWords.map((word) => (
            <div
              key={word}
              className="flex items-center justify-center gap-3 px-4 py-5 text-center first:border-l-0"
            >
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-burgundy">
                {word}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Servicios"
              title={
                <>
                  Todo lo que necesitas,{" "}
                  <span className="font-script text-burgundy">
                    en un solo lugar
                  </span>
                </>
              }
              description="Elige el servicio que quieres realzar. Cada cita se adapta a tu estilo, tu cabello y tu mirada."
            />
            <Link href="/servicios" className="btn-secondary shrink-0">
              Ver todos los servicios
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((category) => (
              <article
                key={category.slug}
                className="group overflow-hidden rounded-[1.75rem] border border-burgundy/10 bg-white/60 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_50px_-35px_rgba(88,20,32,0.45)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-burgundy">
                    {category.shortName}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-3xl font-medium text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-burgundy/10 pt-4 text-sm">
                    {category.items.slice(0, 3).map((service) => (
                      <li
                        key={service.name}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-ink/80">{service.name}</span>
                        <span className="shrink-0 font-medium text-burgundy">
                          {service.from ? "Desde " : ""}${service.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/servicios#${category.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-burgundy transition hover:text-burgundy-dark"
                  >
                    Ver detalles
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre el estudio */}
      <section className="bg-sand/55 py-20 sm:py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-40px_rgba(88,20,32,0.45)]">
              <Image
                src="/images/brand-cover.jpg"
                alt="Imagen de marca de Gloss & Glam Estudio con Tannia Ortega"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="absolute -left-3 -top-5 rounded-full bg-burgundy px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-cream shadow-lg">
              by Tannia Ortega
            </span>
          </div>

          <div>
            <SectionHeading
              eyebrow="Nuestra esencia"
              title={
                <>
                  Un espacio creado para{" "}
                  <span className="font-script text-burgundy">consentirte</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                En Gloss &amp; Glam Estudio creemos que la belleza se siente.
                Por eso cada detalle —desde la música hasta el acabado final—
                está pensado para que disfrutes tu cita de principio a fin.
              </p>
              <p>
                Uñas, cabello, pestañas y maquillaje se encuentran en un mismo
                lugar, con la dedicación de un equipo que ama lo que hace.
              </p>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-ink/80">
              {[
                "Diseños personalizados según tu estilo.",
                "Atención cercana y con cita previa.",
                "Productos seleccionados para cuidar tu belleza.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/nosotros" className="btn-secondary mt-8">
              Conoce el estudio
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Galería"
              title={
                <>
                  Nuestro trabajo,{" "}
                  <span className="font-script text-burgundy">en imágenes</span>
                </>
              }
              description="Un vistazo a los servicios y al ambiente que se vive en el estudio."
            />
            <Link href="/galeria" className="btn-secondary shrink-0">
              Ver galería completa
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gallery.slice(0, 6).map((item) => (
              <Link
                key={item.src}
                href="/galeria"
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-sand"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-70 transition group-hover:opacity-95" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-[10px] font-medium uppercase tracking-[0.18em] text-cream">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section className="border-y border-burgundy/10 bg-sand/55 py-20 sm:py-28">
        <div className="section-shell">
          <SectionHeading
            align="center"
            eyebrow="Promociones"
            title={
              <>
                Beneficios para{" "}
                <span className="font-script text-burgundy">tu próxima cita</span>
              </>
            }
            description="Pregunta por las promociones vigentes al reservar. Los valores y la disponibilidad se confirman por WhatsApp."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {promos.map((promo) => (
              <article
                key={promo.title}
                className="group overflow-hidden rounded-[1.75rem] border border-burgundy/10 bg-cream"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-burgundy shadow">
                    {promo.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {promo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {promo.description}
                  </p>
                  <a
                    href={whatsappLink(
                      `Hola Gloss & Glam Estudio, me interesa la promoción "${promo.title}". ¿Sigue disponible?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-burgundy transition hover:text-burgundy-dark"
                  >
                    Consultar promoción
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Detalle en cada servicio",
              text: "Cada diseño y cada acabado se trabaja con calma y precisión.",
            },
            {
              title: "Un espacio acogedor",
              text: "Ven a disfrutar tu cita en un ambiente cálido y relajado.",
            },
            {
              title: "Belleza a tu medida",
              text: "Escuchamos lo que buscas para crear un resultado que te represente.",
            },
          ].map((item) => (
            <div key={item.title} className="soft-card">
              <Sparkles
                size={20}
                className="text-gold"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-burgundy py-20 text-cream sm:py-24">
        <span
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-script text-[10rem] text-cream/[0.06] sm:text-[16rem]"
          aria-hidden="true"
        >
          Gloss &amp; Glam
        </span>
        <div className="section-shell relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-6 bg-gold" aria-hidden="true" />
            Tu próxima cita
          </span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            ¿Lista para{" "}
            <span className="font-script text-blush">brillar</span>?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">
            Escríbenos por WhatsApp y coordinemos el día, la hora y el servicio
            perfecto para ti.
          </p>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light mt-8"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Reservar por WhatsApp
          </a>
          <p className="mt-5 text-xs text-cream/50">
            {site.address.city} · {site.phoneDisplay}
          </p>
        </div>
      </section>
    </>
  );
}
