
import { Check, Shield, Paintbrush } from "lucide-react";

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) => {
  return (
    <div 
      className="flex flex-col items-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-lg animate-fade-in-up group"
      style={{ animationDelay: delay }}
    >
      <div className="icon-container mb-4 group-hover:text-rp-orange transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-rp-blue-dark text-center mb-3 group-hover:text-rp-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ObjectiveSection = () => {
  const features = [
    {
      icon: <Check size={32} />,
      title: "Qualidade",
      description: "Utilizamos os melhores materiais e técnicas para garantir um acabamento perfeito que valoriza seu ambiente.",
      delay: "0.2s"
    },
    {
      icon: <Shield size={32} />,
      title: "Durabilidade",
      description: "Nossos produtos e métodos asseguram que a pintura mantenha sua beleza e integridade por muito mais tempo.",
      delay: "0.4s"
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Estética",
      description: "Criamos ambientes esteticamente harmoniosos que combinam com seu estilo e valorizam o seu espaço.",
      delay: "0.6s"
    }
  ];

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
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
