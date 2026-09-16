// Datos del negocio — verificados públicamente en Google Maps, Facebook,
// Instagram, Fresha y Páginas Amarillas el 16/09/2026. Si algún dato cambia
// (horario, teléfono, valoración), actualízalo aquí: se propaga a toda la
// web (metadatos, JSON-LD, secciones, footer).
//
// Ver DATOS-PENDIENTES.md para el detalle de fuentes, discrepancias entre
// fuentes y datos que quedan por confirmar directamente con el negocio.

export const business = {
  name: "Vicente Ortega Peluqueros",
  legalName: "Peluqueros Vicente Ortega S.L.",
  shortName: "Vicente Ortega",
  registeredSince: 1997,
  tagline: "Peluquería en Alcalá de Henares desde 1997",
  country: "ES",
  rating: {
    value: 4.7,
    count: 263 + 178,
    source: "Google",
  },
} as const;

export type Location = {
  id: string;
  label: string;
  isPrimary: boolean;
  street: string;
  postalCode: string;
  city: string;
  province: string;
  buildingNote?: string;
  phoneDisplay: string;
  phoneIntl: string;
  googleMapsUrl: string;
  googleMapsEmbedSrc: string;
  plusCode: string;
  rating: { value: number; count: number };
  hours: { day: string; hours: string }[];
  hoursSource: string;
  openingHoursSpecification: {
    days: string[];
    opens: string;
    closes: string;
  }[];
};

export const locations: Location[] = [
  {
    id: "pereda",
    label: "Salón Calle José María Pereda",
    isPrimary: true,
    street: "Calle José María Pereda, Local 7",
    postalCode: "28806",
    city: "Alcalá de Henares",
    province: "Madrid",
    phoneDisplay: "918 02 59 21",
    phoneIntl: "+34918025921",
    googleMapsUrl:
      "https://www.google.com/maps/place/VICENTE+ORTEGA+PELUQUEROS/@40.4966904,-3.3636754,17z/data=!4m7!3m6!1s0xd4249668123921b:0xfcf6de56c0d813a0!8m2!3d40.4966904!4d-3.3636754!16s%2Fg%2F1yg57vh5n",
    googleMapsEmbedSrc:
      "https://www.google.com/maps?q=VICENTE+ORTEGA+PELUQUEROS,+Calle+Jos%C3%A9+Mar%C3%ADa+Pereda,+Local+7,+28806+Alcal%C3%A1+de+Henares&output=embed",
    plusCode: "FJWP+MG Alcalá de Henares",
    rating: { value: 4.7, count: 263 },
    hours: [
      { day: "Lunes", hours: "9:30 – 20:00" },
      { day: "Martes", hours: "9:30 – 20:00" },
      { day: "Miércoles", hours: "9:30 – 20:00" },
      { day: "Jueves", hours: "9:30 – 20:00" },
      { day: "Viernes", hours: "9:30 – 20:00" },
      { day: "Sábado", hours: "8:30 – 14:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
    hoursSource: "Google Maps",
    openingHoursSpecification: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "20:00",
      },
      { days: ["Saturday"], opens: "08:30", closes: "14:00" },
    ],
  },
  {
    id: "juan-de-austria",
    label: "Salón Avenida Juan de Austria",
    isPrimary: false,
    street: "Avenida Juan de Austria, 28",
    postalCode: "28806",
    city: "Alcalá de Henares",
    province: "Madrid",
    buildingNote: "Edificio Grafiletra",
    phoneDisplay: "918 82 38 54",
    phoneIntl: "+34918823854",
    googleMapsUrl:
      "https://www.google.com/maps/place/Peluqueros+Vicente+Ortega/@40.4816,-3.3573,17z",
    googleMapsEmbedSrc:
      "https://www.google.com/maps?q=Peluqueros+Vicente+Ortega,+Avenida+Juan+de+Austria+28,+28806+Alcal%C3%A1+de+Henares&output=embed",
    plusCode: "FJPX+R6 Alcalá de Henares",
    rating: { value: 4.7, count: 178 },
    hours: [
      { day: "Lunes", hours: "9:30 – 19:30" },
      { day: "Martes", hours: "9:30 – 19:30" },
      { day: "Miércoles", hours: "9:30 – 19:30" },
      { day: "Jueves", hours: "9:30 – 19:30" },
      { day: "Viernes", hours: "9:30 – 19:30" },
      { day: "Sábado", hours: "8:30 – 13:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
    hoursSource: "Páginas Amarillas (no publicado en su ficha de Google)",
    openingHoursSpecification: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "19:30",
      },
      { days: ["Saturday"], opens: "08:30", closes: "13:00" },
    ],
  },
];

export const primaryLocation = locations[0];

export const services = [
  {
    slug: "corte-senora",
    name: "Corte de señora",
    description:
      "Corte adaptado a la forma del rostro y al mantenimiento que quieras darle en casa.",
  },
  {
    slug: "corte-caballero",
    name: "Corte de caballero",
    description: "Corte clásico o de tendencia, con acabado a máquina y tijera.",
  },
  {
    slug: "coloracion",
    name: "Coloración",
    description: "Tinte de cobertura o de cambio de tono, formulado en el propio salón.",
  },
  {
    slug: "balayage-mechas",
    name: "Balayage y mechas",
    description: "Iluminación progresiva o mechas tradicionales, con degradado natural.",
  },
  {
    slug: "tratamientos",
    name: "Tratamientos capilares",
    description: "Tratamientos para hidratar, reparar o reforzar el cabello tras el color.",
  },
  {
    slug: "peinado",
    name: "Peinado y recogido",
    description: "Peinado de salón o recogido para ocasiones especiales.",
  },
] as const;

export type Review = {
  author: string;
  text: string;
  time: string;
  locationId: string;
  source: "Google Maps";
};

// Citadas de forma literal desde las fichas públicas de Google Maps
// consultadas el 16/09/2026. No se ha modificado ni una palabra.
export const reviews: Review[] = [
  {
    author: "angie prieto",
    text: "Entré de casualidad a pedir precio. Y la profesional que me atendió (Aurora) fue maravillosa. Le di libertad total de corte, pero me escuchó lo que quería.",
    time: "Editado hace 3 semanas",
    locationId: "pereda",
    source: "Google Maps",
  },
  {
    author: "Andrea González",
    text: "Me atendió Leticia y fue maravilloso el rubio más bonito que me han hecho. Súper recomendada, es una súper profesional y fue una experiencia increíble. Graciaaas",
    time: "Hace 6 meses",
    locationId: "pereda",
    source: "Google Maps",
  },
  {
    author: "adri mm",
    text: "Todas las veces me atiende Vanesa, la mejor peluquería, buena atención y resultado perfecto, acorde a lo que pido siempre.",
    time: "Hace un mes",
    locationId: "pereda",
    source: "Google Maps",
  },
  {
    author: "Daniel",
    text: "Siempre que necesitaba cualquier retoque en el pelo he acudido aquí, es la peluquería que más confianza me da y Tino, como siempre, un gran profesional. Es como si estuvieras en manos de un artista.",
    time: "Hace 5 meses",
    locationId: "juan-de-austria",
    source: "Google Maps",
  },
  {
    author: "Jorge Gonzalez",
    text: "Buen peluquero... Y buena música.",
    time: "Hace 3 meses",
    locationId: "juan-de-austria",
    source: "Google Maps",
  },
];

export const whatsappHref = (phoneIntl: string, message: string) =>
  `https://wa.me/${phoneIntl.replace("+", "")}?text=${encodeURIComponent(message)}`;

export const telHref = (phoneIntl: string) => `tel:${phoneIntl}`;

export const fullAddress = (loc: Location) =>
  `${loc.street}, ${loc.postalCode} ${loc.city}, ${loc.province}`;
