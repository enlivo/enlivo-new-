import type { Metadata } from "next";

export const siteUrl = "https://enlivo.com";
export const siteName = "Enlivo Global Tech Solutions";
export const legalName = "Enlivo Global Tech Solutions Private Limited";
export const contactEmail = "contact@enlivotechnologies.com";
export const ogImage = "/references/hero-main.png";
export const absoluteOgImage = `${siteUrl}${ogImage}`;

export function routeUrl(path = "/") {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: routeUrl(path),
    },
    openGraph: {
      title,
      description,
      url: routeUrl(path),
      siteName,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1216,
          height: 880,
          alt: "Enlivo digital systems interface preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: legalName,
  legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
  image: absoluteOgImage,
  email: contactEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contactEmail,
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: legalName,
  url: siteUrl,
  image: absoluteOgImage,
  logo: `${siteUrl}/logo/logo.png`,
  email: contactEmail,
  priceRange: "$$",
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/services#service`,
  name: "Website development, app development, UI UX design, AI automation, and digital transformation services",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Website development company",
    "App development company",
    "UI UX design company",
    "AI automation services",
    "Digital transformation systems",
  ],
  url: `${siteUrl}/services`,
  description:
    "Enlivo designs and engineers websites, mobile product experiences, UI UX systems, AI automation workflows, and digital transformation systems for businesses across India.",
};

export const trainingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}/careers#internship-training`,
  name: "Internship, AWS training, cloud and DevOps training programs",
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "AWS training",
    "Internship program",
    "Cloud and DevOps training",
    "Web development internship",
    "UI UX internship",
  ],
  url: `${siteUrl}/careers`,
  description:
    "Enlivo offers internship programs and guided training exposure in web development, UI UX, AI automation, AWS, cloud, Linux, and DevOps workflows.",
};
