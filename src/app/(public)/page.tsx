import HeroSection from "@/components/HeroSection";
import SurfacesGallery from "@/components/SurfacesGallery";
import VideosSection from "@/components/VideosSection";
import QuoteSection from "@/components/QuoteSection";
import TechnicalProcess from "@/components/TechnicalProcess";
import CoverageBanner from "@/components/CoverageBanner";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SurfacesGallery />
      <VideosSection />
      <QuoteSection />
      <TechnicalProcess />
      <CoverageBanner />
      <FAQSection />
    </>
  );
}
