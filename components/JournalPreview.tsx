"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: "empty-quarter",
    category: "Expedition",
    categoryColor: "#BCB499",
    date: "March 2026",
    readTime: "8 min read",
    title: "The Silence of the Empty Quarter",
    excerpt:
      "There is a particular quality to the silence of the Rub' al Khali. Not the absence of sound, but something more — a presence, vast and ancient, that fills the space between the dunes.",
    image: "/journal-desert.png",
    alt: "Camel caravan silhouette against desert twilight",
    author: "Elara Whitmore",
    authorRole: "Senior Expedition Designer",
    tag: "Arabia",
  },
  {
    id: "petra-dawn",
    category: "Heritage",
    categoryColor: "#D1A877",
    date: "February 2026",
    readTime: "6 min read",
    title: "Petra Before the World Wakes",
    excerpt:
      "We entered the Siq at four in the morning, our footsteps absorbed by the ancient stone. When the Treasury emerged from darkness, candles flickering in the predawn air, it felt less like a ruin and more like a secret.",
    image: "/journal-petra.png",
    alt: "Petra Treasury at dawn with candlelight",
    author: "Mathieu Laurent",
    authorRole: "Heritage Journey Curator",
    tag: "Jordan",
  },
  {
    id: "atlas-village",
    category: "Culture",
    categoryColor: "#C8A08A",
    date: "January 2026",
    readTime: "7 min read",
    title: "Above the Clouds: Life in the High Atlas",
    excerpt:
      "The Berber villages of the Toubkal region exist in a world apart. Reached only by mule path, their stone houses seem to grow from the mountain itself, centuries-old, defiantly unhurried.",
    image: "/journal-atlas.png",
    alt: "Berber village nestled in Atlas Mountains at golden hour",
    author: "Sofia Karam",
    authorRole: "Cultural Immersion Specialist",
    tag: "Morocco",
  },
];

export default function JournalPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current
        ? sectionRef.current.querySelector(".journal-heading")
        : null;
      if (heading) {
        gsap.from(heading, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        });
      }

      const cards = sectionRef.current?.querySelectorAll(".journal-card");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      id="journal-preview"
      aria-label="Journal articles"
      style={{
        background: "var(--color-cream)",
        padding: "9rem clamp(1.5rem, 6vw, 7rem) 8rem",
      }}
    >
      {/* Heading */}
      <div
        className="journal-heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "4.5rem",
        }}
      >
        <div>
          <div className="section-label" style={{ marginBottom: "1.25rem" }}>
            <span className="divider-line" />
            The Aether Journal
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
              lineHeight: 1.1,
            }}
          >
            Dispatches from{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              the field.
            </em>
          </h2>
        </div>
        <Link
          href="/journal"
          id="view-all-journal"
          className="btn-outline"
          style={{ flexShrink: 0 }}
        >
          All Articles
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Article Grid */}
      <div className="journal-grid">
        {articles.map((a, i) => (
          <article
            key={a.id}
            id={`journal-article-${a.id}`}
            className="journal-card"
            style={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Image */}
            <div
              className="journal-card-img"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "4px",
                marginBottom: "1.75rem",
                background: "var(--color-sandstone)",
              }}
            >
              <Image
                src={a.image}
                alt={a.alt}
                width={800}
                height={520}
                quality={85}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
                className="journal-img-zoom"
              />
              {/* Category badge */}
              <span
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: a.categoryColor,
                  background: "rgba(30,32,36,0.75)",
                  backdropFilter: "blur(8px)",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  border: `1px solid ${a.categoryColor}40`,
                }}
              >
                {a.category}
              </span>
            </div>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.85rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.65rem",
                  color: "var(--color-sandstone)",
                  letterSpacing: "0.08em",
                }}
              >
                {a.date}
              </span>
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  background: "var(--color-sandstone)",
                  display: "block",
                  opacity: 0.5,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.65rem",
                  color: "rgba(58,61,66,0.45)",
                  letterSpacing: "0.05em",
                }}
              >
                {a.readTime}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                fontWeight: 500,
                color: "var(--color-charcoal)",
                lineHeight: 1.25,
                marginBottom: "0.85rem",
                transition: "color 0.3s ease",
              }}
              className="journal-card-title"
            >
              {a.title}
            </h3>

            {/* Excerpt */}
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.83rem",
                lineHeight: 1.8,
                color: "rgba(58,61,66,0.6)",
                marginBottom: "1.75rem",
                flex: 1,
              }}
            >
              {a.excerpt}
            </p>

            {/* Author + CTA */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(188,180,153,0.2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${a.categoryColor}30, ${a.categoryColor}60)`,
                    border: `1px solid ${a.categoryColor}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: a.categoryColor,
                    }}
                  >
                    {a.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.73rem",
                      fontWeight: 500,
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {a.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.62rem",
                      color: "rgba(58,61,66,0.4)",
                    }}
                  >
                    {a.authorRole}
                  </p>
                </div>
              </div>

              {/* Read link */}
              <Link
                href={`/journal#journal-article-${a.id}`}
                aria-label={`Read: ${a.title}`}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.63rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-charcoal)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.3s ease, gap 0.3s ease",
                }}
                className="journal-read-link"
              >
                Read
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
