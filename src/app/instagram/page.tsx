import type { Metadata } from 'next';
import Image from 'next/image';
import { ChevronRight, Glasses, Globe2, Instagram, MapPin, Star } from 'lucide-react';

import { InstagramVideos } from '@/components/InstagramVideos';
import { testimonials } from '@/data/testimonials';
import { site } from '@/lib/site';

import styles from './instagram.module.css';

export const metadata: Metadata = {
  title: 'Instagram | Ótica da Família',
  description:
    'Links rápidos da Ótica da Família em Araguaína: localização, Instagram, armações e site completo.',
};

const links = [
  {
    title: 'Como chegar',
    text: 'Abrir rota no Google Maps',
    href: site.mapsRouteUrl,
    icon: MapPin,
    variant: 'primary',
  },
  {
    title: 'Ver no Instagram',
    text: site.instagram,
    href: site.instagramUrl,
    icon: Instagram,
    variant: 'ghost',
  },
  {
    title: 'Conhecer armações',
    text: 'Ver vitrine no site',
    href: '/#vitrine',
    icon: Glasses,
    variant: 'ghost',
  },
  {
    title: 'Site completo',
    text: 'Abrir página principal',
    href: '/',
    icon: Globe2,
    variant: 'ghost',
  },
] as const;

const galleryRows = [
  [
    {
      src: '/assets/otica-da-familia/espaco/ambiente.png',
      alt: 'Ambiente interno da Ótica da Família',
    },
    {
      src: '/assets/otica-da-familia/espaco/atendimento-02.webp',
      alt: 'Atendimento na Ótica da Família',
    },
  ],
  [
    {
      src: '/assets/otica-da-familia/espaco/fachada.png',
      alt: 'Fachada da Ótica da Família',
    },
    {
      src: '/assets/otica-da-familia/colecoes/colecao-01.webp',
      alt: 'Armações em destaque',
    },
    {
      src: '/assets/otica-da-familia/colecoes/colecao-03.jpg',
      alt: 'Óculos solar em destaque',
    },
    {
      src: '/assets/otica-da-familia/colecoes/colecao-06.webp',
      alt: 'Detalhe de armação',
    },
  ],
] as const;

const videos = [
  {
    src: '/assets/otica-da-familia/videos/interno/interno-03.mp4',
    poster: '/assets/otica-da-familia/espaco/atendimento-02.webp',
    title: 'Por dentro da loja',
    caption: 'Um passeio rápido pelo ambiente da Ótica da Família.',
    featured: true,
  },
  {
    src: '/assets/otica-da-familia/videos/colecoes/colecao-06.mp4',
    poster: '/assets/otica-da-familia/colecoes/colecao-06.webp',
    title: 'Armações em destaque',
    caption: 'Detalhes de modelo e acabamento.',
    featured: false,
  },
  {
    src: '/assets/otica-da-familia/videos/interno/interno-01.mp4',
    poster: '/assets/otica-da-familia/espaco/atendimento-01.webp',
    title: 'Atendimento e detalhes',
    caption: 'Escolha acompanhada com atenção aos detalhes.',
    featured: false,
  },
] as const;

export default function InstagramPage() {
  const reviews = testimonials.slice(0, 6);

  return (
    <main className={styles.page}>
      <div className={`${styles.shell} ${styles.narrow}`}>
        <section className={styles.hero} aria-labelledby='instagram-title'>
          <div className={styles.brandBar}>
            <div className={styles.brandLockup}>
              <Image
                className={styles.logo}
                src={site.logoIcon}
                alt='Logo da Ótica da Família'
                width={72}
                height={72}
                priority
              />
              <div>
                <p className={styles.brandName}>Ótica da Família</p>
                <p className={styles.handle}>{site.instagram}</p>
              </div>
            </div>
            <div className={styles.proof} aria-label='Cinco de cinco no Google, dezesseis avaliações'>
              <Star aria-hidden='true' />
              <span>5/5 no Google · 16 avaliações</span>
            </div>
          </div>

          <div className={styles.intro}>
            <h1 id='instagram-title' className={styles.tagline}>
              Óculos, lentes e armações para ver o mundo com bons olhos.
            </h1>
            <p className={styles.bio}>
              Atendimento cuidadoso em Araguaína, com modelos para rotina, estilo e conforto visual.
            </p>
          </div>
        </section>

        <GalleryMarquee />

        <section className={styles.quickLinksSection} aria-labelledby='links-title'>
          <h2 id='links-title' className={styles.quickLinksTitle}>
            Links rápidos da Ótica da Família em Araguaína
          </h2>
          <nav className={styles.links} aria-label='Links principais da Ótica da Família'>
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className={`${styles.mainLink} ${link.variant === 'primary' ? styles.primary : styles.ghost}`}
                  href={link.href}
                  key={link.title}
                >
                  <span className={styles.linkIcon} aria-hidden='true'>
                    <Icon size={19} strokeWidth={2.2} />
                  </span>
                  <span>
                    <span className={styles.linkTitle}>{link.title}</span>
                    <span className={styles.linkText}>{link.text}</span>
                  </span>
                  <ChevronRight aria-hidden='true' size={18} />
                </a>
              );
            })}
          </nav>
        </section>

        <section className={`${styles.section} ${styles.sectionPanel}`} aria-labelledby='depoimentos-title'>
          <div className={styles.sectionHeading}>
            <h2 id='depoimentos-title'>Depoimentos</h2>
            <p>★★★★★ 5/5 no Google · 16 avaliações</p>
          </div>

          <div className={styles.testimonialGrid}>
            {reviews.map((review) => (
              <article className={styles.testimonialCard} key={review.name}>
                <div className={styles.testimonialStars} aria-label='Cinco estrelas'>
                  ★★★★★
                </div>
                <blockquote>{review.text}</blockquote>
                <cite>{review.name} · Google</cite>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionPanel}`} aria-labelledby='localizacao-title'>
          <div className={styles.sectionHeading}>
            <h2 id='localizacao-title'>Localização</h2>
            <p>Trace a rota oficial para chegar até a Ótica da Família.</p>
          </div>

          <div className={styles.locationList}>
            {site.locations.map((location) => (
              <a className={styles.locationCard} href={location.mapUrl} key={location.id}>
                <span className={styles.linkIcon} aria-hidden='true'>
                  <MapPin size={19} strokeWidth={2.2} />
                </span>
                <span>
                  <strong>{location.name}</strong>
                  <span>{location.address}</span>
                </span>
                <ChevronRight aria-hidden='true' size={18} />
              </a>
            ))}
          </div>
        </section>

        <InstagramVideos videos={videos} />

        <p className={styles.footer}>
          Ótica da Família · Araguaína - TO · Página rápida para a bio do Instagram.
        </p>
      </div>

      <a className={styles.fixedCta} href={site.mapsRouteUrl}>
        <MapPin aria-hidden='true' size={18} />
        Como chegar
      </a>
    </main>
  );
}

function GalleryMarquee() {
  return (
    <section className={styles.galleryMarquee} aria-label='Mini vitrine oficial da Ótica da Família'>
      {galleryRows.map((row, rowIndex) => (
        <div className={styles.galleryRow} data-direction={rowIndex === 0 ? 'forward' : 'reverse'} key={rowIndex}>
          <div className={styles.galleryTrack}>
            {Array.from({ length: 2 }).map((_, setIndex) => (
              <div className={styles.gallerySet} aria-hidden={setIndex > 0} key={setIndex}>
                {row.map((image, imageIndex) => (
                  <figure className={styles.galleryCard} key={`${image.src}-${setIndex}`}>
                    <Image
                      src={image.src}
                      alt={setIndex === 0 ? image.alt : ''}
                      fill
                      sizes={rowIndex === 0 ? '(max-width: 640px) 56vw, 220px' : '(max-width: 640px) 38vw, 160px'}
                      priority={rowIndex === 0 && setIndex === 0 && imageIndex < 2}
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}