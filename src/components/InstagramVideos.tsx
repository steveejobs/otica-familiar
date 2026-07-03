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
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: 0.25 },
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

  function handlePlay(activeVideoIndex: number) {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideoIndex) {
        video.pause();
      }
    });
    setActiveIndex(activeVideoIndex);
  }

  function handlePause(index: number) {
    setActiveIndex((current) => (current === index ? null : current));
  }

  function playVideo(index: number) {
    const video = videoRefs.current[index];

    if (video) {
      void video.play();
    }
  }

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby='videos-title'>
      <div className={styles.heading}>
        <p className={styles.kicker}>Vídeos oficiais</p>
        <h2 id='videos-title'>Vídeos da Ótica da Família</h2>
        <p>Veja detalhes da loja, das armações e do atendimento em Araguaína.</p>
      </div>

      <div className={styles.editorialGrid}>
        {videos.map((video, index) => (
          <article
            className={`${styles.card} ${video.featured ? styles.featured : styles.side}`}
            key={video.src}
          >
            <div className={styles.mediaWrap}>
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                className={styles.video}
                controls
                muted
                playsInline
                preload='metadata'
                poster={video.poster}
                src={video.src}
                onPlay={() => handlePlay(index)}
                onPause={() => handlePause(index)}
                onEnded={() => handlePause(index)}
              />
              <button
                type='button'
                className={`${styles.playButton} ${activeIndex === index ? styles.playButtonHidden : ''}`}
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
        ))}
      </div>
    </section>
  );
}
