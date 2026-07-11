"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    id: "years",
    value: "18",
    suffix: "+",
    label: "Years of Expertise",
    description: "Crafting rare journeys since 2008",
  },
  {
    id: "destinations",
    value: "340",
    suffix: "+",
    label: "Private Destinations",
    description: "Across six continents and seven seas",
  },
  {
    id: "journeys",
    value: "2,800",
    suffix: "",
    label: "Journeys Curated",
    description: "Each one entirely bespoke",
  },
  {
    id: "return",
    value: "97",
    suffix: "%",
    label: "Client Return Rate",
    description: "The highest measure of trust",
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".stat-item");
      if (items && items.length > 0) {
        gsap.from(items, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }

      // Animate numbers counting up
      items?.forEach((item) => {
        const numEl = item.querySelector(".stat-number");
        const target = numEl?.getAttribute("data-target");
        const suffix = numEl?.getAttribute("data-suffix") || "";
        if (!numEl || !target) return;

        const rawTarget = parseFloat(target.replace(/,/g, ""));
        const isDecimal = target.includes(",");

        gsap.from(
          {},
          {
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
            onUpdate: function () {
              const progress = this.progress();
              const current = Math.floor(rawTarget * progress);
              numEl.textContent = isDecimal
                ? current.toLocaleString() + suffix
                : current + suffix;
            },
            onComplete: function () {
              numEl.textContent = target + suffix;
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      aria-label="Agency statistics"
      style={{
        background: "var(--color-charcoal)",
        padding: "5rem clamp(1.5rem, 6vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(188,180,153,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(209,168,119,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="stats-grid" style={{ position: "relative" }}>
        {stats.map((s, i) => (
          <div
            key={s.id}
            className="stat-item"
            style={{
              textAlign: "center",
              padding: "1rem",
              position: "relative",
            }}
          >
            {/* Vertical divider between items (not after last) */}
            {i < stats.length - 1 && (
              <div
                aria-hidden="true"
                className="stat-divider"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "10%",
                  height: "80%",
                  width: "1px",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(188,180,153,0.3), transparent)",
                }}
              />
            )}

            {/* Value */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "2px" }}>
              <span
                className="stat-number"
                data-target={s.value}
                data-suffix={s.suffix}
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                  fontWeight: 400,
                  color: "var(--color-cream)",
                  lineHeight: 1,
                  display: "block",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.value}{s.suffix}
              </span>
            </div>

            {/* Label */}
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginTop: "0.85rem",
                marginBottom: "0.4rem",
              }}
            >
              {s.label}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                color: "rgba(249,244,235,0.35)",
                letterSpacing: "0.02em",
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
