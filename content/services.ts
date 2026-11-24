export type Service = {
  name: string;
  description: string;
  price: number;
  from?: boolean;
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
    image: "/images/reel-04.jpg",
    alt: "Manicurista atendiendo a una clienta en Gloss & Glam Estudio",
    items: [
      {
        name: "Manicura clásica",
        description: "Limpieza, forma y esmaltado tradicional.",
        price: 12,
        duration: "45 min",
      },
      {
        name: "Pedicura spa",
        description: "Exfoliación, hidratación y esmaltado.",
        price: 18,
        duration: "60 min",
      },
      {
        name: "Uñas en gel",
        description: "Esmaltado de larga duración con acabado brillante.",
        price: 25,
        duration: "75 min",
      },
      {
        name: "Uñas acrílicas",
        description: "Extensión y diseño a medida.",
        price: 30,
        from: true,
        duration: "90 min",
      },
      {
        name: "Nail art",
        description: "Detalles, pedrería y diseños personalizados.",
        price: 5,
        from: true,
        duration: "15 min",
      },
      {
        name: "Mantenimiento o retiro",
        description: "Retiro seguro y mantenimiento de uñas.",
        price: 10,
        from: true,
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
    image: "/images/reel-02.jpg",
    alt: "Modelo con peinado de ondas largas",
    items: [
      {
        name: "Corte y peinado",
        description: "Corte personalizado y acabado con secador.",
        price: 15,
        duration: "45 min",
      },
      {
        name: "Peinado de evento",
        description: "Ondas, recogidos o semifijos para tu ocasión.",
        price: 25,
        from: true,
        duration: "60 min",
      },
      {
        name: "Coloración",
        description: "Color, retoque de raíz o tono personalizado.",
        price: 40,
        from: true,
        duration: "120 min",
      },
      {
        name: "Tratamiento capilar",
        description: "Hidratación y nutrición profunda.",
        price: 20,
        duration: "45 min",
      },
      {
        name: "Células madre capilar",
        description: "Tratamiento fortalecedor para todo tipo de cabello.",
        price: 20,
        duration: "60 min",
      },
      {
        name: "Ondas o alisado",
        description: "Acabado con plancha o rizador.",
        price: 20,
        from: true,
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
    image: "/images/reel-08.jpg",
    alt: "Aplicación de lifting de pestañas",
    items: [
      {
        name: "Lifting de pestañas",
        description: "Curvatura y elevación natural de tus pestañas.",
        price: 20,
        duration: "60 min",
      },
      {
        name: "Laminado de cejas",
        description: "Cejas alineadas, definidas y con efecto peinado.",
        price: 20,
        duration: "45 min",
      },
      {
        name: "Diseño de cejas",
        description: "Perfilado y depilación según tu rostro.",
        price: 8,
        duration: "20 min",
      },
      {
        name: "Maquillaje profesional",
        description: "Maquillaje social, novia o evento.",
        price: 25,
        from: true,
        duration: "60 min",
      },
      {
        name: "Delineado semipermanente",
        description: "Definición de mirada de larga duración.",
        price: 20,
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
