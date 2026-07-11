"use client";

import Header from "@/components/Header";

export default function AboutLoading() {
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
        {/* Banner Skeleton */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "7rem",
          }}
          className="about-hero-grid"
        >
          <div>
            <div className="skeleton-item" style={{ width: "80px", height: "12px", marginBottom: "1.5rem" }} />
            <div className="skeleton-item" style={{ width: "70%", height: "45px", marginBottom: "1rem" }} />
            <div className="skeleton-item" style={{ width: "40%", height: "45px", marginBottom: "2rem" }} />
            <div className="skeleton-item" style={{ width: "90%", height: "14px", marginBottom: "0.75rem" }} />
            <div className="skeleton-item" style={{ width: "85%", height: "14px", marginBottom: "0.75rem" }} />
            <div className="skeleton-item" style={{ width: "60%", height: "14px" }} />
          </div>
          <div className="skeleton-item" style={{ height: "460px", width: "100%" }} />
        </div>

        {/* Stats Grid Skeleton */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "8rem",
          }}
        >
          <div
            className="about-stats-grid"
            style={{
              background: "rgba(188, 180, 153, 0.08)",
              border: "1px solid rgba(188, 180, 153, 0.12)",
              padding: "3.5rem 2rem",
              borderRadius: "6px",
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="skeleton-item" style={{ width: "70px", height: "35px", marginBottom: "0.5rem" }} />
                <div className="skeleton-item" style={{ width: "100px", height: "10px" }} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
