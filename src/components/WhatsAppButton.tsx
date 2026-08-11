import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/leadConfig";
import { trackEvent } from "@/lib/analytics";

type WhatsAppButtonProps = {
  message?: string;
  phoneNumber?: string;
  source?: string;
  product?: string;
};

const WhatsAppButton = ({ message = defaultWhatsAppMessage, phoneNumber, source = "Botão flutuante do site", product = "A qualificar" }: WhatsAppButtonProps) => {
  const whatsappUrl = buildWhatsAppUrl(message, phoneNumber);

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      source,
      product,
      link_url: whatsappUrl,
      cta_text: "Falar com especialista",
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-full bg-[#25D366] px-4 py-3 text-white shadow-large flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#20BA5A]"
        aria-label="Falar com especialista no WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="font-semibold">Falar com especialista</span>
      </button>

      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 hidden md:flex w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-large items-center justify-center transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Falar com especialista no WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </>
  );
};

export default WhatsAppButton;
