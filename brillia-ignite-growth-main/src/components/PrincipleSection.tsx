const PrincipleSection = () => {
  return (
    <section className="py-20 px-6 bg-brillia-dark text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/1000228030.png" 
            alt="BrilliaCode" 
            className="w-20 h-20 mx-auto mb-6"
          />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-inter-semibold text-primary mb-8">
          Princípio BrilliaCode
        </h2>
        
        <blockquote className="text-2xl md:text-3xl font-inter-semibold leading-relaxed mb-8">
          "Tecnologia com raiz. Presença com verdade."
        </blockquote>
        
        <p className="text-xl font-inter-medium text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Acreditamos no poder de pequenos negócios com voz própria e conteúdo estratégico. 
          Transformamos intenção em presença digital real, com ética, IA e estética.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-inter-semibold text-black">É</span>
            </div>
            <h3 className="font-inter-semibold text-xl mb-2">Ética</h3>
            <p className="text-gray-300 font-inter-medium">Transparência e responsabilidade em cada projeto</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-inter-semibold text-black">IA</span>
            </div>
            <h3 className="font-inter-semibold text-xl mb-2">Inteligência Artificial</h3>
            <p className="text-gray-300 font-inter-medium">Tecnologia que potencializa resultados</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-inter-semibold text-black">E</span>
            </div>
            <h3 className="font-inter-semibold text-xl mb-2">Estética</h3>
            <p className="text-gray-300 font-inter-medium">Design que encanta e converte</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleSection;