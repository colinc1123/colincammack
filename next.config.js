/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "/blog": ["./app/blog/posts/**/*"],
    "/blog/[slug]": ["./app/blog/posts/**/*"],
    "/writing": ["./app/writing/posts/**/*"],
    "/writing/[slug]": ["./app/writing/posts/**/*"],
  },
};

module.exports = nextConfig;