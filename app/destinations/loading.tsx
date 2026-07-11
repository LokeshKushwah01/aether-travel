"use client";

import Header from "@/components/Header";

export default function DestinationsLoading() {
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
            marginBottom: "4.5rem",
          }}
        >
          <div className="skeleton-item" style={{ width: "90px", height: "12px", marginBottom: "1.5rem" }} />
          <div className="skeleton-item" style={{ width: "240px", height: "45px", marginBottom: "1.5rem" }} />
          <div className="skeleton-item" style={{ width: "420px", height: "14px", marginBottom: "0.75rem" }} />
          <div className="skeleton-item" style={{ width: "350px", height: "14px" }} />
        </div>

        {/* Filter Bar Skeleton */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "4rem",
            display: "flex",
            gap: "0.85rem",
            alignItems: "center",
          }}
        >
          <div className="skeleton-item" style={{ width: "60px", height: "10px", marginRight: "1rem" }} />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-item" style={{ width: "90px", height: "28px", borderRadius: "9999px" }} />
          ))}
        </div>

        {/* Grid Skeleton */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2.5rem 1.75rem",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="skeleton-item"
              style={{
                height: "540px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}
