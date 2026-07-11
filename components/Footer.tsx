"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Destinations: ["Saharan Dunes", "Petra & Jordan", "Moroccan Villages", "Himalayan Trails", "Patagonia"],
  Experiences: ["Private Safaris", "Cultural Immersions", "Culinary Journeys", "Yacht Charters", "Wellness Retreats"],
  Company: ["Our Story", "Journal", "Careers", "Press", "Partnerships"],
  Support: ["Contact Us", "Booking Policy", "Privacy Policy", "Terms of Service", "FAQ"],
};

function getFooterHref(heading: string, link: string) {
  if (heading === "Destinations") {
    if (link.includes("Saharan")) return "/destinations#journey-card-desert-dunes";
    if (link.includes("Petra")) return "/destinations#journey-card-petra";
    if (link.includes("Moroccan")) return "/destinations#journey-card-morocco";
    if (link.includes("Himalayan")) return "/destinations#journey-card-bhutan";
    if (link.includes("Patagonia")) return "/destinations#journey-card-patagonia";
    return "/destinations";
  }
  if (heading === "Experiences") {
    return "/#process";
  }
  if (heading === "Company") {
    if (link === "Journal") return "/journal";
    return "/about";
  }
  if (heading === "Support") {
    return "/contact";
  }
  return "/";
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(newsletterRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      style={{
        background: "var(--color-charcoal)",
        color: "var(--color-cream)",
        padding: "7rem clamp(1.5rem, 6vw, 7rem) 3rem",
      }}
      aria-label="Site footer"
    >
      {/* Newsletter */}
      <div
        ref={newsletterRef}
        className="footer-newsletter-grid"
        style={{
          display: "grid",
          gap: "4rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(249,244,235,0.1)",
          marginBottom: "5rem",
        }}
      >
        <div>
          <div className="section-label" style={{ color: "var(--color-sandstone)", marginBottom: "1.25rem" }}>
            <span className="divider-line" style={{ background: "var(--color-sandstone)" }} />
            Stay Informed
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "var(--color-cream)",
              maxWidth: "380px",
            }}
          >
            Receive our curated{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              travel dispatches.
            </em>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.85rem",
              color: "rgba(249,244,235,0.5)",
              marginBottom: "2rem",
              lineHeight: 1.7,
            }}
          >
            Rare discoveries, seasonal itineraries, and exclusive access—delivered to your inbox quarterly.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: "0", alignItems: "flex-end" }}
            aria-label="Newsletter signup form"
          >
            <div style={{ flex: 1 }}>
              <label htmlFor="newsletter-email" style={{ display: "none" }}>
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="footer-newsletter-input"
                required
                aria-label="Enter your email for newsletter"
              />
            </div>
            <button
              type="submit"
              id="newsletter-submit"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-charcoal)",
                background: "var(--color-gold)",
                border: "none",
                padding: "0.85rem 1.75rem",
                cursor: "pointer",
                borderRadius: "0 9999px 9999px 0",
                flexShrink: 0,
                transition: "background 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-sandstone)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--color-gold)";
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div
        className="footer-links-grid"
        style={{
          display: "grid",
          gap: "3rem",
          marginBottom: "4rem",
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              color: "var(--color-cream)",
            }}
          >
            Aether Travel
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.8rem",
              color: "rgba(249,244,235,0.4)",
              lineHeight: 1.85,
              maxWidth: "220px",
              marginBottom: "2rem",
            }}
          >
            Crafting deeply personal expeditions to Earth&apos;s most extraordinary places since 2008.
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {["instagram", "twitter", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={`Follow on ${platform}`}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(249,244,235,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(249,244,235,0.5)",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-gold)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(249,244,235,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(249,244,235,0.5)";
                }}
              >
                {platform === "instagram" ? "Ig" : platform === "twitter" ? "Tw" : "Li"}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(249,244,235,0.35)",
                marginBottom: "1.5rem",
              }}
            >
              {heading}
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {links.map((link) => (
                <li key={link}>
                  <Link href={getFooterHref(heading, link)} className="footer-link">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(249,244,235,0.08)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.7rem",
            color: "rgba(249,244,235,0.25)",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Aether Travel. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <Link key={item} href="/" className="footer-link" style={{ fontSize: "0.68rem" }}>
              {item}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}
