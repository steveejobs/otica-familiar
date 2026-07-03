"use client";

import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingInstagram() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.querySelector(".olhar-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.28),
      { threshold: [0, 0.28, 0.6] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.instagramUrl}
      className={`floating-instagram${heroVisible ? " is-hidden-on-hero" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver a Ótica da Família no Instagram"
      aria-hidden={heroVisible}
      tabIndex={heroVisible ? -1 : undefined}
    >
      <Instagram size={17} aria-hidden="true" />
      <span>Ver no Instagram</span>
    </a>
  );
}
