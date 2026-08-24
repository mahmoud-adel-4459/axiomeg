import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "" ? `${siteConfig.name} | ${title}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phones,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "8A/2, El Laselky Division, New Maadi",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Free Zone Suez",
      addressLocality: "Suez",
      addressRegion: "Suez Governorate",
      addressCountry: "EG",
    },
  ],
  description: siteConfig.description,
};
