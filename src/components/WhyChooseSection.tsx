
import { ArrowRight, Paintbrush, Shield, Zap, CheckCircle, PaintBucket, Heart } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <div 
      className="flex flex-col items-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-lg animate-fade-in-up group"
      style={{ animationDelay: delay }}
    >
      <div className="mb-4 text-rp-blue-light group-hover:text-rp-orange transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-rp-blue-dark mb-3 group-hover:text-rp-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Paintbrush size={40} />,
      title: "Transformação Visual",
      description: "Cores e acabamentos que renovam e valorizam o ambiente.",
      delay: "0.1s"
    },
    {
      icon: <Shield size={40} />,
      title: "Durabilidade",
      description: "Utilização de materiais de alta qualidade para maior resistência.",
      delay: "0.2s"
    },
    {
      icon: <Zap size={40} />,
      title: "Proteção",
      description: "Camadas que ajudam a preservar superfícies contra desgaste e umidade.",
      delay: "0.3s"
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Acabamento Profissional",
      description: "Técnicas precisas para um resultado impecável.",
      delay: "0.4s"
    },
    {
      icon: <PaintBucket size={40} />,
      title: "Personalização",
      description: "Opções de cores e texturas para atender ao seu estilo e necessidade.",
      delay: "0.5s"
    },
    {
      icon: <Heart size={40} />,
      title: "Satisfação Garantida",
      description: "Atendimento especializado e compromisso com a excelência.",
      delay: "0.6s"
    }
  ];

  return (
    <section id="why-choose-us" className="container-section bg-gray-50">
      <h2 className="section-title mb-16 animate-fade-in">O que nos torna a melhor escolha?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
