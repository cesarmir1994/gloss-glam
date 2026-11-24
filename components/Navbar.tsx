"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { defaultWhatsappMessage, site, whatsappLink } from "@/content/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-burgundy/10 bg-cream/90 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <BrandLogo />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition ${
                      active
                        ? "text-burgundy"
                        : "text-ink/70 hover:text-burgundy"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            <MessageCircle size={15} aria-hidden="true" />
            Reservar cita
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/20 text-burgundy transition hover:bg-blush/60 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-burgundy/10 bg-cream px-5 pb-10 pt-8 lg:hidden"
        >
          <nav aria-label="Navegación móvil">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between border-b border-burgundy/10 py-4 font-display text-3xl ${
                      pathname === link.href ? "text-burgundy" : "text-ink"
                    }`}
                  >
                    {link.label}
                    <span className="text-gold">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-4 text-sm text-muted">
            <p>{site.address.street}</p>
            <p>{site.address.city}, {site.address.country}</p>
            <p>
              <a href={`tel:${site.phoneHref}`} className="text-burgundy">
                {site.phoneDisplay}
              </a>
            </p>
          </div>

          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Reservar por WhatsApp
          </a>
        </div>
      ) : null}
    </>
  );
}
