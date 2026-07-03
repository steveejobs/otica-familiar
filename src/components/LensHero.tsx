"use client";

import Image from "next/image";
import { Instagram, Navigation, Sparkles } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ViewportVideo } from "@/components/ViewportVideo";
import { site } from "@/lib/site";
import "@/app/media-phase-four.css";

const HERO_VIDEO = "/assets/otica-da-familia/videos/interno/interno-03.mp4";
const HERO_POSTER = "/assets/otica-da-familia/espaco/atendimento-02.webp";

export function LensHero() {
  return (
    <section className="olhar-hero" aria-labelledby="hero-title">
      <div className="site-shell olhar-hero-grid">
        <AnimatedReveal className="olhar-hero-copy">
          <Image
            src={site.logoFull}
            width={803}
            height={808}
            alt="Ótica da Família"
            priority
            className="olhar-hero-logo"
          />
          <p className="eyebrow">Ótica em Araguaína - TO</p>
          <h1 id="hero-title">
            Óculos, lentes e armações para ver o mundo com bons olhos.
          </h1>
          <p>
            Atendimento próximo em Araguaína para escolher armações, lentes e
            óculos solar com mais segurança.
          </p>

          <div className="hero-actions olhar-hero-actions">
            <a
              href={site.instagramUrl}
              className="button button-red"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver a Ótica da Família no Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
              Ver no Instagram
            </a>
            <a
              href={site.mapsRouteUrl}
              className="button button-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Como chegar à Ótica da Família"
            >
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal className="olhar-hero-visual" delay={0.12}>
          <div className="olhar-hero-media">
            <ViewportVideo
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              className="olhar-hero-video"
              ariaLabel="Vídeo do ambiente interno da Ótica da Família"
            />
          </div>
          <div className="olhar-hero-note">
            <Sparkles size={18} aria-hidden="true" />
            <span>Armações, lentes e óculos solar para o seu dia a dia.</span>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}