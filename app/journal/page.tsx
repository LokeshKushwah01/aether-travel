"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  author: string;
  authorRole: string;
}

const allArticles: Article[] = [
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
  },
  {
    id: "patagonia-fjords",
    category: "Nature",
    categoryColor: "#BCB499",
    date: "December 2025",
    readTime: "9 min read",
    title: "Into the Wilderness: Patagonian Fjords",
    excerpt:
      "Cruising through the labyrinthine channels of southern Chile, the scale of Patagonia becomes clear. Glaciers tumble directly into the emerald sea, undisturbed by human presence.",
    image: "/card-patagonia.png",
    alt: "Glacial peaks in Patagonia",
    author: "Jonas Vane",
    authorRole: "Wilderness Field Lead",
  },
  {
    id: "bhutan-traditions",
    category: "Culture",
    categoryColor: "#C8A08A",
    date: "November 2025",
    readTime: "10 min read",
    title: "Sacred Valleys: Living Traditions of Bhutan",
    excerpt:
      "In the valleys of Paro and Punakha, Gross National Happiness is not a policy, but a living philosophy. We explore the sacred festivals and age-old weaving looms of the locals.",
    image: "/card-bhutan.png",
    alt: "Buddhist monastery cliff in Bhutan",
    author: "Tashi Dorji",
    authorRole: "Himalayan Culture Guide",
  },
  {
    id: "amalfi-coves",
    category: "Expedition",
    categoryColor: "#D1A877",
    date: "October 2025",
    readTime: "5 min read",
    title: "Sailing Amalfi: Hidden Mediterranean Coves",
    excerpt:
      "Beyond the crowded harbor of Positano lie pristine, vertical coves accessible only by sea. We chart a path along the cliffside ruins, remote citrus gardens, and silent shores.",
    image: "/card-amalfi.png",
    alt: "Positano cliffside colorful homes",
    author: "Captain Aldo",
    authorRole: "Mediterranean Skipper",
  },
];

const fullStories: Record<string, { title: string; subtitle: string; content: string[] }> = {
  "empty-quarter": {
    title: "The Silence of the Empty Quarter",
    subtitle: "A journey into the heart of the Rub' al Khali",
    content: [
      "There is a particular quality to the silence of the Rub' al Khali. It is not the mere absence of noise, but a heavy, tactile presence that fills the spaces between the sweeping desert dunes. Standing atop a 300-meter sand ridge at sunset, the horizon stretching infinitely in shades of amber and rose, one begins to understand the scale of Arabia's great wilderness.",
      "Our expedition set out from the coastal fringe, guiding custom-equipped vehicles over ancient trade routes. As the mountains faded behind us, we entered a world carved entirely by wind. By day, the heat is absolute, a silent pressure that commands respect. But as twilight arrives, the desert transforms. The sand glows with a cool, crimson luminescence, and the temperature drops rapidly.",
      "At night, in our private outpost of hand-woven bedouin tents, we sat around a crackling fire of desert scrub. There is no artificial light for hundreds of miles, rendering the sky with a clarity that feels almost prehistoric. The Milky Way arches from horizon to horizon, a dense dust of stars so bright it casts faint shadows across the camp. In this vast emptiness, time loses its urgency, and the mind settles into a deep, meditative calm.",
    ],
  },
  "petra-dawn": {
    title: "Petra Before the World Wakes",
    subtitle: "Experiencing the Nabataean kingdom in absolute isolation",
    content: [
      "To truly experience Petra, one must enter when the stone is cold and the shadows are long. We bypassed the daytime crowds, entering the Siq canyon at four in the morning. Guided only by the soft glow of lanterns and the light of a crescent moon, our footsteps echoed softly against the towering cliffs of sandstone.",
      "The Siq is a narrow fissure, at times barely wide enough for a camel cart, with rock faces rising eighty meters on either side. In the stillness of the pre-dawn hours, the canyon feels like a portal to another era. And then, at the final turn, the Treasury (Al-Khazneh) emerges from the dark. Bathed in the warm light of a hundred hand-placed candles along the canyon floor, the hand-carved facade seems to breathe in the morning mist.",
      "We stood in silence for nearly an hour, drinking traditional cardamom coffee with our local archaeologist guide. As the first rays of dawn touched the canyon rim, the terracotta stone shifted from deep violet to a brilliant rose-gold. In this moment of quiet privilege, free from the rush of modern tourism, the ancient capital of the Nabataeans belonged, if only briefly, to the desert silence.",
    ],
  },
  "atlas-village": {
    title: "Above the Clouds: Life in the High Atlas",
    subtitle: "A story of Berber hospitality and ancient mountain paths",
    content: [
      "Clinging to the steep slopes of the Toubkal region in Morocco, the stone houses of the High Atlas seem to grow directly from the red earth itself. Reached only by narrow mule paths winding through walnut groves, these Berber villages have remained defiantly unhurried for centuries, existing in a rhythm set by the seasons.",
      "We spent three days walking between these remote hamlets, guided by a village elder who navigated the rocky tracks with effortless grace. In every house we visited, the hospitality was absolute. We were welcomed onto hand-knotted wool rugs, served bowls of freshly pressed olive oil, hot flatbreads, and endless glasses of gunpowder green tea brewed with fresh mountain mint.",
      "As evening fell, thick mountain clouds rolled into the valley below, cutting us off from the lowlands. Sitting on a stone terrace overlooking the sea of clouds, listening to the distant call to prayer echoing from valley to valley, we felt the profound peace of a culture that values hospitality above all else. Here, high above the modern world, the art of slow living is not a luxury, but a way of life.",
    ],
  },
  "patagonia-fjords": {
    title: "Into the Wilderness: Patagonian Fjords",
    subtitle: "Navigating the glacial channels of southern Chile",
    content: [
      "The fjords of southern Patagonia represent one of the last truly wild frontiers on earth. Navigating these narrow channels on our private expedition vessel, the scale of the landscape is overwhelming. Vertical walls of granite rise directly from the emerald water, topped by ancient hanging glaciers that feed silent waterfalls cascading down the rock faces.",
      "We anchored in a secluded cove untouched by human paths. Using sea kayaks, we paddled among floating ice sculptures, their deep turquoise color glowing under the overcast sky. The silence was broken only by the sharp crack of calving ice shelves in the distance and the occasional breath of a humpback whale surfacing nearby.",
      "In the evening, we trekked through primeval coihue forests, our boots sinking into moss that felt like velvet. Returning to the ship, we dined on organic local mutton and fine Chilean wines. In this remote wilderness, where the wind speaks in whispers and the glaciers have stood for millennia, one is reminded of the earth's raw, untamed majesty.",
    ],
  },
  "bhutan-traditions": {
    title: "Sacred Valleys: Living Traditions of Bhutan",
    subtitle: "Exploring Buddhist spirituality and village life in the Himalayas",
    content: [
      "In the Kingdom of Bhutan, Gross National Happiness is not a modern marketing catchphrase, but a deeply rooted spiritual reality. Traversing the sacred valleys of Paro and Punakha, one feels the constant presence of a living Buddhist heritage. Prayer flags flutter on every ridge, and the whitewashed fortress-monasteries (dzongs) stand as guardians of the valleys.",
      "We were granted private access to a centuries-old monastery on a cliff edge. In the quiet dimness of the altar room, filled with the scent of butter lamps, we sat with the resident monks as they chanted their morning prayers. The low, resonant drone of their horns seemed to vibrate through the wooden floor, clearing the mind of all modern clutter.",
      "Later, we walked through terraced rice fields to a small family estate. We watched artisans dye raw silk with wild herbs, preserving weaving techniques passed down through generations. In Bhutan, the past is not preserved behind glass; it is walked daily, a source of peace and identity in an ever-changing world.",
    ],
  },
  "amalfi-coves": {
    title: "Sailing Amalfi: Hidden Mediterranean Coves",
    subtitle: "Discovering vertical cliffs and quiet lemon groves along the coast",
    content: [
      "Beyond the crowded seaside squares of Positano and Amalfi lies a different coast—one of vertical cliffs, hidden sea caverns, and terraced citrus orchards accessible only by boat. Boarding our vintage wooden yacht at sunrise, we charted a path along the southern coastline, away from the standard maritime routes.",
      "We anchored inside a steep fjord where a freshwater stream meets the Mediterranean. Here, the water is a brilliant, crystal-clear turquoise, protected from the coastal winds. We swam into sea caves where the light refracts into a deep neon blue, casting moving patterns against the limestone walls.",
      "For lunch, we climbed a stone staircase carved into the cliff to a private family orchard. Under a canopy of lemon trees heavy with fruit, we enjoyed handmade pasta tossed with fresh garlic, olive oil, and lemon zest. Looking out over the shimmering Tyrrhenian Sea, we felt the true charm of the Amalfi—a coast of secrets, gardens, and quiet luxury.",
    ],
  },
};

const categories = ["All", "Expedition", "Heritage", "Culture", "Nature"];

export default function JournalPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = selectedCat === "All"
    ? allArticles
    : allArticles.filter((a) => a.category === selectedCat);

  // Scroll to hash if present on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

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
        {/* Header content */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "4.5rem",
          }}
        >
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            <span className="divider-line" />
            Editorial dispatches
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 500,
              color: "var(--color-charcoal)",
              lineHeight: 1.1,
              maxWidth: "800px",
              marginBottom: "1.5rem",
            }}
          >
            The Aether{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Journal
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.95rem",
              color: "rgba(58,61,66,0.65)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Insights, photo essays, and long-form stories from our global expeditions, curated by our field specialists.
          </p>
        </div>

        {/* Filter bar */}
        <div
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            marginBottom: "4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.85rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.62rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(58,61,66,0.45)",
              marginRight: "1rem",
            }}
          >
            Topic:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.5rem 1.35rem",
                borderRadius: "9999px",
                border: "1.5px solid",
                borderColor: selectedCat === cat ? "var(--color-charcoal)" : "rgba(188,180,153,0.35)",
                color: selectedCat === cat ? "var(--color-cream)" : "var(--color-charcoal)",
                background: selectedCat === cat ? "var(--color-charcoal)" : "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div
          className="journal-grid"
          style={{
            paddingLeft: "clamp(1.5rem, 6vw, 7rem)",
            paddingRight: "clamp(1.5rem, 6vw, 7rem)",
            display: "grid",
            gap: "3.5rem 2rem",
          }}
        >
          {filteredArticles.map((a) => (
            <article
              key={a.id}
              id={`journal-article-${a.id}`}
              className="journal-card"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={() => setActiveArticle(a)}
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
                  height: "280px",
                }}
              >
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
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

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveArticle(a);
                  }}
                  aria-label={`Read: ${a.title}`}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.63rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-charcoal)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
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
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Editorial Pop-Up Modal */}
      {activeArticle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(30, 32, 36, 0.82)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 1.5rem",
          }}
          onClick={() => setActiveArticle(null)}
        >
          {/* Modal Content Window */}
          <div
            style={{
              background: "var(--color-cream)",
              width: "100%",
              maxWidth: "760px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "8px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner clicks
          >
            {/* Header / Hero Banner */}
            <div style={{ position: "relative", height: "260px", width: "100%" }}>
              <Image
                src={activeArticle.image}
                alt={activeArticle.alt}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(30,32,36,0.3) 0%, rgba(30,32,36,0.7) 100%)",
                }}
              />

              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(249,244,235,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(249,244,235,0.25)",
                  color: "var(--color-cream)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(249,244,235,0.3)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(249,244,235,0.15)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                ✕
              </button>

              {/* Banner Text Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.75rem",
                  left: "2rem",
                  right: "2rem",
                  color: "var(--color-cream)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: activeArticle.categoryColor,
                    background: "rgba(30,32,36,0.65)",
                    border: `1px solid ${activeArticle.categoryColor}30`,
                    padding: "0.3rem 0.85rem",
                    borderRadius: "9999px",
                  }}
                >
                  {activeArticle.category}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 500,
                    marginTop: "0.85rem",
                    lineHeight: 1.25,
                  }}
                >
                  {activeArticle.title}
                </h2>
              </div>
            </div>

            {/* Editorial Body */}
            <div style={{ padding: "2.5rem 2rem 3rem" }}>
              {/* Author & Info bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  borderBottom: "1px solid rgba(188,180,153,0.2)",
                  paddingBottom: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${activeArticle.categoryColor}30, ${activeArticle.categoryColor}60)`,
                      border: `1px solid ${activeArticle.categoryColor}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: activeArticle.categoryColor,
                      }}
                    >
                      {activeArticle.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "var(--color-charcoal)" }}>
                      {activeArticle.author}
                    </p>
                    <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.65rem", color: "rgba(58,61,66,0.45)" }}>
                      {activeArticle.authorRole}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.68rem",
                    color: "var(--color-sandstone)",
                    letterSpacing: "0.06em",
                  }}
                >
                  Published {activeArticle.date} · {activeArticle.readTime}
                </div>
              </div>

              {/* Subheading/Intro */}
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.15rem",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  color: "var(--color-gold)",
                  marginBottom: "2rem",
                }}
              >
                {fullStories[activeArticle.id]?.subtitle}
              </p>

              {/* Rich Story Paragraphs */}
              {fullStories[activeArticle.id]?.content.map((p, index) => (
                <p
                  key={index}
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.9,
                    color: "rgba(58,61,66,0.72)",
                    marginBottom: "1.5rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {p}
                </p>
              ))}

              {/* Signature / Decorative line */}
              <div
                style={{
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(188,180,153,0.15)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.3em",
                    color: "var(--color-sandstone)",
                    textTransform: "uppercase",
                  }}
                >
                  · Aether Travel dispatches ·
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
