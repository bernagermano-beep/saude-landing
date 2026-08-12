import { Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-full.png";
import { trackEvent } from "@/lib/analytics";
import { TRACTUS_CONTACT_EMAIL, TRACTUS_SOCIALS, TRACTUS_WHATSAPP_NUMBER } from "@/lib/site";

const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre Nós", id: "about" },
    { label: "Benefícios Empresariais", id: "benefits" },
    { label: "Seguros", id: "insurance" },
    { label: "Blog", id: "blog", path: "/blog" },
    { label: "Contato", id: "contact" },
  ];

  const scrollToSection = (id: string, path?: string) => {
    const item = menuItems.find((entry) => entry.id === id || entry.path === path);
    trackEvent("navigation_click", {
      source: "Footer",
      cta_text: item?.label || id,
      target_section: id,
      link_url: path || `#${id}`,
    });
    if (path) {
      navigate(path);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={logo}
              alt="Tractus Corretora de Seguros"
              width={1080}
              height={1080}
              loading="lazy"
              decoding="async"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80">
              A Tractus ajuda empresas e famílias a comparar seguros, saúde e benefícios com clareza antes da contratação.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id, item.path)} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Siga-nos</h3>
            <p className="text-white/80 mb-3">@tractuscorretora</p>
            <div className="flex gap-4 mb-6">
              <a
                href={TRACTUS_SOCIALS.facebook}
                onClick={() => trackEvent("social_click", { source: "Footer", platform: "Facebook", link_url: TRACTUS_SOCIALS.facebook })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook da Tractus Corretora"
              >
                <Facebook size={20} />
              </a>
              <a
                href={TRACTUS_SOCIALS.instagram}
                onClick={() => trackEvent("social_click", { source: "Footer", platform: "Instagram", link_url: TRACTUS_SOCIALS.instagram })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram da Tractus Corretora"
              >
                <Instagram size={20} />
              </a>
            </div>
            <button
              onClick={() => {
                trackEvent("click_cta", {
                  source: "Footer",
                  cta_text: "Solicitar análise gratuita",
                  target_section: "analysis",
                });
                navigate("/analise-gratuita-apolice");
              }}
              className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Solicitar análise gratuita
            </button>
            <div className="mt-5 space-y-1 text-white/80">
              <p>WhatsApp: +55 {TRACTUS_WHATSAPP_NUMBER.slice(2, 4)} {TRACTUS_WHATSAPP_NUMBER.slice(4, 8)}-{TRACTUS_WHATSAPP_NUMBER.slice(8)}</p>
              <p>{TRACTUS_CONTACT_EMAIL}</p>
              <p>Sorocaba, São Paulo e Guarulhos - SP</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Páginas locais</h3>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={() => scrollToSection("local-sorocaba", "/corretora-de-seguros-sorocaba")} className="hover:text-white transition-colors">Corretora em Sorocaba</button></li>
              <li><button onClick={() => scrollToSection("local-sao-paulo", "/corretora-de-seguros-sao-paulo")} className="hover:text-white transition-colors">Corretora em São Paulo</button></li>
              <li><button onClick={() => scrollToSection("local-guarulhos", "/corretora-de-seguros-guarulhos")} className="hover:text-white transition-colors">Corretora em Guarulhos</button></li>
              <li><button onClick={() => scrollToSection("vida-sorocaba", "/seguro-de-vida-empresarial-sorocaba")} className="hover:text-white transition-colors">Vida empresarial Sorocaba</button></li>
              <li><button onClick={() => scrollToSection("vida-guarulhos", "/seguro-de-vida-empresarial-guarulhos")} className="hover:text-white transition-colors">Vida empresarial Guarulhos</button></li>
              <li><button onClick={() => scrollToSection("analysis", "/analise-gratuita-apolice")} className="hover:text-white transition-colors">Análise gratuita</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>© 2026 Tractus Corretora de Seguros - Sorocaba, São Paulo e Guarulhos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
