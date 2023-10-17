/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production"
      ? "/ra-hooks-context-authentication-client"
      : "",
};

module.exports = nextConfig;
