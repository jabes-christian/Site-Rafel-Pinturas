
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceType {
  title: string;
  items: { name: string; description: string }[];
}

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const serviceTypes: ServiceType[] = [
    {
      title: "Acabamentos, Pinturas e Revestimentos Especiais",
      items: [
        { 
          name: "Cimento Queimado", 
          description: "Acabamento moderno que simula concreto polido."
        },
        { 
          name: "Verniz Acetinado", 
          description: "Usado em amadeiramento para proteção e efeito semi-brilhante."
        },
        { 
          name: "Esmalte Sintético", 
          description: "Indicado para metais e madeira, proporcionando resistência e brilho."
        },
        { 
          name: "Grafiato", 
          description: "Cria um acabamento riscado e rústico na parede."
        }
      ]
    },
    {
      title: "Preparação da Superfície",
      items: [
        { 
          name: "Emaçamento", 
          description: "Aplicação de massa para nivelar e corrigir imperfeições."
        },
        { 
          name: "Lixamento", 
          description: "Uniformiza a superfície e remove resíduos antes da pintura."
        },
        { 
          name: "Selador e Fundo Preparador", 
          description: "Melhora a aderência da tinta e evita absorção excessiva."
        }
      ]
    }
  ];

  return (
    <section id="services" className="container-section bg-gray-50">
      <h2 className="section-title mb-16 animate-fade-in">Nossos Serviços</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {serviceTypes.map((serviceType, typeIndex) => (
          <div key={typeIndex} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * typeIndex}s` }}>
            <h3 className="text-2xl font-semibold text-rp-blue-dark mb-6">{serviceType.title}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceType.items.map((service, serviceIndex) => (
                <Card 
                  key={serviceIndex}
                  className={`overflow-hidden transition-all duration-300 h-full flex flex-col ${
                    hoveredCard === typeIndex * 10 + serviceIndex 
                      ? 'shadow-xl transform -translate-y-2 border-rp-blue-light' 
                      : 'shadow-md hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredCard(typeIndex * 10 + serviceIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="bg-gradient-to-r from-rp-blue-dark to-rp-blue-light p-4">
                    <CardTitle className="text-rp-white text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 flex-grow">
                    <p className="text-gray-700">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
