import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essencial",
      subtitle: "Começar nas redes",
      price: "R$ 297",
      features: [
        "8 posts mensais",
        "Stories semanais",
        "Suporte via WhatsApp",
        "Planejamento de conteúdo",
        "Identidade visual básica"
      ],
      popular: false
    },
    {
      name: "Visibilidade",
      subtitle: "Negócios locais ativos",
      price: "R$ 497",
      features: [
        "Tudo do plano anterior",
        "12 posts + 8 reels mensais",
        "Planejamento estratégico",
        "Anúncios no Instagram/Facebook",
        "Monitoramento de engajamento",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Presença Total",
      subtitle: "Online e físico",
      price: "R$ 797",
      features: [
        "Tudo do plano anterior",
        "Landing page personalizada",
        "Automações com IA no WhatsApp",
        "Site institucional",
        "Consultoria mensal",
        "Relatórios detalhados"
      ],
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 px-6 bg-brillia-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter-semibold text-brillia-primary mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl font-inter-medium text-brillia-secondary max-w-3xl mx-auto">
            Escolha o plano ideal para o momento do seu negócio. Crescemos juntos!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm border-2 transition-smooth hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary ring-2 ring-primary ring-opacity-20 scale-105' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-black text-center py-2 px-4 rounded-full text-sm font-inter-semibold mb-6 -mt-4">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-inter-semibold text-brillia-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-brillia-secondary font-inter-medium mb-4">
                  {plan.subtitle}
                </p>
                <div className="text-4xl font-inter-semibold text-brillia-primary">
                  {plan.price}
                  <span className="text-lg text-brillia-secondary">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-brillia-secondary font-inter-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className={`w-full font-inter-semibold ${
                  plan.popular 
                    ? 'bg-primary hover:bg-[hsl(var(--brillia-primary-hover))] text-black' 
                    : 'bg-secondary hover:bg-secondary/80 text-brillia-primary'
                }`}
              >
                <a href="https://wa.me/5543988508487" target="_blank" rel="noopener noreferrer">
                  Quero este plano
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;