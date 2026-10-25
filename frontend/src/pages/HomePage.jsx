import React, { useEffect } from "react";
import AboutSection from "../sections/AboutSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import DevelopmentsSection from "../sections/DevelopmentsSection.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import RedevelopmentSection from "../sections/RedevelopmentSection.jsx";
import SiteFooter from "../sections/SiteFooter.jsx";

export default function HomePage() {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-scroll-reveal]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    document.documentElement.classList.add("has-scroll-reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <DevelopmentsSection />
      <RedevelopmentSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
