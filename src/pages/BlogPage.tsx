import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/Seo";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPostsNewestFirst } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { breadcrumbSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/site";
const BlogPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Blog Tractus",
        url: canonicalUrl("/blog"),
        description: "Conteúdos sobre seguros, saúde empresarial e benefícios corporativos para empresas em São Paulo e Sorocaba.",
        blogPost: blogPostsNewestFirst.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: canonicalUrl(`/blog/${post.slug}`),
          datePublished: post.isoDate,
          dateModified: post.isoDate,
          author: { "@type": "Organization", name: "Tractus Corretora de Seguros" },
        })),
      },
      breadcrumbSchema([
        { name: "Início", url: canonicalUrl("/") },
        { name: "Blog", url: canonicalUrl("/blog") },
      ]),
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog Tractus | Seguros, saúde empresarial e benefícios"
        description="Artigos da Tractus sobre plano de saúde empresarial, benefícios corporativos, vale-transporte, vale-refeição, vale-alimentação e seguros."
        canonical={canonicalUrl("/blog")}
        keywords={["blog seguros empresariais", "plano de saúde empresarial", "benefícios corporativos", "corretora de seguros Sorocaba"]}
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Blog Tractus</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">Guias para contratar melhor seguros, saúde e benefícios</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reunimos aqui os conteúdos da Tractus para ajudar empresas e famílias a comparar opções com mais clareza. A proposta é publicar novos artigos toda semana, sempre com foco em dúvidas reais de contratação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsNewestFirst.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}#titulo`} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl">
                <Card className="overflow-hidden h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  {post.heroImage && (
                    <ResponsiveImage
                      src={post.heroImage}
                      webpSrc={post.heroImageWebp}
                      avifSrc={post.heroImageAvif}
                      alt={post.heroAlt}
                      width={1600}
                      height={900}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{post.category}</span>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground mb-5 flex-1">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-2"><Calendar size={16} />{post.date}</span>
                      <span className="flex items-center gap-2"><Clock size={16} />{post.readTime}</span>
                    </div>
                    <div className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark">
                      Ler artigo
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
