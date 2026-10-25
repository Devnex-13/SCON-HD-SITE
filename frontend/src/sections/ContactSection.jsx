import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-top" data-scroll-reveal="1">
          <div className="contact-intro">
            <h2>
              Your next address begins
              <br />
              with a conversation.
            </h2>
            <p>Discover a residence by SCON-HD</p>
          </div>
          <nav className="project-links" aria-label="Project information">
            <a href="#developments">
              <span>Visit Upcoming Projects</span>
              <span className="project-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="#developments">
              <span>Visit Ongoing Projects</span>
              <span className="project-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </nav>
        </div>

        <form className="contact-form" data-scroll-reveal="2">
          <div className="contact-fields">
            <label className="contact-field contact-name">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label className="contact-field contact-phone">
              <span>Contact No.</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label className="contact-field contact-email">
              <span>Email ID</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
              />
            </label>
            <label className="contact-field contact-message">
              <span>Message</span>
              <textarea name="message" rows="2" />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
