export const WHATSAPP_PHONE: string | null = null;

export const whatsappMessages = {
  site: "Olá! Vim pelo site da Ótica da Família e quero atendimento.",
  bio: "Olá! Vim pela bio da Ótica da Família e quero atendimento.",
  frames: "Olá! Quero conhecer opções de armações da Ótica da Família.",
  sunglasses: "Olá! Quero conhecer opções de óculos solar da Ótica da Família.",
  collections: "Olá! Quero conhecer as opções da Ótica da Família.",
  proposal:
    "Olá! Vi a proposta da Ótica da Família e quero conversar sobre o próximo passo.",
};

export function buildWhatsAppUrl(
  message: string,
  phone: string | null = WHATSAPP_PHONE,
) {
  if (!phone) {
    throw new Error("WhatsApp oficial da Ótica da Família não configurado.");
  }

  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export const brandName = "Ótica da Família";
export const instagramHandle = "@oticadafamiliaqueiroz";
export const instagramUrl = "https://www.instagram.com/oticadafamiliaqueiroz/";
export const mapsUrl = "https://share.google/Ud7CN4E57ELzF1qi6";
export const rating = 5;
export const reviewCount = 16;
export const reviewLabel = "5/5 no Google · 16 avaliações";
export const socialProofText = "★★★★★ 5/5 no Google · 16 avaliações";

export const services = [
  "Armações",
  "Lentes",
  "Óculos solar",
  "Atendimento em ótica",
] as const;

export const officialBio = [
  "Armações, lentes, óculos solar.",
  "Venha e veja o mundo com bons olhos.",
  "Óculos incríveis para você.",
  "Araguaína - TO",
  "Clique e fale conosco.",
] as const;

export const units = [
  {
    id: "araguaina",
    name: brandName,
    address: "Araguaína - TO",
    routeUrl: mapsUrl,
  },
] as const;

export const brandColors = {
  orange: "#E48100",
  orangeDark: "#84500E",
  offWhite: "#FFF8EF",
  white: "#FFFFFF",
  graphite: "#181818",
  text: "#655E55",
};

export const media = {
  heroVideo:
    "/assets/otica-da-familia/videos/interno/interno-03.mp4",
  experienceVideo:
    "/assets/otica-da-familia/videos/interno/interno-01.mp4",
  heroPoster:
    "/assets/otica-da-familia/espaco/atendimento-02.webp",
};

export const site = {
  brandName,
  name: brandName,
  shortName: brandName,
  legalName: brandName,
  city: "Araguaína",
  region: "TO",
  addressLocality: "Araguaína",
  addressRegion: "TO",
  postalCountry: "BR",
  displayAddress: "Araguaína - TO",
  fullAddress: "Araguaína - TO",
  instagram: instagramHandle,
  instagramUrl,
  mapUrl: mapsUrl,
  mapsRouteUrl: mapsUrl,
  rating,
  reviewCount,
  reviewLabel,
  socialProofText,
  services,
  mainPromise: "Óculos, lentes e armações para ver o mundo com bons olhos.",
  promiseNote:
    "Atendimento cuidadoso e opções para enxergar melhor no dia a dia em Araguaína.",
  logoIcon: "/assets/otica-da-familia/brand/logo.png",
  logoFull: "/assets/otica-da-familia/brand/logo-completa.png",
  favicon: "/assets/otica-da-familia/brand/favicon.png",
  heroImage: media.heroPoster,
  locations: units.map((unit) => ({
    ...unit,
    mapUrl: unit.routeUrl,
  })),
};

export const navItems = [
  { label: "Escolha seus óculos", href: "#rotina" },
  { label: "Atendimento", href: "#experiencia" },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Como chegar", href: "#contato" },
];

export const testimonialsSummary = {
  rating,
  total: reviewCount,
  source: "Google",
};

export type Testimonial = {
  name: string;
  text: string;
  rating: 5;
  source: "Google";
};

export const testimonials: Testimonial[] = [
  {
    name: "Karine Viana",
    text: "Ótimo atendimento, o local bem arejado, funcionários educados e atenciosos.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Vanda Oliveira",
    text: "Atendimento excelente aqui na Ótica da Família, você está em casa.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Vilma Dos Santos Silva",
    text: "Melhor ótica, com ótimo atendimento e óculos de qualidade.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Francisca Silva",
    text: "Minha experiência foi maravilhosa. Nota 1.000.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Compras Industria",
    text: "Melhor atendimento, ótima qualidade.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Diegofumaça375",
    text: "Ótimo atendimento. Recomendo.",
    rating: 5,
    source: "Google",
  },
];
