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

test("header keeps a compact nav height while scaling the logo", async () => {
  const header = await readProjectFile("components/Header.tsx");

  assert.match(header, /h-\[88px\]/);
  assert.match(header, /sm:h-24/);
  assert.match(header, /className="h-auto w-\[224px\] sm:w-96"/);
  assert.doesNotMatch(header, /h-\[104px\]|sm:h-36|sm:h-28/);
});

test("header contact action uses brand styling instead of a black fill", async () => {
  const header = await readProjectFile("components/Header.tsx");

  assert.match(header, /border-brand-blue/);
  assert.match(header, /text-brand-blue/);
  assert.match(header, /hover:bg-brand-blue/);
  assert.doesNotMatch(header, /bg-brand-ink/);
});

test("header uses wider nav spacing and a custom product chevron", async () => {
  const header = await readProjectFile("components/Header.tsx");

  assert.match(header, /gap-12/);
  assert.match(header, /xl:gap-16/);
  assert.match(header, /group relative py-8/);
  assert.match(header, /<svg/);
  assert.match(header, /M6 9l6 6 6-6/);
  assert.doesNotMatch(header, /⌄/);
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

test("contact email uses the sinanyuntu.com domain across source contact points", async () => {
  for (const path of ["data/site.ts", "data/home.ts"]) {
    const source = await readProjectFile(path);

    assert.match(source, /contact@sinanyuntu\.com/);
    assert.doesNotMatch(source, /sinancloudmap\.com/);
  }

  for (const path of [
    "components/Header.tsx",
    "components/Hero.tsx",
    "components/ContactSection.tsx",
    "app/products/[slug]/page.tsx",
  ]) {
    const source = await readProjectFile(path);

    assert.match(source, /contact\.email/);
    assert.doesNotMatch(source, /sinancloudmap\.com/);
  }
});

test("about page includes a recruiting section for AI roles", async () => {
  const site = await readProjectFile("data/site.ts");
  const aboutPage = await readProjectFile("app/about/page.tsx");

  for (const role of ["AI 运营", "AI 工程师", "AI 销售"]) {
    assert.match(site, new RegExp(role));
  }

  assert.match(site, /recruitingRoles/);
  assert.match(aboutPage, /recruitingRoles\.map/);
  assert.match(aboutPage, /加入司南云图/);
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

test("footer includes stronger brand, QR placeholders, and compliance records", async () => {
  const site = await readProjectFile("data/site.ts");
  const footer = await readProjectFile("components/Footer.tsx");

  assert.match(site, /footerTagline/);
  assert.match(site, /外贸 AI 增长系统/);
  assert.match(footer, /w-\[320px\]/);
  assert.match(footer, /py-7/);
  assert.match(footer, /sm:flex-row/);
  assert.match(footer, /footerTagline/);
  assert.doesNotMatch(
    footer,
    /把机会识别、商品表达、客户触达与增长复盘连接成可执行的业务云图/,
  );
  assert.doesNotMatch(site, /\bQR\b/);
  assert.doesNotMatch(footer, /\bQR\b/);

  for (const channel of ["企业公众号", "企业微信", "飞书"]) {
    assert.match(site, new RegExp(channel));
  }

  assert.match(site, /socialChannels/);
  assert.match(site, /complianceRecords/);
  assert.match(site, /legalLinks/);
  assert.match(site, /Copyright © 2026/);
  assert.match(footer, /socialChannels\.map/);
  assert.match(footer, /complianceRecords\.map/);
  assert.match(footer, /legalLinks\.map/);
  assert.match(footer, /h-16 w-16/);
  assert.match(footer, /二维码占位/);
  assert.doesNotMatch(footer, />备案信息</);
  assert.match(footer, /justify-between/);
  assert.match(footer, /md:flex-row/);
  assert.match(footer, /flex-wrap/);
  for (const link of ["隐私政策", "服务条款", "安全与合规", "系统状态"]) {
    assert.match(site, new RegExp(link));
  }
  assert.match(site, /浙ICP备00000000号-1/);
  assert.match(site, /浙公网安备 33010000000000号/);
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
