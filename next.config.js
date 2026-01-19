/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/blog": ["./app/blog/posts/**/*"],
      "/blog/[slug]": ["./app/blog/posts/**/*"],
    },
  },
};

module.exports = nextConfig;
