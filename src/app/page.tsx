import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingInstagram } from "@/components/FloatingInstagram";
import { FocusGallery } from "@/components/FocusGallery";
import { Footer } from "@/components/Footer";
import { GlassesAnimationSection } from "@/components/GlassesAnimationSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Header } from "@/components/Header";
import { HeroProofBar } from "@/components/HeroProofBar";
import { LensHero } from "@/components/LensHero";
import { ProcessSection } from "@/components/ProcessSection";
import { RoutineLensSection } from "@/components/RoutineLensSection";
import { StorePhotosSection } from "@/components/StorePhotosSection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <LensHero />
        <GlassesAnimationSection />
        <HeroProofBar />
        <RoutineLensSection />
        <ProcessSection />
        <StorePhotosSection />
        <GoogleReviewsSection />
        <FocusGallery />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingInstagram />
    </>
  );
}
