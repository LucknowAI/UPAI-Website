import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uttar Pradesh AI Labs",
  description: "Building the future of AI innovation and talent in Uttar Pradesh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0d1117] text-white`}>
        {children}
      </body>
    </html>
  )
}

