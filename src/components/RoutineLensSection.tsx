"use client";

import {
  CarFront,
  Glasses,
  Instagram,
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
    text: "Mais conforto com faróis e reflexos.",
  },
  {
    icon: MonitorSmartphone,
    title: "Para trabalhar em telas",
    text: "Opções para computador e celular.",
  },
  {
    icon: Sparkles,
    title: "Para renovar o visual",
    text: "Armações para atualizar seu estilo.",
  },
  {
    icon: Sun,
    title: "Para usar no sol",
    text: "Solar para proteção e presença.",
  },
  {
    icon: Glasses,
    title: "Para o primeiro óculos",
    text: "Orientação para escolher com segurança.",
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
          <h2 id="routine-lens-title">Escolha pelo seu momento.</h2>
          <p>
            Cinco caminhos rápidos para encontrar armações, lentes ou óculos solar.
          </p>
        </AnimatedReveal>

        <div className="olhar-choice-grid">
          {choices.map((choice, index) => {
            const Icon = choice.icon;

            return (
              <AnimatedReveal
                className="olhar-choice-card"
                key={choice.title}
                delay={index * 0.035}
              >
                <Icon size={21} aria-hidden="true" />
                <h3>{choice.title}</h3>
                <p>{choice.text}</p>
              </AnimatedReveal>
            );
          })}
        </div>

        <AnimatedReveal className="choice-section-cta" delay={0.08}>
          <a
            href={site.instagramUrl}
            className="button button-red"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver modelos da Ótica da Família no Instagram"
          >
            <Instagram size={17} aria-hidden="true" />
            Ver modelos no Instagram
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}