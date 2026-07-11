"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const destinationOptions = [
  { value: "Desert Dunes Expedition", label: "Saharan Silence (Morocco)" },
  { value: "Ancient World Immersion", label: "Petra at Dawn (Jordan)" },
  { value: "Moroccan Village Retreat", label: "Medina Mystique (Marrakech)" },
  { value: "Sacred Kingdom Exploration", label: "Himalayan Sanctuary (Bhutan)" },
  { value: "Southern Fjords Expedition", label: "Patagonian Icefields (Chile)" },
  { value: "Mediterranean Coast Retreat", label: "Amalfi Cliffside (Italy)" },
];

const windowOptions = [
  { value: "Spring 2026", label: "Spring 2026" },
  { value: "Summer 2026", label: "Summer 2026" },
  { value: "Autumn 2026", label: "Autumn 2026" },
  { value: "Winter 2026/27", label: "Winter 2026/27" },
];

function CustomDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className="form-group" ref={containerRef} style={{ zIndex: isOpen ? 99 : 1 }}>
      <label className="form-label">{label}</label>
      <div className="form-input-wrapper">
        {/* Toggle Button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="form-input"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span style={{ fontSize: "0.9rem" }}>
            {selectedOption?.label}
          </span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="var(--color-gold)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="form-input-line" style={{ width: isOpen ? "100%" : "0", left: isOpen ? "0" : "50%" }} />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="custom-dropdown-menu">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <div
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`custom-dropdown-item ${isSelected ? "selected" : ""}`}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path
                        d="M1 5l3.5 3.5L11 1"
                        stroke="var(--color-gold)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

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
        <div className="concierge-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "var(--color-charcoal)",
                  marginBottom: "2.5rem",
                }}
              >
                Inquiry Details
              </h2>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <div className="form-input-wrapper">
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className="form-input"
                  />
                  <span className="form-input-line" />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address
                </label>
                <div className="form-input-wrapper">
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="form-input"
                  />
                  <span className="form-input-line" />
                </div>
              </div>

              {/* Destination Dropdown */}
              <CustomDropdown
                label="Select Journey"
                value={formData.destination}
                options={destinationOptions}
                onChange={(val) => setFormData({ ...formData, destination: val })}
              />

              {/* Timeline Dropdown */}
              <CustomDropdown
                label="Preferred Window"
                value={formData.window}
                options={windowOptions}
                onChange={(val) => setFormData({ ...formData, window: val })}
              />

              {/* Notes Textarea */}
              <div className="form-group">
                <label htmlFor="contact-notes" className="form-label">
                  Expedition Notes
                </label>
                <textarea
                  id="contact-notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share your curiosities, pacing preferences, or dietary requirements..."
                  className="form-textarea"
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
