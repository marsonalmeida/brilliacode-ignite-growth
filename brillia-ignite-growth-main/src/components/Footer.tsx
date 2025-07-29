import { Heart, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brillia-dark text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <img 
              src="/lovable-uploads/1000228030.png" 
              alt="BrilliaCode" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 font-inter-medium leading-relaxed max-w-md">
              Transformamos pequenos negócios em marcas digitais de sucesso. 
              Tecnologia com raiz, presença com verdade.
            </p>
          </div>
          
          <div>
            <h3 className="font-inter-semibold text-primary mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-smooth font-inter-medium">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-300 hover:text-primary transition-smooth font-inter-medium">
                  Planos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary transition-smooth font-inter-medium">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-smooth font-inter-medium">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-inter-semibold text-primary mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
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
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 font-inter-medium flex items-center">
              Feito com <Heart className="w-4 h-4 text-primary mx-1 fill-current" /> por quem acredita no poder das pequenas empresas.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth font-inter-medium">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-smooth font-inter-medium">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm font-inter-medium">
              © 2025 BrilliaCode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;