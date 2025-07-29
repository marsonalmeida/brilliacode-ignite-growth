const AboutSection = () => {
  return <section id="sobre" className="py-20 px-6 bg-brillia-light bg-yellow-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-inter-semibold text-brillia-primary">
              Sobre a BrilliaCode
            </h2>
            <p className="text-lg font-inter-medium text-brillia-secondary leading-relaxed">
              A BrilliaCode nasceu para digitalizar pequenos negócios com alma. 
              Combinamos estratégia, identidade e automação com linguagem simples 
              e ferramentas que cabem no bolso.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="font-inter-semibold text-xl text-brillia-primary mb-3">
                Fundadores Locais
              </h3>
              <p className="text-brillia-secondary font-inter-medium">
                Presença regional sólida, conhecemos as necessidades dos negócios do interior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="font-inter-semibold text-xl text-brillia-primary mb-3">
                IA Ética e Prática
              </h3>
              <p className="text-brillia-secondary font-inter-medium">
                Tecnologia aplicada de forma responsável para potencializar seu negócio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <h3 className="font-inter-semibold text-xl text-brillia-primary mb-3">
                Atendimento Híbrido
              </h3>
              <p className="text-brillia-secondary font-inter-medium">
                Suporte remoto e presencial para estar sempre perto quando precisar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;