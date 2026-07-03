"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type PlaybackPreference = "play" | "pause" | null;

type ViewportVideoProps = {
  ariaLabel: string;
  className?: string;
  poster: string;
  src: string;
};

export function ViewportVideo({
  ariaLabel,
  className,
  poster,
  src,
}: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPreference, setPlaybackPreference] =
    useState<PlaybackPreference>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

    const syncPlayback = () => {
      const canAutoplay = desktopQuery.matches && !motionQuery.matches;
      const shouldPlay =
        isVisible &&
        (playbackPreference === "play" ||
          (playbackPreference === null && canAutoplay));

      if (shouldPlay) {
        void video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.28 },
    );

    observer.observe(video);
    desktopQuery.addEventListener("change", syncPlayback);
    motionQuery.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      desktopQuery.removeEventListener("change", syncPlayback);
      motionQuery.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, [playbackPreference]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setPlaybackPreference("play");
      void video.play().catch(() => setIsPlaying(false));
    } else {
      setPlaybackPreference("pause");
      video.pause();
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={className}
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        aria-label={ariaLabel}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        className="media-playback-button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <Pause size={18} aria-hidden="true" />
        ) : (
          <Play size={18} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
