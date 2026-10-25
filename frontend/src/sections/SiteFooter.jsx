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
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
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
