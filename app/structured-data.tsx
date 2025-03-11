export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UP AI Labs",
    alternateName: "Uttar Pradesh AI Labs",
    url: "https://upai.org",
    logo: "https://upai.org/logo.png",
    sameAs: [
      "https://twitter.com/UPAILabs",
      "https://linkedin.com/company/upai-labs",
      "https://github.com/upai-labs"
    ],
    description: "Leading AI innovation, research, and education in Uttar Pradesh. Join our community of AI researchers, developers, and industry experts.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "general",
      email: "contact@upai.org"
    },
    keywords: "AI, Artificial Intelligence, Machine Learning, Deep Learning, UP AI, Uttar Pradesh Technology, AI Research, AI Education",
    areaServed: {
      "@type": "State",
      name: "Uttar Pradesh"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 