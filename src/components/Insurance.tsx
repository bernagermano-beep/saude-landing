import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Heart, Home, Plane } from "lucide-react";
import familyImage from "@/assets/personal-insurance.jpg";
import familyImageWebp from "@/assets/personal-insurance.webp";
import familyImageAvif from "@/assets/personal-insurance.avif";
import ResponsiveImage from "@/components/ResponsiveImage";

const Insurance = () => {
  const insurances = [
    { icon: Car, title: "Seguro de Carro", description: "Cotação com atenção a cobertura, franquia, assistência e uso real do veículo." },
    { icon: Heart, title: "Seguro de Vida Individual", description: "Proteção financeira para quem depende de você, com coberturas explicadas sem enrolação." },
    { icon: Home, title: "Seguro Residencial", description: "Coberturas para casa, apartamento, assistência e imprevistos do dia a dia." },
    { icon: Plane, title: "Seguro Viagem", description: "Apoio para viagens nacionais e internacionais, com atenção ao destino e ao perfil da viagem." },
  ];

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="insurance" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in flex items-center">
            <ResponsiveImage
              src={familyImage}
              webpSrc={familyImageWebp}
              avifSrc={familyImageAvif}
              alt="Família brasileira em momento natural para representar seguros pessoais e proteção familiar"
              width={1024}
              height={768}
              className="rounded-2xl shadow-large w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Seguros para sua rotina e sua família</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Além das soluções para empresas, a Tractus também ajuda na contratação de seguros pessoais. A ideia é simples: explicar as opções, apontar diferenças importantes e evitar uma escolha feita só pelo menor preço.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {insurances.map((insurance, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <insurance.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{insurance.title}</h3>
                <p className="text-muted-foreground mb-4">{insurance.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
