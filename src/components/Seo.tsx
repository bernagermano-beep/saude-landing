import { useEffect } from "react";
import { SITE_NAME } from "@/lib/site";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const setMeta = (selector: string, attribute: "content" | "href", value: string) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
};

const faviconLinks = [
  { rel: "icon", type: "image/png", href: "/favicon.png?v=tractus-20260713" },
  { rel: "shortcut icon", href: "/favicon.ico?v=tractus-20260713" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=tractus-20260713" },
];

const ensureFavicons = () => {
  document.head
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]')
    .forEach((element) => element.remove());

  faviconLinks.forEach(({ rel, type, href }) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (type) {
      link.type = type;
    }
    document.head.appendChild(link);
  });
};

const Seo = ({ title, description, canonical, keywords = [], type = "website", image, imageAlt, structuredData }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    ensureFavicons();

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords.join(", "));
    setMeta('meta[name="robots"]', "content", "index,follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:card"]', "content", image ? "summary_large_image" : "summary");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:site"]', "content", "@tractuscorretora");
    setMeta('link[rel="canonical"]', "href", canonical);

    if (image) {
      setMeta('meta[property="og:image"]', "content", image);
      setMeta('meta[name="twitter:image"]', "content", image);
    }
    if (imageAlt) {
      setMeta('meta[property="og:image:alt"]', "content", imageAlt);
      setMeta('meta[name="twitter:image:alt"]', "content", imageAlt);
    }

    const existing = document.getElementById("dynamic-structured-data");
    existing?.remove();

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "dynamic-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [canonical, description, image, imageAlt, keywords, structuredData, title, type]);

  return null;
};

export default Seo;
