// Componente de seção de preços com destaque e modal de setup inicial para Presença Total
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  subtitle: string;
  description: string;
  price: string;     // preço atual (ex.: lançamento)
  oldPrice?: string; // preço de lista (mostra tachado, opcional)
  features: string[];
  popular?: boolean;
  setupNotice?: boolean;
};

const plans: Plan[] = [
  {
    name: "Essencial",
    subtitle: "Conteúdo Ágil mensal",
    description:
      "Plano enxuto para manter sua presença ativa com entregas claras e prova de valor mensal.",
    // Preço recomendado: lista 597 → lançamento 497
    price: "R$ 497",
    oldPrice: "R$ 597",
    features: [
      "8 posts/mês (imagem + copy)",
      "1 carrossel (5–7 slides)",
      "Micro-relatório mensal (1 página)",
      "1 call de 20–30 min/mês",
      "Planejamento simples (calendário do mês)",
      "Suporte via WhatsApp (D+1 útil, texto, sem criação extra)"
    ],
    popular: true
  },
  {
    name: "Visibilidade",
    subtitle: "Para negócios que querem crescer no digital",
    description:
      "Para marcas locais que desejam aumentar alcance e engajamento com mais formatos e mídia.",
    // Ajuste para terminar em 7
    price: "R$ 897",
    oldPrice: "R$ 1.097",
    features: [
      "12 posts + 4 reels/mês",
      "Stories em destaque (até 3 por semana)",
      "Planejamento estratégico (persona e concorrência)",
      "Gestão de até 2 campanhas/mês (IG/FB – verba do cliente)",
      "Monitoramento e relatório simplificado mensal",
      "Suporte prioritário via WhatsApp"
    ],
    popular: false
  },
  {
    name: "Presença Total",
    subtitle: "Sua presença online, completa e inteligente",
    description:
      "Plano completo com conteúdo, impulsionamento, automação e análise para presença estruturada.",
    // Ajuste para terminar em 7
    price: "R$ 1.497",
    oldPrice: "R$ 1.797",
    features: [
      "12 posts + 4 reels/mês",
      "Stories em destaque (até 3 por semana)",
      "Landing page otimizada",
      "Consultoria mensal (4h de reuniões e orientação)",
      "Relatórios detalhados com indicadores de performance",
      "Manutenção de automações com IA (WhatsApp ou Instagram)",
      "Suporte ampliado por WhatsApp e vídeo",
      "Atualizações mensais de identidade e posicionamento"
    ],
    setupNotice: true,
    popular: false
  }
];

const PricingSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  // Destaque inicial: Essencial
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [showSetupModal, setShowSetupModal] = useState(false);

  const openPlanModal = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const closePlanModal = () => {
    setSelectedPlan(null);
  };

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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              className={`bg-white rounded-xl p-8 shadow-sm border-2 transition-all duration-300 ease-in-out ${
                hoveredIndex === index || (index === 0 && hoveredIndex === null)
                  ? "scale-105 border-primary ring-2 ring-primary ring-opacity-20 z-10"
                  : "scale-100 border-border"
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

                {/* Preço com "de/por" opcional */}
                {plan.oldPrice && (
                  <div className="text-lg text-brillia-secondary line-through">
                    De {plan.oldPrice}/mês
                  </div>
                )}
                <div className="text-4xl font-inter-semibold text-brillia-primary">
                  {plan.price}
                  <span className="text-lg text-brillia-secondary">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-brillia-secondary font-inter-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => openPlanModal(plan)}
                className={`w-full font-inter-semibold transition-all duration-300 ${
                  hoveredIndex === index
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-secondary text-brillia-primary hover:bg-secondary/80"
                }`}
              >
                Quero este plano
              </Button>

              {plan.name === "Presença Total" && (
                <p
                  className="text-xs text-center text-brillia-secondary mt-3 underline cursor-pointer"
                  onClick={() => setShowSetupModal(true)}
                >
                  Saiba mais sobre o setup inicial
                </p>
              )}
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
              <h3 className="text-xl font-bold text-brillia-primary mb-2">
                {selectedPlan.name}
              </h3>
              <p className="text-brillia-secondary mb-4">
                {selectedPlan.description}
              </p>
              <ul className="text-sm text-brillia-secondary mb-4 list-disc list-inside space-y-1">
                {selectedPlan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <Button className="w-full bg-primary text-black" onClick={closePlanModal}>
                Fechar
              </Button>
            </div>
          </div>
        )}

        {showSetupModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
              <h4 className="text-lg font-bold text-brillia-primary mb-3">
                O que está incluso no setup inicial?
              </h4>
              <p className="text-sm text-brillia-secondary mb-6">
                O setup inicial cobre as entregas técnicas e estruturais únicas do plano, como
                criação de site institucional, landing page otimizada, integração de canais (Meta Suite),
                automações com IA, domínio, e-mail profissional e configurações especializadas.
                O valor do setup é definido conforme o escopo necessário para seu negócio e pode ser
                parcelado ou diluído nos primeiros meses do contrato.
              </p>
              <Button
                className="w-full bg-primary text-black"
                onClick={() => setShowSetupModal(false)}
              >
                Entendi
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
