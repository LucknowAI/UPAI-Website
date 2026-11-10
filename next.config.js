/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    // The old hero button pointed to /contact, which never existed.
    return [{ source: '/contact', destination: '/contact_us', permanent: true }];
  },
  images: {
    // Serve images as they are, without the /_next/image optimizer.
    // Next.js 14 has unpatched security advisories in the image optimizer
    // (including remote code execution), and the site's images are already
    // compressed in public/. Turn this back on after upgrading to Next 15.5+.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn-images-1.medium.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
