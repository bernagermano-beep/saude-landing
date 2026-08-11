import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadForm from "@/components/LeadForm";
import Seo from "@/components/Seo";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/data/blogPosts";
import { trackEvent } from "@/lib/analytics";
import { breadcrumbSchema } from "@/lib/schema";
import { canonicalUrl, SITE_URL } from "@/lib/site";

const siteUrl = SITE_URL;

const BlogArticle = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  useEffect(() => {
    if (!post) return;
    document.getElementById("titulo")?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/blog">Voltar para o blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const canonical = canonicalUrl(`/blog/${post.slug}`);
  const product = post.product || "Plano de saúde empresarial";
  const seoImage = post.ogImage || (post.heroImage?.startsWith("http") ? post.heroImage : post.heroImage ? `${siteUrl}${post.heroImage}` : undefined);
  const whatsappMessage = `Olá! Li o artigo "${post.title}" e gostaria de solicitar uma análise consultiva da Tractus para ${product}.`;
  const whatsappUrl = `https://wa.me/5511998249160?text=${encodeURIComponent(whatsappMessage)}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        image: seoImage ? [seoImage, ...(post.bodyImages?.map((image) => image.src) || [])] : undefined,
        author: { "@type": "Organization", name: "Tractus Corretora de Seguros" },
        publisher: { "@type": "Organization", name: "Tractus Corretora de Seguros", url: siteUrl },
        mainEntityOfPage: canonical,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbSchema([
        { name: "Início", url: canonicalUrl("/") },
        { name: "Blog", url: canonicalUrl("/blog") },
        { name: post.title, url: canonical },
      ]),
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${post.metaTitle} | Tractus Corretora`}
        description={post.description}
        canonical={canonical}
        keywords={post.keywords}
        type="article"
        image={seoImage}
        imageAlt={post.heroAlt}
        structuredData={articleSchema}
      />
      <Header />
      <main className="pt-28">
        <article className="container mx-auto px-4 pb-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8">
            <ArrowLeft size={18} />
            Voltar para o blog
          </Link>

          <header className="max-w-4xl mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-5">{post.category}</span>
            <h1 id="titulo" className="scroll-mt-32 text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.summary}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar size={16} />{post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} />{post.readTime} de leitura</span>
            </div>
            {post.heroImage && (
              <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <ResponsiveImage
                  src={post.heroImage}
                  webpSrc={post.heroImageWebp}
                  avifSrc={post.heroImageAvif}
                  alt={post.heroAlt}
                  width={1600}
                  height={900}
                  className="h-[260px] md:h-[420px] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <figcaption className="px-5 py-3 text-sm text-muted-foreground">{post.heroAlt}</figcaption>
              </figure>
            )}
          </header>

          <section id="formulario-artigo" className="scroll-mt-32 mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 shadow-soft">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{post.formTitle || "Quer saber se o reajuste do seu plano empresarial tem alternativa?"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {post.formText || "Envie os dados básicos da empresa e um especialista da Tractus faz uma primeira análise. Sem upload nesta etapa: se for necessário, pediremos contrato ou apólice pelo WhatsApp oficial."}
            </p>
            <LeadForm
              source={`Blog — ${post.title}`}
              defaultProduct={product}
              redirectPath={`/blog/${post.slug}`}
              ctaLabel={post.formCtaLabel || "Solicitar análise gratuita"}
              messagePlaceholder={post.messagePlaceholder || "Conte o percentual de reajuste, quantidade de vidas, cidade e operadora atual, se souber."}
              compact
            />
          </section>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
            <div className="max-w-3xl">
              {post.sections.map((section) => {
                const bodyImage = post.bodyImages?.find((image) => image.afterHeading === section.heading);

                return (
                  <section key={section.heading} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {bodyImage && (
                      <figure className="my-7 overflow-hidden rounded-xl border border-border bg-card shadow-soft">
                        <ResponsiveImage
                          src={bodyImage.src}
                          webpSrc={bodyImage.srcWebp}
                          avifSrc={bodyImage.srcAvif}
                          alt={bodyImage.alt}
                          width={1024}
                          height={768}
                          className="h-[220px] md:h-[330px] w-full object-cover"
                          loading="lazy"
                        />
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground">{bodyImage.caption}</figcaption>
                      </figure>
                    )}
                    {section.bullets && (
                      <ul className="space-y-3 mt-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="text-muted-foreground text-lg leading-relaxed pl-5 border-l-4 border-primary/30">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}

              <section className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Perguntas frequentes</h2>
                <div className="space-y-5">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="border border-border rounded-lg p-5 bg-card">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <h2 className="text-xl font-bold text-foreground mb-3">{post.ctaTitle || "Precisa comparar opções?"}</h2>
                <p className="text-muted-foreground mb-5">{post.ctaText || post.cta}</p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-primary hover:opacity-90">
                    <a
                      href="#formulario-artigo"
                      onClick={() =>
                        trackEvent("click_cta", {
                          source: `Blog — ${post.title}`,
                          cta_text: "Solicitar análise gratuita",
                          target_section: "formulario-artigo",
                          product,
                        })
                      }
                    >
                      Solicitar análise gratuita
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("click_whatsapp", {
                          source: `Blog — ${post.title}`,
                          cta_text: "Falar com especialista",
                          link_url: whatsappUrl,
                          product,
                        })
                      }
                    >
                      <MessageCircle className="mr-2" size={18} />
                      Falar com especialista
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArticle;
