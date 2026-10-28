import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const exportRoot = path.join(projectRoot, "out");

async function readExport(route) {
  return readFile(path.join(exportRoot, route), "utf8");
}

test("the Tools route is not redirected to the removed homepage catalog", async () => {
  const [redirects, exportedRedirects] = await Promise.all([
    readFile(
      path.join(projectRoot, "public", "_redirects"),
      "utf8",
    ),
    readExport("_redirects"),
  ]);
  for (const config of [redirects, exportedRedirects]) {
    assert.doesNotMatch(config, /^\/tools(?:\/|\s)/m);
  }
});

test("the exported Tools directory has search and the featured tool catalog", async () => {
  const [html, homepage] = await Promise.all([
    readExport("tools.html"),
    readExport("index.html"),
  ]);
  assert.match(html, /<h1[^>]*>Free online tools<\/h1>/);
  assert.match(html, /Search tools/);
  assert.match(html, /Featured tools/);
  assert.match(html, /JSON Formatter/);
  assert.match(homepage, /<nav aria-label="Main"[\s\S]*?<a[^>]*href="\/tools"/);
});

test("robots and sitemap expose the canonical tools and learning routes", async () => {
  const sitemap = await readExport("sitemap.xml");
  const robots = await readExport("robots.txt");
  for (const route of [
    "https://iamnoobs.com/tools",
    "https://iamnoobs.com/courses/python",
    "https://iamnoobs.com/courses/c",
    "https://iamnoobs.com/activities/signal-journey",
    "https://iamnoobs.com/games/snake",
  ]) {
    assert.ok(sitemap.includes(route), `sitemap should include ${route}`);
  }
  assert.match(robots, /Sitemap:\s*https:\/\/iamnoobs\.com\/sitemap\.xml/);
});

test("privacy page describes browser-local learning progress", async () => {
  const html = await readExport("privacy.html");
  assert.match(html, /Bug Hunt/);
  assert.match(html, /Python and C courses/);
  assert.match(html, /local storage/);
  assert.match(html, /not synced to an iamnoobs account/);
});
