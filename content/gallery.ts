export type GalleryCategory = "uñas" | "peinados" | "pestañas" | "salón";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  label: string;
};

export const galleryCategories: { id: "todas" | GalleryCategory; label: string }[] = [
  { id: "todas", label: "Todo" },
  { id: "uñas", label: "Uñas" },
  { id: "peinados", label: "Peinados" },
  { id: "pestañas", label: "Pestañas y maquillaje" },
  { id: "salón", label: "El salón" },
];

export const gallery: GalleryItem[] = [
  {
    src: "/images/unas-cerezas.jpg",
    alt: "Manicura francesa con diseño de cerezas en Gloss & Glam Estudio",
    category: "uñas",
    label: "Francesa con cerezas",
  },
  {
    src: "/images/unas-elegantes.jpg",
    alt: "Uñas almendra con diseño elegante en tonos nude y dorado",
    category: "uñas",
    label: "Diseño elegante",
  },
  {
    src: "/images/unas-florales.jpg",
    alt: "Nail art floral en rojo con acabado brillante",
    category: "uñas",
    label: "Nail art floral",
  },
  {
    src: "/images/hero-peinado.jpg",
    alt: "Cabello largo con ondas suaves peinado en el estudio",
    category: "peinados",
    label: "Ondas naturales",
  },
  {
    src: "/images/peinado-evento.jpg",
    alt: "Peinado de evento con vestido rojo y corona plateada",
    category: "peinados",
    label: "Look de evento",
  },
  {
    src: "/images/maquillaje-artistico.jpg",
    alt: "Maquillaje artístico en tonos morados con cristales",
    category: "pestañas",
    label: "Maquillaje artístico",
  },
  {
    src: "/images/reel-02.jpg",
    alt: "Peinado de ondas largas realizado en Gloss & Glam Estudio",
    category: "peinados",
    label: "Ondas con movimiento",
  },
  {
    src: "/images/reel-05.jpg",
    alt: "Modelo con cabello largo y peinado elegante",
    category: "peinados",
    label: "Cabello de evento",
  },
  {
    src: "/images/reel-07.jpg",
    alt: "Interior del estudio Gloss & Glam durante una cita",
    category: "salón",
    label: "Nuestro espacio",
  },
  {
    src: "/images/reel-09.jpg",
    alt: "Tannia Ortega en el wall de Gloss & Glam Estudio",
    category: "salón",
    label: "Tannia en el estudio",
  },
  {
    src: "/images/reel-04.jpg",
    alt: "Manicurista atendiendo a una clienta en Gloss & Glam Estudio",
    category: "uñas",
    label: "Manicura en proceso",
  },
  {
    src: "/images/brand-cover.jpg",
    alt: "Logo e identidad de Gloss & Glam Estudio by Tannia Ortega",
    category: "salón",
    label: "Nuestra marca",
  },
  {
    src: "/images/reel-01.jpg",
    alt: "Manicurista de Gloss & Glam trabajando en las uñas de una clienta",
    category: "uñas",
    label: "Detrás de la cita",
  },
  {
    src: "/images/reel-03.jpg",
    alt: "Aplicación de esmaltado en gel sobre las uñas",
    category: "uñas",
    label: "Esmaltado en gel",
  },
  {
    src: "/images/reel-06.jpg",
    alt: "Pedicura spa en el estudio",
    category: "uñas",
    label: "Pedicura spa",
  },
  {
    src: "/images/reel-08.jpg",
    alt: "Aplicación de lifting de pestañas a una clienta",
    category: "pestañas",
    label: "Mirada elevada",
  },
];
