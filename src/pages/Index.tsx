import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Insurance from "@/components/Insurance";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/Seo";
import { breadcrumbSchema, insuranceAgencySchema, websiteSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/site";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Tractus Corretora de Seguros | Saúde empresarial, benefícios e seguros corporativos"
        description="Corretora consultiva em Sorocaba, São Paulo e Guarulhos especializada em plano de saúde empresarial, benefícios corporativos, seguro de vida, seguro empresarial e análise gratuita de apólice."
        canonical={canonicalUrl("/")}
        keywords={[
          "corretora de seguros Sorocaba",
          "corretora de seguros Guarulhos",
          "corretora de seguros São Paulo",
          "plano de saúde empresarial Sorocaba",
          "benefícios corporativos",
          "seguro de vida empresarial",
          "seguro empresarial",
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [insuranceAgencySchema, websiteSchema, breadcrumbSchema([{ name: "Início", url: canonicalUrl("/") }])],
        }}
      />
      <Header />
      <Hero />
      <Contact />
      <About />
      <Benefits />
      <Insurance />
      <Testimonials />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
