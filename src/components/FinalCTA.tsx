import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="section final-section"
      aria-labelledby="final-title"
    >
      <div className="site-shell final-panel">
        <div>
          <Image
            src={site.logoIcon}
            width={84}
            height={84}
            alt=""
            aria-hidden="true"
          />
          <p className="eyebrow">Ótica da Família</p>
          <h2 id="final-title">
            Escolha seus próximos óculos com atendimento próximo em Araguaína.
          </h2>
          <p>
            Veja modelos no Instagram ou abra a localização oficial para
            visitar a Ótica da Família.
          </p>
          <GoogleRatingBadge
            variant="inline"
            rating="5/5"
            reviews={`${site.reviewCount} avaliações`}
            className="final-rating"
          />
        </div>
        <div className="final-actions">
          <a
            href={site.instagramUrl}
            className="button button-red"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            Ver modelos no Instagram
          </a>
          <a
            href={site.mapsRouteUrl}
            className="button button-light"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Como chegar à Ótica da Família"
          >
            <MapPin size={18} aria-hidden="true" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}