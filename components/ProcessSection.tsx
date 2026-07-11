"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "consult",
    number: "01",
    title: "Private Consultation",
    body: "Every Aether journey begins with a conversation. We meet — in person, by call, or letter — to understand not just your destination, but your ideal pace, your curiosities, the moments you hope to carry home.",
    detail: "Typically 60–90 minutes",
  },
  {
    id: "design",
    number: "02",
    title: "Itinerary Design",
    body: "Our team of destination specialists draft a bespoke proposal within 10 days. Every element — from the villa selection to the precise timing of a sunrise — is considered with the whole journey in mind.",
    detail: "10–14 day turnaround",
  },
  {
    id: "refine",
    number: "03",
    title: "Refinement & Booking",
    body: "We present your proposal and refine every detail together. Nothing is confirmed until you are entirely satisfied. We then secure all arrangements — properties, transport, guides, experiences — through our global partner network.",
    detail: "Flexible timeline",
  },
  {
    id: "journey",
    number: "04",
    title: "Your Journey Begins",
    body: "A dedicated Aether concierge accompanies your journey from departure to return — available around the clock, anticipating rather than reacting. You travel; we handle everything else.",
    detail: "24/7 concierge support",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      const heading = sectionRef.current
        ? sectionRef.current.querySelector(".process-heading")
        : null;
      if (heading) {
        gsap.from(heading, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Steps
      const steps = sectionRef.current?.querySelectorAll(".process-step");
      if (steps && steps.length > 0) {
        gsap.from(steps, {
          x: -40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        });
      }

      // Connector lines
      const lines = sectionRef.current?.querySelectorAll(".process-connector");
      if (lines && lines.length > 0) {
        gsap.from(lines, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
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
      id="process"
      aria-label="How Aether Travel works"
      style={{
        background: "#F2EDE0",
        padding: "9rem clamp(1.5rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large number */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-3rem",
          right: "-1rem",
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(10rem, 20vw, 20rem)",
          fontWeight: 700,
          color: "rgba(188,180,153,0.08)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        04
      </div>

      {/* Heading */}
      <div
        className="process-heading"
        style={{ maxWidth: "580px", marginBottom: "5.5rem" }}
      >
        <div className="section-label" style={{ marginBottom: "1.25rem" }}>
          <span className="divider-line" />
          How It Works
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
          A journey begins long before{" "}
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
            departure.
          </em>
        </h2>
      </div>

      {/* Steps — desktop: horizontal row; mobile: vertical */}
      <div className="process-grid">
        {steps.map((step, i) => (
          <div key={step.id} className="process-step-wrapper">
            <div className="process-step" id={`step-${step.id}`}>
              {/* Step number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "var(--color-gold)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.number}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(to right, rgba(188,180,153,0.5), transparent)",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  marginBottom: "0.85rem",
                  lineHeight: 1.25,
                }}
              >
                {step.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.85,
                  color: "rgba(58,61,66,0.62)",
                  marginBottom: "1.25rem",
                }}
              >
                {step.body}
              </p>

              {/* Detail pill */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-sandstone)",
                  border: "1px solid rgba(188,180,153,0.35)",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="1" />
                  <path d="M4 2.5V4l1 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
                {step.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: "5rem",
          paddingTop: "3.5rem",
          borderTop: "1px solid rgba(188,180,153,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--color-charcoal)",
            maxWidth: "440px",
            lineHeight: 1.5,
          }}
        >
          "The most extraordinary journeys begin with a single conversation."
        </p>
        <Link href="/contact" className="btn-primary" id="process-contact-cta">
          Begin Your Journey
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
