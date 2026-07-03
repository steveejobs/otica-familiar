import Image from "next/image";
import {
  BadgeCheck,
  Glasses,
  HeartHandshake,
  MessageSquareText,
  Store,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import "@/app/media-phase-four-additions.css";

const experienceItems = [
  { icon: BadgeCheck, text: "Atendimento elogiado por clientes" },
  { icon: Store, text: "Ambiente agradável para escolher com calma" },
  { icon: Glasses, text: "Armações, lentes e óculos solar" },
  { icon: MessageSquareText, text: "Orientação clara durante a escolha" },
  { icon: HeartHandshake, text: "Atendimento próximo e cuidadoso" },
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
          <p className="eyebrow">Atendimento Ótica da Família</p>
          <h2 id="experience-title">Escolher bem começa com atenção.</h2>
          <p>
            Você encontra opções para diferentes estilos e uma equipe pronta
            para ajudar na escolha dos seus próximos óculos.
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
            <span>Atendimento, opções e cuidado em cada escolha.</span>
          </div>
        </AnimatedReveal>

        <div className="olhar-experience-list">
          {experienceItems.map((item, index) => {
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
