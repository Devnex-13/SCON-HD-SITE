import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-main" data-scroll-reveal="1">
          <div className="footer-contact">
            <a className="footer-hd-mark" href="#home" aria-label="SCON-HD home">
              <img src="/images/scon-hd-brand-mark.png" alt="HD" />
            </a>
            <address>
              2nd Floor, Padale Palace, C.T.S. No. 11/B/2, Off Karve
              <br />
              Road, Near Nal Stop, Above Domino&apos;s, Erandwane,
              <br />
              Pune – 411004.
            </address>
            <p className="footer-telephone">
              Telephone:
              <br />
              <a href="tel:+912025441122">020 2544 1122 / 44</a>
            </p>
            <div className="footer-social" aria-label="Social media">
              <span role="img" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3.25"
                    y="3.25"
                    width="17.5"
                    height="17.5"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.7" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
              </span>
              <span role="img" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.7 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5H17V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.5v3.2h2.8V21h3.4Z"
                  />
                </svg>
              </span>
              <span role="img" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <div className="footer-link-column">
              <a href="#developments">Ongoing Projects</a>
              <a href="#developments">Completed Projects</a>
              <a href="#developments">Upcoming Projects</a>
              <a href="#navotsav">Redevelopment</a>
              <a href="#developments">Media</a>
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms &amp; Conditions</a>
              <a href="#contact">Contact us</a>
            </div>
            <div className="footer-link-column">
              <a href="#developments">3 BHK Premium</a>
              <a href="#developments">3-4 BHK Ultra-luxurious</a>
              <a href="#developments">Selected Developments</a>
              <a href="#developments">Luxurious Homes in Pune</a>
            </div>
          </nav>
        </div>

        <div className="footer-brand-row" data-scroll-reveal="2">
          <a
            className="footer-partner-brand"
            href="#home"
            aria-label="SCON-HD Developers"
          >
            <img
              src="/images/scon-hd-logo-white.png"
              alt="SCON-HD Harsh Deshmukh Developers"
            />
          </a>
          <p className="footer-copyright">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
            <br />
            SCON-HD DEVELOPERS
          </p>
        </div>

        <div className="footer-credit" data-scroll-reveal="3">
          Designed &amp; Developed by Expressive Color LLP
        </div>
      </div>
    </footer>
  );
}
