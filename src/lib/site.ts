export const SITE_URL = "https://tractuscorretora.com";
export const SITE_NAME = "Tractus Corretora de Seguros";
export const SITE_TAGLINE =
  "Corretora consultiva de seguros, saúde empresarial e benefícios corporativos em Sorocaba, São Paulo e região.";
export const TRACTUS_CONTACT_EMAIL = "contato@tractuscorretora.com";
export const TRACTUS_WHATSAPP_NUMBER = "5511995126841";

export const TRACTUS_SOCIALS = {
  facebook: "https://www.facebook.com/tractuscorretora",
  instagram: "https://www.instagram.com/tractuscorretora/",
} as const;

export const TRACTUS_AREAS_SERVED = [
  "Sorocaba",
  "São Paulo",
  "Guarulhos",
  "Grande São Paulo",
  "Interior de São Paulo",
] as const;

export const TRACTUS_SERVICES = [
  "Plano de saúde empresarial",
  "Seguro de vida empresarial",
  "Benefícios corporativos",
  "Vale-refeição",
  "Vale-alimentação",
  "Vale-transporte",
  "Seguro empresarial",
  "Seguro frota empresarial",
  "Seguro transporte de carga",
  "Análise gratuita de apólice",
] as const;

export function canonicalUrl(path = "/") {
  if (path === "/") return `${SITE_URL}/`;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
