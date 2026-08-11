import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import React from "react";
import { createServer } from "vite";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const projectRoot = process.cwd();
const distDir = join(projectRoot, "dist");
const shellPath = join(distDir, "index.html");
const shell = readFileSync(shellPath, "utf8");
const manifestPath = join(distDir, ".vite", "manifest.json");
const assetManifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const assetMap = new Map();
for (const entry of Object.values(assetManifest)) {
  if (entry && typeof entry === "object" && entry.src && entry.file) {
    assetMap.set(`/${entry.src}`, `/${entry.file}`);
    assetMap.set(entry.src, `/${entry.file}`);
  }
}
const rewriteAssets = (html) => {
  let out = html;
  for (const [from, to] of assetMap.entries()) {
    out = out.split(from).join(to);
  }
  return out;
};
const siteDescription =
  "Corretora consultiva de seguros, saúde empresarial e benefícios corporativos em Sorocaba, São Paulo e região.";
const ogImage = "https://tractuscorretora.com/og-image.png";
const queryClient = new QueryClient();
const sitemapUrls = new Map();
const llmsPages = [];
const buildDate = new Date().toISOString().slice(0, 10);
const normalizeSlug = (value) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
const vite = await createServer({
  root: projectRoot,
  appType: "custom",
  server: { middlewareMode: true },
  logLevel: "error",
});

try {
  const [{ canonicalUrl, SITE_NAME, TRACTUS_AREAS_SERVED, TRACTUS_CONTACT_EMAIL, TRACTUS_SERVICES }, appRoutesMod, commercialDataMod, blogDataMod, vidaPageMod, gtmMod, trackerMod, toasterMod, sonnerMod, tooltipMod, schemaMod] = await Promise.all([
    vite.ssrLoadModule("/src/lib/site.ts"),
    vite.ssrLoadModule("/src/AppRoutes.tsx"),
    vite.ssrLoadModule("/src/data/commercialPages.ts"),
    vite.ssrLoadModule("/src/data/blogPosts.ts"),
    vite.ssrLoadModule("/src/pages/VidaEmpresarialPage.tsx"),
    vite.ssrLoadModule("/src/components/GoogleTagManager.tsx"),
    vite.ssrLoadModule("/src/components/AnalyticsRouteTracker.tsx"),
    vite.ssrLoadModule("/src/components/ui/toaster.tsx"),
    vite.ssrLoadModule("/src/components/ui/sonner.tsx"),
    vite.ssrLoadModule("/src/components/ui/tooltip.tsx"),
    vite.ssrLoadModule("/src/lib/schema.ts"),
  ]);

  const AppRoutes = appRoutesMod.default;
  const commercialPages = commercialDataMod.commercialPages;
  const blogPosts = blogDataMod.blogPosts;
  const vidaCityConfigs = vidaPageMod.vidaCityConfigs;
  const GoogleTagManager = gtmMod.default;
  const AnalyticsRouteTracker = trackerMod.default;
  const Toaster = toasterMod.Toaster;
  const Sonner = sonnerMod.Toaster;
  const TooltipProvider = tooltipMod.TooltipProvider;
  const breadcrumbSchema = schemaMod.breadcrumbSchema;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function jsonLd(data) {
    return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("</", "<\\/")}</script>`;
  }

  function metaTag(name, content, attr = "name") {
    return `<meta ${attr}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`;
  }

  function replaceOrInsert(html, pattern, replacement) {
    if (pattern.test(html)) {
      return html.replace(pattern, replacement);
    }
    return html.replace("</head>", `${replacement}\n  </head>`);
  }

  function buildHead(meta) {
    const keywords = meta.keywords?.join(", ");
    const robots = meta.noindex ? "noindex,nofollow" : "index,follow";
    return {
      title: `<title>${escapeHtml(meta.title)}</title>`,
      description: metaTag("description", meta.description),
      keywords: keywords ? metaTag("keywords", keywords) : "",
      robots: metaTag("robots", robots),
      canonical: `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
      ogTitle: metaTag("og:title", meta.title, "property"),
      ogDescription: metaTag("og:description", meta.description, "property"),
      ogType: metaTag("og:type", meta.type || "website", "property"),
      ogUrl: metaTag("og:url", meta.canonical, "property"),
      ogSiteName: metaTag("og:site_name", SITE_NAME, "property"),
      ogImage: meta.image ? metaTag("og:image", meta.image, "property") : "",
      ogImageAlt: meta.imageAlt ? metaTag("og:image:alt", meta.imageAlt, "property") : "",
      twitterCard: metaTag("twitter:card", meta.image ? "summary_large_image" : "summary"),
      twitterTitle: metaTag("twitter:title", meta.title),
      twitterDescription: metaTag("twitter:description", meta.description),
      twitterSite: metaTag("twitter:site", "@tractuscorretora"),
      twitterImage: meta.image ? metaTag("twitter:image", meta.image) : "",
      twitterImageAlt: meta.imageAlt ? metaTag("twitter:image:alt", meta.imageAlt) : "",
      structuredData: meta.structuredData ? jsonLd(meta.structuredData) : "",
    };
  }

  function renderPage(location) {
    return renderToStaticMarkup(
      React.createElement(
        QueryClientProvider,
        { client: queryClient },
        React.createElement(
          TooltipProvider,
          null,
          React.createElement(GoogleTagManager, null),
          React.createElement(Toaster, null),
          React.createElement(Sonner, null),
          React.createElement(
            StaticRouter,
            { location },
            React.createElement(AnalyticsRouteTracker, null),
            React.createElement(AppRoutes, null),
          ),
        ),
      ),
    );
  }

  function writePage(meta, outputPath, routePath = meta.path) {
    let html = shell;
    const head = buildHead(meta);

    html = replaceOrInsert(html, /<title>.*?<\/title>/s, head.title);
    html = replaceOrInsert(html, /<meta name="description" content="[^"]*"\s*\/?>/, head.description);
    html = replaceOrInsert(html, /<meta name="keywords" content="[^"]*"\s*\/?>/, head.keywords || "");
    html = replaceOrInsert(html, /<meta name="robots" content="[^"]*"\s*\/?>/, head.robots);
    html = replaceOrInsert(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, head.canonical);
    html = replaceOrInsert(html, /<meta property="og:title" content="[^"]*"\s*\/?>/, head.ogTitle);
    html = replaceOrInsert(html, /<meta property="og:description" content="[^"]*"\s*\/?>/, head.ogDescription);
    html = replaceOrInsert(html, /<meta property="og:type" content="[^"]*"\s*\/?>/, head.ogType);
    html = replaceOrInsert(html, /<meta property="og:url" content="[^"]*"\s*\/?>/, head.ogUrl);
    html = replaceOrInsert(html, /<meta property="og:site_name" content="[^"]*"\s*\/?>/, head.ogSiteName);
    html = replaceOrInsert(html, /<meta property="og:image" content="[^"]*"\s*\/?>/, head.ogImage || "");
    html = replaceOrInsert(html, /<meta property="og:image:alt" content="[^"]*"\s*\/?>/, head.ogImageAlt || "");
    html = replaceOrInsert(html, /<meta name="twitter:card" content="[^"]*"\s*\/?>/, head.twitterCard);
    html = replaceOrInsert(html, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, head.twitterTitle);
    html = replaceOrInsert(html, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, head.twitterDescription);
    html = replaceOrInsert(html, /<meta name="twitter:site" content="[^"]*"\s*\/?>/, head.twitterSite);
    html = replaceOrInsert(html, /<meta name="twitter:image" content="[^"]*"\s*\/?>/, head.twitterImage || "");
    html = replaceOrInsert(html, /<meta name="twitter:image:alt" content="[^"]*"\s*\/?>/, head.twitterImageAlt || "");

    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, head.structuredData || "");
    if (!head.structuredData) {
      html = html.replace(/\n\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "");
    }

    const appHtml = rewriteAssets(renderPage(routePath));
    html = html.replace(/<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);

    if (!meta.noindex) {
      sitemapUrls.set(meta.canonical, { title: meta.title, path: meta.path });
      if (!llmsPages.some((page) => page.url === meta.canonical)) {
        llmsPages.push({ title: meta.title, url: meta.canonical, description: meta.description });
      }
    }

    const finalOutputPath = routePath === "/" ? outputPath : join(distDir, `${routePath.replace(/^\//, "")}.html`);
    mkdirSync(dirname(finalOutputPath), { recursive: true });
    writeFileSync(finalOutputPath, html);
  }

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "InsuranceAgency",
        name: SITE_NAME,
        description: siteDescription,
        url: canonicalUrl("/"),
        email: TRACTUS_CONTACT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-11-99824-9160",
          contactType: "WhatsApp",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sorocaba, São Paulo e Guarulhos",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: TRACTUS_AREAS_SERVED,
        serviceType: TRACTUS_SERVICES,
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: canonicalUrl("/"),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") }],
      },
    ],
  };

  writePage(
    {
      path: "/",
      title: "Tractus Corretora de Seguros | Saúde empresarial, benefícios e seguros corporativos",
      description:
        "Corretora consultiva em Sorocaba, São Paulo e Guarulhos especializada em plano de saúde empresarial, benefícios corporativos, seguro de vida, seguro empresarial e análise gratuita de apólice.",
      canonical: canonicalUrl("/"),
      keywords: [
        "corretora de seguros Sorocaba",
        "corretora de seguros Guarulhos",
        "corretora de seguros São Paulo",
        "plano de saúde empresarial Sorocaba",
        "benefícios corporativos",
        "seguro de vida empresarial",
        "seguro empresarial",
      ],
      image: ogImage,
      imageAlt: "Tractus Corretora de Seguros",
      structuredData: homeStructuredData,
    },
    join(distDir, "index.html"),
    "/",
  );

  writePage(
    {
      path: "/troca-plano-saude",
      title: "Troca de plano de saúde | Avalie opções com a Tractus",
      description: "Seu plano aumentou, nega atendimentos ou já não oferece a rede que você precisa? Agende uma reunião com a Tractus para avaliar alternativas de plano de saúde.",
      canonical: canonicalUrl("/troca-plano-saude"),
      keywords: ["troca de plano de saúde", "mudar plano de saúde", "reajuste plano de saúde", "plano de saúde empresarial", "corretora de plano de saúde"],
      image: "https://tractuscorretora.com/og-saude-landing.jpg",
      imageAlt: "Pessoa conversando com especialista sobre plano de saúde",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Troca de plano de saúde",
        description: "Landing de avaliação consultiva para troca de plano de saúde.",
        url: canonicalUrl("/troca-plano-saude"),
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: canonicalUrl("/") },
        about: { "@type": "Service", name: "Análise consultiva de plano de saúde" },
      },
    },
    join(distDir, "troca-plano-saude", "index.html"),
    "/troca-plano-saude",
  );

  writePage(
    {
      path: "/blog",
      title: "Blog Tractus | Seguros, saúde empresarial e benefícios",
      description:
        "Artigos da Tractus sobre plano de saúde empresarial, benefícios corporativos, vale-transporte, vale-refeição, vale-alimentação e seguros.",
      canonical: canonicalUrl("/blog"),
      keywords: ["blog seguros empresariais", "plano de saúde empresarial", "benefícios corporativos", "corretora de seguros Sorocaba"],
      image: ogImage,
      imageAlt: "Blog Tractus",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Blog",
            name: "Blog Tractus",
            url: canonicalUrl("/blog"),
            description: "Conteúdos sobre seguros, saúde empresarial e benefícios corporativos para empresas em São Paulo e Sorocaba.",
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              url: canonicalUrl(`/blog/${post.slug}`),
              datePublished: post.isoDate,
              dateModified: post.isoDate,
              author: { "@type": "Organization", name: SITE_NAME },
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/blog") },
            ],
          },
        ],
      },
    },
    join(distDir, "blog", "index.html"),
    "/blog",
  );

  writePage(
    {
      path: "/analise-gratuita-apolice",
      title: "Análise gratuita de apólice | Tractus Corretora de Seguros",
      description:
        "Solicite uma análise gratuita da sua apólice, plano de saúde empresarial, seguro ou benefício corporativo. A Tractus orienta pelo WhatsApp e pede os documentos só quando necessário.",
      canonical: canonicalUrl("/analise-gratuita-apolice"),
      keywords: [
        "análise gratuita de apólice",
        "revisar apólice de seguro empresarial",
        "reduzir custo plano de saúde empresarial",
        "comparar seguro empresarial",
        "Tractus Corretora",
      ],
      image: ogImage,
      imageAlt: "Análise gratuita de apólice Tractus",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Análise gratuita de apólice e benefícios empresariais",
            provider: { "@type": "InsuranceAgency", name: SITE_NAME, url: canonicalUrl("/") },
            areaServed: "São Paulo",
            serviceType: "Análise consultiva de apólice, seguros e benefícios corporativos",
            url: canonicalUrl("/analise-gratuita-apolice"),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Análise gratuita", item: canonicalUrl("/analise-gratuita-apolice") },
            ],
          },
        ],
      },
    },
    join(distDir, "analise-gratuita-apolice", "index.html"),
    "/analise-gratuita-apolice",
  );

  for (const page of commercialPages) {
    writePage(
      {
        path: `/${page.slug}`,
        title: page.seoTitle,
        description: page.seoDescription,
        canonical: canonicalUrl(`/${page.slug}`),
        keywords: page.keywords,
        image: ogImage,
        imageAlt: page.product,
        structuredData: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: page.product,
              description: page.seoDescription,
              provider: {
                "@type": "InsuranceAgency",
                name: SITE_NAME,
                url: canonicalUrl("/"),
                email: TRACTUS_CONTACT_EMAIL,
                telephone: "+55-11-99824-9160",
              },
              areaServed: ["Sorocaba", "São Paulo", "Interior de São Paulo", "Brasil"],
              serviceType: page.product,
              url: canonicalUrl(`/${page.slug}`),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") },
                { "@type": "ListItem", position: 2, name: page.product, item: canonicalUrl(`/${page.slug}`) },
              ],
            },
          ],
        },
      },
      join(distDir, page.slug, "index.html"),
      `/${page.slug}`,
    );
  }

  const cityPages = [
    { city: vidaCityConfigs.sorocaba, slug: "seguro-de-vida-empresarial-sorocaba" },
    { city: vidaCityConfigs["sao-paulo"], slug: "seguro-de-vida-empresarial-sao-paulo" },
    { city: vidaCityConfigs.guarulhos, slug: "seguro-de-vida-empresarial-guarulhos" },
  ];

  for (const { city, slug } of cityPages) {
    const canonical = canonicalUrl(`/${slug}`);
    writePage(
      {
        path: `/${slug}`,
        title: `Seguro de Vida Empresarial em ${city.name} | Tractus Corretora`,
        description: `Seguro de vida empresarial e vida em grupo em ${city.name}. Cotação, CCT, revisão de apólice, coberturas e implantação para ${city.regionalContext}.`,
        canonical,
        keywords: [
          `seguro de vida empresarial ${city.name}`,
          `seguro de vida em grupo ${city.name}`,
          `seguro de vida CCT ${city.name}`,
          `vida em grupo para empresas ${city.name}`,
          "seguro de vida para colaboradores",
        ],
        image: ogImage,
        imageAlt: `Seguro de Vida Empresarial em ${city.name}`,
        structuredData: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `Seguro de Vida Empresarial / Vida em Grupo em ${city.name}`,
              description: `Seguro de vida empresarial e vida em grupo em ${city.name}. Cotação, CCT, revisão de apólice e implantação.`,
              provider: {
                "@type": "InsuranceAgency",
                name: SITE_NAME,
                url: canonicalUrl("/"),
                telephone: "+55-11-99824-9160",
                email: TRACTUS_CONTACT_EMAIL,
              },
              areaServed: [city.name, ...city.nearby, "São Paulo"],
              serviceType: "Seguro de vida em grupo para empresas",
              url: canonical,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") },
                { "@type": "ListItem", position: 2, name: `Seguro de vida empresarial em ${city.name}`, item: canonical },
              ],
            },
          ],
        },
      },
      join(distDir, slug, "index.html"),
      `/${slug}`,
    );
  }

  writePage(
    {
      path: "/vida-empresarial",
      title: "Seguro de Vida Empresarial | Tractus Corretora",
      description: "Seguro de vida empresarial para empresas. Cotação, revisão de apólice, CCT e implantação para equipes em Sorocaba, São Paulo e região.",
      canonical: canonicalUrl("/vida-empresarial"),
      keywords: ["seguro de vida empresarial", "vida em grupo empresas", "seguro vida CCT", "corretora de seguros corporativos"],
      image: ogImage,
      imageAlt: "Seguro de Vida Empresarial Tractus",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "Seguro de Vida Empresarial",
            description: "Seguro de vida empresarial e vida em grupo para empresas.",
            provider: { "@type": "InsuranceAgency", name: SITE_NAME, url: canonicalUrl("/"), email: TRACTUS_CONTACT_EMAIL },
            areaServed: ["Sorocaba", "São Paulo", "Guarulhos", "Interior de São Paulo"],
            serviceType: "Seguro de vida em grupo para empresas",
            url: canonicalUrl("/vida-empresarial"),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: canonicalUrl("/") },
              { "@type": "ListItem", position: 2, name: "Seguro de Vida Empresarial", item: canonicalUrl("/vida-empresarial") },
            ],
          },
        ],
      },
    },
    join(distDir, "vida-empresarial", "index.html"),
    "/vida-empresarial",
  );

  const redirects = [
    ["/blog/porto-saúde-linha-pro-sorocaba-oportunidade", "/blog/porto-saude-linha-pro-sorocaba-oportunidade", "301"],
    ["/blog/porto-saúde-linha-pro-sorocaba-oportunidade/", "/blog/porto-saude-linha-pro-sorocaba-oportunidade", "301"],
    ["/blog/benefícios-pluxee-vale-refeição-alimentação-flexivel", "/blog/beneficios-pluxee-vale-refeicao-alimentacao-flexivel", "301"],
    ["/blog/benefícios-pluxee-vale-refeição-alimentação-flexivel/", "/blog/beneficios-pluxee-vale-refeicao-alimentacao-flexivel", "301"],
    ["/blog/seguro-para-transportadoras-roubo-carga-frota", "/blog/seguro-transportadoras-carga-frota-rctrc-rcfdc", "301"],
    ["/blog/seguro-para-transportadoras-roubo-carga-frota/", "/blog/seguro-transportadoras-carga-frota-rctrc-rcfdc", "301"],
    ["/2022/*", "/", "301"],
    ["/author/*", "/", "301"],
    ["/category/*", "/", "301"],
    ["/tag/*", "/", "301"],
  ];

  for (const post of blogPosts) {
    const canonical = canonicalUrl(`/blog/${post.slug}`);
    writePage(
      {
        path: `/blog/${post.slug}`,
        title: `${post.metaTitle} | Tractus Corretora`,
        description: post.description,
        canonical,
        keywords: post.keywords,
        type: "article",
        image: post.ogImage || ogImage,
        imageAlt: post.heroAlt,
        structuredData: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.isoDate,
              dateModified: post.isoDate,
              image: post.ogImage || ogImage,
              author: { "@type": "Organization", name: SITE_NAME },
              publisher: { "@type": "Organization", name: SITE_NAME, url: canonicalUrl("/") },
              mainEntityOfPage: canonical,
            },
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
            breadcrumbSchema([
              { name: "Início", url: canonicalUrl("/") },
              { name: "Blog", url: canonicalUrl("/blog") },
              { name: post.title, url: canonical },
            ]),
          ],
        },
      },
      join(distDir, "blog", post.slug, "index.html"),
      `/blog/${post.slug}`,
    );

    sitemapUrls.set(canonical, { title: post.title, path: `/blog/${post.slug}` });

    for (const alias of post.aliases || []) {
      if (normalizeSlug(alias) === normalizeSlug(post.slug)) continue;
      redirects.unshift([`/blog/${alias}`, `/blog/${post.slug}`, "301"]);
      redirects.unshift([`/blog/${alias}/`, `/blog/${post.slug}`, "301"]);
    }
  }

  for (const { path } of sitemapUrls.values()) {
    if (path !== "/") {
      redirects.push([`${path}/`, path, "301"]);
    }
  }

  writePage(
    {
      path: "/404",
      title: "Página não encontrada | Tractus Corretora",
      description: "A página solicitada não foi encontrada.",
      canonical: canonicalUrl("/404"),
      keywords: ["404", "Tractus Corretora"],
      image: ogImage,
      imageAlt: "Página não encontrada",
      type: "website",
      noindex: true,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            name: "Página não encontrada",
            url: canonicalUrl("/404"),
            isPartOf: { "@type": "WebSite", name: SITE_NAME, url: canonicalUrl("/") },
          },
        ],
      },
    },
    join(distDir, "404.html"),
    "/404",
  );

  const sitemapEntries = [...sitemapUrls.values()];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries
    .map(
      ({ path }) =>
        `  <url><loc>${escapeHtml(canonicalUrl(path))}</loc><lastmod>${buildDate}</lastmod><changefreq>weekly</changefreq><priority>${path === "/" ? "1.00" : path.startsWith("/blog/") ? "0.86" : path === "/blog" ? "0.90" : path === "/troca-plano-saude" ? "0.96" : path === "/analise-gratuita-apolice" ? "0.91" : "0.88"}</priority></url>`,
    )
    .join("\n")}\n</urlset>\n`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemapXml);

  const llmsTxt = [
    "# Tractus Corretora",
    "",
    siteDescription,
    "",
    "Canonical pages:",
    ...llmsPages.map((page) => `- ${page.title} — ${page.url}`),
    "",
    "Preferred contact:",
    `- Email: ${TRACTUS_CONTACT_EMAIL}`,
  ].join("\n");
  writeFileSync(join(distDir, "llms.txt"), llmsTxt + "\n");

  writeFileSync(join(distDir, "_redirects"), `${redirects.map(([from, to, code]) => `${from} ${to} ${code}`).join("\n")}\n`);
  writeFileSync(
    join(distDir, "_headers"),
    `/*\n  Content-Signal: search=yes,ai-input=yes,ai-train=no,use=reference\n  X-Robots-Tag: index,follow\n  Cache-Control: public, max-age=0, must-revalidate\n`,
  );

  console.log(`Prerendered ${commercialPages.length + blogPosts.length + cityPages.length + 4} static HTML routes into ${distDir}`);
} finally {
  await vite.close();
}
