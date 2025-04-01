
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Placeholder images until real project images are provided
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nJTIwd2FsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", alt: "Projeto de pintura residencial" },
  { id: 2, src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50aW5nJTIwd2FsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", alt: "Acabamento texturizado" },
  { id: 3, src: "https://images.unsplash.com/photo-1558618666-c9d0fc4a5107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnRpbmclMjB3YWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", alt: "Pintura comercial" },
  { id: 4, src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnRpbmclMjB3YWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", alt: "Preparação de superfície" },
  { id: 5, src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFpbnRpbmclMjB3YWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", alt: "Pintura de fachada" },
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
