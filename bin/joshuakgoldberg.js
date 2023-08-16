#!/usr/bin/env node

import chalk from "chalk";

const socialRows = [
	[
		"#0085ff",
		"⛅️",
		"Bluesky ",
		"https://bsky.app/profile/joshuakgoldberg.com",
		2,
	],
	["#6cc644", "🐙", "GitHub  ", "https://github.com/JoshuaKGoldberg", 3],
	["#6364ff", "🐘", "Mastodon", "https://fosstodon.org/@JoshuaKGoldberg", 3],
	["#6441a5", "💬", "Twitch  ", "https://twitch.tv/JoshuaKGoldberg", 3],
	["#00acee", "🐦", "Twitter ", "https://twitter.com/JoshuaKGoldberg", 2],
	["#FF0000", "🎥", "YouTube ", "https://youtube.com/@JoshuaKGoldberg", 0],
	["#1170d0", "🌐", "www     ", "https://joshuakgoldberg.com", 3],
];

const longestLink = socialRows.reduce(
	(max, row) => Math.max(max, row[3].length),
	0,
);

drawTable({
	footer: chalk.green(
		"💚 I'd greatly appreciate it if you could sponsor me on GitHub. 💚",
	),
	header: chalk.whiteBright("👋 Hi! I'm Josh. 👋"),
	rows: [
		"🙂 I'm an open source maintainer in the TypeScript ecosystem. 🙂",
		"",
		{
			extra: "🖥️ ".length,
			text: "🖥️  I work to make web development better, most notably on typescript-eslint: 🖥️",
		},
		"the tooling that enables ESLint and Prettier to run on TypeScript code.",
		"",
		"🏆 I'm the author of Learning TypeScript (O'Reilly), a Microsoft MVP, an 🏆",
		"international conference speaker, a mentor, and a live code streamer.",
		"",
		{
			extra: chalk.whiteBright(" ").length - 1,
			text: chalk.whiteBright("Find me on:"),
		},
		"",
		...socialRows.map(([color, emoji, label, link, extra]) => ({
			extra: 20 + extra,
			text: chalk.hex(color)(
				[
					"  ",
					emoji,
					" ",
					label,
					" ".repeat(longestLink - link.length + 1),
					link,
				].join(""),
			),
		})),
	],
	width: 87,
});

function drawTable({ footer, header, rows, width }) {
	rows = rows.map((line) =>
		typeof line === "string" ? { extra: 0, text: line } : line,
	);

	drawOverlay(`┌`, header, `┐`);

	console.log(chalk.gray(`│${" ".repeat(width)}│`));

	for (const { extra, text } of rows) {
		const padding = width - text.length + extra - 3;
		console.log(
			[
				chalk.gray(`│ `),
				" ".repeat(Math.ceil(padding / 2)),
				chalk.reset(text),
				" ".repeat(Math.floor(padding / 2)),
				chalk.gray(`  │`),
			].join(""),
		);
	}

	console.log(chalk.gray(`│${" ".repeat(width)}│`));

	drawOverlay(`└`, footer, `┘`);

	function drawOverlay(before, text, after) {
		const extra = (width - text.length + 7) / 2;

		console.log(
			[
				chalk.gray(`${before}${"─".repeat(Math.ceil(extra))} `),
				text,
				chalk.reset.gray(` ${"─".repeat(Math.floor(extra))}─${after}`),
			].join(""),
		);
	}
}
