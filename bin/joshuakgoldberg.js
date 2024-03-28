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
	header: "👋 Hi! I'm Josh. 👋",
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
			extra: " ".length - 1,
			text: "Find me on:",
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
	let totalLines = rows.length + 12;
	let drawnLines = 0;

	rows = rows.map((line) =>
		typeof line === "string" ? { extra: 0, text: line } : line,
	);

	drawOverlay(`┌`, `┐`, header);
	drawLine("│", "│", " ", width, "");

	for (const { extra, text } of rows) {
		const padding = width - text.length + extra - 3;
		drawLine(`│ `, `  │`, " ", padding, text);
	}

	drawLine("│", "│", " ", width, "");
	drawOverlay(`└`, `┘`, footer, 10);

	function hexPercentage(value) {
		return Math.max(Math.min(value, 0.95), 0)
			.toString(16)
			.replace(/^.+\./, "")
			.repeat(2)
			.slice(0, 2);
	}

	function drawLine(before, after, horizontal, padding, text = "") {
		const colorize = chalk.hex(
			[
				"#",
				hexPercentage(Math.min((totalLines - drawnLines) / totalLines, 0.5)),
				hexPercentage((totalLines - drawnLines) ** 1.5 / totalLines),
				hexPercentage(Math.max((totalLines - drawnLines) / totalLines, 0.65)),
			].join(""),
		);

		console.log(
			[
				colorize(before + horizontal.repeat(Math.ceil(padding / 2))),
				colorize(text),
				colorize(horizontal.repeat(Math.floor(padding / 2)) + after),
			].join(""),
		);

		drawnLines += 1;
	}

	function drawOverlay(before, after, text, extra = 0) {
		drawLine(before, after, "─", width - text.length + extra - 2, ` ${text} `);
	}
}
