import {
  HeartHandshake,
  Instagram,
  MapPin,
  Route,
  Store,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

const visitSteps = [
  { icon: Instagram, text: "Veja modelos no Instagram" },
  { icon: Route, text: "Salve a rota no Maps" },
  { icon: Store, text: "Experimente com calma na loja" },
  {
    icon: HeartHandshake,
    text: "Peça orientação para escolher armação, lente ou solar",
  },
];

export function BeforeVisitSection() {
  return (
    <section
      className="section before-visit-section"
      aria-labelledby="before-visit-title"
    >
      <div className="site-shell before-visit-panel">
        <AnimatedReveal className="before-visit-copy">
          <p className="eyebrow">Antes de visitar</p>
          <h2 id="before-visit-title">Planeje sua escolha em poucos passos.</h2>
          <p>
            Consulte modelos, abra a rota e conte com orientação quando chegar.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="before-visit-content" delay={0.06}>
          <ul>
            {visitSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.text}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{step.text}</span>
                </li>
              );
            })}
          </ul>
          <div className="before-visit-actions">
            <a
              href={site.instagramUrl}
              className="button button-red"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} aria-hidden="true" />
              Ver modelos no Instagram
            </a>
            <a
              href={site.mapsRouteUrl}
              className="button button-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={17} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}