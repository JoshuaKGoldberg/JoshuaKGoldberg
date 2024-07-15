/* cspell:disable */
import { ProjectCategory } from "./types.js";

export const projectCategories: Record<string, ProjectCategory> = {
	"Biggest Projects": {
		description:
			"If you work with JavaScript or TypeScript, you may have used one of the open source projects I support:",
		projects: [
			{
				description: "Find and fix problems in your JavaScript code.",
				image: "https://www.joshuakgoldberg.com/img/eslint.svg",
				owner: "eslint",
				repo: "eslint",
				role: "Committer",
				stars: 24637,
			},
			{
				description:
					"☕️ simple, flexible, fun javascript test framework for node.js & the browser",
				image: "https://www.joshuakgoldberg.com/img/mocha.svg",
				owner: "mochajs",
				repo: "mocha",
				role: "Maintainer",
				stars: 22514,
			},
			{
				description:
					"✨ Monorepo for all the tooling which enables ESLint to support TypeScript",
				image: "https://www.joshuakgoldberg.com/img/ts-eslint.svg",
				links: {
					Site: "https://typescript-eslint.io",
				},
				owner: "typescript-eslint",
				repo: "typescript-eslint",
				role: "Maintainer",
				stars: 14944,
			},
			{
				description:
					"Converts JavaScript to TypeScript and TypeScript to better TypeScript. 🧫",
				owner: "JoshuaKGoldberg",
				repo: "TypeStat",
				stars: 2008,
			},
			{
				description:
					"Quickstart-friendly TypeScript template with comprehensive, configurable, opinionated tooling. 💝",
				image: "https://www.joshuakgoldberg.com/img/create-typescript-app.png",
				owner: "JoshuaKGoldberg",
				repo: "create-typescript-app",
				stars: 624,
			},
		],
	},
	Emojis: {
		description:
			"I also have an interest in making web apps more delightful. These projects will help you add emoji delighters to your page quickly.",
		projects: [
			{
				description: "💖 simple emoji support for node.js projects",
				owner: "omnidan",
				repo: "node-emoji",
				role: "Junior maintainer",
				stars: 1297,
			},
			{
				description: "Blasts emoji like fireworks all up in your HTML page. 🎆",
				links: {
					Site: "https://emojiblast.dev",
				},
				owner: "JoshuaKGoldberg",
				repo: "emoji-blast",
				stars: 217,
			},
			{
				description:
					"Unofficial static export of emoji technical information from Emojipedia. 📙",
				owner: "JoshuaKGoldberg",
				repo: "emojipedia",
				stars: 14,
			},
			{
				description:
					"Static export of platform-specific metadata for unicode emojis. 🗝️",
				owner: "JoshuaKGoldberg",
				repo: "emoji-platform-data",
				stars: 10,
			},
		],
	},
	"Just For Fun": {
		description:
			"These projects I do because I think they're fascinating and/or fun, if not particularly useful:",
		projects: [
			{
				description:
					"An HTML5 remake of the original Super Mario Brothers - expanded for wide screens.",
				image: "https://www.joshuakgoldberg.com/images/fullscreenmario.png",
				name: "FullScreenMario",
				owner: "JoshuaKGoldberg",
				repo: "Old-Deleted-FullScreenMario",
				role: "Creator",
				stars: 2984,
			},
			{
				description:
					"A free HTML5 remake of the original Pokemon, expanded for modern browsing.",
				image: "https://www.joshuakgoldberg.com/images/fullscreenpokemon.png",
				owner: "FullScreenShenanigans",
				repo: "FullScreenPokemon",
				stars: 213,
			},
			{
				description:
					"Bare-bones, highly modular game engine for 2D 8-bit games.",
				owner: "FullScreenShenanigans",
				repo: "EightBittr",
				stars: 77,
			},
			{
				description:
					"Choosing a modern JavaScript UI framework, Pokemon-style.",
				owner: "JoshuaKGoldberg",
				repo: "ChooseYourFramework",
				stars: 69,
			},
			{
				description:
					"A unified syntax that compiles into your favorite OOP languages. 🦜",
				image: "https://www.joshuakgoldberg.com/images/budgie.png",
				more: [
					{
						description: "A natural language layer on top of Budgie. 🦜",
						owner: "budgielang",
						repo: "NBudgie",
						stars: 2,
					},
					{
						description: "Converts TypeScript code to Budgie. 🦜",
						owner: "budgielang",
						repo: "ts-budgie",
						stars: 2,
					},
					{
						description: "Compiles C# code to Budgie. 🦜",
						owner: "budgielang",
						repo: "CS-Budgie",
						stars: 1,
					},
				],
				owner: "budgielang",
				repo: "Budgie",
				stars: 59,
			},
		],
	},
	Tooling: {
		description:
			"I work on assorted projects in the JavaScript/TypeScript ecosystem that make it easier to write high quality applications.",
		projects: [
			{
				description:
					"⬅️ ES6 string tag that strips indentation from multi-line strings.",
				owner: "dmnd",
				repo: "dedent",
				role: "Adoptive maintainer",
				stars: 900,
			},
			{
				description: "Tools to validate package.json files",
				owner: "JoshuaKGoldberg",
				repo: "package.json-validator",
				stars: 107,
			},
			{
				description:
					"Rules for consistent, readable, and valid package.json files. 🗂️",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-package-json",
				role: "Adoptive maintainer",
				stars: 99,
			},
			{
				description:
					"ESLint plugin with ^? Twoslash, $ExpectError, and $ExpectType type assertions. 🧩",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-expect-type",
				role: "Adoptive maintainer",
				stars: 89,
			},
			{
				description:
					"Utility functions for working with TypeScript's API. Successor to the wonderful tsutils. 🛠️️",
				owner: "JoshuaKGoldberg",
				repo: "ts-api-utils",
				stars: 47,
			},
			{
				description:
					"Prettier plugin to enforce consistent brace style for all control statements. 🥌",
				owner: "JoshuaKGoldberg",
				repo: "prettier-plugin-curly",
				stars: 46,
			},
			{
				description:
					"Chrome extension for GitHub's Saved Replies that adds replies from a repository's `.github/replies.yml`. 📨",
				owner: "JoshuaKGoldberg",
				repo: "refined-saved-replies",
				stars: 29,
			},
			{
				description:
					"TypeScript transformation that inlines calls to small functions. ⚡️",
				owner: "JoshuaKGoldberg",
				repo: "ts-function-inliner",
				stars: 21,
			},
			{
				description:
					"Mocks out Redux actions and selectors for clean React Jest tests. 🎭",
				owner: "JoshuaKGoldberg",
				repo: "mock-react-redux",
				stars: 20,
			},
			{
				description:
					"Fetches any public emails associated with a GitHub username. 📧",
				owner: "JoshuaKGoldberg",
				repo: "github-username-to-emails",
				stars: 16,
			},
			{
				description:
					"Gently fails test runs if the console was used during them. 📢",
				owner: "JoshuaKGoldberg",
				repo: "console-fail-test",
				stars: 14,
			},
			{
				description:
					"Checks whether a semantic release should be run for a repository. 💂",
				owner: "JoshuaKGoldberg",
				repo: "should-semantic-release",
				stars: 13,
			},
			{
				description: "Creates and caches values under keys. 🏭",
				owner: "JoshuaKGoldberg",
				repo: "cached-factory",
				stars: 12,
			},
			{
				description:
					"Fills in missing allcontributors entries for a repository. 👪",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-auto-action",
				stars: 12,
			},
			{
				description:
					"Contributed markdownlint rule for limiting sentences per line. 📐",
				owner: "JoshuaKGoldberg",
				repo: "sentences-per-line",
				stars: 9,
			},
			{
				description:
					"Checks whether a documentation description introduces any new information. ℹ️",
				owner: "JoshuaKGoldberg",
				repo: "are-docs-informative",
				stars: 8,
			},
			{
				description:
					"Web app to find your npm packages eligible for Tidelift funding. 💸",
				links: {
					Site: "https://tidelift-me-up-site.vercel.app/",
				},
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up-site",
				stars: 9,
			},
			{
				description:
					"Finds your npm packages that are eligible for Tidelift funding. 💸",
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up",
				stars: 7,
			},
			{
				description:
					"Runs release-it as a GitHub Action, with handling for semantic releases and protected branches. 📤",
				owner: "JoshuaKGoldberg",
				repo: "release-it-action",
				stars: 6,
			},
			{
				description:
					"Retrieves the running user's GitHub authentication token. 🪙",
				owner: "JoshuaKGoldberg",
				repo: "get-github-auth-token",
				stars: 6,
			},
			{
				description:
					"Creates a Markdown table summarizing your GitHub sponsors. 💰",
				owner: "JoshuaKGoldberg",
				repo: "github-sponsors-to-markdown",
				stars: 5,
			},
			{
				description:
					"Web app to fetch any public emails associated with a GitHub username. 📧",
				owner: "JoshuaKGoldberg",
				repo: "github-username-to-emails-site",
				stars: 5,
			},
			{
				description:
					"Prunes GitHub notifications you don't care about, such as automated dependency bumps. 🧹",
				owner: "JoshuaKGoldberg",
				repo: "prune-github-notifications",
				stars: 5,
			},
			{
				description:
					"Parses co-authors from Git/GitHub-style commit messages. ✍️",
				owner: "JoshuaKGoldberg",
				repo: "commit-to-co-authors",
				stars: 4,
			},
			{
				description:
					"Generates an allcontributors list for an existing repository. 🤝",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-for-repository",
				stars: 3,
			},
			{
				description: "Fetches any packages associated with an npm username. 📨",
				owner: "JoshuaKGoldberg",
				repo: "npm-username-to-packages",
				stars: 3,
			},
			{
				description:
					"Fetches the GitHub username for a co-author, if possible. 📇",
				owner: "JoshuaKGoldberg",
				repo: "co-author-to-username",
				stars: 3,
			},
			{
				description:
					"A version of Sinon's `useFakeTimers` that you can call multiple times in a test. ⏱️",
				owner: "JoshuaKGoldberg",
				repo: "sinon-timers-repeatable",
				stars: 1,
			},
			{
				description:
					"An extension to the discord.js `Client` class with `[Symbol.asyncDispose]` added. 🚮",
				owner: "JoshuaKGoldberg",
				repo: "disposable-discord-client",
				stars: 1,
			},
			{
				description:
					"The built-in Node.js console.table, but without the annoying (index) column. 📊",
				owner: "JoshuaKGoldberg",
				repo: "console-table-without-index",
				stars: 3,
			},
		],
	},
};
