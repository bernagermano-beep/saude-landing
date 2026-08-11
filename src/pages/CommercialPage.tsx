import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildWhatsAppUrl } from "@/lib/leadConfig";
import { trackEvent } from "@/lib/analytics";
import { breadcrumbSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/site";
import type { CommercialPageConfig } from "@/data/commercialPages";

type CommercialPageProps = {
  page: CommercialPageConfig;
};

const CommercialPage = ({ page }: CommercialPageProps) => {
  const whatsappMessage = `Olá! Vim pelo site da Tractus e quero falar sobre ${page.product}.`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);
  const canonical = canonicalUrl(`/${page.slug}`);
  const Icon = page.icon;

  const handleWhatsAppClick = () => {
    trackEvent("click_whatsapp", {
      source: `Página comercial — ${page.product}`,
      product: page.product,
      link_url: whatsappUrl,
      cta_text: "Falar com especialista",
      crm_pipeline: "Consultores",
      crm_stage: "Oportunidade",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={page.seoTitle}
        description={page.seoDescription}
        canonical={canonical}
        keywords={page.keywords}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: page.product,
              description: page.seoDescription,
              provider: {
                "@type": "InsuranceAgency",
                name: "Tractus Corretora de Seguros",
                url: canonicalUrl("/"),
                email: "contato@tractuscorretora.com",
                telephone: "+55-11-99824-9160",
              },
              areaServed: ["Sorocaba", "São Paulo", "Interior de São Paulo", "Brasil"],
              serviceType: page.product,
              url: canonical,
            },
            breadcrumbSchema([
              { name: "Início", url: canonicalUrl("/") },
              { name: page.product, url: canonical },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <section className="relative pt-36 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 bg-black/45" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">{page.eyebrow}</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{page.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">{page.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    <a
                      href="#cotacao"
                      onClick={() => trackEvent("click_cta", {
                        source: `Página comercial — ${page.product}`,
                        cta_text: "Comparar opções para minha empresa",
                        target_section: "cotacao",
                        product: page.product,
                      })}
                    >
                    Comparar opções para minha empresa
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                      <MessageCircle className="mr-2" size={20} /> Falar com especialista
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="bg-white/95 text-foreground shadow-large">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-gradient-primary w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="text-white" size={30} />
                  </div>
                  <h2 className="text-2xl font-bold mb-5">Como a Tractus conduz</h2>
                  <div className="space-y-4">
                    {page.heroBullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cotacao" className="scroll-mt-32 py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Próximo passo</p>
                <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">{page.formTitle}</h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>{page.formDescription}</p>
                  <p>
                    Você também pode falar diretamente pelo WhatsApp <strong>+55 11 99824-9160</strong>. A oportunidade será qualificada pelo time comercial da Tractus.
                  </p>
                </div>
              </div>

              <Card className="shadow-soft">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Enviar dados para cotação</h2>
                  <p className="text-muted-foreground mb-6">
                    O aviso vai para contato@tractuscorretora.com e já sai identificado como Cliente / Oportunidade para os consultores.
                  </p>
                  <LeadForm
                    source={`Página comercial — ${page.product}`}
                    defaultProduct={page.product}
                    redirectPath={`/${page.slug}#cotacao`}
                    ctaLabel="Solicitar análise gratuita"
                    messagePlaceholder={page.messagePlaceholder}
                    compact
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">Cotação com contexto</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Menos formulário genérico, mais qualificação para sua empresa.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada cliente é identificado como <strong>Cliente / Oportunidade</strong>. O primeiro contato não exige upload; quando necessário, documentos e apólices são pedidos pelo WhatsApp oficial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {page.highlights.map((highlight) => (
                <Card key={highlight.title} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <ShieldCheck className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              {page.sections.map((section) => (
                <Card key={section.title} className="shadow-soft">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-5">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
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

export default CommercialPage;
