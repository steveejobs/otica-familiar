import Image from "next/image";
import { Instagram } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const galleryBlocks = [
  {
    id: "espaco",
    eyebrow: "Atendimento",
    title: "Escolha guiada, com orientação clara.",
    text: "Do primeiro teste ao ajuste final, o atendimento ajuda você a decidir com segurança e sem pressa.",
    images: [
      {
        src: "/assets/otica-da-familia/espaco/ambiente.png",
        alt: "Ambiente interno da Ótica da Família",
        caption: "Ambiente da loja",
      },
      {
        src: "/assets/otica-da-familia/espaco/atendimento-01.webp",
        alt: "Atendimento na Ótica da Família",
        caption: "Atendimento",
      },
      {
        src: "/assets/otica-da-familia/espaco/fachada.png",
        alt: "Fachada da Ótica da Família",
        caption: "Fachada",
      },
    ],
  },
  {
    id: "colecoes",
    eyebrow: "Armações",
    title: "Modelos de grau com presença e conforto.",
    text: "Uma curadoria para experimentar com calma e encontrar a armação que conversa com seu rosto, sua rotina e seu estilo.",
    images: [
      {
        src: "/assets/otica-da-familia/colecoes/colecao-01.webp",
        alt: "Seleção de armações da Ótica da Família",
        caption: "Coleção de armações",
      },
      {
        src: "/assets/otica-da-familia/colecoes/colecao-06.webp",
        alt: "Armação em destaque na coleção da Ótica da Família",
        caption: "Detalhes da coleção",
      },
      {
        src: "/assets/otica-da-familia/colecoes/colecao-03.jpg",
        alt: "Óculos da coleção da Ótica da Família",
        caption: "Óculos de grau e solares",
      },
    ],
  },
];

export function StorePhotosSection() {
  return (
    <section
      id="vitrine"
      className="section store-photos-section olhar-gallery-section"
      aria-labelledby="store-photos-title"
    >
      <div className="site-shell olhar-gallery-shell">
        <AnimatedReveal className="section-heading compact olhar-gallery-intro">
          <p className="eyebrow">Vitrine</p>
          <h2 id="store-photos-title">
            Uma sequência visual para escolher com calma.
          </h2>
          <p>
            Armações, solares, atendimento e ambiente aparecem em blocos mais
            leves, com uma leitura limpa e alinhada à identidade da Óticas
            Olhar.
          </p>
        </AnimatedReveal>

        <div className="official-gallery-blocks">
          {galleryBlocks.map((block, blockIndex) => (
            <AnimatedReveal
              className={`official-gallery-block is-${block.id}`}
              delay={blockIndex * 0.06}
              key={block.id}
            >
              <div className="official-gallery-heading">
                <p className="eyebrow">{block.eyebrow}</p>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>

              <div className="official-gallery-grid">
                {block.images.map((image, imageIndex) => (
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
                            ? "(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 58vw, 690px"
                            : "(max-width: 390px) 118px, (max-width: 760px) calc(50vw - 26px), (max-width: 1100px) 28vw, 330px"
                        }
                        loading="lazy"
                      />
                    </div>
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </AnimatedReveal>
          ))}
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
            Ver no Instagram
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}
