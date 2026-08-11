import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPostsNewestFirst } from "@/data/blogPosts";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Guias sobre Seguros, Saúde e Benefícios Empresariais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdos consultivos para empresas que pesquisam plano de saúde, vale-transporte, vale-refeição, vale-alimentação e benefícios flexíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPostsNewestFirst.slice(0, 3).map((post, index) => (
            <Link key={post.slug} to={`/blog/${post.slug}#titulo`} className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <CardContent className="p-6 flex h-full flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="text-primary hover:text-primary-dark inline-flex items-center group-hover:text-primary-dark">
                      Leia mais
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/blog">Ver todos os artigos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
