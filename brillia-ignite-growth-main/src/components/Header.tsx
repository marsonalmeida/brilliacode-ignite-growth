import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-brillia-dark text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/1000228030.png" 
            alt="BrilliaCode Logo" 
            className="h-10"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className="font-inter-medium hover:text-primary transition-smooth">
            Serviços
          </a>
          <a href="#planos" className="font-inter-medium hover:text-primary transition-smooth">
            Planos
          </a>
          <a href="#sobre" className="font-inter-medium hover:text-primary transition-smooth">
            Sobre
          </a>
          <a href="#contato" className="font-inter-medium hover:text-primary transition-smooth">
            Contato
          </a>
        </nav>

        <div className="flex space-x-3 items-center relative">
          <Button 
            asChild
            className="bg-primary hover:bg-[hsl(var(--brillia-primary-hover))] text-black font-inter-semibold"
          >
            <a href="https://wa.me/5543988508487" target="_blank" rel="noopener noreferrer">
              Solicitar Avaliação
            </a>
          </Button>

          <div className="relative group w-full">
            <Button 
              asChild
              className="bg-primary hover:bg-[hsl(var(--brillia-primary-hover))] text-black font-inter-semibold"
            >
              <a href="/assets/BC - Impulso Inicial.pdf" target="_blank" rel="noopener noreferrer" download>
                Baixar Plano Inicial
              </a>
            </Button>
            <span className="absolute top-full mt-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 w-full text-center z-50">
              Baixe agora o PDF com o pacote Impulso Inicial para mais informações
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
