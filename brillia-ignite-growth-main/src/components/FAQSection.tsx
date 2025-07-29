import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Posso contratar só um serviço específico?",
      answer: "Sim! Embora nossos planos sejam pensados de forma integrada para melhores resultados, oferecemos serviços avulsos como criação de logo, gestão de redes sociais ou desenvolvimento de site. Entre em contato para montarmos uma proposta personalizada."
    },
    {
      question: "Vocês atendem presencialmente?",
      answer: "Sim, atendemos presencialmente na região de Pinhalão-PR e cidades próximas. Para outros locais, oferecemos atendimento 100% online com a mesma qualidade e suporte personalizado."
    },
    {
      question: "Já tenho conta no Instagram, mas está parada. Vocês reativam?",
      answer: "Claro! Muitos dos nossos clientes chegam com perfis dormentes. Fazemos uma auditoria completa, otimizamos o perfil, criamos uma estratégia de conteúdo e reativamos o engajamento de forma orgânica e consistente."
    },
    {
      question: "Como funciona a automação com IA no WhatsApp?",
      answer: "Criamos um assistente virtual inteligente que atende seus clientes 24/7, qualifica leads, agenda horários, responde dúvidas frequentes e direciona conversas importantes para você. Tudo de forma natural e personalizada para seu negócio."
    },
    {
      question: "Preciso fornecer todo o conteúdo ou vocês criam?",
      answer: "Criamos todo o conteúdo! Nosso processo inclui briefing detalhado do seu negócio, criação de textos, design gráfico, produção de vídeos e reels. Você só precisa aprovar e acompanhar os resultados."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já na primeira semana com melhorias no visual e organização do perfil. Resultados de engajamento e alcance começam em 15-30 dias. Crescimento sólido e conversões acontecem entre 2-3 meses de trabalho consistente."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter-semibold text-brillia-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl font-inter-medium text-brillia-secondary max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e como podemos ajudar seu negócio.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-brillia-light/50 transition-smooth"
              >
                <h3 className="font-inter-semibold text-brillia-primary text-lg">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-brillia-secondary font-inter-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;