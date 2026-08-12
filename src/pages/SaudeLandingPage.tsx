import { useMemo, useState } from "react";
import { ArrowRight, Check, ChevronDown, CircleCheck, Clock3, FileText, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import ResponsiveImage from "@/components/ResponsiveImage";
import { canonicalUrl } from "@/lib/site";
import heroImage from "@/assets/hero-image.webp";
import tractusLogo from "@/assets/logo-full-header.png";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_URL = "https://wa.me/5511995126841?text=";
const whatsappMessage = encodeURIComponent("Olá! Quero agendar uma reunião para avaliar a troca do meu plano de saúde.");
const carriers = [
  { name: "Porto Saúde", logo: "/operator-logos/porto-saude.png", url: "https://www.portoseguro.com.br/porto-saude" },
  { name: "Bradesco Saúde", logo: "/operator-logos/bradesco-saude.png", url: "https://www.bradescosaude.com.br/" },
  { name: "Amil", logo: "/operator-logos/amil.png", url: "https://www.amil.com.br/" },
  { name: "Alice", logo: "/operator-logos/alice.png", url: "https://alice.com.br/" },
  { name: "Hapvida", logo: "/operator-logos/hapvida.png", url: "https://www.hapvida.com.br/" },
  { name: "Seguros Unimed", logo: "/operator-logos/seguros-unimed.png", url: "https://www.segurosunimed.com.br/" },
  { name: "CarePlus", logo: "/operator-logos/careplus.png", url: "https://careplus.com.br/" },
  { name: "Omint", logo: "/operator-logos/omint.png", url: "https://www.omint.com.br/" },
];

const painPoints = [
  { icon: Sparkles, title: "Reajustes que apertam o orçamento", text: "O valor sobe, mas a sensação de cuidado e previsibilidade não acompanha." },
  { icon: Clock3, title: "Cansaço de pedir autorizações", text: "Consultas, exames e procedimentos não deveriam virar uma sequência de ligações e esperas." },
  { icon: FileText, title: "Negativas que interrompem seu cuidado", text: "Quando o atendimento é negado, você precisa de orientação clara para entender os próximos caminhos." },
  { icon: ShieldCheck, title: "Uma rede que já não atende sua rotina", text: "Hospitais e especialistas importantes podem ter saído do seu plano — ou nunca ter estado nele." },
];

const faqs = [
  ["A troca de plano é sempre possível?", "Depende do perfil, contrato, região, faixa etária e regras das opções disponíveis. A reunião serve justamente para avaliar os caminhos com segurança."],
  ["Vocês prometem reduzir minha mensalidade?", "Não. Em alguns perfis, a análise pode indicar uma possibilidade de redução de até 20% nas parcelas, mas isso não é garantido e depende das condições encontradas."],
  ["Posso manter meus médicos e hospitais?", "Esse é um dos pontos que avaliamos. A rede desejada entra como critério antes de qualquer recomendação."],
];

const SaudeLandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", currentPlan: "", message: "" });

  const ctaUrl = useMemo(() => `${WHATSAPP_URL}${whatsappMessage}`, []);
  const update = (key: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [key]: value }));

  const handleWhatsApp = (source: string) => {
    trackEvent("whatsapp_click", { source, product: "Troca de plano de saúde", cta_text: "Agendar sua reunião", link_url: ctaUrl });
    window.open(ctaUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    trackEvent("form_submit", { source: "Landing Saúde", product: "Troca de plano de saúde", has_phone: Boolean(formData.phone), city: formData.city });
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`${WHATSAPP_URL}${encodeURIComponent(`Olá! Meu nome é ${formData.name}. Preenchi o formulário para avaliar a troca do meu plano de saúde.`)}`, "_blank", "noopener,noreferrer");
    }, 650);
  };

  return (
    <main className="saude-landing min-h-screen overflow-hidden bg-[#f7fbfc] text-[#173844]">
      <Seo
        title="Troca de plano de saúde | Avalie opções com a Tractus"
        description="Seu plano aumentou, nega atendimentos ou já não oferece a rede que você precisa? Agende uma reunião com a Tractus para avaliar alternativas de plano de saúde."
        canonical={canonicalUrl("/troca-plano-saude")}
        keywords={["troca de plano de saúde", "mudar plano de saúde", "reajuste plano de saúde", "plano de saúde empresarial", "corretora de plano de saúde"]}
        image={canonicalUrl("/og-saude-landing.jpg")}
        imageAlt="Pessoa conversando com especialista sobre plano de saúde"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Troca de plano de saúde",
          description: "Landing de avaliação consultiva para troca de plano de saúde.",
          url: canonicalUrl("/troca-plano-saude"),
          isPartOf: { "@type": "WebSite", name: "Tractus Corretora de Seguros", url: canonicalUrl("/") },
          about: { "@type": "Service", name: "Análise consultiva de plano de saúde" },
        }}
      />

      <header className="absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" aria-label="Tractus Corretora de Seguros">
            <img src={tractusLogo} alt="Tractus Corretora de Seguros" width={220} height={91} className="h-14 w-auto object-contain brightness-0 invert sm:h-16" />
          </Link>
          <button onClick={() => handleWhatsApp("Header Saúde Landing")} className="rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#173844] sm:px-5 sm:text-sm">
            Agendar reunião
          </button>
        </div>
      </header>

      <section className="relative isolate flex min-h-[700px] items-end overflow-hidden bg-[#173844] px-5 pb-16 pt-32 sm:px-8 lg:min-h-[780px] lg:px-12 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(113,186,202,.34),transparent_33%),linear-gradient(115deg,#173844_5%,#24586a_55%,#558da8_100%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] lg:block">
          <ResponsiveImage src={heroImage} alt="Especialista conversando com cliente sobre proteção e saúde" width={1200} height={900} loading="eager" fetchPriority="high" className="h-full w-full object-cover opacity-80 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173844] via-[#173844]/55 to-transparent" />
        </div>
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#bce5ec]">Seu plano precisa acompanhar sua vida</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Seu plano aumentou. Sua paciência também está no limite?</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">Quando o reajuste pesa, a autorização demora e a rede já não resolve, é hora de olhar para as opções com calma — e com alguém ao seu lado.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => handleWhatsApp("Hero Saúde Landing")} className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#ffd21f] px-7 text-base font-bold text-[#173844] shadow-[0_12px_30px_rgba(255,210,31,.18)] transition hover:-translate-y-1 hover:bg-[#ffe05d]">Agendar sua reunião <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" /></button>
              <a href="#entender" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-7 text-base font-semibold text-white transition hover:border-white hover:bg-white/10">Entender as possibilidades</a>
            </div>
            <p className="mt-5 text-xs text-white/60">Análise individual, sem promessa de aprovação, cobertura ou redução garantida.</p>
          </div>
        </div>
      </section>

      <section id="entender" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl reveal-up"><p className="eyebrow">A história que muita gente vive</p><h2 className="section-title">Você não está procurando apenas um plano novo. Está procurando voltar a confiar no seu plano.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map(({ icon: Icon, title, text }, index) => <article key={title} className="reveal-up rounded-[1.6rem] border border-[#dcecef] bg-white p-6 shadow-[0_16px_50px_rgba(23,56,68,.06)]" style={{ animationDelay: `${index * 80}ms` }}><div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f4f6] text-[#26738d]"><Icon size={21} /></div><h3 className="text-xl font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#54727b]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9f4f6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="eyebrow">O que pode mudar</p><h2 className="section-title">Uma decisão melhor começa antes da cotação.</h2><p className="mt-6 max-w-xl text-base leading-relaxed text-[#54727b]">A Tractus entende seu momento, seus hospitais de referência, sua faixa de investimento e o que não pode ser perdido. Só então compara caminhos possíveis.</p><button onClick={() => handleWhatsApp("Possibilidades Saúde Landing")} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#173844] px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#26738d]">Agendar sua reunião <ArrowRight size={18} /></button></div>
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_20px_70px_rgba(23,56,68,.09)] sm:p-10"><div className="space-y-5">{["Mapeamos o que está incomodando hoje", "Comparamos rede, condições e possibilidades", "Explicamos os caminhos sem linguagem complicada", "Você decide com clareza — sem pressão"].map((item) => <div key={item} className="flex items-start gap-4 border-b border-[#edf4f5] pb-5 last:border-0 last:pb-0"><CircleCheck className="mt-0.5 shrink-0 text-[#26738d]" size={21} /><p className="font-medium">{item}</p></div>)}</div><p className="mt-8 rounded-xl bg-[#fff8d9] p-4 text-xs leading-relaxed text-[#6a5a14]">Em alguns perfis, uma análise pode indicar possibilidade de reduzir as parcelas em até 20%. Isso depende do perfil, contrato, região, faixa etária e condições disponíveis — não é uma promessa.</p></div>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#6d8a92]">Operadoras que podem entrar na avaliação, conforme perfil e disponibilidade</p><div className="logo-marquee mt-9"><div className="logo-track">{[...carriers, ...carriers].map((carrier, index) => <a key={`${carrier.name}-${index}`} href={carrier.url} target="_blank" rel="noreferrer" className={`carrier-logo ${carrier.name === "Amil" ? "carrier-logo-amil" : ""}`} aria-label={`Visitar site da ${carrier.name}`}><img src={carrier.logo} alt={`Logo ${carrier.name}`} width={96} height={48} loading="lazy" /><span>{carrier.name}</span></a>)}</div></div></div></section>

      <section className="bg-[#173844] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-[#bce5ec]">Por que conversar com a Tractus</p><h2 className="section-title text-white">Você não precisa descobrir tudo sozinho.</h2><p className="mt-6 leading-relaxed text-white/70">Trocar de plano é uma decisão que envolve saúde, orçamento e rotina. Nossa função é organizar a conversa para que você enxergue os critérios certos antes de decidir.</p></div><div className="grid gap-4 sm:grid-cols-2">{["Orientação humana", "Comparação responsável", "Critérios claros", "Sem pressão para decidir"].map((item) => <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-6"><Check className="mb-8 text-[#a9d5df]" size={22} /><p className="text-lg font-semibold">{item}</p></div>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-4xl"><p className="eyebrow text-center">Dúvidas comuns</p><h2 className="section-title text-center">Antes de agendar, você pode entender o processo.</h2><div className="mt-10 divide-y divide-[#dcecef] border-y border-[#dcecef]">{faqs.map(([question, answer], index) => <div key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold" aria-expanded={openFaq === index}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="max-w-3xl pb-6 leading-relaxed text-[#54727b] animate-fade-in">{answer}</p>}</div>)}</div></div></section>

      <section id="formulario" className="bg-[#e9f4f6] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="eyebrow">O próximo passo é uma conversa</p><h2 className="section-title">Conte o que está acontecendo. A gente organiza o resto.</h2><p className="mt-6 leading-relaxed text-[#54727b]">Preencha o formulário e, se preferir, já fale com a equipe pelo WhatsApp. Não envie documentos nesta etapa.</p><a href={ctaUrl} onClick={() => handleWhatsApp("Formulário Saúde Landing")} className="mt-7 inline-flex items-center gap-3 font-bold text-[#26738d] hover:text-[#173844]"><MessageCircle size={19} /> Agendar sua reunião pelo WhatsApp</a></div><form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 shadow-[0_20px_70px_rgba(23,56,68,.1)] sm:p-10"><div className="grid gap-4 sm:grid-cols-2"><label>Nome<input required value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(11) 99999-9999" /></label><label>E-mail<input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="voce@email.com" /></label><label>Cidade<input value={formData.city} onChange={(e) => update("city", e.target.value)} placeholder="Sua cidade" /></label></div><label className="mt-4 block">O que mais incomoda hoje?<textarea rows={4} value={formData.message} onChange={(e) => update("message", e.target.value)} placeholder="Reajuste, autorizações, negativas, rede hospitalar..." /></label><button disabled={isSubmitting || submitted} className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#ffd21f] px-6 font-bold text-[#173844] transition hover:bg-[#ffe05d] disabled:cursor-wait disabled:opacity-70">{submitted ? "Solicitação recebida" : isSubmitting ? "Abrindo seu WhatsApp..." : "Quero agendar minha reunião"}<ArrowRight size={18} /></button><p className="mt-4 text-xs leading-relaxed text-[#6d8a92]">Usaremos seus dados apenas para retornar sobre esta solicitação. A avaliação é individual e não garante redução, aprovação ou cobertura.</p></form></div></section>

      <footer className="border-t border-[#dcecef] bg-white px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#6d8a92] sm:flex-row sm:items-center sm:justify-between"><div><strong className="text-[#173844]">Tractus Corretora de Seguros</strong><p className="mt-1">Cuidado consultivo para decisões importantes.</p></div><nav className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/plano-de-saude-empresarial" className="hover:text-[#26738d]">Saúde Empresarial</Link><Link to="/beneficios-corporativos" className="hover:text-[#26738d]">Benefícios</Link><Link to="/blog" className="hover:text-[#26738d]">Conteúdos</Link><Link to="/" className="hover:text-[#26738d]">Site Tractus</Link></nav></div></footer>
      <button onClick={() => handleWhatsApp("WhatsApp flutuante Saúde Landing")} className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,.35)] transition hover:-translate-y-1 hover:bg-[#20ba5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30" aria-label="Agendar reunião pelo WhatsApp"><MessageCircle size={27} /></button>
    </main>
  );
};

export default SaudeLandingPage;
