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
    "/products/sinanpilot",
    "/products/domestic-trade-growth",
    "/products/independent-site-growth",
    "/products/geo-growth-service",
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

test("product services use the approved SinanPilot product lineup", async () => {
  const site = await readProjectFile("data/site.ts");
  const hero = await readProjectFile("components/Hero.tsx");
  const capabilityMap = await readProjectFile("components/CapabilityMap.tsx");
  const productsPage = await readProjectFile("app/products/page.tsx");
  const productDetail = await readProjectFile("app/products/[slug]/page.tsx");

  for (const product of [
    "SinanPilot",
    "内贸客户增长软件",
    "独立站增长软件",
    "GEO 增长服务",
  ]) {
    assert.match(site, new RegExp(product));
  }

  for (const oldProduct of ["机会雷达", "商品内容引擎", "客户触达协同", "增长复盘中枢"]) {
    assert.doesNotMatch(site, new RegExp(oldProduct));
  }

  assert.match(site, /trade\.xiezi\.tech/);
  assert.match(site, /买家信号、智能判断到销售执行/);
  assert.match(site, /买家信号到销售执行的 AI 增长工作台/);
  assert.match(site, /国内贸易团队/);
  assert.match(site, /独立站经营场景/);
  assert.match(site, /生成式搜索/);
  assert.match(hero, /司南云图（杭州）科技有限公司/);
  assert.match(hero, /AI 增长产品矩阵/);
  assert.match(hero, /\/products"/);
  assert.doesNotMatch(hero, /SinanPilot 外贸 AI 增长工作台/);
  assert.match(site, /export const capabilities = products\.map/);
  assert.match(capabilityMap, /产品矩阵/);
  assert.match(capabilityMap, /overflow-x-auto/);
  assert.match(capabilityMap, /snap-x/);
  assert.doesNotMatch(capabilityMap, /围绕 SinanPilot 的四项核心增长能力/);
  assert.match(productsPage, /外贸、内贸、独立站和 GEO/);
  assert.match(productDetail, /officialUrl/);
  assert.match(productDetail, /访问产品官网/);
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
  assert.match(footer, /h-\[72px\] w-\[202px\] shrink-0 overflow-hidden/);
  assert.match(footer, /-translate-x-\[15px\] -translate-y-\[18px\]/);
  assert.match(footer, /sm:-translate-x-\[17px\] sm:-translate-y-\[21px\]/);
  assert.match(footer, /py-7/);
  assert.match(footer, /lg:grid-cols-\[minmax\(0,1fr\)_500px\]/);
  assert.match(footer, /sm:grid-cols-\[0\.75fr_0\.95fr_1\.35fr\]/);
  assert.doesNotMatch(footer, /sm:flex-row/);
  assert.match(footer, /mt-2 max-w-\[360px\]/);
  assert.match(footer, /footerTagline/);
  assert.doesNotMatch(
    footer,
    /把机会识别、商品表达、客户触达与增长复盘连接成可执行的业务云图/,
  );
  assert.doesNotMatch(site, /\bQR\b/);
  assert.doesNotMatch(footer, /\bQR\b/);

  assert.doesNotMatch(site, /企业公众号/);
  for (const channel of ["公众号", "企业微信", "飞书"]) {
    assert.match(site, new RegExp(channel));
  }

  assert.match(site, /socialChannels/);
  assert.match(site, /complianceRecords/);
  assert.match(site, /legalLinks/);
  assert.match(site, /Copyright © 2026/);
  assert.doesNotMatch(footer, /关注我们/);
  assert.match(footer, /socialChannels\.map/);
  assert.match(footer, /complianceRecords\.map/);
  assert.match(footer, /legalLinks\.map/);
  assert.match(footer, /mailto:\$\{contact.email\}/);
  assert.match(footer, /mt-3 grid max-w-\[156px\] grid-cols-3 gap-2/);
  assert.match(footer, /grid justify-items-center gap-1/);
  assert.match(footer, /h-10 w-10/);
  assert.match(footer, /text-\[10px\]/);
  assert.match(footer, /二维码占位/);
  assert.doesNotMatch(footer, />备案信息</);
  assert.match(footer, /justify-between/);
  assert.match(footer, /md:flex-row/);
  assert.match(footer, /flex-wrap/);
  for (const link of ["隐私政策", "服务条款", "安全与合规"]) {
    assert.match(site, new RegExp(link));
  }
  assert.doesNotMatch(site, /系统状态/);
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
