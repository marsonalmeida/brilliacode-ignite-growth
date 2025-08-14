import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      business: "",
      message: "",
    }).toString();

    fetch(
      `https://script.google.com/macros/s/AKfycbwOpwybiFwBUfpYXzoWT9PSu-4Pfz5-UsajoVVgA-6jdSpcHptm01Oo_tfBiFGSvXPQrg/exec?${params}`
    ).catch((err) => console.error("Erro ao enviar para planilha:", err));

    const message =
      `Olá! Quero receber a avaliação gratuita.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : "") +
      `\nEnviado pelo site BrilliaCode.`;

    const whatsappUrl = `https://wa.me/5543988508487?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-brillia-dark text-white pt-8 pb-12 md:pb-16 px-6 min-h-screen md:min-h-0 overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
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
                <a
                  href="https://wa.me/5543988508487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-black font-inter-medium text-lg px-8 py-4"
              >
                <a href="#servicos">Ver nossos serviços</a>
              </Button>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="relative overflow-hidden">
            <Card className="p-6 md:p-8 bg-background/90 backdrop-blur-xl border border-border shadow-xl rounded-xl mb-6 md:mb-8 relative z-10">
              <h2 className="text-2xl font-inter-semibold text-foreground mb-2">
                Receba sua avaliação gratuita
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                Sem compromisso. Em menos de 1 minuto você inicia o contato.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    WhatsApp <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(43) 9 9999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Botão adaptável */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  <span className="hidden sm:inline">
                    Receber avaliação via WhatsApp →
                  </span>
                  <span className="inline sm:hidden">
                    Avaliação no WhatsApp →
                  </span>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para
                  finalizar o contato.
                </p>
              </form>
            </Card>

            {/* Bolas decorativas ajustadas */}
            <div
              className="
                pointer-events-none absolute top-0 right-0
                -translate-y-[12px] translate-x-[-6px]
                w-20 h-20 bg-primary/20 rounded-full animate-pulse
                z-30
              "
            />
            <div className="pointer-events-none absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full animate-pulse z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
