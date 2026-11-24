export type Promo = {
  title: string;
  description: string;
  image: string;
  alt: string;
  price: string;
};

export const promos: Promo[] = [
  {
    title: "2x $20 en lifting de pestañas",
    description:
      "Ven con una amiga y aprovechen el 2x $20 en lifting de pestañas por tiempo limitado.",
    image: "/images/photo-08.jpg",
    alt: "Promoción 2x 20 dólares en lifting de pestañas de Gloss & Glam",
    price: "2x $20",
  },
  {
    title: "Lifting + cejas por $20",
    description:
      "Lifting de pestañas con diseño y laminado de cejas en una sola cita.",
    image: "/images/photo-09.jpg",
    alt: "Promoción de lifting de pestañas más diseño y laminado de cejas",
    price: "$20",
  },
  {
    title: "Células madre capilar",
    description:
      "Tratamiento fortalecedor para todo tipo de cabello. Pregunta por las opciones y combos.",
    image: "/images/photo-10.jpg",
    alt: "Promoción de células madre capilar desde 15 dólares",
    price: "Desde $15",
  },
];
