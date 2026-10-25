import React, { useEffect, useRef } from "react";
import ArrowIcon from "../components/ArrowIcon.jsx";
import SiteHeader from "../components/SiteHeader.jsx";

const frameSequenceEnd = 0.66;
const videoFrameRate = 60;
const videoSeekSmoothingMs = 240;
const videoSource = `${import.meta.env.BASE_URL}videos/Scon-hd-hero-1080p-60fps.mp4`;
const posterSource = `${import.meta.env.BASE_URL}images/hero-video-poster.jpg`;

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function HeroSection() {
  const trackRef = useRef(null);
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const targetVideoProgressRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!track || !hero || !video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const featureCards = hero.querySelectorAll(".hero-feature-card");
    let scrollAnimationFrameId = 0;
    let videoAnimationFrameId = 0;
    let previousVideoFrameTimestamp = 0;

    function updateVideoFrame(timestamp) {
      videoAnimationFrameId = 0;
      if (
        video.readyState < 1 ||
        video.seeking ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      const frameCount = Math.max(
        1,
        Math.round(video.duration * videoFrameRate),
      );
      const lastFrame = frameCount - 1;
      const targetFrame = Math.round(
        targetVideoProgressRef.current * lastFrame,
      );
      const currentFrame = clamp(
        Math.round(video.currentTime * videoFrameRate),
        0,
        lastFrame,
      );
      const remainingFrames = targetFrame - currentFrame;

      if (Math.abs(remainingFrames) < 1) {
        previousVideoFrameTimestamp = 0;
        return;
      }

      const elapsed = previousVideoFrameTimestamp
        ? Math.min(timestamp - previousVideoFrameTimestamp, 16.67)
        : 16.67;
      const easing = 1 - Math.exp(-elapsed / videoSeekSmoothingMs);
      const frameStep = Math.max(
        1,
        Math.round(Math.abs(remainingFrames) * easing),
      );
      const nextFrame =
        currentFrame + Math.sign(remainingFrames) * frameStep;
      const nextTime = clamp(nextFrame, 0, lastFrame) / videoFrameRate;

      previousVideoFrameTimestamp = timestamp;
      try {
        video.currentTime = nextTime;
      } catch (error) {
        previousVideoFrameTimestamp = 0;
        console.error("Unable to seek the hero background video.", error);
        return;
      }

      videoAnimationFrameId = window.requestAnimationFrame(updateVideoFrame);
    }

    function scheduleVideoUpdate() {
      if (!videoAnimationFrameId) {
        videoAnimationFrameId = window.requestAnimationFrame(updateVideoFrame);
      }
    }

    function updateHeroProgress(progress) {
      const copyRevealProgress = clamp(progress / 0.22, 0, 1);
      const copyExitProgress = clamp((progress - 0.42) / 0.2, 0, 1);
      const copyLiftProgress = clamp((progress - 0.42) / 0.2, 0, 1);
      const cardProgress = clamp(
        (progress - frameSequenceEnd) / (1 - frameSequenceEnd),
        0,
        1,
      );

      hero.style.setProperty("--hero-copy-exit", copyExitProgress);
      hero.style.setProperty(
        "--hero-copy-translate-y",
        `${copyLiftProgress * -500}px`,
      );
      hero.style.setProperty(
        "--hero-description-opacity",
        copyRevealProgress * (1 - copyExitProgress),
      );
      hero.style.setProperty(
        "--hero-description-translate-y",
        `${(1 - copyRevealProgress) * 42}px`,
      );

      featureCards.forEach((card, index) => {
        const isLink = card.classList.contains("hero-feature-card-link");
        const reveal = isLink
          ? clamp((cardProgress - 0.6) / 0.2, 0, 1)
          : clamp((cardProgress - index * 0.2) / 0.2, 0, 1);
        const isVisible = isLink ? cardProgress >= 0.8 : reveal > 0;

        card.style.setProperty("--card-reveal", reveal);
        card.setAttribute("aria-hidden", String(!isVisible));

        if (isLink) {
          card.tabIndex = isVisible ? 0 : -1;
          card.style.pointerEvents = isVisible ? "auto" : "none";
        }
      });

      targetVideoProgressRef.current = Math.min(
        progress / frameSequenceEnd,
        1,
      );
      scheduleVideoUpdate();
    }

    function updateScrollProgress() {
      scrollAnimationFrameId = 0;
      const scrollDistance = track.offsetHeight - window.innerHeight;
      const trackTop = window.scrollY + track.getBoundingClientRect().top;
      const progress =
        scrollDistance > 0
          ? clamp((window.scrollY - trackTop) / scrollDistance, 0, 1)
          : 0;

      updateHeroProgress(progress);
    }

    function scheduleScrollUpdate() {
      if (!scrollAnimationFrameId) {
        scrollAnimationFrameId =
          window.requestAnimationFrame(updateScrollProgress);
      }
    }

    function handleVideoMetadata() {
      video.pause();
      scheduleVideoUpdate();
    }

    function handleVideoSeeked() {
      scheduleVideoUpdate();
    }

    function handleVideoLoadedData() {
      video.classList.add("is-ready");
    }

    function handleVideoError() {
      video.classList.remove("is-ready");
      console.error(
        "Failed to load the hero background video.",
        video.error?.message ?? "The browser could not decode the video.",
      );
    }

    video.addEventListener("loadedmetadata", handleVideoMetadata);
    video.addEventListener("seeked", handleVideoSeeked);
    video.addEventListener("loadeddata", handleVideoLoadedData);
    video.addEventListener("error", handleVideoError);

    if (prefersReducedMotion) {
      featureCards.forEach((card) => {
        card.setAttribute("aria-hidden", "false");
        if (card.classList.contains("hero-feature-card-link")) {
          card.tabIndex = 0;
          card.style.pointerEvents = "auto";
        }
      });

      return () => {
        video.removeEventListener("loadedmetadata", handleVideoMetadata);
        video.removeEventListener("seeked", handleVideoSeeked);
        video.removeEventListener("loadeddata", handleVideoLoadedData);
        video.removeEventListener("error", handleVideoError);
        video.pause();
      };
    }

    scheduleScrollUpdate();
    window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
    window.addEventListener("resize", scheduleScrollUpdate);

    return () => {
      window.cancelAnimationFrame(scrollAnimationFrameId);
      window.cancelAnimationFrame(videoAnimationFrameId);
      window.removeEventListener("scroll", scheduleScrollUpdate);
      window.removeEventListener("resize", scheduleScrollUpdate);
      video.removeEventListener("loadedmetadata", handleVideoMetadata);
      video.removeEventListener("seeked", handleVideoSeeked);
      video.removeEventListener("loadeddata", handleVideoLoadedData);
      video.removeEventListener("error", handleVideoError);
      video.pause();
    };
  }, []);

  const featureCards = [
    {
      title: "Location, chosen with care.",
      description:
        "A focus on established and sought-after neighbourhoods.",
    },
    {
      title: "Quality, built into every decision.",
      description: "Attention to planning, materials and execution.",
    },
    {
      title: "Commitment, beyond the promise.",
      description:
        "A personal, responsible approach to every development.",
    },
  ];

  return (
    <section className="hero-frame-track" ref={trackRef}>
      <div className="hero" id="home" ref={heroRef}>
        <img
          className="hero-video-poster"
          src={posterSource}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
        <video
          ref={videoRef}
          className="hero-background-video"
          src={videoSource}
          poster={posterSource}
          aria-hidden="true"
          tabIndex={-1}
          muted
          playsInline
          preload="auto"
        />
        <SiteHeader />
        <div className="hero-scroll-copy" aria-live="off">
          <h2 className="hero-scroll-title">Pune, at its most distinguished.</h2>
          <p className="hero-scroll-description">
            Exceptional residences in the city's most sought-after neighbourhoods.
          </p>
        </div>
        <div className="hero-feature-cards" aria-label="Our commitments">
          {featureCards.map((card) => (
            <article
              className="hero-feature-card"
              key={card.title}
              aria-hidden="true"
              style={{ "--card-reveal": 0 }}
            >
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          ))}
          <a
            className="hero-feature-card hero-feature-card-link"
            href="#developments"
            aria-hidden="true"
            tabIndex={-1}
            style={{ pointerEvents: "none", "--card-reveal": 0 }}
          >
            <h2>Explore Our Residences</h2>
            <span className="hero-feature-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
        {/* <div className="hero-footer">
          <span>Independent thinking. Lasting places.</span>
          <a href="#about">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
