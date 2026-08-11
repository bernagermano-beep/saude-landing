import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import heroImageWebp from "@/assets/hero-image.webp";
import heroImageAvif from "@/assets/hero-image.avif";
import ResponsiveImage from "@/components/ResponsiveImage";
import { trackEvent } from "@/lib/analytics";

const Hero = () => {
  const scrollToSection = (id: string) => {
    trackEvent("click_cta", {
      source: "Hero",
      cta_text: id === "benefits" ? "Comparar opções para minha empresa" : "Falar com especialista",
      target_section: id,
    });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ResponsiveImage
        src={heroImage}
        webpSrc={heroImageWebp}
        avifSrc={heroImageAvif}
        alt="Equipe da Tractus Corretora em atendimento consultivo"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/75 z-0" style={{ mixBlendMode: "multiply" }} />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Seguro e benefícios sem empurrar pacote pronto
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            A Tractus compara alternativas, revisa reajustes e ajuda sua empresa a escolher o que faz sentido em saúde, vida, benefícios e seguros corporativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("benefits")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg group"
            >
              Comparar opções para minha empresa
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg"
            >
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
