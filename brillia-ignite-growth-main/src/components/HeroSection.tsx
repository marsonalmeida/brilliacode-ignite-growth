import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-brillia-dark text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-inter-semibold leading-tight">
              Sua marca pode ser pequena, mas sua presença{" "}
              <span className="text-primary">não precisa ser.</span>
            </h1>
            
            <p className="text-xl font-inter-medium text-gray-300 leading-relaxed">
              Estratégia digital acessível para quem quer crescer nas redes com 
              identidade, conteúdo e IA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-[hsl(var(--brillia-primary-hover))] text-black font-inter-semibold text-lg px-8 py-4"
              >
                <a href="https://wa.me/5543988508487" target="_blank" rel="noopener noreferrer">
                  Solicite sua avaliação gratuita
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-black font-inter-medium text-lg px-8 py-4"
              >
                <a href="#servicos">
                  Ver nossos serviços
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/1000228030.png" 
                alt="BrilliaCode - Marketing Digital" 
                className="w-80 h-80 object-contain"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full animate-pulse opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;