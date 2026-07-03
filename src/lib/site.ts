import { buildWhatsAppUrl, site, whatsappMessages } from "@/data/brand";

export {
  WHATSAPP_PHONE,
  brandName,
  brandColors,
  buildWhatsAppUrl,
  instagramHandle,
  instagramUrl,
  mapsUrl,
  media,
  navItems,
  officialBio,
  rating,
  reviewCount,
  reviewLabel,
  services,
  site,
  socialProofText,
  testimonials,
  testimonialsSummary,
  units,
  whatsappMessages,
} from "@/data/brand";

export const DEFAULT_WHATSAPP_MESSAGE = whatsappMessages.site;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "OpticalStore",
  name: site.name,
  alternateName: `${site.shortName} - Araguaína`,
  image: site.logoFull,
  sameAs: [site.instagramUrl, site.mapsRouteUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.postalCountry,
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "16",
  },
  url: "/",
  priceRange: "$$",
  description:
    "Ótica da Família em Araguaína: armações, lentes, óculos solar e atendimento cuidadoso para ajudar você a enxergar melhor.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produtos e atendimento",
    itemListElement: site.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export function whatsappFor(message: string, phone?: string | null) {
  return buildWhatsAppUrl(message, phone);
}
