// Organisation details for search engines (schema.org JSON-LD).
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "UPAI Labs Foundation",
    alternateName: ["UPAI Labs", "Uttar Pradesh AI Labs"],
    url: "https://upailabs.org",
    description:
      "A Section 8 not-for-profit company building AI talent, open source and research in Uttar Pradesh, starting with Lucknow AI Labs.",
    foundingDate: "2025-03-29",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general enquiries",
      email: "hello@upailabs.org",
    },
    areaServed: { "@type": "State", name: "Uttar Pradesh" },
    sameAs: [
      "https://lucknowai.github.io",
      "https://github.com/LucknowAI",
      "https://www.linkedin.com/company/lucknow-ai-labs/",
      "https://x.com/AILucknow",
      "https://www.youtube.com/@lucknowailabs",
      "https://www.commudle.com/communities/upai-labs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
