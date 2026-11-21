// SITE picks which site is built: main (default), food, polymer, polysheet or caps.
// Subdomain builds use only the route files named *.<site>.js in src/app.
const site = process.env.SITE || "main";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: scripts/build-sites.mjs moves each build from /out into /deploy.
  output: "export",
  // Emit /about/index.html instead of /about.html so plain Apache/Nginx/cPanel hosting serves clean URLs.
  trailingSlash: true,
  images: {
    // The built-in image optimizer needs a Node server; static export serves the files from /public as-is.
    unoptimized: true,
  },
  env: { NEXT_PUBLIC_SITE: site },
  ...(site === "main" ? {} : { pageExtensions: [`${site}.js`] }),
};

export default nextConfig;
