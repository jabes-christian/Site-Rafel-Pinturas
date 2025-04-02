
import { useState, useEffect } from "react";
import { Menu, X, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#objective" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Por que Escolher", href: "#why-choose-us" },
    { name: "Contato", href: "#contact" },
  ];
  
  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <div className="flex items-center">
              <PaintBucket 
                className={`mr-2 ${isScrolled ? "text-rp-blue-dark" : "text-white"}`} 
                fill={isScrolled ? "#FF8200" : "#FF8200"} 
                size={32} 
              />
              <h1 
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-rp-blue-dark" : "text-white"
                }`}
              >
                Rafael Pinturas
              </h1>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-medium transition-colors duration-300 hover:text-rp-orange ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X 
                className={`w-6 h-6 ${isScrolled ? "text-rp-blue-dark" : "text-white"}`} 
              />
            ) : (
              <Menu 
                className={`w-6 h-6 ${isScrolled ? "text-rp-blue-dark" : "text-white"}`} 
              />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fade-in absolute top-full left-0 right-0">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-700 font-medium py-2 hover:text-rp-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection("#contact");
              }}
              className="bg-rp-orange hover:bg-rp-orange/90 text-white mt-2"
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
