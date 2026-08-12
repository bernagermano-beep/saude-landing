export const TRACTUS_WHATSAPP_NUMBER = "5511998249160";
export const TRACTUS_CONTACT_EMAIL = "contato@tractuscorretora.com";

export const productOptions = [
  "Plano de saúde empresarial",
  "Seguro empresarial",
  "Benefícios corporativos",
  "Seguro frota empresarial",
  "Seguro transporte/carga",
  "Seguro de vida em grupo",
  "Consórcio",
  "Análise gratuita da apólice atual",
  "Outro",
];

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site da Tractus e quero falar sobre seguros ou benefícios para minha empresa.";

export const analysisWhatsAppMessage =
  "Olá, vim pelo site da Tractus e quero enviar minha apólice atual para uma análise.";

export function buildWhatsAppUrl(message = defaultWhatsAppMessage, phoneNumber = TRACTUS_WHATSAPP_NUMBER) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
