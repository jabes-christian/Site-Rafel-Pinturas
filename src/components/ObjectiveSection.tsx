
import { Check, Shield, Paintbrush } from "lucide-react";

const ObjectiveSection = () => {
  return (
    <section id="objective" className="container-section bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-12 animate-fade-in">Qualidade e Sofisticação em Cada Pincelada</h2>
        
        <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto animate-fade-in">
          Nosso serviço de pintura visa entregar qualidade, durabilidade e beleza para transformar seu ambiente. 
          Buscamos oferecer um serviço de pintura profissional que combine estética e funcionalidade, 
          garantindo um acabamento impecável, proteção duradoura e valorização do seu espaço.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Qualidade */}
          <div className="animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="icon-container animate-pulse-soft">
              <Check size={32} />
            </div>
            <h3 className="text-xl font-semibold text-rp-blue-dark text-center mb-3">Qualidade</h3>
            <p className="text-gray-600 text-center">
              Utilizamos os melhores materiais e técnicas para garantir um acabamento perfeito que valoriza seu ambiente.
            </p>
          </div>
          
          {/* Durabilidade */}
          <div className="animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <div className="icon-container animate-pulse-soft">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-semibold text-rp-blue-dark text-center mb-3">Durabilidade</h3>
            <p className="text-gray-600 text-center">
              Nossos produtos e métodos asseguram que a pintura mantenha sua beleza e integridade por muito mais tempo.
            </p>
          </div>
          
          {/* Estética */}
          <div className="animate-fade-in-up" style={{animationDelay: "0.6s"}}>
            <div className="icon-container animate-pulse-soft">
              <Paintbrush size={32} />
            </div>
            <h3 className="text-xl font-semibold text-rp-blue-dark text-center mb-3">Estética</h3>
            <p className="text-gray-600 text-center">
              Criamos ambientes esteticamente harmoniosos que combinam com seu estilo e valorizam o seu espaço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
