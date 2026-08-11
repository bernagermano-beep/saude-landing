import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, MessageCircle, ShieldCheck, TrendingDown } from "lucide-react";
import { analysisWhatsAppMessage, buildWhatsAppUrl } from "@/lib/leadConfig";
import { trackEvent } from "@/lib/analytics";
import { breadcrumbSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/site";

const AnalysisPage = () => {
  const whatsappUrl = buildWhatsAppUrl(analysisWhatsAppMessage);

  const benefits = [
    { icon: ClipboardCheck, title: "Revisão dos dados principais", text: "Entendemos produto, operadora/seguradora, quantidade de vidas, veículos ou cobertura e próximo vencimento." },
    { icon: TrendingDown, title: "Pontos de custo e reajuste", text: "Mapeamos onde pode haver oportunidade de comparação, renegociação ou alternativa mais adequada." },
    { icon: ShieldCheck, title: "Riscos de cobertura", text: "Apontamos pontos que merecem atenção antes de trocar, renovar ou contratar uma nova solução." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Análise gratuita de apólice | Tractus Corretora de Seguros"
        description="Solicite uma análise gratuita da sua apólice, plano de saúde empresarial, seguro ou benefício corporativo. A Tractus orienta pelo WhatsApp e pede os documentos só quando necessário."
        canonical={canonicalUrl("/analise-gratuita-apolice")}
        keywords={[
          "análise gratuita de apólice",
          "revisar apólice de seguro empresarial",
          "reduzir custo plano de saúde empresarial",
          "comparar seguro empresarial",
          "Tractus Corretora",
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Análise gratuita de apólice e benefícios empresariais",
              provider: { "@type": "InsuranceAgency", name: "Tractus Corretora de Seguros", url: canonicalUrl("/") },
              areaServed: "São Paulo",
              serviceType: "Análise consultiva de apólice, seguros e benefícios corporativos",
              url: canonicalUrl("/analise-gratuita-apolice"),
            },
            breadcrumbSchema([
              { name: "Início", url: canonicalUrl("/") },
              { name: "Análise gratuita", url: canonicalUrl("/analise-gratuita-apolice") },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <section className="relative pt-36 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Diagnóstico gratuito</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Sua empresa pode estar pagando caro ou ficando descoberta sem perceber.</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Preencha um formulário rápido. A Tractus chama pelo WhatsApp oficial, pede a apólice ou contrato quando necessário e avalia pontos de custo, cobertura, reajuste e alternativas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  <a
                    href="#formulario-analise"
                    onClick={() => trackEvent("click_cta", { source: "Página análise gratuita de apólice", cta_text: "Solicitar análise gratuita", target_section: "formulario-analise", product: "Análise gratuita da apólice atual" })}
                  >
                    Solicitar análise gratuita
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click_whatsapp", { source: "Página análise gratuita de apólice", cta_text: "Falar com especialista", link_url: whatsappUrl })}>
                    <MessageCircle className="mr-2" size={20} /> Falar com especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario-analise" className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start scroll-mt-32 py-16 bg-background">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">Como funciona</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Sem upload no primeiro passo para subir rápido e facilitar sua vida.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>1. Você envia nome, empresa, WhatsApp, cidade e produto de interesse.</p>
              <p>2. A solicitação entra como oportunidade para qualificação pelos especialistas.</p>
              <p>3. A equipe chama pelo WhatsApp oficial já usado no site.</p>
              <p>4. Se fizer sentido, pedimos a apólice ou contrato por WhatsApp e seguimos com a análise.</p>
            </div>
          </div>

          <Card className="shadow-soft">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Solicitar análise gratuita</h2>
              <p className="text-muted-foreground mb-6">O aviso vai para contato@tractuscorretora.com e já sai identificado para os consultores.</p>
              <LeadForm
                source="Página análise gratuita de apólice"
                defaultProduct="Análise gratuita da apólice atual"
                redirectPath="/analise-gratuita-apolice#formulario-analise"
                ctaLabel="Solicitar análise gratuita"
                messagePlaceholder="Qual apólice, plano ou benefício você quer revisar? Se souber, informe vencimento, operadora/seguradora atual e principal preocupação."
                compact
              />
            </CardContent>
          </Card>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {benefits.map((item) => (
                <Card key={item.title} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AnalysisPage;
