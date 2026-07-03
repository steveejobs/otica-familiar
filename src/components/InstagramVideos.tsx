'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './InstagramVideos.module.css';

type InstagramVideo = {
  src: string;
  poster: string;
  title: string;
  caption: string;
  featured?: boolean;
};

type InstagramVideosProps = {
  videos: readonly InstagramVideo[];
};

export function InstagramVideos({ videos }: InstagramVideosProps) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const prefersReducedMotion = useRef(false);
  const [playingIndexes, setPlayingIndexes] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function syncReducedMotion() {
      const shouldReduce = mediaQuery.matches;
      prefersReducedMotion.current = shouldReduce;

      if (shouldReduce) {
        videoRefs.current.forEach((video) => video?.pause());
      }
    }

    syncReducedMotion();
    mediaQuery.addEventListener('change', syncReducedMotion);

    return () => mediaQuery.removeEventListener('change', syncReducedMotion);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting && !prefersReducedMotion.current) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '40px 0px', threshold: 0.35 },
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    const pauseOnHidden = () => {
      if (document.hidden) {
        videoRefs.current.forEach((video) => video?.pause());
      }
    };

    document.addEventListener('visibilitychange', pauseOnHidden);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', pauseOnHidden);
    };
  }, []);

  function markPlaying(index: number, isPlaying: boolean) {
    setPlayingIndexes((current) => {
      const next = new Set(current);

      if (isPlaying) {
        next.add(index);
      } else {
        next.delete(index);
      }

      return next;
    });
  }

  function playVideo(index: number) {
    const video = videoRefs.current[index];

    if (video) {
      void video.play().catch(() => undefined);
    }
  }

  return (
    <section className={styles.section} aria-labelledby='videos-title'>
      <div className={styles.heading}>
        <p className={styles.kicker}>Vídeos oficiais</p>
        <h2 id='videos-title'>Vídeos da Ótica da Família</h2>
        <p>Veja detalhes da loja, das armações e do atendimento em Araguaína.</p>
      </div>

      <div className={styles.editorialGrid}>
        {videos.map((video, index) => {
          const isPlaying = playingIndexes.has(index);

          return (
            <article
              className={`${styles.card} ${video.featured ? styles.featured : styles.side}`}
              key={video.src}
            >
              <div className={styles.mediaWrap}>
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  aria-label={video.title}
                  className={styles.video}
                  loop
                  muted
                  playsInline
                  preload='metadata'
                  poster={video.poster}
                  src={video.src}
                  onPlay={() => markPlaying(index, true)}
                  onPause={() => markPlaying(index, false)}
                  onEnded={() => markPlaying(index, false)}
                />
                <button
                  type='button'
                  className={`${styles.playButton} ${isPlaying ? styles.playButtonHidden : ''}`}
                  onClick={() => playVideo(index)}
                  aria-label={`Reproduzir vídeo: ${video.title}`}
                >
                  <span aria-hidden='true'>▶</span>
                </button>
              </div>
              <div className={styles.copy}>
                <h3>{video.title}</h3>
                <p>{video.caption}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
