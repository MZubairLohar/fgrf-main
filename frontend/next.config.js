/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-fgrf.vercel.app/:path*",
      },
    ];
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname: "/v0/b/fgrf-dc455.appspot.com/o/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**", // JPEG format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**", // JPEG format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**", // WebP format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**", // PNG format
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/fgrf-dc455.appspot.com/o/**", // PNG format
      },
      {
        protocol: "https",
        hostname: "api.paypal.com",
        port: "",
        pathname: "/v2/checkout/orders/**",
      },
      // Add more patterns for other formats as needed
    ],
  },
  // {
  //   protocol: "https",
  //   hostname: "lh3.googleusercontent.com",
  //   port: "",
  //   pathname: "/**",
  // },
};

module.exports = nextConfig;
