import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Uñas, peinados y pestañas en Baños`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "salón de uñas en Baños",
    "peinados en Baños",
    "lifting de pestañas Baños",
    "maquillaje Baños de Agua Santa",
    "Gloss & Glam Estudio",
    "Tannia Ortega",
    "belleza Baños Ecuador",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Belleza en Baños de Agua Santa`,
    description: site.description,
    images: [
      {
        url: "/images/hero-peinado.jpg",
        width: 541,
        height: 960,
        alt: "Peinado realizado en Gloss & Glam Estudio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Belleza en Baños`,
    description: site.description,
    images: ["/images/hero-peinado.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3e8fa",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/hero-peinado.jpg`,
  telephone: site.phoneHref,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: "EC",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${jost.variable} ${greatVibes.variable} font-sans`}
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-burgundy focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
