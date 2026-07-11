"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

const trustFAQs: FAQItem[] = [
  {
    question: "How does the private consultation process work?",
    answer: "Every journey begins with a 1-on-1 dialogue with a designated travel curator. We discuss your curiosities, pacing preferences, and travel windows. Following this, we compile a bespoke expedition proposal detailing properties, private transport, and cultural curators for your review.",
  },
  {
    question: "What measures define your policy on discretion and privacy?",
    answer: "Discretion is our foundation. Passenger manifests, private outpost locations, and security details are locked within our private servers. We coordinate directly with personal assistants and family offices, ensuring your name and movements remain entirely private.",
  },
  {
    question: "Can you coordinate with private aviation and local security details?",
    answer: "Yes. We regularly coordinate charter flights, helicopter transfers, and local executive protection details. Our ground operations are fully vetted to ensure smooth, secure, and seamless transitions from tarmac to outpost.",
  },
  {
    question: "What is your typical itinerary planning window?",
    answer: "Due to the highly bespoke nature of our expeditions—securing off-season conservation permits, private villas, and specialist guides—we recommend beginning the planning process 3 to 6 months before your intended departure date.",
  },
];

export default function AboutPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (idx: number) => {
    setOpenFAQIndex(openFAQIndex === idx ? null : idx);
  };

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
        {/* Split Hero Banner */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "7rem",
          }}
          className="about-hero-grid"
        >
          {/* Left Hero Content */}
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <span className="divider-line" />
              The Atelier
            </div>
            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 500,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Crafting travel as an{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
                art form.
              </em>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.95rem",
                color: "rgba(58,61,66,0.65)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "500px",
              }}
            >
              Aether Travel was founded to restore the essence of true exploration. We believe that ultimate luxury lies in uninterrupted time, deep cultural immersion, and absolute privacy.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.88rem",
                color: "rgba(58,61,66,0.55)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              Every itinerary is drawn from scratch—bypassing standard brochures to chart customoutposts, historical sites, and encounters led by local specialists.
            </p>
          </div>

          {/* Right Hero Image Card */}
          <div
            style={{
              position: "relative",
              height: "460px",
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(188, 180, 153, 0.3)",
              boxShadow: "0 20px 45px rgba(188, 180, 153, 0.15)",
            }}
          >
            <Image
              src="/about-atelier.png"
              alt="Aether luxury travel design studio at sunset"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            {/* Soft gold border overlay */}
            <div
              style={{
                position: "absolute",
                inset: "1rem",
                border: "1px solid rgba(209, 168, 119, 0.25)",
                pointerEvents: "none",
                borderRadius: "4px",
              }}
            />
          </div>
        </section>

        {/* ─── Trust Curation Metrics ─── */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "8rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
              background: "rgba(188, 180, 153, 0.08)",
              border: "1px solid rgba(188, 180, 153, 0.2)",
              padding: "3rem 2rem",
              borderRadius: "6px",
              textAlign: "center",
            }}
            className="about-stats-grid"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-gold)",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                18+
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "var(--color-charcoal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Years of Curation
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-gold)",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                400+
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "var(--color-charcoal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Expeditions Charted
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-gold)",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                1:1
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "var(--color-charcoal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Curator to Client Ratio
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--color-gold)",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                98%
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.68rem", fontWeight: 600, color: "var(--color-charcoal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Return Guest Rate
              </p>
            </div>
          </div>
        </section>

        {/* ─── Dark Manifest Quote Banner ─── */}
        <section
          style={{
            background: "var(--color-charcoal)",
            color: "var(--color-cream)",
            padding: "8rem clamp(1.5rem, 6vw, 7rem)",
            textAlign: "center",
            marginBottom: "8rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "50%",
              height: "140%",
              borderRight: "1px dashed rgba(249, 244, 235, 0.05)",
              transform: "rotate(30deg)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "var(--color-gold)",
                display: "block",
                marginBottom: "2.5rem",
              }}
            >
              The Aether Credo
            </span>
            <p
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.4,
                fontStyle: "italic",
                color: "var(--color-cream)",
                marginBottom: "2.5rem",
              }}
            >
              &ldquo;We do not build trips. We curate core memories&mdash;crafted in complete isolation, protected in absolute discretion.&rdquo;
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--color-gold)",
                margin: "0 auto",
              }}
            />
          </div>
        </section>

        {/* ─── The Core Foundations ─── */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "8rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "4.5rem" }}>
            <span className="divider-line" />
            Our Foundation
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
            }}
            className="values-grid"
          >
            {/* Foundation 1 */}
            <div
              style={{
                background: "rgba(188, 180, 153, 0.04)",
                border: "1px solid rgba(188, 180, 153, 0.18)",
                borderRadius: "4px",
                padding: "3rem 2.2rem",
                transition: "all 0.4s ease",
              }}
              className="about-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                Curated Isolation
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.83rem",
                  lineHeight: 1.8,
                  color: "rgba(58,61,66,0.65)",
                }}
              >
                We seek the empty spaces. Our properties and base outposts are chosen for their profound isolation, keeping our guests far removed from conventional tourism footprints.
              </p>
            </div>

            {/* Foundation 2 */}
            <div
              style={{
                background: "rgba(188, 180, 153, 0.04)",
                border: "1px solid rgba(188, 180, 153, 0.18)",
                borderRadius: "4px",
                padding: "3rem 2.2rem",
                transition: "all 0.4s ease",
              }}
              className="about-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                Uncompromising Discretion
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.83rem",
                  lineHeight: 1.8,
                  color: "rgba(58,61,66,0.65)",
                }}
              >
                Privacy is our primary currency. Guest profiles, personal manifests, and custom coordinates remain protected in our private server office, strictly separate from third-party networks.
              </p>
            </div>

            {/* Foundation 3 */}
            <div
              style={{
                background: "rgba(188, 180, 153, 0.04)",
                border: "1px solid rgba(188, 180, 153, 0.18)",
                borderRadius: "4px",
                padding: "3rem 2.2rem",
                transition: "all 0.4s ease",
              }}
              className="about-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  marginBottom: "1.25rem",
                }}
              >
                Artisanal Curation
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.83rem",
                  lineHeight: 1.8,
                  color: "rgba(58,61,66,0.65)",
                }}
              >
                No two plans are alike. We draft each itinerary starting from a blank sheet, weaving in local historians, private chefs, and remote charters tailored specifically to your curiosities.
              </p>
            </div>
          </div>
        </section>

        {/* ─── The Curators (Team Profiles) ─── */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "8rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "4rem" }}>
            <span className="divider-line" />
            The Curators
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
            }}
            className="curators-grid"
          >
            {/* Curator 1 */}
            <div style={{ background: "rgba(188, 180, 153, 0.03)", padding: "3rem 2rem", borderRadius: "4px", border: "1px solid rgba(188, 180, 153, 0.16)", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(188,180,153,0.1) 0%, rgba(188,180,153,0.3) 100%)",
                  border: "1px solid rgba(188,180,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                }}
              >
                EW
              </div>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6rem", fontWeight: 600, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.4rem" }}>
                Founder · Operations
              </span>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", fontWeight: 500, color: "var(--color-charcoal)", marginBottom: "0.4rem" }}>
                Elara Whitmore
              </h3>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", color: "rgba(58,61,66,0.4)", marginBottom: "1.5rem" }}>
                15+ Yrs Expedition Design
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(58,61,66,0.6)" }}>
                Elara leads our tactical planning and outpost architectural setups. She spent a decade directing remote field research teams in Omani dunes.
              </p>
            </div>

            {/* Curator 2 */}
            <div style={{ background: "rgba(188, 180, 153, 0.03)", padding: "3rem 2rem", borderRadius: "4px", border: "1px solid rgba(188, 180, 153, 0.16)", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(188,180,153,0.1) 0%, rgba(188,180,153,0.3) 100%)",
                  border: "1px solid rgba(188,180,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                }}
              >
                ML
              </div>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6rem", fontWeight: 600, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.4rem" }}>
                Research · Antiquities
              </span>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", fontWeight: 500, color: "var(--color-charcoal)", marginBottom: "0.4rem" }}>
                Mathieu Laurent
              </h3>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", color: "rgba(58,61,66,0.4)", marginBottom: "1.5rem" }}>
                Heritage Journey Curator
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(58,61,66,0.6)" }}>
                An archaeologist, Mathieu leverages historical site relationships to secure private gates and behind-the-scenes archaeological walkthroughs.
              </p>
            </div>

            {/* Curator 3 */}
            <div style={{ background: "rgba(188, 180, 153, 0.03)", padding: "3rem 2rem", borderRadius: "4px", border: "1px solid rgba(188, 180, 153, 0.16)", textAlign: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(188,180,153,0.1) 0%, rgba(188,180,153,0.3) 100%)",
                  border: "1px solid rgba(188,180,153,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                }}
              >
                SK
              </div>
              <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.6rem", fontWeight: 600, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.4rem" }}>
                Community · Culture
              </span>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", fontWeight: 500, color: "var(--color-charcoal)", marginBottom: "0.4rem" }}>
                Sofia Karam
              </h3>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.7rem", color: "rgba(58,61,66,0.4)", marginBottom: "1.5rem" }}>
                Cultural Immersion Lead
              </p>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.8rem", lineHeight: 1.6, color: "rgba(58,61,66,0.6)" }}>
                Sofia coordinates directly with artisan cooperatives and regional leaders, allowing Aether travelers exclusive access into local workshops.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Trust FAQs Accordion (Interactive) ─── */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "8rem",
            maxWidth: "960px",
            margin: "0 auto 8rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "3rem", justifyContent: "center" }}>
            <span className="divider-line" />
            Frequently Addressed Questions
            <span className="divider-line" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(188, 180, 153, 0.3)",
            }}
          >
            {trustFAQs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: "1px solid rgba(188, 180, 153, 0.3)",
                  padding: "1.75rem 0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => toggleFAQ(idx)}
              >
                {/* Question Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "1.4rem",
                      transform: openFAQIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      display: "block",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Answer block */}
                <div
                  style={{
                    maxHeight: openFAQIndex === idx ? "200px" : "0",
                    overflow: "hidden",
                    transition: "all 0.4s ease-in-out",
                    opacity: openFAQIndex === idx ? 1 : 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "rgba(58,61,66,0.65)",
                      marginTop: "1.15rem",
                      paddingRight: "2rem",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Call to Action ─── */}
        <section
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2.2rem",
              background: "rgba(209, 168, 119, 0.05)",
              border: "1px solid rgba(209, 168, 119, 0.2)",
              padding: "3.5rem 2rem",
              borderRadius: "6px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.8rem",
                fontWeight: 500,
                color: "var(--color-charcoal)",
                lineHeight: 1.3,
              }}
            >
              Are you ready to explore the possibilities?
            </h2>
            <Link href="/contact" className="btn-primary">
              Begin Your Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
