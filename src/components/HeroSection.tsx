
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(3, 34, 99, 0.8), rgba(3, 34, 99, 0.8)), url('https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-rp-blue-dark bg-opacity-60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-rp-white mb-6 animate-fade-in-down font-urbanist">
          Rafael Pinturas
        </h1>
        
        <p className="text-xl md:text-2xl text-rp-white max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Transformamos paredes em verdadeiras obras de arte para revitalizar seu espaço com beleza e sofisticação.
        </p>
        
        <div className="animate-fade-in">
          <Button 
            className="bg-rp-orange hover:bg-rp-orange/90 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 hover:scale-105 shadow-lg" 
            onClick={scrollToContact}
          >
            Solicite um Orçamento
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => {
              const objectiveSection = document.getElementById('objective');
              if (objectiveSection) {
                objectiveSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-rp-white hover:text-rp-orange transition-colors p-2"
            aria-label="Rolar para baixo"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
