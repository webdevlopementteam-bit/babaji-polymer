// Builds the group site and the four subdomain sites into deploy/<domain>/.
//   npm run build          -> all five
//   npm run build:food     -> one (main, food, polymer, polysheet, caps)
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const sites = {
  main: "babajigroup.com",
  food: "food-products.babajigroup.com",
  polymer: "polymer-compound.babajigroup.com",
  polysheet: "polysheet.babajigroup.com",
  caps: "plastic-caps.babajigroup.com",
};

// Pages that live on subdomains, removed from the main output.
const subsitePages = ["food-products", "pvc-compounds", "polysheets", "plastic-caps"];
// Shown only when the mobile menu opens, so they never appear in the exported HTML.
const menuImages = ["/images/group-food.webp", "/images/granules.webp", "/images/poly/sheets-rolls.webp", "/images/home/cap-handle.webp"];

const IMAGE = /\/images\/[\w./-]+\.(?:webp|png|jpe?g|svg)/g;

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

function pruneImages(dir, key) {
  const scan = key === "main" ? /\.(html|txt|js|css)$/ : /\.(html|txt|css)$/;
  const used = new Set(key === "main" ? [] : menuImages);
  const images = path.join(dir, "images");
  for (const file of walk(dir)) {
    if (scan.test(file) && !file.startsWith(images)) {
      for (const m of fs.readFileSync(file, "utf8").match(IMAGE) ?? []) used.add(m);
    }
  }
  for (const file of walk(images)) {
    const url = `/${path.relative(dir, file).split(path.sep).join("/")}`;
    if (!used.has(url)) fs.rmSync(file);
  }
  for (const m of used) if (!fs.existsSync(path.join(dir, m))) console.warn(`  missing image: ${m}`);
}

const requested = process.argv.slice(2);
for (const key of requested.length ? requested : Object.keys(sites)) {
  if (!sites[key]) throw new Error(`Unknown site: ${key}`);
  const target = path.join("deploy", sites[key]);
  console.log(`\nBuilding ${sites[key]} ...`);
  // .next/dev belongs to a running `npm run dev`, leave it alone.
  for (const e of fs.existsSync(".next") ? fs.readdirSync(".next") : []) {
    if (e !== "dev") fs.rmSync(path.join(".next", e), { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
  }
  fs.rmSync("out", { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
  execSync("npx next build", { stdio: "inherit", env: { ...process.env, SITE: key } });

  if (key === "main") for (const p of subsitePages) fs.rmSync(path.join("out", p), { recursive: true, force: true });
  pruneImages("out", key);

  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync("deploy", { recursive: true });
  fs.cpSync("out", target, { recursive: true });
  fs.rmSync("out", { recursive: true, force: true, maxRetries: 10, retryDelay: 300 });
  console.log(`Done: ${target}`);
}
