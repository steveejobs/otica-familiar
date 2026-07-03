import type { Metadata } from "next";
import Image from "next/image";
import {
  ChevronRight,
  Glasses,
  Globe2,
  Instagram,
  MapPin,
  Star,
} from "lucide-react";
import { TestimonialsMobileMarquee } from "@/components/ui/testimonials-columns-1";
import { testimonials } from "@/data/testimonials";
import { site } from "@/lib/site";

const links = [
  {
    label: "Como chegar",
    href: site.mapsRouteUrl,
    ariaLabel: "Abrir localização oficial da Ótica da Família",
    icon: MapPin,
    variant: "primary",
  },
  {
    label: "Ver no Instagram",
    href: site.instagramUrl,
    ariaLabel: "Abrir Instagram da Ótica da Família",
    icon: Instagram,
    variant: "light",
  },
  {
    label: "Conhecer armações",
    href: site.instagramUrl,
    ariaLabel: "Conhecer armações no Instagram",
    icon: Glasses,
    variant: "light",
  },
  {
    label: "Ver avaliações",
    href: "/#avaliacoes",
    ariaLabel: "Ver avaliações no site",
    icon: Star,
    variant: "ghost",
  },
  {
    label: "Site completo",
    href: "/",
    ariaLabel: "Acessar site completo da Ótica da Família",
    icon: Globe2,
    variant: "ghost",
  },
] as const;
const galleryMain = [
  {
    src: "/assets/otica-da-familia/espaco/ambiente.png",
    alt: "Ambiente interno da Ótica da Família",
  },
  {
    src: "/assets/otica-da-familia/espaco/atendimento-01.webp",
    alt: "Atendimento na Ótica da Família",
  },
  {
    src: "/assets/otica-da-familia/espaco/atendimento-02.webp",
    alt: "Atendimento personalizado na Ótica da Família",
  },
  {
    src: "/assets/otica-da-familia/espaco/fachada.png",
    alt: "Fachada da Ótica da Família",
  },
] as const;

const gallerySmall = [
  {
    src: "/assets/otica-da-familia/colecoes/colecao-01.webp",
    alt: "Armação quadrada fosca",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-03.jpg",
    alt: "Óculos solar em destaque",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-06.webp",
    alt: "Detalhe de armação de grau",
  },
] as const;

export const metadata: Metadata = {
  title: "Ótica da Família | Links",
  description:
    "Armações, lentes, óculos solar, Instagram e localização oficial da Ótica da Família em Araguaína.",
  alternates: {
    canonical: "/instagram",
  },
  openGraph: {
    title: "Ótica da Família | Links",
    description:
      "Conheça a Ótica da Família em Araguaína, veja as opções no Instagram e abra a localização oficial.",
    type: "website",
    images: [
      {
        url: site.logoIcon,
        width: 1254,
        height: 1254,
        alt: "Ótica da Família",
      },
    ],
  },
};

export default function InstagramBioPage() {
  return (
    <main className="instagram-page olhar-bio-page">
      <section className="instagram-hero" aria-labelledby="instagram-title">
        <div className="instagram-brand-header">
          <div className="instagram-shell instagram-brand-lockup">
            <Image
              src={site.logoIcon}
              alt="Logo da Ótica da Família"
              width={116}
              height={116}
              priority
              className="instagram-logo"
            />
            <div>
              <h1 id="instagram-title">{site.shortName}</h1>
              <p>Araguaína - TO</p>
            </div>
          </div>
        </div>

        <div className="instagram-shell instagram-hero-body">
          <p className="instagram-intro">
            Armações, lentes e óculos solar.
            <br />
            Venha e veja o mundo com bons olhos.
            <br />
            Óculos incríveis para você, em Araguaína - TO.
            <br />
            Clique e fale conosco pelo Instagram.
          </p>

          <div className="instagram-rating-card olhar-bio-proof">
            <strong>{site.socialProofText}</strong>
          </div>

          <InstagramGalleryMarquee />
        </div>
      </section>

      <section
        className="instagram-links instagram-shell"
        aria-label="Links principais"
      >
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              className={`instagram-main-link is-${link.variant}`}
              aria-label={link.ariaLabel}
            >
              <span className="instagram-main-link-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{link.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </section>

      <section
        className="instagram-testimonials instagram-shell"
        aria-labelledby="instagram-testimonials-title"
      >
        <div className="instagram-section-heading">
          <h2 id="instagram-testimonials-title">Quem compra, recomenda</h2>
        </div>
        <TestimonialsMobileMarquee testimonials={testimonials} />
      </section>

      <section
        id="enderecos"
        className="instagram-contact instagram-shell"
        aria-labelledby="contact-title"
      >
        <div className="instagram-section-heading">
          <h2 id="contact-title">Localização</h2>
        </div>

        <address className="instagram-contact-list">
          {site.locations.map((location) => (
            <a
              href={location.mapUrl}
              key={location.id}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir rota para ${location.name}`}
            >
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong>{location.name}</strong>
                <br />
                {location.address}
                <br />
              </span>
            </a>
          ))}
        </address>
      </section>

      <footer className="instagram-footer instagram-shell">
        <Star size={15} aria-hidden="true" />
        <span>{site.shortName} - Araguaína</span>
      </footer>

      <a
        href={links[0].href}
        className="instagram-fixed-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Como chegar à Ótica da Família"
      >
        <MapPin size={19} aria-hidden="true" />
        <span>Como chegar</span>
      </a>
    </main>
  );
}

function InstagramGalleryMarquee() {
  return (
    <div className="instagram-photo-marquee" aria-label="Galeria de armações">
      <div className="instagram-photo-row is-main">
        <div className="instagram-photo-track">
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <div
              className="instagram-photo-set"
              key={`main-gallery-set-${setIndex}`}
              aria-hidden={setIndex > 0}
            >
              {galleryMain.map((item, index) => (
                <div
                  className="instagram-photo-tile"
                  key={`${item.src}-${setIndex}`}
                >
                  <Image
                    src={item.src}
                    alt={setIndex === 0 ? item.alt : ""}
                    fill
                    sizes="(max-width: 720px) 54vw, 220px"
                    priority={setIndex === 0 && index < 2}
                    loading={setIndex === 0 && index < 2 ? undefined : "lazy"}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="instagram-photo-row is-small">
        <div className="instagram-photo-track">
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <div
              className="instagram-photo-set"
              key={`small-gallery-set-${setIndex}`}
              aria-hidden={setIndex > 0}
            >
              {gallerySmall.map((item) => (
                <div
                  className={`instagram-photo-tile${
                    "contain" in item && item.contain ? " is-contain" : ""
                  }`}
                  key={`${item.src}-${setIndex}`}
                >
                  <Image
                    src={item.src}
                    alt={setIndex === 0 ? item.alt : ""}
                    fill
                    sizes="(max-width: 720px) 30vw, 132px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
