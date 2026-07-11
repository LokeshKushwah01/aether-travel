"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Desert Dunes Expedition",
    window: "Spring 2026",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Safely parse query parameters in client environment
    const params = new URLSearchParams(window.location.search);
    const journey = params.get("journey");
    if (journey) {
      const journeyMap: Record<string, string> = {
        "desert-dunes": "Desert Dunes Expedition",
        "petra": "Ancient World Immersion",
        "morocco": "Moroccan Village Retreat",
        "bhutan": "Sacred Kingdom Exploration",
        "patagonia": "Southern Fjords Expedition",
        "amalfi": "Mediterranean Coast Retreat",
      };
      const matchingVal = journeyMap[journey];
      if (matchingVal) {
        setFormData((prev) => ({ ...prev, destination: matchingVal }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="contact-split-grid"
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
          }}
        >
          {/* Left Column: Premium Brand Text & Details */}
          <div>
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              <span className="divider-line" />
              Private Consultation
            </div>

            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 500,
                color: "var(--color-charcoal)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Begin your{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
                journey.
              </em>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.92rem",
                lineHeight: 1.8,
                color: "rgba(58,61,66,0.7)",
                marginBottom: "3.5rem",
              }}
            >
              Whether you are looking to design a bespoke expedition, reserve a private mountainside retreat, or simply discuss the possibilities, our team is at your presence.
            </p>

            {/* Offices details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Phone */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    marginBottom: "0.65rem",
                  }}
                >
                  Private Office
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.25rem",
                    color: "var(--color-charcoal)",
                  }}
                >
                  +1 (800) 555-0190
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(58,61,66,0.45)",
                    marginTop: "0.25rem",
                  }}
                >
                  Monday – Friday, 9:00 AM – 6:00 PM EST
                </p>
              </div>

              {/* Email */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    marginBottom: "0.65rem",
                  }}
                >
                  General Inquiries
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.25rem",
                    color: "var(--color-charcoal)",
                  }}
                >
                  concierge@aethertravel.com
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(58,61,66,0.45)",
                    marginTop: "0.25rem",
                  }}
                >
                  Typical response window: Under 12 hours
                </p>
              </div>

              {/* Mailing Address */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    marginBottom: "0.65rem",
                  }}
                >
                  HQ Atelier
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "rgba(58,61,66,0.7)",
                  }}
                >
                  Suite 400, Fifth Avenue<br />
                  New York, NY 10011
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Request Form / Receipt Card */}
          <div
            style={{
              background: "rgba(249, 244, 235, 0.45)",
              border: "1px solid rgba(188, 180, 153, 0.22)",
              borderRadius: "8px",
              padding: "3.5rem 3rem",
              boxShadow: "0 15px 35px rgba(188, 180, 153, 0.08)",
            }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    marginBottom: "2rem",
                  }}
                >
                  Inquiry Details
                </h2>

                {/* Name */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(58,61,66,0.45)",
                      display: "block",
                      marginBottom: "0.65rem",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(188,180,153,0.35)",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.88rem",
                      padding: "0.5rem 0",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(58,61,66,0.45)",
                      display: "block",
                      marginBottom: "0.65rem",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(188,180,153,0.35)",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.88rem",
                      padding: "0.5rem 0",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Destination Dropdown */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    htmlFor="contact-destination"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(58,61,66,0.45)",
                      display: "block",
                      marginBottom: "0.65rem",
                    }}
                  >
                    Select Journey
                  </label>
                  <select
                    id="contact-destination"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(188,180,153,0.35)",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.88rem",
                      padding: "0.5rem 0",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Desert Dunes Expedition">Saharan Silence (Morocco)</option>
                    <option value="Ancient World Immersion">Petra at Dawn (Jordan)</option>
                    <option value="Moroccan Village Retreat">Medina Mystique (Marrakech)</option>
                    <option value="Sacred Kingdom Exploration">Himalayan Sanctuary (Bhutan)</option>
                    <option value="Southern Fjords Expedition">Patagonian Icefields (Chile)</option>
                    <option value="Mediterranean Coast Retreat">Amalfi Cliffside (Italy)</option>
                  </select>
                </div>

                {/* Timeline Dropdown */}
                <div style={{ marginBottom: "2rem" }}>
                  <label
                    htmlFor="contact-window"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(58,61,66,0.45)",
                      display: "block",
                      marginBottom: "0.65rem",
                    }}
                  >
                    Preferred Window
                  </label>
                  <select
                    id="contact-window"
                    value={formData.window}
                    onChange={(e) => setFormData({ ...formData, window: e.target.value })}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(188,180,153,0.35)",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.88rem",
                      padding: "0.5rem 0",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Spring 2026">Spring 2026</option>
                    <option value="Summer 2026">Summer 2026</option>
                    <option value="Autumn 2026">Autumn 2026</option>
                    <option value="Winter 2026/27">Winter 2026/27</option>
                  </select>
                </div>

                {/* Notes Textarea */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <label
                    htmlFor="contact-notes"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "rgba(58,61,66,0.45)",
                      display: "block",
                      marginBottom: "0.65rem",
                    }}
                  >
                    Expedition Notes
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Share your curiosities, pacing preferences, or dietary requirements..."
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "1px solid rgba(188,180,153,0.35)",
                      borderRadius: "4px",
                      color: "var(--color-charcoal)",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.85rem",
                      padding: "0.75rem",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Submit Booking Request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            ) : (
              /* Success / Receipt Block */
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--color-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 2rem",
                    color: "var(--color-gold)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.8rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    marginBottom: "1rem",
                  }}
                >
                  Inquiry Received
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "rgba(58,61,66,0.65)",
                    marginBottom: "2rem",
                  }}
                >
                  Thank you, <strong style={{ color: "var(--color-charcoal)" }}>{formData.name}</strong>. Your request for the <strong style={{ color: "var(--color-charcoal)" }}>{formData.destination}</strong> has been transmitted to our Private Office.
                </p>

                <div
                  style={{
                    background: "rgba(188, 180, 153, 0.1)",
                    borderRadius: "4px",
                    padding: "1rem",
                    textAlign: "left",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "rgba(58,61,66,0.7)",
                    marginBottom: "2rem",
                  }}
                >
                  <strong>Request Summary:</strong>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <li>· Window: {formData.window}</li>
                    <li>· Email: {formData.email}</li>
                  </ul>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--color-sandstone)",
                    fontStyle: "italic",
                  }}
                >
                  A travel curator will contact you within 12 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
