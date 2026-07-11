"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "curation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1.5L11.47 6.5H16.5L12.5 9.5L14 14.5L9 11.5L4 14.5L5.5 9.5L1.5 6.5H6.53L9 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Singular Curation",
    body: "Every itinerary is handcrafted by our team of destination specialists—drawn from decades of on-the-ground expertise.",
  },
  {
    id: "access",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 16.5C13.14 16.5 16.5 13.14 16.5 9S13.14 1.5 9 1.5 1.5 4.86 1.5 9 4.86 16.5 9 16.5z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1.5 9h15M9 1.5a11.25 11.25 0 010 15M9 1.5a11.25 11.25 0 000 15" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: "Private Access",
    body: "Exclusive entry to locations and experiences unavailable through conventional channels—from private villas to off-season permits.",
  },
  {
    id: "discretion",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 8V5.5a3 3 0 016 0V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Total Discretion",
    body: "Complete confidentiality is our foundation. Your preferences, movements, and identity remain entirely private.",
  },
  {
    id: "support",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "24 / 7 Presence",
    body: "A dedicated concierge accompanies every journey—available at any hour, in any time zone, for any need.",
  },
];

export default function WhyAether() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current
        ? sectionRef.current.querySelector(".why-heading")
        : null;
      const cards = sectionRef.current?.querySelectorAll(".why-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
      });

      if (heading) {
        tl.from(heading, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (cards && cards.length > 0) {
        tl.from(
          cards,
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: "#F2EDE0",
        padding: "9rem clamp(1.5rem, 6vw, 7rem)",
      }}
      aria-label="Why choose Aether Travel"
    >
      {/* Heading */}
      <div className="why-heading" style={{ maxWidth: "600px", marginBottom: "5rem" }}>
        <div className="section-label" style={{ marginBottom: "1.25rem" }}>
          <span className="divider-line" />
          The Aether Difference
        </div>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 500,
            color: "var(--color-charcoal)",
            lineHeight: 1.15,
          }}
        >
          Crafted with{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
            precision,
          </em>{" "}
          delivered with grace.
        </h2>
      </div>

      {/* Grid */}
      <div
        className="why-grid"
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        {pillars.map((p, idx) => (
          <div key={p.id} className="why-card" id={`pillar-${p.id}`}>
            {/* Header row with Icon and Watermark index */}
            <div className="why-card-header">
              <div className="why-icon" aria-hidden="true">
                {p.icon}
              </div>
            </div>

            <h3 className="why-card-title">
              {p.title}
            </h3>

            <p className="why-card-body">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
