export const SITE_URL = "https://evergreenfieldmontessori.com"; // TODO: update to the real domain when available
export const SITE_NAME = "Evergreenfield Montessori School";
export const OG_IMAGE = `${SITE_URL}/og-image.png`; // TODO: add og-image.png to public/
export const PHONE_MAIN = "+233531234567"; // fictional demo number
export const PHONE_DISPLAY = "053 123 4567"; // fictional demo number
export const WHATSAPP_URL = "https://wa.me/233531234567"; // fictional demo number
export const SITE_EMAIL = "info@evergreenfieldmontessori.edu.gh"; // fictional demo email
export const MOTTO = "Knowledge, Scholarship, Illumination";
export const ADDRESS_SHORT = "Plot 12, Mango Avenue, Ablekuma Fan-Milk, Accra, Ghana"; // fictional demo address
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mango+Avenue+Ablekuma+Fan-Milk+Accra";
export const HOURS_SHORT = "Mon–Fri · 6:00am–5:00pm · Sat–Sun Closed";

export function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function seoPage(opts: { title: string; description: string; path: string }) {
  const url = pageUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_GH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#041a36" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  slogan: MOTTO,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  email: SITE_EMAIL,
  telephone: PHONE_MAIN,
  foundingDate: "2012",
  founder: [{ "@type": "Person", name: "Grace Owusu" }],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 12, Mango Avenue, Ablekuma Fan-Milk",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  location: [
    {
      "@type": "Place",
      name: "Evergreenfield Montessori School — Ablekuma Fan-Milk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot 12, Mango Avenue, Ablekuma Fan-Milk",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      telephone: PHONE_MAIN,
    },
  ],
  openingHours: "Mo-Fr 06:00-17:00",
  sameAs: [
    "https://web.facebook.com/evergreenfieldmontsch",
    "https://www.instagram.com/evergreenfieldmontsch/",
    "https://www.tiktok.com/@evergreenfieldmontsch",
    "https://twitter.com/evergreenfield1",
    "https://www.youtube.com/@evergreenfieldmontsch",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages does Evergreenfield Montessori School accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome children from 18 months to 15 years — from Creche to JHS — call 053 123 4567 and we will help with class placement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission forms are picked up from the school premises. Submit the completed form with your child's birth certificate and health/immunization cards, then book a school visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour the campus before enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Appointments may be booked by phone — call 053 123 4567 — and we will arrange a weekday visit.",
      },
    },
    {
      "@type": "Question",
      name: "What are the school hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "School runs Monday to Friday, 6:00 a.m. to 5:00 p.m. Saturday and Sunday are closed.",
      },
    },
    {
      "@type": "Question",
      name: "How are fees structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registration is paid once per child, and tuition is charged each term. The school year has three terms. Contact the administrator for the current fee schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Evergreenfield Montessori School located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are at Plot 12, Mango Avenue, Ablekuma Fan-Milk, Accra, Ghana.",
      },
    },
  ],
};

const breadcrumbLabels: Record<string, string> = {
  "/about": "About",
  "/programs": "Programs & Curriculum",
  "/admissions": "Admissions",
  "/campus": "Campus & Facilities",
  "/team": "Meet the Team",
  "/gallery": "Photo Gallery",
  "/tour": "School Tour",
  "/contact": "Contact Admissions",
};

export function breadcrumbSchema(pathname: string) {
  const label = breadcrumbLabels[pathname];
  if (!label) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
      { "@type": "ListItem", position: 2, name: label, item: pageUrl(pathname) },
    ],
  };
}
