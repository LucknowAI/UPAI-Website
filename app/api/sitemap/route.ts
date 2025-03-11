import { NextResponse } from 'next/server'

export async function GET() {
  // Generate dynamic sitemap based on your content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Dynamically generated URLs -->
    </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 