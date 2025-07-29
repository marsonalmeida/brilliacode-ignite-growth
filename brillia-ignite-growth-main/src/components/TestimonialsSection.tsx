import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Minha barbearia saiu do anonimato pra virar referência em Ibaiti. O trabalho da BrilliaCode transformou completamente minha presença digital.",
      author: "André",
      business: "Barbearia Nordestina",
      rating: 5
    },
    {
      text: "A automação com IA economizou 3 horas por dia no meu atendimento. Agora posso focar no que realmente importa: meus clientes.",
      author: "Jéssica",
      business: "Loja de Roupas",
      rating: 5
    },
    {
      text: "O visual da minha página agora combina com o profissionalismo que ofereço. Meus clientes perceberam a diferença na hora.",
      author: "Edu",
      business: "Studio de Tatuagem",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-brillia-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-inter-semibold text-brillia-primary mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl font-inter-medium text-brillia-secondary max-w-3xl mx-auto">
            Resultados reais de negócios que confiaram na BrilliaCode para crescer digitalmente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-lg transition-smooth"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-brillia-secondary font-inter-medium leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-inter-semibold text-brillia-primary">
                  {testimonial.author}
                </p>
                <p className="text-brillia-secondary font-inter-medium text-sm">
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;