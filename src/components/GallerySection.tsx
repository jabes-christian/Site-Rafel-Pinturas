
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Real project images
const galleryImages = [
  { id: 1, src: "public/lovable-uploads/a245dfad-6b85-4e9f-8a47-f68ad31a79a9.png", alt: "Projeto de pintura residencial com textura cinza" },
  { id: 2, src: "public/lovable-uploads/e474485b-7653-4083-a986-148e49d6736d.png", alt: "Preparação de parede com acabamento texturizado" },
  { id: 3, src: "public/lovable-uploads/a29f14de-98ea-4c95-b468-24a38a7db050.png", alt: "Acabamento de parede com detalhes em branco" },
  { id: 4, src: "public/lovable-uploads/2afd0b27-3799-4fe2-bbbf-9053dee82283.png", alt: "Textura aplicada em parede com nichos" },
  { id: 5, src: "public/lovable-uploads/8f1eed26-2cc0-4a3f-bac9-951fb0f27a17.png", alt: "Preparação de parede para pintura" },
  { id: 6, src: "public/lovable-uploads/e9ce67bc-dd15-4d09-8c2c-a39908ae92d4.png", alt: "Instalação e pintura em banheiro" },
  { id: 7, src: "public/lovable-uploads/e48b535e-279b-4542-b6c4-ba92b7b318ff.png", alt: "Instalação e pintura em banheiro com acabamento branco" },
  { id: 8, src: "public/lovable-uploads/a53adfef-e298-4a6c-a50b-7267315c3dd7.png", alt: "Deck de madeira envernizado" },
  { id: 9, src: "public/lovable-uploads/ff5098a8-d42b-448e-a3ff-42095bcb5adc.png", alt: "Deck de madeira com acabamento" },
  { id: 10, src: "public/lovable-uploads/ebfbef5b-6459-4794-9473-5b4d2ab093ab.png", alt: "Sala com pintura texturizada e janelas" },
  { id: 11, src: "public/lovable-uploads/06f38157-14a8-4d0e-bdb6-282133674fd8.png", alt: "Corredor com pintura cinza" },
  { id: 12, src: "public/lovable-uploads/aada73e8-4596-4729-8d7a-c34ae6b4ec4d.png", alt: "Sala com pintura cinza e piso em cerâmica" },
];

const GallerySection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="gallery" className="container-section bg-white">
      <h2 className="section-title mb-12 animate-fade-in">Transformações Realizadas</h2>
      
      <div className="max-w-4xl mx-auto animate-fade-in">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-3/4 lg:basis-2/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-4 bg-rp-blue-dark text-white hover:bg-rp-blue-light hover:text-white" />
          <CarouselNext className="right-2 sm:right-4 bg-rp-blue-dark text-white hover:bg-rp-blue-light hover:text-white" />
        </Carousel>
        <div className="flex justify-center mt-4 text-sm text-gray-500">
          {current} / {galleryImages.length}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
