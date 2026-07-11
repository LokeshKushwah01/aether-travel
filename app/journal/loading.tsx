"use client";

import Header from "@/components/Header";

export default function JournalLoading() {
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
          <div className="skeleton-item" style={{ width: "120px", height: "12px", marginBottom: "1.5rem" }} />
          <div className="skeleton-item" style={{ width: "300px", height: "45px", marginBottom: "1.5rem" }} />
          <div className="skeleton-item" style={{ width: "480px", height: "14px", marginBottom: "0.75rem" }} />
          <div className="skeleton-item" style={{ width: "380px", height: "14px" }} />
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
          <div className="skeleton-item" style={{ width: "50px", height: "10px", marginRight: "1rem" }} />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-item" style={{ width: "95px", height: "28px", borderRadius: "9999px" }} />
          ))}
        </div>

        {/* Grid Skeleton */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "3.5rem 2rem",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image box skeleton */}
              <div className="skeleton-item" style={{ height: "280px", width: "100%", marginBottom: "1.75rem" }} />
              {/* Meta row skeleton */}
              <div className="skeleton-item" style={{ width: "140px", height: "10px", marginBottom: "1rem" }} />
              {/* Title skeleton */}
              <div className="skeleton-item" style={{ width: "80%", height: "20px", marginBottom: "0.85rem" }} />
              {/* Excerpt lines */}
              <div className="skeleton-item" style={{ width: "95%", height: "12px", marginBottom: "0.6rem" }} />
              <div className="skeleton-item" style={{ width: "90%", height: "12px", marginBottom: "0.6rem" }} />
              <div className="skeleton-item" style={{ width: "65%", height: "12px" }} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
