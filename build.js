import { githubSponsorsToMarkdown } from "github-sponsors-to-markdown";
import fs from "fs/promises";

const noticeBegin = `<table width="100%">`;
const noticeEnd = `</table>`;

const existingContent = (await fs.readFile("./README.md"))
	.toString()
	.split("\n");

const table = await githubSponsorsToMarkdown({
	login: "JoshuaKGoldberg",
	tiers: {
		Platinum: {
			label: "Platinum Sponsors (&gt;=$100/mo)",
			minimum: 100,
			size: 150,
		},
		Gold: {
			label: "Gold Sponsors (&gt;=$25/mo)",
			minimum: 25,
			size: 100,
		},
		Silver: {
			label: "Silver Sponsors (&gt;=$10/mo)",
			minimum: 10,
			size: 50,
		},
		Bronze: {
			label: "Bronze Sponsors (&gt;=$5/mo)",
			minimum: 5,
			size: 50,
		},
	},
});

const updatedContent = [
	...existingContent.slice(0, existingContent.indexOf(noticeBegin)),
	table,
	...existingContent.slice(existingContent.indexOf(noticeEnd) + 1),
].join("\n");

await fs.writeFile("./README.md", updatedContent);
