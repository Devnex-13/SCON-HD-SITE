import React, { useState } from "react";
import SqueezeCarousel from "../components/SqueezeCarousel/SqueezeCarousel.jsx";

const developments = {
  Residential: [
    {
      name: "Emerald",
      location: "Law College Road",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Grove",
      location: "Prabhat Road",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Aurelia",
      location: "Koregaon Park",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Verde",
      location: "Baner",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "The Address",
      location: "Model Colony",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Parkside",
      location: "Erandwane",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Willow",
      location: "Aundh",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "The Courtyard",
      location: "Shivajinagar",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    },
  ],
  Commercial: [
    {
      name: "One Central",
      location: "Senapati Bapat Road",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Exchange",
      location: "Baner Road",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Westworks",
      location: "Hinjawadi",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Meridian",
      location: "Kalyani Nagar",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Business Bay",
      location: "Yerawada",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "The Foundry",
      location: "Pimpri",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Summit",
      location: "Magarpatta",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Workplace",
      location: "Viman Nagar",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    },
  ],
};

const slides = Object.entries(developments).flatMap(([category, projects]) =>
  projects.map((project, index) => ({
    id: `${category}-${index}`,
    category,
    title: project.name,
    image: project.image,
    imageAlt: `${project.name}, ${project.location}`,
    overlay: (
      <span className="development-slide-label">
        <span>{category}</span>
        <strong>{project.name}</strong>
        <small>{project.location}</small>
      </span>
    ),
    href: "#contact",
  })),
);

export default function DevelopmentsSection() {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const categorySlides = slides.filter(
    (slide) => slide.category === activeCategory,
  );

  return (
    <section className="developments" id="developments">
      <div className="developments-inner">
        <p
          className="eyebrow developments-eyebrow"
          data-scroll-reveal="1"
        >
          Selected developments
        </p>
        <div className="developments-intro" data-scroll-reveal="2">
          <h2>
            Distinctive addresses.
            <br />
            Considered residences.
          </h2>
          <p>
            Explore a selection of residential and commercial developments
            across some of Pune&apos;s most established neighbourhoods.
          </p>
        </div>

        <div className="development-carousel" data-scroll-reveal="3">
          <SqueezeCarousel
            key={activeCategory}
            slides={categorySlides}
            label="Selected developments"
            height="clamp(180px, 26cqi, 310px)"
            radius={0}
            accent="#171615"
            accentForeground="#ffffff"
            controlsPlacement="below"
            showCounter
            showDetails={false}
            heroNextButton
            controlsAfter={
              <div
                className="development-categories"
                role="group"
                aria-label="Development category"
              >
                {Object.keys(developments).map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    className={activeCategory === category ? "is-active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            }
            autoplay
            interval={3000}
          />
        </div>
      </div>
    </section>
  );
}
