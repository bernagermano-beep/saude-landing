import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import Seo from "@/components/Seo";
import WhatsAppButton from "@/components/WhatsAppButton";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildWhatsAppUrl } from "@/lib/leadConfig";
import { trackEvent } from "@/lib/analytics";
import { breadcrumbSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/site";
import heroWorkers from "@/assets/business-team-meeting.jpg";
import heroWorkersWebp from "@/assets/business-team-meeting.webp";
import heroWorkersAvif from "@/assets/business-team-meeting.avif";

export type VidaCityConfig = {
  name: string;
  slug: string;
  nearby: string[];
  regionalContext: string;
};

export const vidaCityConfigs: Record<"sorocaba" | "sao-paulo" | "guarulhos", VidaCityConfig> = {
  sorocaba: {
    name: "Sorocaba",
    slug: "sorocaba",
    nearby: ["Votorantim", "Itu", "Salto", "Boituva", "Porto Feliz"],
    regionalContext: "empresas de Sorocaba, Votorantim, Itu, Salto, Boituva, Porto Feliz e região",
  },
  "sao-paulo": {
    name: "São Paulo",
    slug: "sao-paulo",
    nearby: ["Grande São Paulo", "ABC", "Osasco", "Barueri", "Zona Sul", "Zona Oeste"],
    regionalContext: "empresas de São Paulo, Grande São Paulo, ABC, Osasco, Barueri e região metropolitana",
  },
  guarulhos: {
    name: "Guarulhos",
    slug: "guarulhos",
    nearby: ["Cumbica", "Aeroporto de Guarulhos", "Vila Galvão", "Centro de Guarulhos", "região logística"],
    regionalContext: "empresas de Guarulhos, Cumbica, região do Aeroporto, polos logísticos, galpões, transportadoras e indústrias",
  },
};

type VidaEmpresarialPageProps = {
  city?: VidaCityConfig;
  legacy?: boolean;
};

const vidaEmpresarialWhatsAppNumber = "5511998249160";

const indicatedFor = [
  "Empresas que precisam cumprir exigência de CCT ou sindicato.",
  "RHs que querem estruturar benefício de vida em grupo para colaboradores.",
  "Diretores e financeiros que precisam comparar custo, cobertura e implantação.",
  "Empresas com apólice vigente perto da renovação ou com dúvidas sobre cobertura.",
];

const processSteps = [
  { title: "1. Entendimento rápido", text: "Você informa cidade, quantidade de colaboradores, segmento e se existe CCT ou apólice atual." },
  { title: "2. Leitura técnica", text: "A Tractus organiza as informações, avalia exigências e identifica coberturas relevantes para a empresa." },
  { title: "3. Cotação e orientação", text: "Comparamos alternativas e explicamos próximos passos para contratação, renovação ou revisão." },
];

const coverages = [
  "Morte natural ou acidental",
  "Invalidez permanente total ou parcial por acidente",
  "Invalidez funcional ou laboral, conforme aceitação da seguradora",
  "Assistência funeral individual ou familiar",
  "Doenças graves e outras garantias opcionais quando fizer sentido",
  "Capitais segurados ajustados ao perfil da equipe e à CCT",
];

const benefits = [
  {
    title: "Para a empresa",
    items: ["Conformidade com CCT quando aplicável", "Previsibilidade de custo", "Benefício claro para atração e retenção"],
  },
  {
    title: "Para colaboradores",
    items: ["Proteção financeira à família", "Assistências úteis em momentos críticos", "Mais segurança no pacote de benefícios"],
  },
];

const faq = [
  {
    question: "Seguro de vida empresarial é obrigatório?",
    answer: "Depende da convenção coletiva, sindicato, categoria e regra aplicável à empresa. A Tractus pode ajudar a checar a CCT e orientar quais pontos precisam ser considerados.",
  },
  {
    question: "Qual o número mínimo de vidas?",
    answer: "Varia conforme seguradora e produto. No primeiro contato, informe a quantidade de colaboradores para a equipe filtrar alternativas viáveis.",
  },
  {
    question: "Posso revisar a apólice atual?",
    answer: "Sim. A landing já direciona empresas que possuem seguro vigente para revisão de capital, coberturas, vencimento e aderência à operação atual.",
  },
  {
    question: "A cotação exige envio de documentos agora?",
    answer: "Não. O formulário é inicial. Se documentos, CCT ou apólice forem necessários, a equipe pede pelo WhatsApp oficial da Tractus.",
  },
];

const VidaEmpresarialPage = ({ city = vidaCityConfigs.sorocaba, legacy = false }: VidaEmpresarialPageProps) => {
  const page = {
    slug: legacy ? "vida-empresarial" : `seguro-de-vida-empresarial-${city.slug}`,
    product: "Seguro de vida empresarial",
    canonical: canonicalUrl(`/${legacy ? "vida-empresarial" : `seguro-de-vida-empresarial-${city.slug}`}`),
    seoTitle: `Seguro de Vida Empresarial em ${city.name} | Tractus Corretora`,
    seoDescription: `Seguro de vida empresarial e vida em grupo em ${city.name}. Cotação, CCT, revisão de apólice, coberturas e implantação para ${city.regionalContext}.`,
    keywords: [
      `seguro de vida empresarial ${city.name}`,
      `seguro de vida em grupo ${city.name}`,
      `seguro de vida CCT ${city.name}`,
      `vida em grupo para empresas ${city.name}`,
      "seguro de vida para colaboradores",
    ],
  };

  const whatsappMessage = `Olá! Vim pelo site da Tractus e quero revisar minha apólice ou avaliar Seguro de Vida Empresarial / Vida em Grupo para uma empresa em ${city.name}.`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage, vidaEmpresarialWhatsAppNumber);
  const heroProofs = [`${city.name} e região`, "CCT e renovação", "Cotação consultiva"];

  const trackQuoteClick = (ctaText: string, target: string) => {
    trackEvent("quote_cta_click", {
      source: `Landing Vida Empresarial — ${city.name}`,
      product: page.product,
      cta_text: ctaText,
      target_section: target,
    });
  };

  const trackWhatsAppClick = (ctaText: string) => {
    trackEvent("whatsapp_click", {
      source: `Landing Vida Empresarial — ${city.name}`,
      product: page.product,
      cta_text: ctaText,
      link_url: whatsappUrl,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={page.seoTitle}
        description={page.seoDescription}
        canonical={page.canonical}
        keywords={page.keywords}
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `Seguro de Vida Empresarial / Vida em Grupo em ${city.name}`,
              description: page.seoDescription,
              provider: {
                "@type": "InsuranceAgency",
                name: "Tractus Corretora de Seguros",
                url: canonicalUrl("/"),
                telephone: "+55-11-99824-9160",
                email: "contato@tractuscorretora.com",
              },
              areaServed: [city.name, ...city.nearby, "São Paulo"],
              serviceType: "Seguro de vida em grupo para empresas",
              url: page.canonical,
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
            breadcrumbSchema([
              { name: "Início", url: canonicalUrl("/") },
              { name: page.product, url: page.canonical },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-20 text-white">
          <ResponsiveImage
            src={heroWorkers}
            webpSrc={heroWorkersWebp}
            avifSrc={heroWorkersAvif}
            alt="Equipe de trabalhadores em reunião corporativa"
            width={1400}
            height={933}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3745] via-[#26738D]/90 to-[#26738D]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E3745]/80 via-transparent to-black/25" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                {heroProofs.map((proof) => (
                  <span key={proof} className="flex items-center gap-2">
                    <BadgeCheck size={16} /> {proof}
                  </span>
                ))}
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">Seguro de vida empresarial em {city.name}</p>
              <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                Seguro de vida empresarial para empresas de {city.name}: cotação, revisão e gestão completa.
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-white/90">
                Comparamos seguradoras, verificamos exigências da Convenção Coletiva e buscamos uma solução de baixo custo por colaborador para proteger sua equipe e evitar problemas trabalhistas.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[#FFD21F] text-[#173844] shadow-soft hover:bg-[#F2C500]">
                  <a href="#cotacao" onClick={() => trackQuoteClick("Comparar opções para minha empresa", "cotacao")}>Comparar opções para minha empresa</a>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] text-white shadow-soft hover:bg-[#20BA5A]">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("Falar com especialista")}>
                    <MessageCircle className="mr-2" size={20} /> Falar com especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="cotacao" className="scroll-mt-32 bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">WhatsApp e formulário</p>
                <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">Revise sua apólice ou solicite uma cotação.</h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <p>Preencha os dados básicos ou chame no WhatsApp. A Tractus retorna para entender CCT, quantidade de colaboradores, apólice atual, cidade e melhor próximo passo.</p>
                  <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20BA5A]">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("Falar com especialista")}>
                      <MessageCircle className="mr-2" size={20} /> Falar com especialista
                    </a>
                  </Button>
                </div>
              </div>
              <Card className="shadow-soft">
                <CardContent className="p-6 md:p-8">
                  <h3 className="mb-2 text-2xl font-bold text-foreground">Cotação de Seguro de Vida Empresarial em {city.name}</h3>
                  <p className="mb-6 text-muted-foreground">O aviso vai para contato@tractuscorretora.com. Não envie apólice por aqui; se necessário, a equipe pede pelo WhatsApp oficial.</p>
                  <LeadForm
                    source={`Landing Vida Empresarial — ${city.name}`}
                    defaultProduct="Seguro de vida em grupo"
                    redirectPath={`/${page.slug}#cotacao`}
                    ctaLabel="Solicitar análise gratuita"
                    variant="vidaEmpresarial"
                    messagePlaceholder={`Conte se sua empresa em ${city.name} já possui seguro de vida, se deseja revisar apólice, cotar uma nova opção ou tirar dúvida sobre CCT.`}
                    compact
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Indicado para</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Empresas que precisam proteger pessoas sem contratar no escuro.</h2>
              <p className="leading-relaxed text-muted-foreground">
                O seguro de vida empresarial pode ser benefício, exigência de convenção coletiva ou uma proteção estratégica para a continuidade da operação em {city.name} e região.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {indicatedFor.map((item) => (
                <Card key={item} className="border-primary/10 shadow-soft">
                  <CardContent className="p-6">
                    <Users className="mb-4 text-primary" size={28} />
                    <p className="leading-relaxed text-muted-foreground">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Como funciona</p>
                <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">Cotação guiada do primeiro contato à proposta.</h2>
                <p className="leading-relaxed text-muted-foreground">
                  O objetivo é sair do formulário genérico e chegar rápido no que realmente importa: obrigação por CCT, perfil dos colaboradores, coberturas e renovação.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {processSteps.map((step) => (
                  <Card key={step.title} className="shadow-soft">
                    <CardContent className="p-6">
                      <ClipboardCheck className="mb-4 text-primary" size={30} />
                      <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{step.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="overflow-hidden shadow-soft">
                <CardContent className="p-7 md:p-9">
                  <ShieldCheck className="mb-5 text-primary" size={36} />
                  <h2 className="mb-5 text-3xl font-bold text-foreground">Coberturas que entram na análise.</h2>
                  <div className="space-y-3">
                    {coverages.map((coverage) => (
                      <div key={coverage} className="flex gap-3">
                        <CheckCircle2 className="mt-1 flex-shrink-0 text-primary" size={18} />
                        <p className="leading-relaxed text-muted-foreground">{coverage}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-5">
                {benefits.map((group) => (
                  <Card key={group.title} className="shadow-soft">
                    <CardContent className="p-7">
                      <BriefcaseBusiness className="mb-4 text-primary" size={30} />
                      <h3 className="mb-4 text-2xl font-bold text-foreground">{group.title}</h3>
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex gap-3">
                            <CheckCircle2 className="mt-1 flex-shrink-0 text-primary" size={18} />
                            <p className="text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#26738D] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">CCT e revisão</p>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sua empresa é obrigada a oferecer seguro de vida pela Convenção Coletiva?</h2>
                <p className="leading-relaxed text-white/80">
                  Antes de escolher preço, é preciso saber se a apólice atende a exigência e se conversa com a realidade da empresa.
                </p>
              </div>
              <Card className="bg-white/95 text-foreground shadow-large lg:col-span-1">
                <CardContent className="p-7">
                  <FileSearch className="mb-4 text-primary" size={34} />
                  <h3 className="mb-3 text-2xl font-bold">CCT / convenção coletiva</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Quando há exigência, a análise precisa considerar categoria, sindicato, capital mínimo, coberturas e prazo. A Tractus ajuda a transformar isso em briefing de cotação.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/95 text-foreground shadow-large lg:col-span-1">
                <CardContent className="p-7">
                  <HeartHandshake className="mb-4 text-primary" size={34} />
                  <h3 className="mb-3 text-2xl font-bold">Revisão de apólice atual</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Se a empresa já tem seguro, revisamos vencimento, vidas, capitais, coberturas e aderência ao cenário atual antes da renovação.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Por que Tractus</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Atendimento consultivo para decisão de seguro empresarial.</h2>
              <p className="leading-relaxed text-muted-foreground">
                A Tractus une olhar comercial, operacional e técnico para conduzir seguros corporativos com clareza, sem empurrar solução genérica.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Especialização empresarial", "Rotina voltada a empresas, RHs, financeiros e decisores que precisam comparar alternativas com critério."],
                ["Clareza operacional", "O primeiro contato pede apenas o necessário; documentos vêm depois, pelo canal oficial, quando forem úteis."],
                ["Acompanhamento", "A equipe orienta contratação, renovação e próximos passos para reduzir ruído entre empresa e seguradora."],
              ].map(([title, text]) => (
                <Card key={title} className="shadow-soft">
                  <CardContent className="p-7">
                    <BadgeCheck className="mb-4 text-primary" size={30} />
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
                <h2 className="mb-5 text-3xl font-bold text-foreground md:text-4xl">Dúvidas comuns antes da cotação.</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  As respostas abaixo ajudam a empresa a se preparar, mas a proposta depende de perfil, aceitação da seguradora e regras aplicáveis.
                </p>
                <Button asChild className="bg-[#FFD21F] text-[#173844] hover:bg-[#F2C500]">
                  <a href="#cotacao" onClick={() => trackQuoteClick("Comparar opções para minha empresa", "cotacao")}>Comparar opções para minha empresa</a>
                </Button>
              </div>
              <div className="space-y-4">
                {faq.map((item) => (
                  <details key={item.question} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <summary className="cursor-pointer text-lg font-semibold text-foreground">{item.question}</summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton message={whatsappMessage} phoneNumber={vidaEmpresarialWhatsAppNumber} source={`Landing Vida Empresarial — ${city.name}`} product={page.product} />
    </div>
  );
};

export default VidaEmpresarialPage;
