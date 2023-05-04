import fs from "node:fs/promises";
import prettier from "prettier";
import { buildSponsorsTable } from "./buildSponsorsTable.js";
import { buildProjectsTables } from "./buildProjectsTables.js";

const content = `
## Hi, I'm Josh! 💖

<!--
Fun fact: the entirety of this README.md is auto-generated!
See https://github.com/JoshuaKGoldberg/JoshuaKGoldberg.
-->

[![Follow on Bluesky](https://img.shields.io/badge/Follow-Bluesky-3B82F6.svg)](https://staging.bsky.app/profile/joshuakgoldberg.com)
[![Follow on Mastodon](https://img.shields.io/badge/Follow-Mastodon-5A47DC.svg)](https://fosstodon.org/@JoshuaKGoldberg)
[![Follow on Twitch](https://img.shields.io/badge/Follow-Twitch-9147FF.svg)](https://twitch.tv/JoshuaKGoldberg)
[![Follow on Twitter](https://img.shields.io/badge/Follow-Twitter-1DA1F2.svg)](https://twitter.com/JoshuaKGoldberg)
[![Subscribe on YouTube](https://img.shields.io/badge/Subscribe-YouTube-FF0000.svg)](https://youtube.com/@JoshuaKGoldberg)

[![Email Me](https://img.shields.io/badge/Email-github@joshuakgoldberg.com-007735.svg)](mailto:me@joshuakgoldberg.com)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-6cc644.svg)](https://github.com/sponsors/joshuakgoldberg)

I'm an independent full time open source developer.

I work on projects in the TypeScript ecosystem, most notably [typescript-eslint](https://typescript-eslint.io): the tooling that enables ESLint and Prettier to run on TypeScript code.
I'm also the author of O'Reilly's [_Learning TypeScript_ book](https://www.learningtypescript.com), a Microsoft MVP for developer technologies, and an active conference speaker.

My personal projects range from static analysis to meta-languages to recreating retro games in the browser.
Also cats. 🐱

---

## Thanks to my Sponsors

Because I'm independent, I rely on sponsors to fund my work.
They deserve our sincere appreciation and gratitude.

${await buildSponsorsTable()}

> 💚 Motivated to support my work, or just want your image here?
> See my [GitHub Sponsors profile](https://github.com/sponsors/JoshuaKGoldberg).
> Thanks!

## What I'm Working On

${await buildProjectsTables()}
`.trimStart();

await fs.writeFile(
	"./README.md",
	prettier.format(content, { parser: "markdown" })
);
