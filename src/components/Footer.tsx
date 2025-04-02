
import { Instagram, Phone, Mail, ArrowUp, PaintBucket } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="bg-rp-blue-dark text-rp-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About - With Rafael Pinturas text */}
          <div>
            <div className="flex items-center mb-4">
              <PaintBucket className="text-rp-blue-light mr-2" fill="#FF8200" size={42} />
              <h3 className="text-xl font-bold font-urbanist">Rafael Pinturas</h3>
            </div>
            <p className="text-rp-white text-opacity-80">
              Transformando espaços com qualidade, durabilidade e beleza.
              Serviços de pintura profissional para valorizar seu ambiente.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-rp-white text-opacity-80 hover:text-rp-orange transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-rp-white text-opacity-80 hover:text-rp-orange transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a 
                  href="#why-choose-us" 
                  className="text-rp-white text-opacity-80 hover:text-rp-orange transition-colors"
                >
                  Por que nos escolher
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-rp-white text-opacity-80 hover:text-rp-orange transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-rp-orange" />
                <span>(31) 98353-6449</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-rp-orange" />
                <span>rafa1.o.gabriel@outlook.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram size={18} className="text-rp-orange" />
                <a 
                  href="https://www.instagram.com/rafael___pinturas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rp-orange transition-colors"
                >
                  @rafael___pinturas
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-rp-white text-opacity-60">
            &copy; {new Date().getFullYear()} Rafael Pinturas. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-rp-blue-light bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
