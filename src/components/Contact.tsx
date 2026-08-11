import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { buildWhatsAppUrl } from "@/lib/leadConfig";
import { trackEvent } from "@/lib/analytics";

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99824-9160",
      link: buildWhatsAppUrl("Olá, vim pelo site da Tractus e quero falar com um especialista."),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@tractuscorretora.com",
      link: "mailto:contato@tractuscorretora.com",
    },
    {
      icon: MapPin,
      title: "Área de atendimento",
      content: "Sorocaba, São Paulo e Guarulhos - SP",
      link: "#",
    },
  ];

  const handleContactClick = (title: string, link: string) => {
    if (title === "WhatsApp") {
      trackEvent("click_whatsapp", { source: "Seção contato", cta_text: "Falar com especialista", link_url: link, product: "A qualificar" });
      return;
    }

    if (title === "E-mail") {
      trackEvent("click_email", { source: "Seção contato", cta_text: "E-mail", link_url: link });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fale com especialista</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conte rapidamente o que você precisa. Nossa equipe retorna pelo melhor caminho para entender o caso e orientar os próximos passos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <LeadForm source="Formulário de contato do site" redirectPath="/#contact" ctaLabel="Falar com especialista" />
          </div>

          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <a
                    href={info.link}
                    onClick={() => handleContactClick(info.title, info.link)}
                    className="flex items-start gap-4 group"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">{info.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
