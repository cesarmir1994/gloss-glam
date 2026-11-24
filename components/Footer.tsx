import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import FacebookIcon from "@/components/FacebookIcon";
import { defaultWhatsappMessage, site, whatsappLink } from "@/content/site";

const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-cream">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:py-20">
        <div>
          <BrandLogo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            Un espacio de belleza en Baños de Agua Santa donde las uñas, el
            cabello y la mirada se cuidan con detalle.
          </p>
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light mt-7"
          >
            Reservar por WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            Explora
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-cream"
              >
                <FacebookIcon size={14} />
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            Visítanos
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-cream">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-cream">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                {site.hours.map((item) => (
                  <span key={item.label} className="block">
                    {item.label}: {item.value}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
          <p>Hecho con cariño en Baños de Agua Santa, Ecuador.</p>
        </div>
      </div>
    </footer>
  );
}
