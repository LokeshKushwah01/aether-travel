"use client";

import Header from "@/components/Header";

export default function ContactLoading() {
  return (
    <>
      <Header />
      <main
        style={{
          background: "var(--color-cream)",
          paddingTop: "9rem",
          paddingBottom: "8rem",
          minHeight: "100vh",
        }}
      >
        <div
          className="contact-split-grid"
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
          }}
        >
          {/* Left Column Skeleton */}
          <div>
            <div className="skeleton-item" style={{ width: "120px", height: "12px", marginBottom: "1.5rem" }} />
            <div className="skeleton-item" style={{ width: "80%", height: "45px", marginBottom: "1rem" }} />
            <div className="skeleton-item" style={{ width: "50%", height: "45px", marginBottom: "2rem" }} />
            <div className="skeleton-item" style={{ width: "90%", height: "14px", marginBottom: "0.75rem" }} />
            <div className="skeleton-item" style={{ width: "70%", height: "14px", marginBottom: "3.5rem" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="skeleton-item" style={{ width: "80px", height: "10px", marginBottom: "0.65rem" }} />
                  <div className="skeleton-item" style={{ width: "180px", height: "20px" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Form Skeleton */}
          <div
            className="skeleton-item"
            style={{
              height: "580px",
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
      </main>
    </>
  );
}
