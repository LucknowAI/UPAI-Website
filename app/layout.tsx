import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const DESCRIPTION =
  "UPAI Labs Foundation is a Section 8 not-for-profit building AI talent, open source and research in Uttar Pradesh, starting with Lucknow AI Labs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://upailabs.org"),
  title: "UPAI Labs | Uttar Pradesh AI Labs Foundation",
  description: DESCRIPTION,
  applicationName: "UPAI Labs",
  authors: [{ name: "UPAI Labs Foundation" }],
  openGraph: {
    title: "UPAI Labs | Uttar Pradesh AI Labs Foundation",
    description: DESCRIPTION,
    url: "https://upailabs.org",
    siteName: "UPAI Labs",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/team.jpg", width: 1600, height: 823, alt: "The UPAI Labs team" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AILucknow",
    title: "UPAI Labs | Uttar Pradesh AI Labs Foundation",
    description: DESCRIPTION,
    images: ["/team.jpg"],
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0d1117] text-white`}>
        {children}
      </body>
    </html>
  )
}

