import transportHeroJpg from "@/assets/business-team-meeting.jpg";
import transportHeroWebp from "@/assets/business-team-meeting.webp";
import transportHeroAvif from "@/assets/business-team-meeting.avif";
import reajusteHeroJpg from "@/assets/hero-image.jpg";
import reajusteHeroWebp from "@/assets/hero-image.webp";
import reajusteHeroAvif from "@/assets/hero-image.avif";
import benefitsHeroJpg from "@/assets/benefits-image.jpg";
import benefitsHeroWebp from "@/assets/benefits-image.webp";
import benefitsHeroAvif from "@/assets/benefits-image.avif";
import aboutImageJpg from "@/assets/about-image.jpg";
import aboutImageWebp from "@/assets/about-image.webp";
import aboutImageAvif from "@/assets/about-image.avif";

export type BlogPost = {
  slug: string;
  aliases?: string[];
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  keywords: string[];
  summary: string;
  heroAlt: string;
  heroImage?: string;
  heroImageWebp?: string;
  heroImageAvif?: string;
  ogImage?: string;
  bodyImages?: Array<{
    src: string;
    srcWebp?: string;
    srcAvif?: string;
    alt: string;
    caption: string;
    afterHeading: string;
  }>;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: string;
  ctaTitle?: string;
  ctaText?: string;
  product?: string;
  formTitle?: string;
  formText?: string;
  formCtaLabel?: string;
  messagePlaceholder?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "seguro-transportadoras-carga-frota-rctrc-rcfdc",
    aliases: ["seguro-para-transportadoras-roubo-carga-frota"],
    title: "Seguro para transportadoras: como proteger carga, frota e operação contra prejuízos",
    metaTitle: "Seguro para Transportadoras: Roubo de Carga, Frota e Riscos",
    description:
      "Entenda quais seguros uma transportadora deve avaliar para proteger carga, frota, rotas e operação logística. Veja quando revisar RCTR-C, RCF-DC e coberturas complementares.",
    category: "Seguro Transporte e Logística",
    date: "16 de junho de 2026",
    isoDate: "2026-06-16",
    readTime: "10 min",
    keywords: [
      "seguro para transportadoras",
      "seguro de carga para transportadora",
      "seguro roubo de carga",
      "seguro frota transportadora",
      "RCTR-C",
      "RCF-DC",
      "seguro transporte rodoviário de cargas",
      "seguro para logística",
    ],
    summary:
      "Transportadoras e empresas de logística convivem diariamente com riscos que podem comprometer a operação inteira: roubo de carga, avarias, acidentes, tombamentos, falhas na documentação, exigências de embarcadores e problemas com a frota.",
    heroAlt: "Caminhão de transportadora em rodovia representando seguro para carga, frota e operação logística.",
    heroImage: transportHeroJpg,
    heroImageWebp: transportHeroWebp,
    heroImageAvif: transportHeroAvif,
    ogImage: "https://tractuscorretora.com/seguro-transportadoras-og-v3.png",
    sections: [
      {
        heading: "Resposta rápida",
        paragraphs: [
          "Transportadoras e empresas de logística convivem diariamente com riscos que podem comprometer a operação inteira: roubo de carga, avarias, acidentes, tombamentos, falhas na documentação, exigências de embarcadores e problemas com a frota.",
          "Por isso, contratar um seguro para transportadora não deve ser apenas uma etapa burocrática ou uma busca pelo menor preço. A apólice precisa refletir o risco real da operação.",
          "Antes de renovar ou contratar, vale fazer uma pergunta simples: o seguro atual cobre de verdade o que pode acontecer na sua rota, com a sua carga e com a sua frota?",
        ],
      },
      {
        heading: "O problema não é só “ter seguro”",
        paragraphs: [
          "Muitas transportadoras já possuem alguma apólice contratada. Mesmo assim, podem continuar expostas porque a cobertura não acompanha a realidade da operação.",
          "Isso acontece quando a empresa cresce, muda rotas, passa a transportar cargas de maior valor, atende novos embarcadores ou amplia a frota sem revisar o desenho do seguro.",
          "Na prática, a transportadora pode descobrir uma falha de cobertura justamente no pior momento: durante um sinistro.",
          "Por isso, a análise deve considerar pontos como:",
        ],
        bullets: [
          "tipo de carga transportada;",
          "valor médio por viagem;",
          "rotas mais utilizadas;",
          "histórico de roubo, acidente ou avaria;",
          "exigências dos embarcadores;",
          "perfil da frota;",
          "uso de motoristas próprios, terceiros ou agregados;",
          "regras de gerenciamento de risco;",
          "documentos exigidos em caso de sinistro.",
          "Seguro para transportadora é uma decisão operacional. Não é apenas uma cotação.",
        ],
      },
      {
        heading: "RCTR-C, RCF-DC e seguro de frota: qual a diferença?",
        paragraphs: [
          "Na hora de revisar a proteção da transportadora, é comum aparecerem siglas e coberturas diferentes. Entender a função de cada uma ajuda a evitar contratações incompletas.",
          "RCTR-C: o seguro de Responsabilidade Civil do Transportador Rodoviário de Carga está relacionado à responsabilidade do transportador por danos à carga durante o transporte rodoviário. É uma cobertura essencial para transportadoras, mas não deve ser analisada isoladamente.",
          "RCF-DC: é uma cobertura importante quando falamos de roubo ou desaparecimento de carga. Para transportadoras que circulam em rotas com maior exposição, transportam mercadorias visadas ou atuam com cargas de maior valor, essa análise é ainda mais relevante.",
          "Seguro de frota: protege os veículos da operação. Ele não substitui o seguro relacionado à carga transportada. Carga, responsabilidade e frota precisam ser avaliadas em conjunto.",
        ],
      },
      {
        heading: "Quando revisar o seguro da transportadora?",
        paragraphs: [
          "A revisão do seguro não deve acontecer apenas quando a apólice está prestes a vencer. Existem momentos em que a análise se torna ainda mais importante:",
        ],
        bullets: [
          "antes da renovação anual;",
          "quando a frota aumenta;",
          "quando a empresa passa a atender novos clientes;",
          "quando muda o tipo de carga transportada;",
          "quando surgem novas rotas;",
          "quando há exigência contratual de embarcadores;",
          "depois de um sinistro;",
          "quando a operação passa a transportar cargas de maior valor;",
          "quando a empresa começa a trabalhar com terceiros ou agregados;",
          "quando o custo do seguro sobe sem explicação clara.",
          "Nesses casos, repetir a apólice anterior pode deixar lacunas. O ideal é revisar se o seguro continua adequado ao tamanho, ao risco e à realidade atual da operação.",
        ],
      },
      {
        heading: "Os erros mais comuns na contratação do seguro para transportadoras",
        paragraphs: [
          "Alguns erros são frequentes e podem gerar prejuízos relevantes.",
          "Contratar apenas pelo menor preço: preço importa, mas não pode ser o único critério. Uma apólice mais barata pode ter exclusões, limites ou condições que reduzem a proteção justamente nos eventos mais críticos para a transportadora.",
          "Não alinhar seguro e gerenciamento de risco: em muitos casos, a cobertura depende do cumprimento de regras de rastreamento, escolta, consulta de motorista, rotas autorizadas, horários permitidos ou procedimentos específicos.",
          "Confundir seguro da carga com seguro da frota: o caminhão pode estar protegido, mas a carga não. Ou a carga pode ter cobertura, mas a frota estar vulnerável. A análise precisa separar cada risco e montar uma proteção coerente.",
          "Ignorar exclusões e limites da apólice: toda apólice tem condições, limites e exclusões. A transportadora precisa saber exatamente o que está coberto, o que não está e quais situações exigem atenção.",
          "Não ter apoio na hora do sinistro: quando acontece um sinistro, a transportadora precisa saber quais documentos apresentar, quais prazos cumprir e como conduzir a comunicação com a seguradora.",
        ],
      },
      {
        heading: "Como saber se a apólice atual está adequada?",
        paragraphs: [
          "Uma análise consultiva deve olhar além do valor do prêmio. Algumas perguntas ajudam a identificar se a proteção está bem estruturada:",
        ],
        bullets: [
          "Quais cargas a empresa transporta hoje?",
          "Quais rotas são mais frequentes?",
          "Existem rotas com maior risco de roubo?",
          "A frota é própria, terceirizada ou mista?",
          "Os embarcadores exigem coberturas específicas?",
          "O valor máximo por viagem está atualizado?",
          "A apólice considera roubo, avaria, acidente e desaparecimento?",
          "As regras de gerenciamento de risco são viáveis para a operação?",
          "A empresa sabe como agir em caso de sinistro?",
          "O seguro atual acompanha o crescimento da transportadora?",
          "Se alguma dessas respostas não estiver clara, a apólice merece revisão.",
        ],
      },
      {
        heading: "Como a Tractus ajuda transportadoras e empresas de logística",
        paragraphs: [
          "A Tractus atua de forma consultiva na análise de seguros empresariais. No caso de transportadoras e operações logísticas, o trabalho começa pelo entendimento da operação: tipo de carga, rotas, frota, perfil dos clientes, exigências contratuais e histórico de risco.",
          "A partir disso, nossos consultores avaliam quais coberturas fazem sentido e onde podem existir lacunas na proteção atual.",
          "O objetivo é ajudar a empresa a contratar ou renovar com mais clareza, evitando decisões baseadas apenas em preço ou em coberturas mal compreendidas.",
        ],
      },
      {
        heading: "Antes de renovar ou contratar, solicite uma análise da operação",
        paragraphs: [
          "Se a sua transportadora está renovando o seguro, ampliando frota, atendendo novos embarcadores ou tem dúvidas sobre a cobertura atual, este é o momento certo para revisar a proteção.",
          "Uma análise antes da contratação pode evitar prejuízos, atrasos e surpresas em caso de sinistro.",
          "Solicite uma análise consultiva da Tractus para sua operação de transporte ou logística. Nossa equipe avalia o cenário da empresa e orienta os próximos passos para proteger carga, frota e responsabilidade operacional com mais segurança.",
        ],
      },
    ],
    faqs: [
      {
        question: "Transportadora precisa de seguro de carga?",
        answer:
          "Sim. Transportadoras devem avaliar seguros relacionados à responsabilidade sobre a carga transportada e às coberturas adequadas para o tipo de operação, rota e exigências comerciais.",
      },
      {
        question: "RCTR-C cobre roubo de carga?",
        answer:
          "O RCTR-C está relacionado à responsabilidade civil do transportador. Para roubo ou desaparecimento de carga, normalmente é necessário avaliar coberturas específicas, como o RCF-DC, conforme o desenho da apólice.",
      },
      {
        question: "Seguro de frota substitui seguro de carga?",
        answer:
          "Não. Seguro de frota protege os veículos da operação. Seguro de carga e responsabilidade do transportador tratam dos riscos ligados à mercadoria transportada e à responsabilidade operacional.",
      },
      {
        question: "Quando revisar o seguro da transportadora?",
        answer:
          "A revisão é recomendada antes da renovação, ao mudar rotas, aumentar frota, transportar cargas de maior valor, atender novos embarcadores ou quando houver dúvida sobre a cobertura atual.",
      },
      {
        question: "A Tractus analisa apólice existente?",
        answer:
          "Sim. A Tractus pode avaliar a operação e a apólice atual para identificar lacunas, riscos e oportunidades de melhoria antes da contratação ou renovação.",
      },
    ],
    cta: "Antes de renovar ou contratar um seguro para carga, frota ou operação logística, solicite uma análise consultiva da Tractus.",
    ctaTitle: "Sua transportadora está realmente protegida?",
    ctaText:
      "Antes de renovar ou contratar um seguro para carga, frota ou operação logística, solicite uma análise consultiva da Tractus. Avaliamos o perfil da sua operação, as rotas, o tipo de carga e as coberturas atuais para identificar possíveis lacunas.",
    product: "Seguro transporte/carga",
    formTitle: "Sua transportadora está realmente protegida?",
    formText:
      "Preencha os dados básicos da operação. Um especialista da Tractus entra em contato para entender carga, frota, rotas e coberturas atuais. Sem upload inicial: se necessário, a apólice será solicitada pelo WhatsApp oficial.",
    formCtaLabel: "Solicitar análise da operação",
    messagePlaceholder: "Conte tipo de carga, quantidade de veículos, rotas principais, valor médio por viagem e se já existe apólice atual.",
  },
  {
    slug: "reajuste-plano-saude-empresarial-o-que-fazer",
    title: "Recebeu reajuste do plano empresarial? 5 caminhos antes de cancelar",
    metaTitle: "Reajuste do plano de saúde empresarial: o que fazer",
    description:
      "Antes de cancelar o plano de saúde empresarial, veja 5 caminhos para revisar custos, comparar alternativas e proteger colaboradores com apoio consultivo.",
    category: "Plano de Saúde Empresarial",
    date: "4 de junho de 2026",
    isoDate: "2026-06-04",
    readTime: "8 min",
    keywords: [
      "reajuste plano de saúde empresarial",
      "plano de saúde empresarial reajuste abusivo",
      "como reduzir custo do plano de saúde empresarial",
      "cotação plano de saúde empresarial",
      "plano de saúde PME Sorocaba",
      "troca de plano de saúde empresarial",
      "benefícios corporativos PME",
    ],
    summary:
      "Se o plano de saúde empresarial ficou pesado depois do reajuste, a primeira decisão não deve ser cancelar. A empresa pode revisar contrato, uso, rede, coparticipação, perfil das vidas e alternativas de mercado antes de escolher o próximo passo.",
    heroAlt: "Diretoria e RH analisando reajuste de plano de saúde empresarial em uma PME",
    heroImage: reajusteHeroJpg,
    heroImageWebp: reajusteHeroWebp,
    heroImageAvif: reajusteHeroAvif,
    bodyImages: [
      {
        src: aboutImageJpg,
        srcWebp: aboutImageWebp,
        srcAvif: aboutImageAvif,
        alt: "RH revisando custos de plano de saúde empresarial após reajuste",
        caption: "A revisão do reajuste precisa cruzar custo, rede usada e perfil real dos colaboradores.",
        afterHeading: "Por que o reajuste pesa tanto para PMEs",
      },
      {
        src: benefitsHeroJpg,
        srcWebp: benefitsHeroWebp,
        srcAvif: benefitsHeroAvif,
        alt: "Colaboradores de PME usando benefício de saúde empresarial",
        caption: "Plano de saúde empresarial é benefício, retenção e previsibilidade — não apenas uma linha de custo.",
        afterHeading: "Compare rede, não só preço",
      },
    ],
    sections: [
      {
        heading: "Resposta rápida",
        paragraphs: [
          "Recebeu reajuste no plano de saúde empresarial? Antes de cancelar, revise a composição do contrato, entenda o motivo do aumento, compare rede e operadoras, simule ajustes de desenho do plano e peça uma análise consultiva para evitar uma troca que reduza demais a cobertura.",
          "O erro mais comum é decidir no susto: cortar benefício, migrar para a primeira proposta mais barata ou aceitar o reajuste sem comparar. Para PMEs, o melhor caminho é transformar o reajuste em uma revisão estruturada do pacote de saúde e benefícios.",
        ],
      },
      {
        heading: "Por que o reajuste pesa tanto para PMEs",
        paragraphs: [
          "Em empresas pequenas e médias, poucos colaboradores podem mudar bastante o perfil de custo do contrato. Idade média, utilização, dependentes, afastamentos, rede usada e regras da operadora influenciam a renovação.",
          "Além disso, plano de saúde não é só despesa: ele pesa na retenção, na atração de talentos e na tranquilidade dos colaboradores. Por isso, a decisão precisa equilibrar custo, rede, atendimento e previsibilidade.",
        ],
      },
      {
        heading: "Entenda o que mudou no contrato",
        paragraphs: [
          "Antes de comparar qualquer proposta, levante os dados básicos do contrato. Com eles, a conversa deixa de ser 'ficou caro' e passa a ser: qual parte do contrato está pressionando o custo e qual alternativa preserva o que é essencial?",
        ],
        bullets: [
          "Valor atual e valor reajustado.",
          "Quantidade de titulares e dependentes.",
          "Faixa etária das vidas.",
          "Plano, acomodação e abrangência.",
          "Rede realmente usada pelos colaboradores.",
          "Índice de reajuste, aniversário do contrato e histórico de aumentos.",
        ],
      },
      {
        heading: "Separe economia real de corte perigoso",
        paragraphs: [
          "Uma proposta mais barata pode fazer sentido, mas também pode esconder perda de hospitais importantes, mudança de abrangência, coparticipação mal explicada ou regra de aceitação diferente.",
          "A economia boa é aquela que reduz desperdício sem destruir a percepção do benefício. Às vezes a solução está em ajustar rede, plano, coparticipação ou operadora. Em outros casos, trocar pode ser necessário — mas com comparação lado a lado.",
        ],
      },
      {
        heading: "Compare rede, não só preço",
        paragraphs: [
          "Para empresas de Sorocaba e região, por exemplo, um plano regional bem escolhido pode atender melhor do que uma opção ampla demais que os colaboradores quase não usam. Em outras empresas, a abrangência maior é indispensável.",
          "A pergunta correta é: onde os colaboradores realmente usam atendimento? A resposta orienta a escolha entre rede regional, estadual, nacional, coparticipação, acomodação e desenho do benefício.",
        ],
      },
      {
        heading: "Avalie se os benefícios precisam ser redesenhados",
        paragraphs: [
          "Quando o plano de saúde sobe, vale olhar o pacote inteiro: odontológico, seguro de vida, vale-refeição, vale-alimentação, vale-transporte e outros benefícios.",
          "Não significa substituir saúde por benefício mais barato. Significa entender se a empresa está investindo no pacote certo para o perfil da equipe — e se existe uma forma mais eficiente de organizar tudo.",
        ],
      },
      {
        heading: "Peça uma análise antes de cancelar",
        paragraphs: [
          "Cancelar o plano pode gerar ruído com colaboradores e criar dificuldade para contratar um novo produto depois, dependendo do caso. Antes de tomar essa decisão, vale pedir uma análise consultiva com contrato atual, quantidade de vidas, cidades e prioridades da empresa.",
          "A Tractus pode ajudar a comparar alternativas e mostrar caminhos possíveis para reduzir custo, melhorar o desenho ou negociar uma troca com mais segurança.",
        ],
      },
      {
        heading: "Checklist rápido para o RH e diretoria",
        paragraphs: [
          "Use este roteiro antes de aceitar o reajuste ou pedir uma troca de operadora. Ele ajuda a organizar a conversa e evita decisão baseada apenas no preço.",
        ],
        bullets: [
          "Qual foi o percentual de reajuste?",
          "O contrato é PME, coletivo empresarial ou adesão?",
          "Quantas vidas existem hoje?",
          "Há dependentes aumentando muito o custo?",
          "Quais hospitais e laboratórios são indispensáveis?",
          "A equipe usa atendimento regional ou precisa de abrangência maior?",
          "A empresa aceita coparticipação? Em quais condições?",
          "Existe outro benefício que precisa entrar na análise?",
        ],
      },
    ],
    faqs: [
      {
        question: "O que fazer quando o plano de saúde empresarial recebe reajuste alto?",
        answer:
          "Levante os dados do contrato, entenda o motivo do aumento, compare rede e alternativas de mercado e avalie ajustes antes de cancelar. A decisão deve considerar custo, cobertura, perfil das vidas e impacto para colaboradores.",
      },
      {
        question: "Vale a pena trocar de plano de saúde empresarial só pelo preço?",
        answer:
          "Nem sempre. Uma proposta mais barata pode reduzir rede, abrangência ou mudar regras importantes. O ideal é comparar preço, rede, coparticipação, acomodação, cidades atendidas e condições de aceitação.",
      },
      {
        question: "Empresa pequena consegue reduzir custo do plano de saúde?",
        answer:
          "Pode conseguir, dependendo do perfil das vidas, região, rede necessária e alternativas disponíveis. A análise deve ser feita caso a caso, especialmente em PMEs com poucos colaboradores.",
      },
      {
        question: "Coparticipação ajuda a reduzir o custo?",
        answer:
          "Pode ajudar em alguns contratos, mas precisa ser explicada com clareza para a empresa e colaboradores. O ponto é avaliar se a economia compensa a mudança de experiência de uso.",
      },
      {
        question: "A Tractus atende empresas de Sorocaba e região?",
        answer:
          "Sim. A Tractus atua com empresas de Sorocaba e região, avaliando plano de saúde empresarial, seguros e benefícios corporativos de acordo com o perfil da operação.",
      },
    ],
    cta: "Solicite uma análise do reajuste antes de cancelar ou trocar o plano empresarial.",
  },
  {
    slug: "porto-saude-linha-pro-sorocaba-oportunidade",
    aliases: ["porto-saude-linha-pro-sorocaba-oportunidade"],
    title: "Porto Saúde Linha Pro Sorocaba: oportunidade para empresas compararem plano de saúde",
    metaTitle: "Porto Saúde Linha Pro Sorocaba: oportunidade para empresas",
    description:
      "Entenda por que a Linha Pro Sorocaba da Porto Saúde pode ser uma alternativa regional para empresas de 3 a 499 vidas em Sorocaba e região.",
    category: "Plano de Saúde Empresarial",
    date: "20 de maio de 2026",
    isoDate: "2026-05-20",
    readTime: "7 min",
    keywords: [
      "Porto Saúde Linha Pro Sorocaba",
      "plano de saúde empresarial Sorocaba",
      "plano regional Sorocaba",
      "cotação Porto Saúde empresas",
    ],
    summary:
      "Para empresas de Sorocaba, Itu, Votorantim, Sao Roque, Boituva e Salto, a Linha Pro Sorocaba da Porto Saúde merece entrar na comparação quando a prioridade e equilibrar custo, rede regional e benefícios de cuidado.",
    heroAlt: "Equipe de RH analisando cotação de plano de saúde empresarial em Sorocaba",
    sections: [
      {
        heading: "Resposta rápida",
        paragraphs: [
          "A Linha Pro Sorocaba da Porto Saúde e uma oportunidade para empresas de 3 a 499 vidas que querem comparar plano de saúde empresarial com foco regional. O produto atende empresas de Sorocaba e cidades próximas, com opções Bronze e Prata, rede referenciada local e benefícios como telemedicina, psicoterápia online e programas de promoção a saúde.",
          "A decisão não deve ser tomada apenas pelo preço. O melhor estudo considera cidade, quantidade de vidas, idades, operadora atual, valor pago, rede essencial e rotina real dos colaboradores.",
        ],
      },
      {
        heading: "Por que essa oportunidade chama atenção em Sorocaba",
        paragraphs: [
          "Sorocaba tem empresas em crescimento, equipes híbridas entre cidade e região e uma demanda forte por benefícios que sejam percebidos no dia a dia. Nesse contexto, um plano regional bem avaliado pode competir melhor do que alternativas amplas demais para quem usa atendimento principalmente em Sorocaba, Votorantim, Itu, Salto, Boituva e Sao Roque.",
          "A Linha Pro foi desenhada para empresas de pequeno e médio porte, de 3 a 499 vidas. Isso coloca o produto no radar de negócios famíliares, industrias, prestádores de serviço, escritórios e empresas com RH enxuto que precisam comparar custo-benefício sem abrir mao de uma rede coerente.",
        ],
        bullets: [
          "Bronze Sorocaba Pro: foco em atendimento em Sorocaba, com opção de coparticipacao.",
          "Prata Sorocaba Pro: abrangência em Sorocaba, Barueri e Sao Paulo, com opções com ou sem coparticipacao.",
          "Rede regional citada nos materiais: hospitais e laboratórios em Sorocaba e cidades próximas.",
          "Benefícios adicionais: Telemedicina 24h, Time Médico Porto Saúde, Seu Clínico e Seu Pediatra na Hora, psicoterápia online e descontos em drogarias.",
        ],
      },
      {
        heading: "Como comparar sem cair em uma decisão superficial",
        paragraphs: [
          "A pergunta certa não e apenas qual plano e mais barato. A pergunta mais produtiva e: qual plano entrega a rede necessária para o perfil da empresa pelo melhor custo possível?",
          "Uma comparação consultiva deve cruzar dados simples: quantidade de titulares e dependentes, idades, cidade de uso, plano atual, valor pago, acomodacao desejada, hospitais importantes e historico de utilização quando existir. Com esses dados, a Tractus consegue avaliar se a Linha Pro Sorocaba faz sentido ou se outra alternativa atende melhor.",
        ],
      },
      {
        heading: "Quando pedir cotação da Linha Pro Sorocaba",
        paragraphs: [
          "O melhor momento costuma ser antes da renovação, após um reajuste relevante, na contratação de novos colaboradores ou quando a empresa percebe que paga por uma abrangência maior do que realmente usa.",
          "A cotação também e util quando o RH quer apresentar opções para diretoria com argumentos claros: rede, custo, coparticipacao, benefícios digitais, acomodacao e impacto esperado para colaboradores.",
        ],
      },
      {
        heading: "Observação importante",
        paragraphs: [
          "Rede, condições, preços, aceitação e disponibilidade podem mudar e dependem da cotação vigente e da análise da seguradora. A Tractus faz a validação atualizada antes de qualquer tomada de decisão.",
        ],
      },
    ],
    faqs: [
      {
        question: "A Porto Saúde Linha Pro Sorocaba atende empresas de qual tamanho?",
        answer:
          "Os materiais comerciais indicam foco em empresas de 3 a 499 vidas, sujeito a regras de aceitação e cotação vigente.",
      },
      {
        question: "A Linha Pro Sorocaba tem coparticipacao?",
        answer:
          "Ha opções com coparticipacao. No plano Prata Sorocaba Pro, os materiais também citam opção sem coparticipacao.",
      },
      {
        question: "Vale a pena trocar o plano atual pela Linha Pro Sorocaba?",
        answer:
          "Depende da rede usada pela empresa, idades, valor pago, operadora atual e cidades de atendimento. O ideal e fazer comparativo consultivo antes da renovação.",
      },
    ],
    cta: "Solicite uma análise da Linha Pro Sorocaba para sua empresa.",
  },
  {
    slug: "compra-certa-vale-transporte-pluxee-economia-rh",
    title: "Compra Certa Vale-Transporte Pluxee: como o RH pode reduzir desperdícios no VT",
    metaTitle: "Compra Certa Vale-Transporte Pluxee: economia para RH",
    description:
      "Veja como uma gestão mais precisa do vale-transporte pode reduzir desperdícios, organizar recargas e melhorar o controle de custos do RH.",
    category: "Benefícios Corporativos",
    date: "20 de maio de 2026",
    isoDate: "2026-05-20",
    readTime: "8 min",
    keywords: [
      "Compra Certa vale transporte",
      "Pluxee vale transporte",
      "economizar custos RH vale transporte",
      "gestão de vale transporte empresas",
    ],
    summary:
      "Empresas que compram vale-transporte no automático podem perder dinheiro com saldos parados, rotas desatualizadas, colaboradores em férias e recargas acima da necessidade real.",
    heroAlt: "Profissional de RH analisando custos de vale-transporte em planilha",
    sections: [
      {
        heading: "Resposta rápida",
        paragraphs: [
          "A grande oportunidade do vale-transporte está em comprar melhor, não apenas comprar mais rapido. Uma gestão correta considera dias trabalhados, escala, afastamentos, férias, modelo hibrido, saldo disponível e regras locais de transporte antes de gerar o pedido.",
          "No ecossistema Pluxee, a proposta do vale-transporte e ajudar empresas a centralizar gestão, pedidos e controle de benefícios. A ideia de Compra Certa aplicada ao VT e simples: reduzir desperdícios e comprar o valor mais aderente a necessidade real de cada colaborador.",
        ],
      },
      {
        heading: "Onde o RH costuma perder dinheiro com vale-transporte",
        paragraphs: [
          "O vale-transporte parece operacional, mas ele impacta diretamente a folha, o fluxo de caixa e a rotina do RH. Quando a empresa não revisa dados antes da compra, pequenas diferencas por colaborador viram um custo relevante no mês.",
          "As perguntas que mais aparecem nas buscas sao práticas: como calcular vale-transporte corretamente, como evitar saldo parado, se empresa pode descontar vale-transporte, como controlar VT no home office e como organizar recarga para colaboradores com escalas diferentes.",
        ],
        bullets: [
          "Colaborador em férias ou afastado recebendo recarga cheia.",
          "Mudanca de endereço sem atualizacao de rota.",
          "Modelo hibrido sem ajuste de dias presenciais.",
          "Compra feita por media antiga, sem validar saldo ou necessidade real.",
          "Falta de relatorio para separar custo por centro de custo, filial ou equipe.",
        ],
      },
      {
        heading: "O que e uma Compra Certa de vale-transporte",
        paragraphs: [
          "Compra Certa e a disciplina de comprar o VT com base em dados atuais. Na prática, o RH deixa de repetir o pedido do mês anterior e passa a validar variáveis que mudam: dias úteis, escalas, entradas e saidas, férias, licenças, saldos e alteráções de trajeto.",
          "Com a Pluxee, empresas podem organizar a gestão de benefícios em uma plataforma voltada a controle, pedido e acompanhamento. Para a empresa, o ganho está em previsibilidade e reducao de desperdicio; para o colaborador, em receber o benefício certo no prazo certo.",
        ],
      },
      {
        heading: "Como usar esse tema para reduzir custos do RH",
        paragraphs: [
          "A conversa com a diretoria deve sair do campo 'vale-transporte e obrigacao' e entrar no campo 'vale-transporte e centro de custo gerenciavel'. A empresa continua cumprindo suas responsabilidades, mas passa a comprar com mais precisao.",
          "O primeiro passo e mapear perguntas que revelam economia: quais colaboradores estáo em regime hibrido? Quantos dias presenciais cada equipe terá no mês? Quem está em férias? Houve mudanca de endereço? O saldo anterior foi considerado? Existem pedidos duplicados?",
        ],
      },
      {
        heading: "Checklist de perguntas para o RH antes de comprar VT",
        paragraphs: [
          "Antes de fechar o pedido do mês, vale usar um roteiro curto. Ele ajuda a evitar compra excessiva e cria padrao para auditoria interna.",
        ],
        bullets: [
          "Quantos dias presenciais cada colaborador terá no periodo?",
          "Quem está em férias, afastamento, aviso prévio ou admissao parcial?",
          "O endereço e a rota continuam corretos?",
          "O saldo remanescente foi considerado no pedido?",
          "A empresa consegue separar custo por filial, area ou centro de custo?",
          "Existe política clara para home office, banco de horas e escalas alternadas?",
        ],
      },
    ],
    faqs: [
      {
        question: "Como economizar com vale-transporte sem prejudicar o colaborador?",
        answer:
          "A economia vem da compra correta: atualizar dias presenciais, rotas, férias, afastamentos e saldos antes do pedido. Nao se trata de cortar benefício devido, mas de evitar recargas acima da necessidade real.",
      },
      {
        question: "Vale-transporte pode ser controlado por uma plataforma?",
        answer:
          "Sim. Plataformas de benefícios como a Pluxee ajudam empresas a organizar pedidos, gestão e acompanhamento, reduzindo operacao manual e aumentando visibilidade.",
      },
      {
        question: "Qual e o principal erro no controle de VT?",
        answer:
          "Repetir o pedido do mês anterior sem revisar mudancas de escala, endereço, férias, afastamento ou saldo disponível.",
      },
    ],
    cta: "Fale com a Tractus para revisar a gestão de vale-transporte da sua empresa.",
  },
  {
    slug: "beneficios-pluxee-vale-refeicao-alimentacao-flexivel",
    aliases: ["beneficios-pluxee-vale-refeicao-alimentacao-flexivel"],
    title: "Benefícios Pluxee alem do seguro: vale-refeição, vale-alimentação e benefício flexivel",
    metaTitle: "Benefícios Pluxee: refeição, alimentação e flexivel",
    description:
      "Conheca oportunidades de benefícios não seguraveis da Pluxee para melhorar pacote de RH, atrair talentos e organizar custos.",
    category: "RH e Benefícios",
    date: "20 de maio de 2026",
    isoDate: "2026-05-20",
    readTime: "7 min",
    keywords: [
      "benefícios Pluxee",
      "vale refeição Pluxee",
      "vale alimentação Pluxee",
      "benefício flexivel empresas",
    ],
    summary:
      "Vale-refeição, vale-alimentação e benefícios flexiveis ajudam empresas a estruturar um pacote mais percebido pelo colaborador, com controle para o RH e posicionamento mais competitivo na atracao de talentos.",
    heroAlt: "Colaboradores em ambiente corporativo conversando sobre benefícios flexiveis",
    sections: [
      {
        heading: "Resposta rápida",
        paragraphs: [
          "Os benefícios não seguraveis da Pluxee incluem soluções como vale-refeição, vale-alimentação e modelos flexiveis de benefícios. Eles ajudam empresas a atender necessidades do colaborador no dia a dia, melhorar experiência de trabalho e organizar custos de RH.",
          "Para muitas empresas, o ganho não está apenas em oferecer mais benefícios, mas em desenhar uma política clara: quem recebe, qual valor, quais regras, como comunicar e como medir percepção dos colaboradores.",
        ],
      },
      {
        heading: "Por que benefícios não seguraveis entraram na estrategia do RH",
        paragraphs: [
          "Plano de saúde, seguro de vida e odontológico continuam importantes, mas o colaborador também avalia benefícios que impactam sua rotina semanal: alimentação, refeição, mobilidade, flexibilidade e apoio financeiro indireto.",
          "Quando o RH organiza esses benefícios, ele ganha argumentos para retenção, employer branding e negociacao interna. O pacote deixa de ser uma lista solta de fornecedores e vira uma proposta de valor ao colaborador.",
        ],
      },
      {
        heading: "Vale-refeição Pluxee",
        paragraphs: [
          "O vale-refeição e pensado para uso em refeicoes prontas, como restáurantes, lanchonetes e estábelecimentos credenciados. Para empresas com equipes presenciais, externas ou híbridas, ele e um benefício de alto valor percebido.",
          "A pergunta estrategica para o RH e: o valor atual acompanha a rotina real do colaborador? Em muitos casos, revisar política, prazos e comunicacao aumenta a percepção do benefício sem necessáriamente criar complexidade operacional.",
        ],
      },
      {
        heading: "Vale-alimentação Pluxee",
        paragraphs: [
          "O vale-alimentação e voltado a compras de alimentos, geralmente em supermercados, mercados e estábelecimentos do genero. Ele costuma ser muito valorizado por colaboradores com família, rotina domêstica organizada ou preferencia por preparar refeicoes em casa.",
          "Empresas podem combinar vale-refeição e vale-alimentação de acordo com política interna, perfil da equipe e acordos aplicaveis. O ponto central e dar clareza: finalidade, valor, data de crédito e canais de suporte.",
        ],
      },
      {
        heading: "Benefício flexivel",
        paragraphs: [
          "O benefício flexivel responde a uma realidade simples: colaboradores diferentes valorizam coisas diferentes. Um profissional pode preferir alimentação; outro pode priorizar mobilidade, educacao, bem-estár ou apoio no mês.",
          "Para o RH, a flexibilidade ajuda a personalizar sem perder governanca. O desenho precisa respeitar regras fiscais, trabalhistas, políticas internas e limites definidos pela empresa. Por isso, a implementação deve ser feita com orientação consultiva.",
        ],
      },
      {
        heading: "Como montar um pacote mais competitivo",
        paragraphs: [
          "O caminho recomendado e diagnosticar o perfil da equipe, mapear benefícios atuais, identificar baixa utilização e comparar alternativas. Em seguida, a empresa define prioridades: reduzir operacao manual, melhorar percepção, organizar centros de custo ou criar pacote mais atrativo para contratacoes.",
        ],
        bullets: [
          "Mapeie benefícios atuais e custos por colaborador.",
          "Pesquise quais benefícios a equipe realmente valoriza.",
          "Defina política clara de elegibilidade e valores.",
          "Centralize gestão para reduzir retrabalho do RH.",
          "Comunique o pacote de forma simples e recorrente.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual a diferenca entre vale-refeição e vale-alimentação?",
        answer:
          "O vale-refeição costuma ser usado em refeicoes prontas, como restáurantes. O vale-alimentação costuma ser usado para compra de alimentos em mercados e supermercados.",
      },
      {
        question: "Benefício flexivel substitui os benefícios tradicionais?",
        answer:
          "Nem sempre. Ele pode complementar ou reorganizar o pacote, dependendo da política da empresa, regras aplicaveis e objetivos do RH.",
      },
      {
        question: "Como saber quais benefícios oferecer?",
        answer:
          "A melhor decisão combina perfil da equipe, orcamento, regras internas, pesquisas com colaboradores e comparação de fornecedores.",
      },
    ],
    cta: "Solicite uma conversa com a Tractus para desenhar seu pacote de benefícios Pluxee.",
  },
];

const normalizeSlug = (value: string | undefined) =>
  (value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const blogPostsNewestFirst = [...blogPosts].sort(
  (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
);

export const getBlogPost = (slug: string | undefined) =>
  blogPosts.find(
    (post) =>
      normalizeSlug(post.slug) === normalizeSlug(slug) ||
      post.aliases?.some((alias) => normalizeSlug(alias) === normalizeSlug(slug)),
  );
