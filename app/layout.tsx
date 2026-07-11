import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aether Travel | Discover the Unseen",
  description:
    "Aether Travel crafts deeply personal, ultra-luxury expeditions to the world's most extraordinary and remote destinations. Discover the unseen.",
  keywords: [
    "luxury travel",
    "bespoke travel",
    "remote retreats",
    "exclusive journeys",
    "travel agency",
  ],
  openGraph: {
    title: "Aether Travel | Discover the Unseen",
    description:
      "Bespoke journeys to the world's most remote retreats.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
