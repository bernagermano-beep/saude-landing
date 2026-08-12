import type { LucideIcon } from "lucide-react";
import { Building2, HeartPulse, Truck, Users, Warehouse } from "lucide-react";

export type CommercialPageConfig = {
  slug: string;
  product: string;
  eyebrow: string;
  title: string;
  description: string;
  heroBullets: string[];
  highlights: Array<{
    title: string;
    text: string;
  }>;
  sections: Array<{
    title: string;
    items: string[];
  }>;
  formTitle: string;
  formDescription: string;
  messagePlaceholder: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  icon: LucideIcon;
};

const baseCommercialPages: CommercialPageConfig[] = [
  {
    slug: "plano-de-saude-empresarial",
    product: "Plano de saúde empresarial",
    eyebrow: "Saúde corporativa",
    title: "Plano de saúde empresarial com orientação consultiva para contratar melhor.",
    description:
      "A Tractus ajuda sua empresa a comparar operadoras, redes, coparticipação, quantidade de vidas e impactos de reajuste antes de decidir.",
    heroBullets: [
      "Cotação para PME e empresas com diferentes perfis de vidas",
      "Apoio para comparar rede, preço, carência e modelo de contratação",
      "Condução do cliente como Cliente / Oportunidade até o melhor próximo passo",
    ],
    highlights: [
      {
        title: "Comparação objetiva",
        text: "Organizamos alternativas de operadoras e faixas de preço para o decisor entender custo e cobertura.",
      },
      {
        title: "Olhar para reajuste",
        text: "Avaliamos pontos que podem afetar custo futuro e orientamos a preparação para renovação ou migração.",
      },
      {
        title: "Implantação acompanhada",
        text: "Depois da escolha, a equipe orienta documentação e próximos passos sem upload no formulário inicial.",
      },
    ],
    sections: [
      {
        title: "Para quem faz sentido",
        items: ["Empresas iniciando benefício de saúde", "Negócios com reajuste alto", "RHs que precisam comparar plano atual"],
      },
      {
        title: "O que analisamos",
        items: ["Quantidade de vidas e faixa etária", "Rede desejada e abrangência", "Coparticipação, carências e custo mensal"],
      },
    ],
    formTitle: "Receber cotação de plano empresarial",
    formDescription: "Envie dados básicos. A equipe retorna pelo WhatsApp oficial da Tractus para qualificar a oportunidade.",
    messagePlaceholder:
      "Informe quantidade de vidas, cidade, operadora atual se houver e o que deseja melhorar no plano de saúde empresarial.",
    seoTitle: "Plano de Saúde Empresarial | Tractus Corretora",
    seoDescription:
      "Cotação e análise consultiva para plano de saúde empresarial em Sorocaba, São Paulo e região. Compare operadoras, redes e custos com a Tractus.",
    keywords: ["plano de saúde empresarial", "plano de saúde PME", "corretora plano de saúde Sorocaba", "Tractus Corretora"],
    icon: HeartPulse,
  },
  {
    slug: "seguro-empresarial",
    product: "Seguro empresarial",
    eyebrow: "Proteção patrimonial",
    title: "Seguro empresarial para proteger patrimônio, operação e continuidade do negócio.",
    description:
      "Desenhamos a cotação considerando atividade, endereço, equipamentos, riscos relevantes e coberturas que precisam fazer sentido para a rotina da empresa.",
    heroBullets: [
      "Análise de riscos para comércio, serviços e pequenas indústrias",
      "Coberturas para incêndio, danos elétricos, roubo, responsabilidade e mais",
      "Comparação com seguradoras e apoio na contratação ou renovação",
    ],
    highlights: [
      {
        title: "Cobertura sob medida",
        text: "A seleção de coberturas parte da atividade e dos riscos reais, evitando contratar proteção genérica.",
      },
      {
        title: "Renovação com critério",
        text: "Se já existe apólice, a Tractus pode comparar custo, limites e franquias antes da renovação.",
      },
      {
        title: "Atendimento consultivo",
        text: "A equipe conduz dúvidas, documentação e emissão com foco em clareza para o decisor.",
      },
    ],
    sections: [
      {
        title: "Principais coberturas",
        items: ["Incêndio, raio e explosão", "Danos elétricos e equipamentos", "Roubo, vendaval e responsabilidade civil"],
      },
      {
        title: "Dados úteis para cotar",
        items: ["Atividade da empresa", "Endereço e tipo de imóvel", "Valores de estoque, máquinas e conteúdo"],
      },
    ],
    formTitle: "Solicitar cotação de seguro empresarial",
    formDescription: "O formulário gera uma oportunidade para os consultores e o time pede documentos pelo WhatsApp quando necessário.",
    messagePlaceholder:
      "Conte a atividade da empresa, cidade, se já possui apólice e quais bens ou riscos deseja proteger.",
    seoTitle: "Seguro Empresarial | Tractus Corretora de Seguros",
    seoDescription:
      "Seguro empresarial para comércio, serviços e empresas. Proteja patrimônio, equipamentos, estoque e responsabilidade civil com a Tractus.",
    keywords: ["seguro empresarial", "seguro para empresa", "seguro patrimonial empresarial", "corretora de seguros Sorocaba"],
    icon: Building2,
  },
  {
    slug: "beneficios-corporativos",
    product: "Benefícios corporativos",
    eyebrow: "Benefícios para equipes",
    title: "Benefícios corporativos para simplificar o RH e valorizar colaboradores.",
    description:
      "A Tractus apoia empresas na estruturação de benefícios como vale-refeição, alimentação, transporte e soluções flexíveis, com foco em operação prática para o RH.",
    heroBullets: [
      "Benefícios para atração, retenção e rotina dos colaboradores",
      "Apoio em vale-refeição, alimentação, transporte e soluções flexíveis",
      "Qualificação por especialistas para entender volume, cidade e necessidade do RH",
    ],
    highlights: [
      {
        title: "Diagnóstico do pacote atual",
        text: "Entendemos quais benefícios existem hoje, dores de gestão e oportunidades de simplificação.",
      },
      {
        title: "Foco no RH",
        text: "A proposta considera operação, atendimento aos colaboradores e previsibilidade administrativa.",
      },
      {
        title: "Escalável para crescer",
        text: "A estrutura pode acompanhar novas admissões, unidades e mudanças na política de benefícios.",
      },
    ],
    sections: [
      {
        title: "Benefícios mais procurados",
        items: ["Vale-refeição e vale-alimentação", "Vale-transporte", "Benefícios flexíveis e campanhas internas"],
      },
      {
        title: "Informações para qualificar",
        items: ["Número de colaboradores", "Cidades atendidas", "Benefícios atuais e principais dificuldades"],
      },
    ],
    formTitle: "Estruturar benefícios corporativos",
    formDescription: "Preencha o contato e a Tractus chama no WhatsApp para entender o cenário do RH.",
    messagePlaceholder:
      "Informe quantidade de colaboradores, benefícios desejados e se a empresa já utiliza algum fornecedor.",
    seoTitle: "Benefícios Corporativos | Tractus Corretora",
    seoDescription:
      "Benefícios corporativos para empresas: vale-refeição, vale-alimentação, vale-transporte e soluções flexíveis com apoio consultivo da Tractus.",
    keywords: ["benefícios corporativos", "benefícios empresariais", "vale refeição empresas", "vale alimentação empresas", "Pluxee"],
    icon: Users,
  },
  {
    slug: "seguro-frota-empresarial",
    product: "Seguro frota empresarial",
    eyebrow: "Proteção para veículos",
    title: "Seguro frota empresarial para reduzir exposição e proteger veículos da operação.",
    description:
      "Cotação e análise para frotas leves, utilitários ou veículos de operação, considerando perfil de uso, condutores, região e necessidades de assistência.",
    heroBullets: [
      "Cotação para empresas com múltiplos veículos ou operação recorrente",
      "Apoio para comparar franquias, coberturas e assistência 24h",
      "Organização dos dados da frota antes de acionar seguradoras",
    ],
    highlights: [
      {
        title: "Visão da operação",
        text: "Entendemos uso dos veículos, regiões de circulação e exposição do negócio no dia a dia.",
      },
      {
        title: "Comparação de franquias",
        text: "Além do preço, olhamos franquia, assistência, cobertura contra terceiros e regras de aceitação.",
      },
      {
        title: "Renovação planejada",
        text: "Para frotas com apólice vigente, a análise pode antecipar vencimento e preparar alternativas.",
      },
    ],
    sections: [
      {
        title: "Coberturas comuns",
        items: ["Colisão, roubo e furto", "Danos a terceiros", "Assistência e carro reserva conforme perfil"],
      },
      {
        title: "Dados úteis da frota",
        items: ["Quantidade e modelo dos veículos", "Uso comercial ou operacional", "CEP de circulação e vencimento da apólice atual"],
      },
    ],
    formTitle: "Cotar seguro frota empresarial",
    formDescription: "O primeiro contato é simples; se necessário, a lista completa de veículos será pedida pelo WhatsApp.",
    messagePlaceholder:
      "Informe quantidade de veículos, tipos/modelos, uso principal e se já existe apólice vigente.",
    seoTitle: "Seguro Frota Empresarial | Tractus Corretora",
    seoDescription:
      "Seguro frota empresarial para veículos de empresas, utilitários e operações. Compare coberturas, franquias e assistência com a Tractus.",
    keywords: ["seguro frota empresarial", "seguro de frota", "seguro veículos empresa", "corretora seguro frota"],
    icon: Truck,
  },
  {
    slug: "seguro-transporte-carga",
    product: "Seguro transporte/carga",
    eyebrow: "Risco logístico",
    title: "Seguro transporte de carga para proteger mercadorias em trânsito.",
    description:
      "A Tractus qualifica sua operação logística para cotar proteção adequada ao tipo de carga, rotas, frequência, valores transportados e responsabilidades envolvidas.",
    heroBullets: [
      "Cotação para transporte próprio, embarcadores e operações recorrentes",
      "Análise de tipo de carga, rotas, valores e frequência de embarques",
      "Orientação sobre documentos e informações exigidas na contratação",
    ],
    highlights: [
      {
        title: "Proteção da mercadoria",
        text: "A cotação considera riscos de trânsito, roubo, acidentes e particularidades do tipo de carga.",
      },
      {
        title: "Aderência à operação",
        text: "Rotas, frequência e valores embarcados ajudam a definir limites e condições mais adequados.",
      },
      {
        title: "Qualificação rápida",
        text: "O formulário abre a oportunidade e a equipe coleta detalhes técnicos pelo WhatsApp oficial.",
      },
    ],
    sections: [
      {
        title: "Operações atendidas",
        items: ["Embarcadores e transportadores", "Cargas próprias ou de terceiros", "Rotas municipais, estaduais e interestaduais"],
      },
      {
        title: "Informações para análise",
        items: ["Tipo e valor médio da carga", "Origem, destino e frequência", "Quem realiza o transporte e apólice atual"],
      },
    ],
    formTitle: "Cotar seguro transporte/carga",
    formDescription: "Comece com os dados principais. A Tractus chama pelo WhatsApp para aprofundar a operação.",
    messagePlaceholder:
      "Descreva tipo de carga, rotas, valor médio transportado, frequência e se já possui seguro vigente.",
    seoTitle: "Seguro Transporte de Carga | Tractus Corretora",
    seoDescription:
      "Seguro transporte de carga para proteger mercadorias em trânsito. Cotação para embarcadores, transportadores e operações logísticas com a Tractus.",
    keywords: ["seguro transporte de carga", "seguro carga", "seguro de transporte", "seguro para transportadora"],
    icon: Warehouse,
  },
];


type CityConfig = {
  name: string;
  slug: string;
  regionContext: string;
  nearby: string[];
};

const cityConfigs: CityConfig[] = [
  {
    name: "Sorocaba",
    slug: "sorocaba",
    regionContext: "empresas de Sorocaba, Votorantim, Itu, Salto, Boituva, Porto Feliz e região",
    nearby: ["Votorantim", "Itu", "Salto", "Boituva", "Porto Feliz"],
  },
  {
    name: "São Paulo",
    slug: "sao-paulo",
    regionContext: "empresas de São Paulo, Grande São Paulo, ABC, Osasco, Barueri e região metropolitana",
    nearby: ["Grande São Paulo", "ABC", "Osasco", "Barueri", "Zona Sul", "Zona Oeste"],
  },
  {
    name: "Guarulhos",
    slug: "guarulhos",
    regionContext: "empresas de Guarulhos, Cumbica, região do Aeroporto, polos logísticos, comércios, galpões e indústrias",
    nearby: ["Cumbica", "Aeroporto de Guarulhos", "Vila Galvão", "Centro de Guarulhos", "região logística"],
  },
];

const buildLocalizedPage = (page: CommercialPageConfig, city: CityConfig): CommercialPageConfig => ({
  ...page,
  slug: `${page.slug}-${city.slug}`,
  eyebrow: `${page.eyebrow} em ${city.name}`,
  title: `${page.product} em ${city.name} com orientação consultiva da Tractus.`,
  description: `${page.description} Atendimento para ${city.regionContext}, com comparação de alternativas e condução pelo WhatsApp oficial da Tractus.`,
  heroBullets: [
    `Cotação para ${city.regionContext}`,
    ...page.heroBullets.slice(0, 2),
  ],
  sections: [
    ...page.sections,
    {
      title: `Atendimento em ${city.name} e região`,
      items: [
        `Página dedicada para buscas de ${page.product.toLowerCase()} em ${city.name}`,
        `Análise considerando rotina, endereço, operação e perfil das empresas locais`,
        `Regiões relacionadas: ${city.nearby.join(", ")}`,
      ],
    },
  ],
  formTitle: `${page.formTitle} em ${city.name}`,
  formDescription: `${page.formDescription} Informe a cidade/unidade para direcionarmos a análise local corretamente.`,
  messagePlaceholder: `${page.messagePlaceholder} Se sua empresa fica em ${city.name}, mencione bairro/região e urgência da cotação.`,
  seoTitle: `${page.product} em ${city.name} | Tractus Corretora`,
  seoDescription: `${page.product} em ${city.name}. Atendimento consultivo da Tractus para ${city.regionContext}. Compare opções, coberturas, rede, custo e contratação.`,
  keywords: [
    `${page.product} ${city.name}`,
    `${page.product.toLowerCase()} ${city.name}`,
    `corretora de seguros ${city.name}`,
    ...page.keywords,
  ],
});

const cityAgencyPages: CommercialPageConfig[] = cityConfigs.map((city) => ({
  slug: `corretora-de-seguros-${city.slug}`,
  product: `Corretora de seguros em ${city.name}`,
  eyebrow: `Atendimento local em ${city.name}`,
  title: `Corretora de seguros em ${city.name} para empresas e famílias.`,
  description: `A Tractus atende ${city.regionContext} com consultoria para saúde empresarial, vida em grupo, seguro empresarial, frota, transporte, auto, residencial e benefícios corporativos.`,
  heroBullets: [
    `Atendimento consultivo para ${city.regionContext}`,
    "Comparação entre seguradoras, operadoras e alternativas de cobertura",
    "Cotação pelo WhatsApp oficial e condução comercial pela equipe Tractus",
  ],
  highlights: [
    {
      title: "Consultoria antes da cotação",
      text: "Entendemos objetivo, orçamento, operação e riscos antes de indicar alternativas.",
    },
    {
      title: "Foco empresarial e familiar",
      text: "A Tractus apoia empresas, RHs, decisores e famílias com seguros e benefícios relevantes.",
    },
    {
      title: "Acompanhamento pós-venda",
      text: "Depois da contratação, a equipe orienta próximos passos, documentos, renovação e dúvidas.",
    },
  ],
  sections: [
    {
      title: "Seguros atendidos",
      items: ["Plano de saúde empresarial e benefícios", "Seguro de vida empresarial e vida em grupo", "Seguro empresarial, frota, transporte, auto e residencial"],
    },
    {
      title: `Regiões relacionadas a ${city.name}`,
      items: city.nearby,
    },
  ],
  formTitle: `Falar com uma corretora de seguros em ${city.name}`,
  formDescription: "Envie dados básicos. A Tractus retorna pelo WhatsApp para entender a necessidade e direcionar a cotação.",
  messagePlaceholder: `Informe o tipo de seguro, cidade/bairro em ${city.name}, quantidade de vidas ou dados principais da cotação.`,
  seoTitle: `Corretora de Seguros em ${city.name} | Tractus Corretora`,
  seoDescription: `Corretora de seguros em ${city.name} para empresas e famílias. Saúde empresarial, vida em grupo, seguro empresarial, frota, transporte, auto, residencial e benefícios corporativos.`,
  keywords: [`corretora de seguros ${city.name}`, `seguros ${city.name}`, `seguro empresarial ${city.name}`, `plano de saúde empresarial ${city.name}`, "Tractus Corretora"],
  icon: Building2,
}));

const localizedCommercialPages: CommercialPageConfig[] = baseCommercialPages.flatMap((page) =>
  cityConfigs.map((city) => buildLocalizedPage(page, city)),
);

export const commercialPages: CommercialPageConfig[] = [
  ...baseCommercialPages,
  ...cityAgencyPages,
  ...localizedCommercialPages,
];

export const commercialPagesBySlug = Object.fromEntries(
  commercialPages.map((page) => [page.slug, page])
) as Record<string, CommercialPageConfig>;

export const commercialPageSlugs = commercialPages.map((page) => page.slug);

