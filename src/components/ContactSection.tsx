
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Instagram, Clock } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Create Instagram DM link with pre-filled message
      const message = encodeURIComponent(`Nome: ${formData.name}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`);
      const instagramUrl = `https://www.instagram.com/rafael___pinturas`;
      
      // Open Instagram in new tab
      window.open(instagramUrl, '_blank');
      
      // Show success toast
      toast({
        title: "Mensagem enviada!",
        description: "Em breve entraremos em contato.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="container-section bg-white">
      <h2 className="section-title mb-16 animate-fade-in">Fale Conosco</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="animate-fade-in-left">
          <h3 className="text-2xl font-semibold text-rp-blue-dark mb-8">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rp-blue-light bg-opacity-10">
                <Phone className="text-rp-blue-dark" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="text-lg font-medium">(31) 98353-6449</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rp-blue-light bg-opacity-10">
                <Mail className="text-rp-blue-dark" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium">contato@rafaelpinturas.com.br</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rp-blue-light bg-opacity-10">
                <Instagram className="text-rp-blue-dark" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Instagram</p>
                <a 
                  href="https://www.instagram.com/rafael___pinturas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:text-rp-orange transition-colors"
                >
                  @rafael___pinturas
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rp-blue-light bg-opacity-10">
                <Clock className="text-rp-blue-dark" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Horário de Atendimento</p>
                <p className="text-lg font-medium">Segunda a Sexta: 8h às 18h</p>
                <p className="text-lg font-medium">Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="animate-fade-in-right">
          <h3 className="text-2xl font-semibold text-rp-blue-dark mb-8">Envie uma Mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="contact-input min-h-[150px]"
                placeholder="Descreva seu projeto ou dúvida"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-rp-orange hover:bg-rp-orange/90 text-white py-6 text-lg"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
