import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Tech Solutions Ltda",
      content: "A Tractus transformou nosso programa de benefícios. O atendimento é excepcional e sempre encontram as melhores soluções para nossa equipe.",
      rating: 5,
    },
    {
      name: "João Santos",
      company: "Indústria Moderna S.A.",
      content: "Trabalho com seguros há anos e posso afirmar: a Tractus é uma parceira de confiança. Profissionalismo e dedicação em cada atendimento.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Comércio Central",
      content: "Excelente assessoria! Nos ajudaram a estruturar todo o pacote de benefícios da empresa com economia e qualidade.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos clientes é nosso maior patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
