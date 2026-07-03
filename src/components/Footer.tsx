import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <a
            href="#top"
            className="footer-brand"
            aria-label="Ótica da Família, voltar ao início"
          >
            <Image
              src={site.logoIcon}
              width={72}
              height={72}
              alt=""
              aria-hidden="true"
            />
            <span>
              <strong>{site.shortName}</strong>
              <small>Ótica em Araguaína - TO</small>
            </span>
          </a>
          <p>
            Armações, lentes e óculos solar com atendimento cuidadoso para
            ajudar você a escolher bem.
          </p>
        </div>

        <address>
          <strong>Localização</strong>
          <span>{site.displayAddress}</span>
          <a href={site.mapsRouteUrl} target="_blank" rel="noopener noreferrer">
            <MapPin size={15} aria-hidden="true" />
            Como chegar
          </a>
          <a
            href={site.instagramUrl}
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir Instagram da Ótica da Família: ${site.instagram}`}
          >
            <Instagram size={15} aria-hidden="true" />
            Instagram: {site.instagram}
          </a>
        </address>

        <nav aria-label="Links rápidos do rodapé">
          <strong>Navegação</strong>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
