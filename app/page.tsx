import Header from "@/components/Header";
import HeroSequence from "@/components/HeroSequence";
import StatsSection from "@/components/StatsSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import WhyAether from "@/components/WhyAether";
import ProcessSection from "@/components/ProcessSection";
import JournalPreview from "@/components/JournalPreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" aria-label="Main content">
        <HeroSequence />
        <StatsSection />
        <HorizontalScroll />
        <WhyAether />
        <ProcessSection />
        <JournalPreview />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
