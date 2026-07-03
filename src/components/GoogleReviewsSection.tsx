import { Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { testimonials, testimonialsSummary } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function GoogleReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="section google-reviews-section testimonials-section"
      aria-labelledby="google-reviews-title"
    >
      <div className="site-shell">
        <div className="testimonials-shell phase-five-testimonials-head">
          <AnimatedReveal className="section-heading compact testimonials-heading">
            <p className="eyebrow">Avaliações no Google</p>
            <h2 id="google-reviews-title">
              Quem visita a Ótica da Família recomenda.
            </h2>
            <p>
              Relatos reais sobre atendimento, ambiente e qualidade em
              Araguaína.
            </p>
          </AnimatedReveal>

          <AnimatedReveal className="phase-five-rating-bar" delay={0.06}>
            <span aria-hidden="true">★★★★★</span>
            <strong>
              {testimonialsSummary.rating}/5 no Google ·{" "}
              {testimonialsSummary.total} avaliações
            </strong>
          </AnimatedReveal>
        </div>

        <AnimatedReveal className="phase-five-testimonials-wrap" delay={0.08}>
          <ul className="phase-five-testimonials-grid">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <article className="phase-five-testimonial-card">
                  <span className="testimonial-stars" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <p>{testimonial.text}</p>
                  <div className="testimonial-author">
                    <span className="testimonial-avatar" aria-hidden="true">
                      {initials(testimonial.name)}
                    </span>
                    <span>
                      <strong>{testimonial.name}</strong>
                      <small>Origem: {testimonial.source}</small>
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </AnimatedReveal>
      </div>
    </section>
  );
}