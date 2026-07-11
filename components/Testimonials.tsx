"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "t1",
    quote: "Aether orchestrated an experience beyond anything I could have imagined. The level of detail and intimacy was extraordinary.",
    author: "C. Whitmore",
    title: "Private Equity, London",
    initials: "CW",
  },
  {
    id: "t2",
    quote: "Every element, from the first call to the final transfer, felt purposeful. They understand the true meaning of luxury.",
    author: "S. Laurent",
    title: "Art Director, Paris",
    initials: "SL",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".testimonial-item");
      if (items && items.length > 0) {
        gsap.from(items, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journal"
      style={{
        background: "var(--color-charcoal)",
        padding: "9rem clamp(1.5rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Client testimonials"
    >
      {/* Large decorative serif */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-2rem",
          right: "5%",
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(12rem, 22vw, 22rem)",
          fontWeight: 700,
          color: "rgba(249,244,235,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      <div className="section-label" style={{ color: "var(--color-sandstone)", marginBottom: "1.5rem" }}>
        <span className="divider-line" style={{ background: "var(--color-sandstone)" }} />
        Traveller Voices
      </div>
      <h2
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 400,
          color: "var(--color-cream)",
          marginBottom: "4.5rem",
          maxWidth: "500px",
        }}
      >
        Words from those who have{" "}
        <em style={{ color: "var(--color-gold)" }}>journeyed</em> with us.
      </h2>

      {/* Grid — responsive columns via .testimonials-grid in globals.css */}
      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gap: "3rem",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-item"
            style={{
              padding: "3rem",
              border: "1px solid rgba(249,244,235,0.08)",
              borderRadius: "4px",
              background: "rgba(249,244,235,0.02)",
              transition: "background 0.4s ease, border-color 0.4s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(249,244,235,0.04)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(209,168,119,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(249,244,235,0.02)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(249,244,235,0.08)";
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "rgba(249,244,235,0.85)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(209,168,119,0.15)",
                  border: "1px solid rgba(209,168,119,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                  }}
                >
                  {t.initials}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--color-cream)",
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(249,244,235,0.35)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
