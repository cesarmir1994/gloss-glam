export const site = {
  name: "Gloss & Glam Estudio",
  legalName: "Gloss & Glam Estudio by Tannia Ortega",
  tagline: "Uñas, peinados y pestañas en Baños",
  description:
    "Gloss & Glam Estudio es un espacio de belleza en Baños de Agua Santa. Uñas, peinados, pestañas y maquillaje con atención personalizada. Reserva tu cita por WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glossandglamestudio.com",
  phoneDisplay: "+593 97 926 0607",
  phoneHref: "+593979260607",
  whatsapp: "593979260607",
  email: "cecibelortegas@gmail.com",
  address: {
    street: 'Pastaza y Oriente, esquina, Barrio "La Unión"',
    city: "Baños de Agua Santa",
    province: "Tungurahua",
    country: "Ecuador",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pastaza+y+Oriente,+Ba%C3%B1os+de+Agua+Santa,+Ecuador",
  mapsEmbed:
    "https://www.google.com/maps?q=Pastaza+y+Oriente,+Ba%C3%B1os+de+Agua+Santa,+Ecuador&output=embed",
  facebook: "https://www.facebook.com/GlossGlamEstudio",
  instagram: "",
  hours: [
    { label: "Lunes a sábado", value: "Atención con cita previa" },
    { label: "Domingo", value: "Cerrado" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hola Gloss & Glam Estudio, me gustaría agendar una cita. ¿Podrían ayudarme con la disponibilidad?";
