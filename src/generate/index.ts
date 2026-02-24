import { getGitHubAuthToken } from "get-github-auth-token";
import fs from "node:fs/promises";

import { writeFile } from "../shared/writeFile.js";
import { generateProjectsTables } from "./generateProjectsTables.js";
import { buildSponsorsTable } from "./generateSponsorsTable.js";

export async function generate() {
	const auth = await getGitHubAuthToken();

	if (!auth.succeeded) {
		throw new Error(auth.error);
	}

	const content = `
## Hi, I'm Josh! 💖

<!--
Fun fact: the entirety of this README.md is auto-generated!
See https://github.com/JoshuaKGoldberg/JoshuaKGoldberg.
-->

[![Email Me](https://img.shields.io/badge/Email-github@joshuakgoldberg.com-007735.svg)](mailto:me@joshuakgoldberg.com)
[![Follow on Bluesky](https://img.shields.io/badge/Follow-Bluesky-3B82F6.svg)](https://bsky.app/profile/joshuakgoldberg.com)
[![Follow on Mastodon](https://img.shields.io/badge/Follow-Mastodon-5A47DC.svg)](https://fosstodon.org/@JoshuaKGoldberg)
[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-6cc644.svg)](https://github.com/sponsors/joshuakgoldberg)

I'm an open source developer in the web development ecosystem.

I work on projects that help improve code quality, most notably [typescript-eslint](https://typescript-eslint.io): a powerful static analysis toolset for JavaScript and TypeScript code.
I'm also the author of O'Reilly's [_Learning TypeScript_ book](https://www.learningtypescript.com), a Microsoft MVP for developer technologies, and a frontend developer at [Sentry](https://sentry.io).

---

## Thanks to my Sponsors

I was an independent maintainer from 2022 through 2025.
Nowadays I work on open source in my spare time.
My work was supported by these wonderful sponsors.
They deserve our sincere appreciation and gratitude.

<!-- spell-checker: disable -->
${await buildSponsorsTable(auth.token)}
<!-- spell-checker: enable -->

Now, all my sponsorships are directly forwarded as monthly funds to [Flint](https://flint.fyi).

> 💚 Motivated to support my work, or just want your image here?
> See my [GitHub Sponsors profile](https://github.com/sponsors/JoshuaKGoldberg).
> Thanks!

## What I'm Working On

${await generateProjectsTables()}

## Development
${(await fs.readFile("./README.md")).toString().split("## Development")[1]}
`.trimStart();

	await writeFile("./README.md", content, "markdown");
}
