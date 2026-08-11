import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const distDir = new URL('../dist/', import.meta.url).pathname;
const shellPath = join(distDir, 'index.html');
const shell = readFileSync(shellPath, 'utf8');

const posts = [
  {
    slug: 'seguro-transportadoras-carga-frota-rctrc-rcfdc',
    aliases: ['seguro-para-transportadoras-roubo-carga-frota'],
    title: 'Seguro para Transportadoras: Roubo de Carga, Frota e Riscos',
    description:
      'Entenda quais seguros uma transportadora deve avaliar para proteger carga, frota, rotas e operação logística. Veja quando revisar RCTR-C, RCF-DC e coberturas complementares.',
    canonical: 'https://tractuscorretora.com/blog/seguro-transportadoras-carga-frota-rctrc-rcfdc',
    image: 'https://tractuscorretora.com/seguro-transportadoras-og-v3.png',
    keywords:
      'seguro para transportadoras, seguro de carga para transportadora, seguro roubo de carga, seguro frota transportadora, RCTR-C, RCF-DC, seguro transporte rodoviário de cargas, seguro para logística',
    published: '2026-06-16',
  },
  {
    slug: 'reajuste-plano-saude-empresarial-o-que-fazer',
    title: 'Reajuste do plano de saúde empresarial: o que fazer antes de cancelar',
    description:
      'Saiba como analisar um reajuste de plano de saúde empresarial, comparar alternativas e decidir com mais segurança antes de cancelar ou migrar de operadora.',
    canonical: 'https://tractuscorretora.com/blog/reajuste-plano-saude-empresarial-o-que-fazer',
    image: 'https://tractuscorretora.com/og-image.png',
    keywords:
      'reajuste plano de saúde empresarial, plano de saúde empresarial, trocar plano de saúde, revisão de apólice',
    published: '2026-06-16',
  },
  {
    slug: 'porto-saude-linha-pro-sorocaba-oportunidade',
    aliases: ['porto-saude-linha-pro-sorocaba-oportunidade'],
    title: 'Porto Saúde Linha Pro Sorocaba: oportunidade para empresas compararem plano de saúde',
    description:
      'Entenda por que a Linha Pro Sorocaba da Porto Saúde pode ser uma alternativa regional para empresas de 3 a 499 vidas em Sorocaba e região.',
    canonical: 'https://tractuscorretora.com/blog/porto-saude-linha-pro-sorocaba-oportunidade',
    image: 'https://tractuscorretora.com/og-image.png',
    keywords:
      'Porto Saúde Linha Pro Sorocaba, plano de saúde empresarial Sorocaba, plano regional Sorocaba, cotação Porto Saúde empresas',
    published: '2026-05-20',
  },
  {
    slug: 'compra-certa-vale-transporte-pluxee-economia-rh',
    title: 'Compra Certa Vale-Transporte Pluxee: como o RH pode reduzir desperdícios no VT',
    description:
      'Veja como uma gestão mais precisa do vale-transporte pode reduzir desperdícios, organizar recargas e melhorar o controle de custos do RH.',
    canonical: 'https://tractuscorretora.com/blog/compra-certa-vale-transporte-pluxee-economia-rh',
    image: 'https://tractuscorretora.com/og-image.png',
    keywords:
      'Compra Certa vale transporte, Pluxee vale transporte, vale transporte RH, gestão de VT',
    published: '2026-05-20',
  },
  {
    slug: 'beneficios-pluxee-vale-refeicao-alimentacao-flexivel',
    aliases: ['beneficios-pluxee-vale-refeicao-alimentacao-flexivel'],
    title: 'Benefícios Pluxee alem do seguro: vale-refeição, vale-alimentação e benefício flexivel',
    description:
      'Conheca oportunidades de benefícios não seguraveis da Pluxee para melhorar pacote de RH, atrair talentos e organizar custos.',
    canonical: 'https://tractuscorretora.com/blog/beneficios-pluxee-vale-refeicao-alimentacao-flexivel',
    image: 'https://tractuscorretora.com/og-image.png',
    keywords:
      'benefícios Pluxee, vale refeição Pluxee, vale alimentação Pluxee, benefício flexivel empresas',
    published: '2026-05-20',
  },
];

function attr(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function replaceOrInsertHead(html, post) {
  let out = html;
  const replacements = [
    [/<title>.*?<\/title>/s, `<title>${attr(post.title)}</title>`],
    [/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${attr(post.description)}" />`],
    [/<meta name="keywords" content="[^"]*"\s*\/>/, `<meta name="keywords" content="${attr(post.keywords)}" />`],
    [/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${attr(post.title)}" />`],
    [/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${attr(post.description)}" />`],
    [/<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="article" />`],
    [/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${attr(post.canonical)}" />`],
    [/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${attr(post.canonical)}" />`],
    [/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${attr(post.image)}" />`],
    [/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${attr(post.title)}" />`],
    [/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${attr(post.description)}" />`],
    [/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${attr(post.image)}" />`],
  ];

  for (const [pattern, replacement] of replacements) {
    out = out.replace(pattern, replacement);
  }

  const extraMeta = `
    <meta property="og:url" content="${attr(post.canonical)}" />
    <meta property="article:published_time" content="${attr(post.published)}" />
    <meta property="article:section" content="Seguro Transporte e Logística" />`;

  if (!out.includes('property="og:url"')) {
    out = out.replace('</head>', `${extraMeta}\n  </head>`);
  }

  return out;
}

for (const post of posts) {
  const slugs = [post.slug, ...(post.aliases || [])];
  for (const slug of slugs) {
    const target = join(distDir, 'blog', `${slug}.html`);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, replaceOrInsertHead(shell, post));
    console.log(`Generated static social/SEO shell: /blog/${slug}.html`);
  }
}
