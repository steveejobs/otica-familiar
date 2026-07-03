"use client";

import {
  CarFront,
  Glasses,
  MonitorSmartphone,
  Sparkles,
  Sun,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const choices = [
  {
    icon: CarFront,
    title: "Para dirigir à noite",
    text: "Opções para buscar mais conforto diante de faróis, reflexos e cansaço visual.",
  },
  {
    icon: MonitorSmartphone,
    title: "Para trabalhar no computador",
    text: "Lentes e armações para quem passa muitas horas diante de telas.",
  },
  {
    icon: Sparkles,
    title: "Para renovar o estilo",
    text: "Armações que combinam com seu rosto, sua rotina e sua personalidade.",
  },
  {
    icon: Sun,
    title: "Para aproveitar o sol",
    text: "Óculos solar com conforto e estilo para acompanhar o seu dia.",
  },
  {
    icon: Glasses,
    title: "Para escolher seu primeiro óculos",
    text: "Atendimento cuidadoso para comparar opções com calma e confiança.",
  },
];

export function RoutineLensSection() {
  return (
    <section
      id="rotina"
      className="section routine-lens-section"
      aria-labelledby="routine-lens-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact">
          <p className="eyebrow">Escolha seus óculos</p>
          <h2 id="routine-lens-title">
            Encontre uma opção que faça sentido para você.
          </h2>
          <p>
            Cada pessoa tem uma rotina e um estilo. Na Ótica da Família, você
            compara armações, lentes e óculos solar com atendimento próximo.
          </p>
        </AnimatedReveal>

        <div className="olhar-choice-grid">
          {choices.map((choice, index) => {
            const Icon = choice.icon;

            return (
              <AnimatedReveal
                className="olhar-choice-card"
                key={choice.title}
                delay={index * 0.04}
              >
                <Icon size={22} aria-hidden="true" />
                <h3>{choice.title}</h3>
                <p>{choice.text}</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${choice.title}: ver opções no Instagram`}
                >
                  Ver opções no Instagram
                </a>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
