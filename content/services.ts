export type Service = {
  name: string;
  description: string;
  duration: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  alt: string;
  items: Service[];
};

export const services: ServiceCategory[] = [
  {
    slug: "unas",
    name: "Uñas",
    shortName: "Uñas",
    description:
      "Manicura, pedicura y diseños que cuidan tus manos y reflejan tu estilo.",
    image: "/images/unas-cerezas.jpg",
    alt: "Manicura francesa con diseño de cerezas en Gloss & Glam Estudio",
    items: [
      {
        name: "Manicura clásica",
        description: "Limpieza, forma y esmaltado tradicional.",
        duration: "45 min",
      },
      {
        name: "Pedicura spa",
        description: "Exfoliación, hidratación y esmaltado.",
        duration: "60 min",
      },
      {
        name: "Uñas en gel",
        description: "Esmaltado de larga duración con acabado brillante.",
        duration: "75 min",
      },
      {
        name: "Uñas acrílicas",
        description: "Extensión y diseño a medida.",
        duration: "90 min",
      },
      {
        name: "Nail art",
        description: "Detalles, pedrería y diseños personalizados.",
        duration: "15 min",
      },
      {
        name: "Mantenimiento o retiro",
        description: "Retiro seguro y mantenimiento de uñas.",
        duration: "40 min",
      },
    ],
  },
  {
    slug: "peinados",
    name: "Peinados",
    shortName: "Peinados",
    description:
      "Cortes, color y peinados para tu día a día o para una ocasión especial.",
    image: "/images/peinado-evento.jpg",
    alt: "Peinado de evento con corona y vestido rojo en Gloss & Glam Estudio",
    items: [
      {
        name: "Corte y peinado",
        description: "Corte personalizado y acabado con secador.",
        duration: "45 min",
      },
      {
        name: "Peinado de evento",
        description: "Ondas, recogidos o semifijos para tu ocasión.",
        duration: "60 min",
      },
      {
        name: "Coloración",
        description: "Color, retoque de raíz o tono personalizado.",
        duration: "120 min",
      },
      {
        name: "Tratamiento capilar",
        description: "Hidratación y nutrición profunda.",
        duration: "45 min",
      },
      {
        name: "Células madre capilar",
        description: "Tratamiento fortalecedor para todo tipo de cabello.",
        duration: "60 min",
      },
      {
        name: "Ondas o alisado",
        description: "Acabado con plancha o rizador.",
        duration: "45 min",
      },
    ],
  },
  {
    slug: "pestanas",
    name: "Pestañas y maquillaje",
    shortName: "Pestañas",
    description:
      "Realza tu mirada con lifting, diseño de cejas y maquillaje profesional.",
    image: "/images/maquillaje-artistico.jpg",
    alt: "Maquillaje artístico con cristales realizado en Gloss & Glam Estudio",
    items: [
      {
        name: "Lifting de pestañas",
        description: "Curvatura y elevación natural de tus pestañas.",
        duration: "60 min",
      },
      {
        name: "Laminado de cejas",
        description: "Cejas alineadas, definidas y con efecto peinado.",
        duration: "45 min",
      },
      {
        name: "Diseño de cejas",
        description: "Perfilado y depilación según tu rostro.",
        duration: "20 min",
      },
      {
        name: "Maquillaje profesional",
        description: "Maquillaje social, novia o evento.",
        duration: "60 min",
      },
      {
        name: "Delineado semipermanente",
        description: "Definición de mirada de larga duración.",
        duration: "60 min",
      },
    ],
  },
];

export const featuredServices = [
  "Manicura clásica",
  "Uñas en gel",
  "Peinado de evento",
  "Lifting de pestañas",
  "Coloración",
  "Células madre capilar",
];
