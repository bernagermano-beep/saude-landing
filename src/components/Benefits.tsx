import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, UtensilsCrossed, Gift } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";
import benefitsImageWebp from "@/assets/benefits-image.webp";
import benefitsImageAvif from "@/assets/benefits-image.avif";
import ResponsiveImage from "@/components/ResponsiveImage";

const Benefits = () => {
  const benefits = [
    { icon: Heart, title: "Planos de Saúde Empresariais", description: "Comparamos opções de acordo com o perfil da equipe, rede desejada e orçamento da empresa." },
    { icon: Shield, title: "Seguro de Vida em Grupo", description: "Estruturamos coberturas para proteger colaboradores e dar mais segurança ao contrato de trabalho." },
    { icon: UtensilsCrossed, title: "Vale Refeição e Alimentação", description: "Ajudamos a organizar benefícios de alimentação e refeição sem complicar a rotina do RH." },
    { icon: Gift, title: "Outros Benefícios Personalizados", description: "Vale-transporte, benefícios flexíveis e outros apoios que podem fazer sentido para o seu time." },
  ];

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Benefícios corporativos com análise de verdade</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Benefício bom não é só contratar uma operadora. É entender o que a equipe precisa, o que a empresa sustenta e quais condições merecem atenção antes da assinatura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-large">
          <ResponsiveImage
            src={benefitsImage}
            webpSrc={benefitsImageWebp}
            avifSrc={benefitsImageAvif}
            alt="Benefícios corporativos e plano de saúde empresarial para equipes"
            width={1024}
            height={768}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 flex items-center justify-center">
            <div className="text-center px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Quer comparar opções para sua empresa?</h3>
              <Button size="lg" onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90 transition-all">
                Comparar opções para minha empresa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
