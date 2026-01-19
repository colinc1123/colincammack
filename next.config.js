/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/blog": ["./app/blog/posts/**/*"],
    "/blog/[slug]": ["./app/blog/posts/**/*"],
  },
};

module.exports = nextConfig;
