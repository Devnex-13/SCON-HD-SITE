import React from "react";
import ArrowIcon from "../components/ArrowIcon.jsx";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-backdrop" aria-hidden="true" />
      <div className="about-inner">
        <div className="anniversary" data-scroll-reveal="1">
          <img src="/images/37-years-of-legacy.png" alt="37 Years" />
        </div>

        <div className="about-content" data-scroll-reveal="2">
          <p className="eyebrow about-eyebrow">About us</p>
          <div className="about-rule" />
          <div className="about-grid">
            <h2>
              A legacy built on <strong>trust.</strong>
              <br />
              A future <strong>shaped with care.</strong>
            </h2>
            <div className="about-copy">
              <p>
                Since 1989, SCON has approached real estate with a considered
                eye for location, a commitment to quality and a hands-on
                approach to construction.
              </p>
              <p>
                From established neighbourhoods to thoughtfully planned
                residences, every development reflects our belief that a home
                deserves more than good design. It deserves lasting value and
                the confidence of being in trusted hands.
              </p>
              <a className="button button-dark" href="mailto:hello@scon.com">
                Explore <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
