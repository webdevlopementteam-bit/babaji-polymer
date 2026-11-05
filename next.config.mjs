/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes the full site to /out for any static host.
  output: "export",
  // Emit /about/index.html instead of /about.html so plain Apache/Nginx/cPanel hosting serves clean URLs.
  trailingSlash: true,
  images: {
    // The built-in image optimizer needs a Node server; static export serves the files from /public as-is.
    unoptimized: true,
  },
};

export default nextConfig;
