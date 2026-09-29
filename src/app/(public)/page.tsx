import HeroSection from "@/components/HeroSection";
import CoverageBanner from "@/components/CoverageBanner";
import SurfacesGallery from "@/components/SurfacesGallery";
import TechnicalProcess from "@/components/TechnicalProcess";
import ServicesSection from "@/components/ServicesSection";
import VideosSection from "@/components/VideosSection";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoverageBanner />
      <SurfacesGallery />
      <TechnicalProcess />
      <ServicesSection />
      <VideosSection />
      <InteractiveCalculator />
      <WhyUsSection />
      <FAQSection />
    </>
  );
}
