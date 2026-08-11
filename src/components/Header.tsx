import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-full-header.png";
import { trackEvent } from "@/lib/analytics";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Sobre Nós", id: "about" },
    { label: "Saúde Empresarial", id: "health", path: "/plano-de-saude-empresarial" },
    { label: "Benefícios", id: "benefits", path: "/beneficios-corporativos" },
    {
      label: "Seguros",
      id: "insurance",
      children: [
        { label: "Seguro Empresarial", id: "insurance-business", path: "/seguro-empresarial" },
        { label: "Vida Empresarial", id: "vida-empresarial", path: "/vida-empresarial" },
      ],
    },
    { label: "Blog", id: "blog", path: "/blog" },
    { label: "Análise gratuita", id: "analysis", path: "/analise-gratuita-apolice" },
    { label: "Contato", id: "contact" },
  ];

  const scrollToSection = (id: string, path?: string) => {
    const item = menuItems.flatMap((entry) => [entry, ...(entry.children || [])]).find((entry) => entry.id === id || entry.path === path);
    trackEvent("navigation_click", {
      source: "Header",
      cta_text: item?.label || id,
      target_section: id,
      link_url: path || `#${id}`,
    });

    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);

    if (path) {
      navigate(path);
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navTextClass = isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => scrollToSection("home")} className="focus:outline-none" aria-label="Ir para o início">
            <img
              src={logo}
              alt="Tractus Corretora de Seguros"
              width={1004}
              height={415}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-16 sm:h-20 md:h-24 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.id ? null : item.id)}
                    className={`${navTextClass} inline-flex items-center gap-1 transition-colors font-medium text-sm xl:text-base`}
                    aria-expanded={openSubmenu === item.id}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openSubmenu === item.id ? "rotate-180" : ""}`} />
                  </button>
                  {openSubmenu === item.id && (
                    <div className="absolute left-0 top-full mt-3 min-w-[220px] rounded-2xl border border-border bg-white p-2 text-left shadow-large">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id, child.path)}
                          className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.path)}
                  className={`${navTextClass} transition-colors font-medium text-sm xl:text-base`}
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              onClick={() => {
                trackEvent("click_cta", {
                  source: "Header",
                  cta_text: "Solicitar análise gratuita",
                  target_section: "analysis",
                });
                navigate("/analise-gratuita-apolice");
              }}
              className="bg-[#FFD21F] text-[#173844] hover:bg-[#F2C500] transition-colors"
            >
              Solicitar análise gratuita
            </Button>
          </nav>

          <button className={`lg:hidden ${navTextClass}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.id} className="flex flex-col gap-3">
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.id ? null : item.id)}
                    className={`${navTextClass} inline-flex items-center gap-1 transition-colors font-medium text-left`}
                    aria-expanded={openSubmenu === item.id}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openSubmenu === item.id ? "rotate-180" : ""}`} />
                  </button>
                  {openSubmenu === item.id && (
                    <div className="ml-4 flex flex-col gap-3 border-l border-white/30 pl-4">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => scrollToSection(child.id, child.path)}
                          className={`${navTextClass} text-left text-sm font-medium transition-colors`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, item.path)}
                  className={`${navTextClass} transition-colors font-medium text-left`}
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              onClick={() => {
                trackEvent("click_cta", {
                  source: "Header mobile",
                  cta_text: "Solicitar análise gratuita",
                  target_section: "analysis",
                });
                navigate("/analise-gratuita-apolice");
              }}
              className="w-full bg-[#FFD21F] text-[#173844] hover:bg-[#F2C500] transition-colors"
            >
              Solicitar análise gratuita
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
