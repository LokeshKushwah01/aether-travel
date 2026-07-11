# Aether Travel | Discover the Unseen

Aether Travel is a world-class, premium luxury travel agency web application built with **Next.js (App Router)**, **React**, **TypeScript**, and **GSAP** (GreenSock Animation Platform) for buttery-smooth micro-interactions, parallax layouts, and scroll-triggered animations.

The website is designed with a premium, minimalist "Desert Dusk" color palette, incorporating harmonious warm sand tones, deep luxury charcoals, and polished antique gold accents.

---

## 💎 Design Aesthetics & Key Features

* **Parallax Hero Sequence**: A slow cinematic zoom-out of mountain vistas at golden hour, responsive staggered typography, and mouse-parallax background movement.
* **Credibility Stats Bar**: High-contrast agency metrics that dynamically count up when scrolled into view.
* **Interactive Featured Journeys**: A grid-based portfolio showcasing remote retreats. Includes interactive category filtering tags (Wilderness, Heritage, Culture, Wellness) and smooth transitions.
* **The Aether Difference**: Key brand pillars presented as cards. Hovering over a card triggers a complete color inversion (cream to charcoal) and rotates/scales custom golden emblem indicators.
* **Unified Scroll animations**: Clean, sequenced GSAP timelines that guarantee heading reveals and cards always pop in together, avoiding partial trigger viewport bugs.
* **Editorial Dispatches Journal**: A dedicated travel magazine grid complete with reading-time metrics, author profiles, and **dynamic full-screen popup reading modals** filled with rich travel narratives.
* **Integrated Routing**: Separate page routes (`/destinations` and `/journal`) built under Next.js App Router, complete with scroll-to-hash navigations.
* **Transparent Vector Favicon**: A bespoke celestial starburst/compass emblem in polished Antique Gold (`#D1A877`), optimized for light mode, dark mode, and mobile tabs.

---

## 🛠️ Technology Stack

1. **Framework**: [Next.js v15 (App Router)](https://nextjs.org/)
2. **Language**: [TypeScript](https://www.typescriptlang.org/)
3. **Animations**: [GSAP v3.12](https://greensock.com/gsap/) (ScrollTrigger, Timeline, Context)
4. **Styling**: Vanilla CSS (CSS variables, responsive media queries, grid, and flex layouts)
5. **Assets**: AI-generated high-resolution product photography and transparent SVG vector icons.

---

## 📂 Project Structure

```bash
Traverling-web/
├── app/
│   ├── layout.tsx         # Global fonts (Playfair Display, Inter), metadata, SEO
│   ├── page.tsx           # Assembles landing page sections
│   ├── icon.svg           # High-resolution transparent vector favicon
│   ├── destinations/
│   │   └── page.tsx       # Separate page: Destinations catalog with state filtering
│   └── journal/
│       └── page.tsx       # Separate page: Editorial dispatches with read popup modals
├── components/
│   ├── Header.tsx         # Responsive glassmorphism navigation header & mobile drawer
│   ├── HeroSequence.tsx   # Parallax text & background hero sequence
│   ├── StatsSection.tsx   # Animated counters section
│   ├── HorizontalScroll.tsx # Featured journeys layout
│   ├── WhyAether.tsx      # Unified GSAP timeline cards
│   ├── ProcessSection.tsx # Itinerary process roadmap
│   ├── JournalPreview.tsx # Blog post listings
│   ├── Testimonials.tsx   # Luxury client feedback grid
│   └── Footer.tsx         # Complex sitemap, socials, and newsletter submission form
├── public/                # Dynamic photo assets and 3D gold emblems
└── styles/
    └── globals.css        # Desert Dusk color tokens, buttons, global resets, responsive grids
```

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/aether-travel.git
cd aether-travel
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

### 4. Build for production
Validate the TypeScript compiler and compile the static bundle:
```bash
npm run build
```

---

## 🎨 Design System (Desert Dusk Tokens)

All tokens are defined in [globals.css](file:///d:/Traverling-web/styles/globals.css):

* `--color-cream`: `#F9F4EB` (Base canvas light tone)
* `--color-charcoal`: `#3A3D42` (Base typography / dark canvas contrast)
* `--color-sandstone`: `#BCB499` (Muted borders / badges)
* `--color-gold`: `#D1A877` (Antique luxury highlight accent)
* `--font-playfair`: Playfair Display (Serif headings)
* `--font-inter`: Inter (Sans-serif bodies, buttons, numbers)
