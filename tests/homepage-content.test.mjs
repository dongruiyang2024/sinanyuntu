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

test("homepage source includes the approved sections and anchors", async () => {
  const page = await readProjectFile("app/page.tsx");
  const data = await readProjectFile("data/home.ts");

  for (const section of [
    "Hero",
    "CapabilityMap",
    "ServiceScenarios",
    "DeliveryModel",
    "AboutSection",
    "ContactSection",
  ]) {
    assert.match(page, new RegExp(section));
  }

  for (const anchor of ["#home", "#capabilities", "#scenarios", "#about", "#contact"]) {
    assert.match(data, new RegExp(anchor));
  }

  assert.match(data, /contact@sinancloudmap\.com/);
  assert.match(data, /AI 工具软件/);
  assert.match(data, /产品与服务落地/);
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
