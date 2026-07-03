import { Instagram, MapPin, Navigation } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { site } from "@/lib/site";

export function FocusGallery() {
  return (
    <section
      id="contato"
      className="section trust-section location-section"
      aria-labelledby="trust-title"
    >
      <div className="site-shell">
        <AnimatedReveal className="section-heading compact location-heading">
          <p className="eyebrow">Como chegar</p>
          <h2 id="trust-title">Visite a Ótica da Família em Araguaína.</h2>
          <p>Abra a localização oficial no Google Maps e trace sua rota.</p>
        </AnimatedReveal>

        <div className="olhar-location-grid">
          {site.locations.map((location) => (
            <AnimatedReveal className="olhar-location-card" key={location.id}>
              <span className="location-seal">Araguaína - TO</span>
              <h3>{location.name}</h3>
              <address>
                <MapPin size={18} aria-hidden="true" />
                <span>{location.address}</span>
              </address>
              <div className="location-actions">
                <a
                  href={location.mapUrl}
                  className="button button-red"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir localização oficial da Ótica da Família"
                >
                  <Navigation size={17} aria-hidden="true" />
                  Como chegar
                </a>
                <a
                  href={site.instagramUrl}
                  className="button button-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Instagram da Ótica da Família"
                >
                  <Instagram size={17} aria-hidden="true" />
                  Ver no Instagram
                </a>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
