import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TRACTUS_AREAS_SERVED,
  TRACTUS_CONTACT_EMAIL,
  TRACTUS_SERVICES,
  TRACTUS_SOCIALS,
} from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: SITE_NAME,
  description: SITE_TAGLINE,
  url: SITE_URL,
  email: TRACTUS_CONTACT_EMAIL,
  telephone: "+55-11-99824-9160",
  areaServed: [...TRACTUS_AREAS_SERVED],
  serviceType: [...TRACTUS_SERVICES],
  sameAs: [TRACTUS_SOCIALS.facebook, TRACTUS_SOCIALS.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-99824-9160",
    contactType: "WhatsApp",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const insuranceAgencySchema = organizationSchema;
