'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './InstagramVideos.module.css';

type InstagramVideo = {
  src: string;
  poster: string;
  title: string;
  caption: string;
};

type InstagramVideosProps = {
  videos: readonly InstagramVideo[];
};

export function InstagramVideos({ videos }: InstagramVideosProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '180px 0px', threshold: 0.01 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
  }, [shouldLoad]);

  function handlePlay(activeIndex: number) {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause();
      }
    });
  }

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby='videos-title'>
      <div className={styles.heading}>
        <p className={styles.kicker}>Vídeos oficiais</p>
        <h2 id='videos-title'>Vídeos da Ótica da Família</h2>
        <p>Veja detalhes da loja, das armações e do atendimento em Araguaína.</p>
      </div>

      <div className={styles.rail}>
        {videos.map((video, index) => (
          <article className={styles.card} key={video.src}>
            <video
              ref={(node) => {
                videoRefs.current[index] = node;
              }}
              className={styles.video}
              controls
              muted
              playsInline
              preload={shouldLoad ? 'metadata' : 'none'}
              poster={video.poster}
              src={shouldLoad ? video.src : undefined}
              onPlay={() => handlePlay(index)}
            />
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

