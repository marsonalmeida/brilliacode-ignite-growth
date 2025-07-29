import { Palette, Instagram, Video, Globe, MessageSquare, Users } from "lucide-react";
const ServicesSection = () => {
  const services = [{
    icon: Palette,
    title: "Identidade Visual & Branding",
    description: "Logo, paleta de cores e manual de marca para destacar seu negócio."
  }, {
    icon: Instagram,
    title: "Gestão de Instagram e Facebook",
    description: "Conteúdo estratégico e engajamento real nas redes sociais."
  }, {
    icon: Video,
    title: "Criação de Reels, Vídeos e Posts",
    description: "Conteúdo visual que converte e aumenta o alcance orgânico."
  }, {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Presença digital profissional que gera resultados reais."
  }, {
    icon: MessageSquare,
    title: "Automação no WhatsApp com IA",
    description: "Atendimento inteligente 24/7 que qualifica e converte leads."
  }, {
    icon: Users,
    title: "Mentoria Digital para Autônomos",
    description: "Capacitação prática para você gerir sua própria presença digital."
  }];
  return <section id="servicos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter-semibold text-brillia-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl font-inter-medium text-brillia-secondary max-w-3xl mx-auto">
            Soluções completas para transformar sua presença digital e fazer seu negócio crescer de verdade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-brillia-card p-8 rounded-xl hover:shadow-lg transition-smooth group bg-slate-100">
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              </div>
              <h3 className="text-xl font-inter-semibold text-brillia-primary mb-4">
                {service.title}
              </h3>
              <p className="text-brillia-secondary font-inter-medium leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;