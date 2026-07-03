import Image from "next/image";
import { MapPin, Navigation, Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

export function FacadeSection() {
  return (
    <section
      className="section facade-section"
      aria-labelledby="facade-section-title"
    >
      <div className="site-shell facade-panel">
        <AnimatedReveal className="facade-media">
          <Image
            src="/assets/otica-da-familia/espaco/fachada.png"
            alt="Fachada da Ótica da Família em Araguaína"
            fill
            sizes="(max-width: 760px) calc(100vw - 32px), 58vw"
            loading="lazy"
          />
        </AnimatedReveal>

        <AnimatedReveal className="facade-copy" delay={0.06}>
          <span className="facade-seal">
            <MapPin size={15} aria-hidden="true" />
            Araguaína - TO
          </span>
          <h2 id="facade-section-title">
            Encontre a Ótica da Família em Araguaína.
          </h2>
          <p>Veja a fachada da loja e abra a rota oficial para chegar com facilidade.</p>
          <div className="facade-proof" aria-label="Avaliação 5 de 5 no Google com 16 avaliações">
            <span aria-hidden="true">
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </span>
            <strong>5/5 no Google · {site.reviewCount} avaliações</strong>
          </div>
          <a
            href={site.mapsRouteUrl}
            className="button button-red"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir rota oficial para a Ótica da Família"
          >
            <Navigation size={17} aria-hidden="true" />
            Como chegar
          </a>
        </AnimatedReveal>
      </div>
    </section>
  );
}