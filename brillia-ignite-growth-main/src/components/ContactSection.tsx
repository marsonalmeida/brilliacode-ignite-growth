import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(formData).toString();
    fetch(`https://script.google.com/macros/s/AKfycbwOpwybiFwBUfpYXzoWT9PSu-4Pfz5-UsajoVVgA-6jdSpcHptm01Oo_tfBiFGSvXPQrg/exec?${params}`)
      .catch((err) => console.error('Erro ao enviar para planilha:', err));
    const message = `Olá! Gostaria de receber um plano gratuito.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Tipo de Negócio:* ${formData.business}\n*Mensagem:* ${formData.message}\n\nEnviado através do site BrilliaCode.`;
    const whatsappUrl = `https://wa.me/5543988508487?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter-semibold text-brillia-primary mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl font-inter-medium text-brillia-secondary max-w-3xl mx-auto">
            Estamos prontos para transformar sua presença digital. Entre em contato e vamos começar hoje mesmo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Avaliação e Formulário lado a lado */}
          <div className="bg-primary p-8 rounded-xl text-black flex flex-col justify-center">
            <h3 className="text-2xl font-inter-semibold mb-4">
              Avaliação Gratuita
            </h3>
            <p className="font-inter-medium mb-4 leading-relaxed">
              Nossa avaliação gratuita vai muito além de um simples diagnóstico:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-base">
              <li><span className="font-inter-semibold">Análise completa das suas redes sociais</span> — Identificamos pontos fortes, oportunidades e o que pode ser melhorado.</li>
              <li><span className="font-inter-semibold">Plano estratégico personalizado</span> — Receba recomendações práticas e um roteiro de ações sob medida para o seu negócio.</li>
              <li><span className="font-inter-semibold">Dicas de conteúdo e engajamento</span> — Saiba como atrair mais clientes e fortalecer sua presença online.</li>
              <li><span className="font-inter-semibold">Benchmark com concorrentes</span> — Veja como sua marca se posiciona no mercado e como pode se diferenciar.</li>
              <li><span className="font-inter-semibold">Sem compromisso</span> — Você recebe tudo isso gratuitamente, sem obrigação de contratar nossos serviços.</li>
            </ul>
            {/* Frase removida */}
          </div>
          <Card className="p-8 flex flex-col justify-center">
            <p className="text-base text-muted-foreground text-center mb-4">Preencha em menos de 1 minuto e receba sua avaliação personalizada rapidamente!</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(43) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Negócio *
                  </label>
                  <Input
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Ex: Salão de beleza"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Conte-nos sobre seus objetivos
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente seus principais desafios e objetivos com o marketing digital..."
                  rows={4}
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                Enviar via WhatsApp →
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
              </p>
            </form>
          </Card>
        </div>

        {/* Informações de contato e redes sociais unidas */}
        <div className="bg-brillia-dark p-8 rounded-xl shadow-sm border border-border mt-12">
          <h3 className="text-2xl font-inter-semibold text-white mb-6 text-center">
            Informações de Contato
          </h3>
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-white mb-1" />
                <p className="font-inter-semibold text-white">WhatsApp</p>
                <p className="text-blue-200 font-inter-medium">(43) 98850-8487</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-white mb-1" />
                <p className="font-inter-semibold text-white">Email</p>
                <p className="text-blue-200 font-inter-medium">atendimento@brilliacode.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-white mb-1" />
                <p className="font-inter-semibold text-white">Localização</p>
                <p className="text-blue-200 font-inter-medium">Pinhalão – PR</p>
              </div>
            </div>
            <h3 className="text-xl font-inter-semibold text-white mb-4 text-center mt-4">
              Siga-nos nas Redes Sociais
            </h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a 
                href="https://instagram.com/brilliacode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-black transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/brilliacode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-black transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;