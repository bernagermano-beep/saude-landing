import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { TRACTUS_CONTACT_EMAIL, productOptions } from "@/lib/leadConfig";
import { canonicalUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

type LeadFormProps = {
  source?: string;
  defaultProduct?: string;
  redirectPath?: string;
  ctaLabel?: string;
  messagePlaceholder?: string;
  compact?: boolean;
  variant?: "default" | "vidaEmpresarial";
};

const LeadForm = ({
  source = "Site Tractus",
  defaultProduct = "",
  redirectPath = "/#contact",
  ctaLabel = "Solicitar análise gratuita",
  messagePlaceholder = "Conte rapidamente o que você precisa. Se for análise de apólice, diga qual produto quer revisar.",
  compact = false,
  variant = "default",
}: LeadFormProps) => {
  const { toast } = useToast();
  const hasTrackedFormStart = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    product: defaultProduct,
    hasLifeInsurance: "",
    quantity: "",
    message: "",
  });

  const subject = useMemo(() => `Nova oportunidade de cliente pelo site — ${formData.product || "Produto a qualificar"}`, [formData.product]);

  const trackFormStart = () => {
    if (hasTrackedFormStart.current) return;
    hasTrackedFormStart.current = true;
    trackEvent("form_start", { source, form_name: source, product: formData.product });
  };

  const handleSubmit = () => {
    trackEvent("generate_lead", {
      source,
      form_name: source,
      product: formData.product,
      city: formData.city,
      has_company: Boolean(formData.company),
      has_phone: Boolean(formData.phone),
      crm_pipeline: "Consultores",
      crm_stage: "Oportunidade",
    });
    trackEvent("form_submit", { source, form_name: source, product: formData.product, city: formData.city });

    toast({
      title: "Solicitação enviada!",
      description: "A Tractus recebeu seus dados e retornará pelo WhatsApp informado.",
    });
  };

  const update = (field: keyof typeof formData, value: string) => setFormData((current) => ({ ...current, [field]: value }));

  return (
    <form
      action={`https://formsubmit.co/${TRACTUS_CONTACT_EMAIL}`}
      method="POST"
      onSubmit={handleSubmit}
      onFocusCapture={trackFormStart}
      className={compact ? "space-y-4" : "space-y-6"}
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={canonicalUrl(redirectPath)} />
      <input type="hidden" name="crm_pipeline" value="Consultores" />
      <input type="hidden" name="crm_stage" value="Oportunidade" />
      <input type="hidden" name="crm_owner" value="Fila de consultores" />
      <input type="hidden" name="crm_next_step" value="Qualificar cliente pelo WhatsApp e pedir apólice/documentos se necessário." />
      <input type="hidden" name="client_source" value={source} />
      <input type="hidden" name="notification_email" value={TRACTUS_CONTACT_EMAIL} />

      {variant === "vidaEmpresarial" ? (
        <>
          <input type="hidden" name="Produto de interesse" value={formData.product || defaultProduct} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="Nome" placeholder="Nome" value={formData.name} onChange={(e) => update("name", e.target.value)} required />
            <Input name="Empresa" placeholder="Empresa" value={formData.company} onChange={(e) => update("company", e.target.value)} required />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="Email" type="email" placeholder="E-mail" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
            <Input name="Telefone" type="tel" placeholder="Telefone" value={formData.phone} onChange={(e) => update("phone", e.target.value)} required />
          </div>

          <select
            name="Já possui seguro de vida?"
            value={formData.hasLifeInsurance}
            onChange={(e) => update("hasLifeInsurance", e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
            required
          >
            <option value="">Já possui seguro de vida?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Não sei">Não sei</option>
          </select>
        </>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="Nome" placeholder="Nome" value={formData.name} onChange={(e) => update("name", e.target.value)} required />
            <Input name="Empresa" placeholder="Empresa" value={formData.company} onChange={(e) => update("company", e.target.value)} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="Email" type="email" placeholder="E-mail" value={formData.email} onChange={(e) => update("email", e.target.value)} required />
            <Input name="WhatsApp" type="tel" placeholder="WhatsApp" value={formData.phone} onChange={(e) => update("phone", e.target.value)} required />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="Cidade" placeholder="Cidade" value={formData.city} onChange={(e) => update("city", e.target.value)} />
            <Input name="Quantidade aproximada" placeholder="Vidas, funcionários ou veículos" value={formData.quantity} onChange={(e) => update("quantity", e.target.value)} />
          </div>

          <select
            name="Produto de interesse"
            value={formData.product}
            onChange={(e) => update("product", e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
            required
          >
            <option value="">Qual produto quer avaliar?</option>
            {productOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}

      <Textarea name="Mensagem" placeholder={messagePlaceholder} rows={compact ? 4 : 6} value={formData.message} onChange={(e) => update("message", e.target.value)} />

      <Button type="submit" size="lg" className="w-full bg-[#FFD21F] text-[#173844] transition-opacity hover:bg-[#F2C500]">
        {ctaLabel}
      </Button>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Sem upload nesta etapa: se precisar analisar apólice, a equipe pedirá o arquivo pelo WhatsApp oficial da Tractus.
      </p>
    </form>
  );
};

export default LeadForm;
