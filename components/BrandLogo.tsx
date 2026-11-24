import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  light?: boolean;
  onClick?: () => void;
};

export default function BrandLogo({ light = false, onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Gloss & Glam Estudio, ir al inicio"
      className="group inline-flex items-center gap-3"
    >
      <span
        className={`relative block h-11 w-11 shrink-0 overflow-hidden rounded-full border transition duration-300 group-hover:border-gold ${
          light ? "border-cream/25 bg-cream/10" : "border-burgundy/20 bg-blush/60"
        }`}
      >
        <Image
          src="/images/logo.jpeg"
          alt="Silueta de mujer, símbolo de Gloss & Glam Estudio"
          fill
          priority
          sizes="44px"
          className="object-cover"
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-script text-[1.6rem] leading-none ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Gloss <span className="text-gold">&</span> Glam
        </span>
        <span
          className={`mt-1.5 block text-[8px] font-medium uppercase tracking-[0.32em] ${
            light ? "text-cream/60" : "text-muted"
          }`}
        >
          by Tannia Ortega
        </span>
      </span>
    </Link>
  );
}
