/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static HTML export
  distDir: 'out',    // Output directory
  eslint: {
    ignoreDuringBuilds: true, // Disable linting during builds
  },
  experimental: {
    optimizePackageImports: ['@heroui/link', '@heroui/button', 'react', 'react-dom'],
  },
  env: {
    NEXT_PUBLIC_SITE_DOMAIN: 'onlydowns.xyz',
    NEXT_PUBLIC_SITE_URL: 'https://onlydowns.xyz',
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    domains: ['onlydowns.xyz'],
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
