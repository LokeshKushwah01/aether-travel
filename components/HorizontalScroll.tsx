"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  accent: string;
}

const journeys: Journey[] = [
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
    accent: "#BCB499",
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
    accent: "#D1A877",
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
    accent: "#C8A08A",
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading reveal on scroll ──
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // ── Cards staggered reveal ──
      const cards = cardsRef.current?.querySelectorAll(".journey-card");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 70,
          opacity: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── Parallax on card images ──
      const imgs = document.querySelectorAll(".parallax-img");
      imgs.forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journeys"
      aria-label="Featured journeys"
      style={{ background: "var(--color-cream)", padding: "9rem 0 7rem" }}
    >
      {/* Section Header */}
      <div
        ref={headingRef}
        style={{
          paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
          paddingRight: "clamp(1.5rem, 6vw, 7rem)",
          marginBottom: "4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            <span className="divider-line" />
            Curated Experiences
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
              lineHeight: 1.1,
              maxWidth: "520px",
            }}
          >
            Featured{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Journeys
            </em>
          </h2>
        </div>
        <Link
          href="/destinations"
          id="view-all-journeys"
          className="btn-outline"
          style={{ flexShrink: 0 }}
        >
          View All
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Cards Grid — responsive columns controlled via .journeys-grid in globals.css */}
      <div
        ref={cardsRef}
        className="journeys-grid"
        style={{
          paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
          paddingRight: "clamp(1.5rem, 6vw, 7rem)",
          display: "grid",
          gap: "1.75rem",
        }}
      >
        {journeys.map((j) => (
          <Link
            key={j.id}
            href={`/destinations#journey-card-${j.id}`}
            className="journey-card"
            id={`journey-card-${j.id}`}
            aria-label={j.title}
            style={{ textDecoration: "none", display: "block" }}
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
              />
            </div>

            {/* Gradient overlay */}
            <div className="journey-card-overlay" />

            {/* Content */}
            <div className="journey-card-content">
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

              <h3 className="journey-card-title">{j.title}</h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(249,244,235,0.55)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                {j.subtitle}
              </p>

              <div className="journey-card-meta">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6 12C6 12 1.5 7.5 1.5 5a4.5 4.5 0 019 0C10.5 7.5 6 12 6 12z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
                {j.region}
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(249,244,235,0.3)", display: "block" }} />
                {j.duration}
              </div>

              <div className="journey-card-cta">
                Explore Journey
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
