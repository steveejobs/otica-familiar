import Image from "next/image";
import { Award, Glasses, HeartHandshake } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import "@/app/media-phase-four-additions.css";

const recognitionItems = [
  { icon: Award, text: "Atendimento reconhecido" },
  { icon: HeartHandshake, text: "Confiança de clientes locais" },
  {
    icon: Glasses,
    text: "Cuidado na escolha das armações e lentes",
  },
];

export function ProcessSection() {
  return (
    <section
      id="experiencia"
      className="section process-section olhar-experience-section"
      aria-labelledby="experience-title"
    >
      <div className="site-shell olhar-experience-layout">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Reconhecimento local</p>
          <h2 id="experience-title">
            Reconhecimento que reforça a confiança de quem escolhe a Ótica da
            Família.
          </h2>
          <p>
            Além das avaliações no Google, a loja carrega registros de
            reconhecimento e uma presença local construída com atendimento
            próximo em Araguaína.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-experience-video-card" delay={0.08}>
          <div className="olhar-experience-video-frame olhar-experience-media-frame">
            <Image
              src="/assets/otica-da-familia/espaco/premiacao.webp"
              alt="Registro de premiação da Ótica da Família"
              fill
              sizes="(max-width: 430px) calc(100vw - 56px), 410px"
              loading="lazy"
            />
          </div>
          <div className="olhar-experience-video-caption">
            <Award size={17} aria-hidden="true" />
            <span>Registro de premiação e reconhecimento local.</span>
          </div>
        </AnimatedReveal>

        <div className="olhar-experience-list recognition-proof-grid">
          {recognitionItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedReveal
                className="olhar-experience-item"
                key={item.text}
                delay={index * 0.04}
              >
                <Icon size={20} aria-hidden="true" />
                <span>{item.text}</span>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}