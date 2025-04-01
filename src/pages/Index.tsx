
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ObjectiveSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
