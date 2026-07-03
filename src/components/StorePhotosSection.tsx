import Image from "next/image";
import { Instagram } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ViewportVideo } from "@/components/ViewportVideo";
import { site } from "@/lib/site";

const spaceImages = [
  {
    src: "/assets/otica-da-familia/espaco/ambiente.png",
    alt: "Ambiente interno da Ótica da Família",
    caption: "Ambiente da loja",
  },
  {
    src: "/assets/otica-da-familia/espaco/atendimento-01.webp",
    alt: "Atendimento na Ótica da Família",
    caption: "Atendimento próximo",
  },
  {
    src: "/assets/otica-da-familia/espaco/atendimento-02.webp",
    alt: "Escolha de óculos com atendimento na Ótica da Família",
    caption: "Escolha acompanhada",
  },
] as const;

const collectionImages = [
  {
    src: "/assets/otica-da-familia/colecoes/colecao-01.webp",
    alt: "Seleção de armações da Ótica da Família",
    caption: "Armações de grau",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-02.webp",
    alt: "Detalhe de armação disponível na Ótica da Família",
    caption: "Detalhes e acabamento",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-03.jpg",
    alt: "Óculos da coleção da Ótica da Família",
    caption: "Modelos para experimentar",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-06.webp",
    alt: "Armação em destaque na Ótica da Família",
    caption: "Estilo com presença",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-07.webp",
    alt: "Modelo de óculos da Ótica da Família",
    caption: "Opções de coleção",
  },
  {
    src: "/assets/otica-da-familia/colecoes/colecao-08.webp",
    alt: "Detalhe de óculos da coleção da Ótica da Família",
    caption: "Curadoria de modelos",
  },
] as const;

type GalleryImage = (typeof spaceImages)[number] | (typeof collectionImages)[number];

function EditorialGrid({
  images,
  variant,
}: {
  images: readonly GalleryImage[];
  variant: "space" | "collections";
}) {
  return (
    <div className={`official-gallery-grid phase-five-gallery-grid is-${variant}`}>
      {images.map((image, imageIndex) => (
        <figure
          className={`official-gallery-card${
            imageIndex === 0 ? " is-main" : " is-support"
          }`}
          key={image.src}
        >
          <div className="official-gallery-image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                imageIndex === 0
                  ? "(max-width: 760px) calc(100vw - 40px), 56vw"
                  : "(max-width: 760px) calc(50vw - 26px), 24vw"
              }
              loading="lazy"
            />
          </div>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function StorePhotosSection() {
  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-shell">
        <AnimatedReveal className="section-heading compact olhar-gallery-intro">
          <p className="eyebrow">Vitrine oficial</p>
          <h2 id="store-photos-title">Conheça a loja e os modelos.</h2>
          <p>Ambiente, atendimento e armações para chegar com boas referências.</p>
        </AnimatedReveal>

        <div className="official-gallery-blocks">
          <AnimatedReveal className="official-gallery-block is-space">
            <div className="official-gallery-heading">
              <p className="eyebrow">Por dentro da loja</p>
              <h3>Veja detalhes do ambiente.</h3>
              <p>Conheça a loja antes da visita.</p>
            </div>
            <EditorialGrid images={spaceImages} variant="space" />
          </AnimatedReveal>

          <AnimatedReveal
            className="official-gallery-block is-collections"
            delay={0.06}
          >
            <div className="official-gallery-heading">
              <p className="eyebrow">Armações e detalhes</p>
              <h3>Compare estilos e acabamentos.</h3>
              <p>Chegue com referências do que quer experimentar.</p>
            </div>
            <EditorialGrid images={collectionImages} variant="collections" />
          </AnimatedReveal>

          <AnimatedReveal
            className="official-gallery-block official-video-block"
            delay={0.08}
          >
            <div className="official-gallery-heading">
              <p className="eyebrow">Atendimento e escolha</p>
              <h3>Veja a coleção em movimento.</h3>
              <p>Detalhes de modelos para comparar antes da visita.</p>
              <a
                href={site.instagramUrl}
                className="gallery-inline-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} aria-hidden="true" />
                Ver mais no Instagram
              </a>
            </div>
            <div className="official-video-media">
              <ViewportVideo
                src="/assets/otica-da-familia/videos/colecoes/colecao-06.mp4"
                poster="/assets/otica-da-familia/colecoes/colecao-06.webp"
                ariaLabel="Vídeo de coleção da Ótica da Família"
                className="official-gallery-video"
              />
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal className="olhar-gallery-cta">
          <a
            href={site.instagramUrl}
            className="button button-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conhecer opções da Ótica da Família no Instagram"
          >
            <Instagram size={17} aria-hidden="true" />
            Ver novidades no Instagram
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}