import {
  Eye,
  Glasses,
  HeartHandshake,
  Instagram,
  MoveHorizontal,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const offerings = [
  {
    icon: Glasses,
    title: "Armações de grau",
    text: "Modelos para rotina, trabalho, estudo e estilo pessoal.",
    cta: "Ver armações",
  },
  {
    icon: Eye,
    title: "Lentes",
    text: "Orientação para comparar opções de acordo com sua necessidade.",
  },
  {
    icon: Sun,
    title: "Óculos solar",
    text: "Proteção, conforto e estilo para acompanhar seus dias.",
    cta: "Ver modelos",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento para escolha",
    text: "Ajuda próxima para decidir com segurança e sem pressa.",
  },
  {
    icon: MoveHorizontal,
    title: "Ajuste e conforto",
    text: "Atenção ao encaixe para uma experiência mais confortável.",
  },
  {
    icon: Sparkles,
    title: "Diferentes estilos",
    text: "Opções para um visual discreto, clássico ou marcante.",
    cta: "Explorar estilos",
  },
] as const;

export function ProductOfferingsSection() {
  return (
    <section
      className="section product-offerings-section"
      aria-labelledby="product-offerings-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">O que você encontra</p>
          <h2 id="product-offerings-title">
            Opções para enxergar bem e escolher com confiança.
          </h2>
          <p>
            Produtos e orientação reunidos para facilitar sua escolha na Ótica
            da Família.
          </p>
        </AnimatedReveal>

        <div className="product-offerings-grid">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;

            return (
              <AnimatedReveal
                className="product-offering-card"
                delay={index * 0.035}
                key={offering.title}
              >
                <Icon size={20} aria-hidden="true" />
                <div>
                  <h3>{offering.title}</h3>
                  <p>{offering.text}</p>
                </div>
                {"cta" in offering ? (
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${offering.cta} no Instagram da Ótica da Família`}
                  >
                    <Instagram size={15} aria-hidden="true" />
                    {offering.cta}
                  </a>
                ) : null}
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}