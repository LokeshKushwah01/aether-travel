"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Journey {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  duration: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  image: string;
  alt: string;
  description: string;
}

const allJourneys: Journey[] = [
  {
    id: "desert-dunes",
    title: "Saharan Silence",
    subtitle: "Desert Dunes Expedition",
    region: "Morocco · Algeria",
    duration: "12 Nights",
    tag: "Wilderness",
    tagColor: "#BCB499",
    tagBg: "rgba(188,180,153,0.15)",
    image: "/card-desert.png",
    alt: "Sahara desert dunes at sunset",
    description: "Venture deep into the silent expanse of the Erg Chebbi. Spend nights under an ocean of stars in our luxury tented outpost.",
  },
  {
    id: "petra",
    title: "Petra at Dawn",
    subtitle: "Ancient World Immersion",
    region: "Jordan",
    duration: "8 Nights",
    tag: "Heritage",
    tagColor: "#D1A877",
    tagBg: "rgba(209,168,119,0.15)",
    image: "/card-petra.png",
    alt: "Petra ancient carved stone city at dusk",
    description: "Walk the sandstone canyons before gates open. Experience the private candlelit treasury and sleep in a restored Nabataean cave estate.",
  },
  {
    id: "morocco",
    title: "Medina Mystique",
    subtitle: "Moroccan Village Retreat",
    region: "Marrakech · Fes",
    duration: "10 Nights",
    tag: "Culture",
    tagColor: "#C8A08A",
    tagBg: "rgba(200,160,138,0.15)",
    image: "/card-morocco.png",
    alt: "Traditional Moroccan village narrow alley",
    description: "Navigate private spice markets and traditional artisans with local historians. Relax in exclusive architectural riads.",
  },
  {
    id: "bhutan",
    title: "Himalayan Sanctuary",
    subtitle: "Sacred Kingdom Exploration",
    region: "Bhutan",
    duration: "14 Nights",
    tag: "Wellness",
    tagColor: "#BCB499",
    tagBg: "rgba(188,180,153,0.15)",
    image: "/card-bhutan.png",
    alt: "Ornate cliffside Buddhist monastery in Bhutan",
    description: "Hike to clifftop monasteries and participate in private Buddhist meditation rituals. Stay in luxury mountainside valley lodges.",
  },
  {
    id: "patagonia",
    title: "Patagonian Icefields",
    subtitle: "Southern Fjords Expedition",
    region: "Chile · Argentina",
    duration: "11 Nights",
    tag: "Wilderness",
    tagColor: "#D1A877",
    tagBg: "rgba(209,168,119,0.15)",
    image: "/card-patagonia.png",
    alt: "Granite peaks of Torres del Paine reflecting in a glacial lake",
    description: "Trek rugged granite peaks and kayak massive glacial lakes. Dine on organic local estates and sleep at modern wilderness domes.",
  },
  {
    id: "amalfi",
    title: "Amalfi Cliffside",
    subtitle: "Mediterranean Coast Retreat",
    region: "Italy",
    duration: "7 Nights",
    tag: "Culture",
    tagColor: "#C8A08A",
    tagBg: "rgba(200,160,138,0.15)",
    image: "/card-amalfi.png",
    alt: "Positano cliffside houses on the Amalfi Coast",
    description: "Cruise private hidden coves on a vintage wooden yacht. Explore terraced lemon orchards and dine at Michelin-starred cliffside riads.",
  },
];

const categories = ["All", "Wilderness", "Heritage", "Culture", "Wellness"];

export default function DestinationsPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredJourneys = selectedTag === "All"
    ? allJourneys
    : allJourneys.filter((j) => j.tag === selectedTag);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main
        style={{
          background: "var(--color-cream)",
          color: "var(--color-charcoal)",
          paddingTop: "9rem",
          paddingBottom: "8rem",
          minHeight: "100vh",
        }}
      >
        {/* Banner Title */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "4.5rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            <span className="divider-line" />
            Our Portfolio
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
              lineHeight: 1.1,
              maxWidth: "800px",
              marginBottom: "1.5rem",
            }}
          >
            Bespoke{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Expeditions
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.95rem",
              color: "rgba(58,61,66,0.65)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            A curated selection of deeply personal journeys, designed for the curious traveler seeking the extraordinary.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.85rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.62rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(58,61,66,0.45)",
              marginRight: "1rem",
            }}
          >
            Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.5rem 1.35rem",
                borderRadius: "9999px",
                border: "1.5px solid",
                borderColor: selectedTag === cat ? "var(--color-charcoal)" : "rgba(188,180,153,0.35)",
                color: selectedTag === cat ? "var(--color-cream)" : "var(--color-charcoal)",
                background: selectedTag === cat ? "var(--color-charcoal)" : "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Journeys */}
        <div
          className="journeys-grid"
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gap: "2.5rem 1.75rem",
          }}
        >
          {filteredJourneys.map((j) => (
            <article
              key={j.id}
              className="journey-card"
              style={{ height: "540px" }}
              id={`journey-card-${j.id}`}
              aria-label={j.title}
            >
              {/* Image */}
              <div className="journey-card-img-wrapper">
                <Image
                  src={j.image}
                  alt={j.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="parallax-img"
                  priority
                />
              </div>

              {/* Gradient overlay */}
              <div className="journey-card-overlay" />

              {/* Content */}
              <div className="journey-card-content">
                {/* Tag */}
                <span
                  className="journey-card-tag"
                  style={{
                    color: j.tagColor,
                    background: j.tagBg,
                    border: `1px solid ${j.tagColor}40`,
                  }}
                >
                  {j.tag}
                </span>

                {/* Title */}
                <h3 className="journey-card-title">{j.title}</h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(249,244,235,0.55)",
                    marginBottom: "0.65rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {j.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    color: "rgba(249,244,235,0.65)",
                    marginBottom: "1rem",
                    maxWidth: "280px",
                  }}
                >
                  {j.description}
                </p>

                {/* Meta */}
                <div className="journey-card-meta" style={{ opacity: 1, transform: "none" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 12C6 12 1.5 7.5 1.5 5a4.5 4.5 0 019 0C10.5 7.5 6 12 6 12z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  {j.region}
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(249,244,235,0.3)", display: "block" }} />
                  {j.duration}
                </div>

                {/* CTA */}
                <div className="journey-card-cta" style={{ opacity: 1, transform: "none" }}>
                  Request Details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
