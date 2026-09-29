import HeroSection from "@/components/HeroSection";
import SurfacesGallery from "@/components/SurfacesGallery";
import TechnicalProcess from "@/components/TechnicalProcess";
import VideosSection from "@/components/VideosSection";
import CoverageBanner from "@/components/CoverageBanner";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SurfacesGallery />
      <TechnicalProcess />
      <VideosSection />
      <CoverageBanner />
      <FAQSection />
    </>
  );
}
