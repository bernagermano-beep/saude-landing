import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import aboutImageWebp from "@/assets/about-image.webp";
import aboutImageAvif from "@/assets/about-image.avif";
import ResponsiveImage from "@/components/ResponsiveImage";

const About = () => {
  const highlights = [
    "Análise antes da cotação",
    "Comparação entre seguradoras e operadoras",
    "Acompanhamento na contratação e no pós-venda",
    "Atendimento próximo para empresas e famílias",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre a Tractus</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A Tractus atende empresas e pessoas que precisam contratar seguro ou benefício com clareza.
              Antes de falar em preço, entendemos o cenário: quantidade de vidas, perfil do time, uso esperado, riscos e orçamento.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Com isso, a conversa fica mais objetiva. Você sabe o que está comparando, quais pontos exigem atenção
              e onde vale negociar melhor antes de fechar.
            </p>
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in flex items-center">
            <ResponsiveImage
              src={aboutImage}
              webpSrc={aboutImageWebp}
              avifSrc={aboutImageAvif}
              alt="Equipe Tractus Corretora de Seguros - Especialistas em Benefícios Corporativos São Paulo"
              width={1024}
              height={1024}
              className="rounded-2xl shadow-large w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
