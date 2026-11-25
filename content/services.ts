export type Service = {
  name: string;
  description: string;
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
      },
      {
        name: "Pedicura spa",
        description: "Exfoliación, hidratación y esmaltado.",
      },
      {
        name: "Uñas en gel",
        description: "Esmaltado de larga duración con acabado brillante.",
      },
      {
        name: "Uñas acrílicas",
        description: "Extensión y diseño a medida.",
      },
      {
        name: "Nail art",
        description: "Detalles, pedrería y diseños personalizados.",
      },
      {
        name: "Mantenimiento o retiro",
        description: "Retiro seguro y mantenimiento de uñas.",
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
      },
      {
        name: "Peinado de evento",
        description: "Ondas, recogidos o semifijos para tu ocasión.",
      },
      {
        name: "Coloración",
        description: "Color, retoque de raíz o tono personalizado.",
      },
      {
        name: "Tratamiento capilar",
        description: "Hidratación y nutrición profunda.",
      },
      {
        name: "Células madre capilar",
        description: "Tratamiento fortalecedor para todo tipo de cabello.",
      },
      {
        name: "Ondas o alisado",
        description: "Acabado con plancha o rizador.",
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
      },
      {
        name: "Laminado de cejas",
        description: "Cejas alineadas, definidas y con efecto peinado.",
      },
      {
        name: "Diseño de cejas",
        description: "Perfilado y depilación según tu rostro.",
      },
      {
        name: "Maquillaje profesional",
        description: "Maquillaje social, novia o evento.",
      },
      {
        name: "Delineado semipermanente",
        description: "Definición de mirada de larga duración.",
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
