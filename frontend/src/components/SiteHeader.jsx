import React from "react";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="SCON home">
        <img src="/images/scon-hd-logo-colored.png" alt="SCON-HD Developers" />
      </a>
      <nav aria-label="Main navigation" className="main-nav">
        <a className="is-current" href="#home">Home</a>
        <a href="#about">About SCON</a>
        <a href="#developments">Residences</a>
        <a href="#navotsav">Redevelopment</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
