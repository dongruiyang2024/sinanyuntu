import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

function fileUrl(path) {
  return new URL(path, projectRoot);
}

async function readProjectFile(path) {
  return readFile(fileUrl(path), "utf8");
}

test("site source includes the approved pages and navigation model", async () => {
  const page = await readProjectFile("app/page.tsx");
  const site = await readProjectFile("data/site.ts");

  for (const section of [
    "Hero",
    "CapabilityMap",
    "CustomerCases",
    "Footer",
  ]) {
    assert.match(page, new RegExp(section));
  }

  for (const navLabel of ["首页", "产品服务", "企业案例", "关于我们"]) {
    assert.match(site, new RegExp(navLabel));
  }

  for (const route of [
    "/products/opportunity-radar",
    "/products/content-engine",
    "/products/customer-touch",
    "/products/growth-loop",
    "/cases",
    "/about",
  ]) {
    assert.match(site, new RegExp(route));
  }
});

test("header presents the logo as a first-viewport brand signal", async () => {
  const header = await readProjectFile("components/Header.tsx");

  assert.match(header, /h-\[82px\]/);
  assert.match(header, /sm:h-24/);
  assert.match(header, /className="h-12 w-auto sm:h-16"/);
});

test("product, case, and about routes exist", async () => {
  const productPage = await readProjectFile("app/products/[slug]/page.tsx");
  const casesPage = await readProjectFile("app/cases/page.tsx");
  const aboutPage = await readProjectFile("app/about/page.tsx");

  assert.match(productPage, /generateStaticParams/);
  assert.match(productPage, /ProductPage/);
  assert.match(casesPage, /企业案例/);
  assert.match(aboutPage, /关于司南云图/);
});

test("footer exposes configurable external solution links", async () => {
  const site = await readProjectFile("data/site.ts");
  const footer = await readProjectFile("components/Footer.tsx");

  for (const solution of ["软件增长方案", "制造出海方案", "跨境内容方案"]) {
    assert.match(site, new RegExp(solution));
  }

  assert.match(site, /solutionLinks/);
  assert.match(footer, /target="_blank"/);
  assert.match(footer, /rel="noreferrer"/);
});

test("brand assets are available to the Next.js public directory", async () => {
  for (const asset of [
    "public/brand/sinan-cloudmap-logo-horizontal.svg",
    "public/brand/sinan-cloudmap-mark.svg",
    "public/brand/sinan-cloudmap-app-icon.svg",
    "app/icon.svg",
  ]) {
    await access(fileUrl(asset));
  }

  const logo = await readProjectFile("public/brand/sinan-cloudmap-logo-horizontal.svg");
  assert.match(logo, /司南云图横版 Logo/);
});
