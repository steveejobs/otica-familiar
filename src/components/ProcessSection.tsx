import Image from "next/image";
import { Award, Glasses, HeartHandshake } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import "@/app/media-phase-four-additions.css";

const recognitionItems = [
  { icon: Award, text: "Reconhecimento em Araguaína" },
  { icon: HeartHandshake, text: "5/5 no Google com 16 avaliações" },
  {
    icon: Glasses,
    text: "Confiança para escolher armações e lentes",
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
            Reconhecimento local, avaliações reais e atendimento que geram
            confiança.
          </h2>
          <p>
            A Ótica da Família une presença em Araguaína, nota máxima no Google
            e cuidado na escolha de cada armação para deixar a visita mais segura.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-experience-video-card" delay={0.08}>
          <div className="olhar-experience-video-frame olhar-experience-media-frame">
            <Image
              src="/assets/otica-da-familia/espaco/premiacao-atual.webp"
              alt="Registro de premiação da Ótica da Família"
              fill
              sizes="(max-width: 430px) calc(100vw - 56px), 410px"
              loading="lazy"
            />
          </div>
          <div className="olhar-experience-video-caption">
            <Award size={17} aria-hidden="true" />
            <span>Registro de premiação que reforça a confiança local.</span>
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
