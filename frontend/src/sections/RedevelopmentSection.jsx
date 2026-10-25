import React from "react";

export default function RedevelopmentSection() {
  return (
    <section className="redevelopment" id="navotsav">
      <img
        className="redevelopment-image"
        src="/images/sunlit-cozy-morning.png"
        alt=""
        aria-hidden="true"
      />
      <div className="redevelopment-shade" aria-hidden="true" />
      <div className="redevelopment-inner">
        <p
          className="eyebrow redevelopment-eyebrow"
          data-scroll-reveal="1"
        >
          Selected developments
        </p>
        <div className="redevelopment-grid" data-scroll-reveal="2">
          <h2>
            A <strong>new chapter</strong> for
            <br />
            a place you call <strong>home.</strong>
          </h2>
          <div className="redevelopment-copy">
            <p>
              Redevelopment is more than rebuilding a structure. It is about
              preserving a sense of belonging while creating a home that meets
              the aspirations of tomorrow.
            </p>
            <p>
              Through Navotsav, our redevelopment initiative with IKON and
              Harsh Deshmukh Developers, we bring together construction
              experience, planning and a considered approach to the transition.
            </p>
            <a
              className="button button-dark redevelopment-cta"
              href="mailto:hello@scon.com?subject=Discover%20Navotsav"
            >
              Discover Navotsav
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
