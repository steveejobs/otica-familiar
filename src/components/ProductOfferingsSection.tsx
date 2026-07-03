import {
  Eye,
  Glasses,
  HeartHandshake,
  MoveHorizontal,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";

const offerings = [
  {
    icon: Glasses,
    title: "Armações de grau",
    text: "Modelos para rotina, trabalho e estilo.",
  },
  {
    icon: Eye,
    title: "Lentes",
    text: "Orientação para comparar opções com clareza.",
  },
  {
    icon: Sun,
    title: "Óculos solar",
    text: "Proteção e estilo para o dia a dia.",
  },
  {
    icon: MoveHorizontal,
    title: "Ajuste e conforto",
    text: "Atenção ao encaixe e uso diário.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento para escolha",
    text: "Ajuda próxima para decidir com segurança.",
  },
  {
    icon: Sparkles,
    title: "Diferentes estilos",
    text: "Opções discretas, clássicas ou marcantes.",
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
          <h2 id="product-offerings-title">Tudo para escolher com confiança.</h2>
          <p>Armações, lentes e atendimento reunidos em um só lugar.</p>
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
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}