"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    setScrolled(window.scrollY > 60);
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname]);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      role="banner"
    >
      {/* Logo */}
      <Link href="/" className="site-logo" aria-label="Aether Travel Home">
        Aether Travel
      </Link>

      {/* Desktop Nav */}
      <nav aria-label="Main navigation">
        <ul className="site-nav">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 z-50 relative"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className="block w-6 h-px transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "#3A3D42" : "#F9F4EB",
            transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
          }}
        />
        <span
          className="block w-4 h-px transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "#3A3D42" : "#F9F4EB",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-px transition-all duration-300"
          style={{
            backgroundColor: scrolled ? "#3A3D42" : "#F9F4EB",
            transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
          }}
        />
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500"
        style={{
          background: "rgba(249,244,235,0.97)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                    textDecoration: "none",
                    transitionDelay: `${i * 60}ms`,
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease, color 0.3s ease",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
