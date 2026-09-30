import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/piscines-spa-bien-etre", destination: "/piscines", permanent: true },
      { source: "/fontaines-bassins", destination: "/fontaines-maroc", permanent: true },
      { source: "/traitement-eaux-equipements", destination: "/traitement-piscine-maroc", permanent: true },
      { source: "/installations-techniques", destination: "/local-technique-piscine", permanent: true },
      { source: "/realisations-contact", destination: "/realisations", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
