"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeroSequence() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero image: slow zoom-out from 1.1 → 1.0 ──
      gsap.fromTo(
        bgRef.current,
        { scale: 1.1 },
        {
          scale: 1.0,
          duration: 2.2,
          ease: "power2.out",
          delay: 0.1,
        }
      );

      // ── Staggered text reveal ──
      const tl = gsap.timeline({ delay: 0.4 });

      tl.to(line1Ref.current, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      })
        .to(
          line2Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          subRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          ctaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          scrollHintRef.current,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.1"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const xPct = (e.clientX - rect.width / 2) / rect.width;
      const yPct = (e.clientY - rect.height / 2) / rect.height;
      gsap.to(bg, {
        x: xPct * 18,
        y: yPct * 10,
        duration: 1.8,
        ease: "power1.out",
      });
    };

    hero.addEventListener("mousemove", handleMouse);
    return () => hero.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section noise-overlay"
      id="hero"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div ref={bgRef} className="hero-bg" style={{ willChange: "transform" }}>
        <Image
          src="/hero-mountains.png"
          alt="Remote mountain landscape at golden hour"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Vignette edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(30,32,36,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div className="hero-content" style={{ maxWidth: "900px" }}>
        {/* Label */}
        <div
          className="section-label"
          style={{
            color: "rgba(249,244,235,0.6)",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <span className="divider-line" style={{ background: "rgba(188,180,153,0.6)" }} />
          Est. 2008 · Luxury Travel
          <span className="divider-line" style={{ background: "rgba(188,180,153,0.6)" }} />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 500,
            lineHeight: 1.0,
            color: "var(--color-cream)",
            marginBottom: "1.5rem",
          }}
        >
          <span className="hero-line-wrapper" aria-hidden="false">
            <span
              ref={line1Ref}
              className="hero-line"
              style={{ display: "block" }}
            >
              Discover
            </span>
          </span>
          <span className="hero-line-wrapper" aria-hidden="false">
            <span
              ref={line2Ref}
              className="hero-line"
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--color-gold)",
              }}
            >
              the Unseen.
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            fontWeight: 300,
            letterSpacing: "0.12em",
            color: "rgba(249,244,235,0.75)",
            marginBottom: "3rem",
            opacity: 0,
            transform: "translateY(20px)",
          }}
        >
          Bespoke journeys to the world&apos;s most remote retreats.
        </p>

        {/* CTA */}
        <div
          ref={ctaRef}
          style={{ opacity: 0, transform: "translateY(20px)", display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap" }}
        >
          <a href="#journeys" className="btn-primary" id="hero-explore-cta">
            Explore Destinations
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link href="/about" className="btn-outline" id="hero-about-cta" style={{ color: "rgba(249,244,235,0.85)", borderColor: "rgba(249,244,235,0.35)" }}>
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollHintRef}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          opacity: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "rgba(249,244,235,0.5)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(249,244,235,0.5), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.5; transform: scaleY(1); transform-origin: top; }
            50% { opacity: 1; transform: scaleY(1.15); transform-origin: top; }
          }
        `}</style>
      </div>
    </section>
  );
}
