import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="section-shell relative flex flex-col items-center text-center">
        <span className="font-script text-7xl text-burgundy sm:text-8xl">
          Ups
        </span>
        <span className="eyebrow mt-4">
          <Sparkles size={12} aria-hidden="true" />
          Página no encontrada
        </span>
        <h1 className="display-title mt-4 max-w-2xl">
          Esta página se fue a{" "}
          <span className="font-script text-burgundy">consentirse</span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
          El enlace que buscas no existe o cambió de lugar. Vuelve al inicio y
          descubre todo lo que Gloss &amp; Glam tiene para ti.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={15} aria-hidden="true" />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
