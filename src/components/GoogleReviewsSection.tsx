import { AnimatedReveal } from "@/components/AnimatedReveal";
import { GoogleRatingBadge } from "@/components/GoogleRatingBadge";
import {
  TestimonialsColumn,
  TestimonialsMobileMarquee,
} from "@/components/ui/testimonials-columns-1";
import { testimonials, testimonialsSummary } from "@/data/testimonials";

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export function GoogleReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="section google-reviews-section testimonials-section"
      aria-labelledby="google-reviews-title"
    >
      <div className="site-shell testimonials-shell">
        <AnimatedReveal className="section-heading compact testimonials-heading">
          <p className="eyebrow">Avaliações no Google</p>
          <h2 id="google-reviews-title">
            Quem visita a Ótica da Família recomenda.
          </h2>
          <p>
            Nota 5/5 no Google, com {testimonialsSummary.total} avaliações de
            clientes em Araguaína.
          </p>
        </AnimatedReveal>

        <AnimatedReveal className="testimonials-rating-wrap" delay={0.08}>
          <GoogleRatingBadge
            variant="card"
            rating="5/5"
            reviews={`${testimonialsSummary.total} avaliações`}
          />
        </AnimatedReveal>
      </div>

      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={`review-${testimonial.name}`}>
            {testimonial.text} {testimonial.name}. Origem: {testimonial.source}.
          </li>
        ))}
      </ul>

      <div className="site-shell testimonials-columns-wrap testimonials-desktop-marquee">
        <TestimonialsColumn
          testimonials={firstColumn}
          className="testimonials-column"
          duration={28}
        />
        <TestimonialsColumn
          testimonials={secondColumn}
          className="testimonials-column testimonials-column-tablet"
          duration={34}
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          className="testimonials-column testimonials-column-desktop"
          duration={31}
        />
      </div>

      <TestimonialsMobileMarquee testimonials={testimonials} />
    </section>
  );
}
