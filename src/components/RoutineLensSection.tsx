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
    text: "Mais conforto diante de faróis, reflexos e cansaço visual.",
  },
  {
    icon: MonitorSmartphone,
    title: "Para trabalhar em telas",
    text: "Opções para uma rotina longa entre computador e celular.",
  },
  {
    icon: Sparkles,
    title: "Para renovar o visual",
    text: "Armações que acompanham seu rosto, estilo e personalidade.",
  },
  {
    icon: Sun,
    title: "Para usar no sol",
    text: "Óculos solar para combinar proteção, conforto e presença.",
  },
  {
    icon: Glasses,
    title: "Para o primeiro óculos",
    text: "Orientação próxima para comparar e escolher com segurança.",
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
            Comece pela necessidade que faz parte do seu dia.
          </h2>
          <p>
            Compare armações, lentes e óculos solar com atendimento próximo e
            uma escolha mais objetiva.
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
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${choice.title}: ver opções no Instagram`}
                >
                  Ver opções
                </a>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}