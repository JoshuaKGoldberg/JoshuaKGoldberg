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
				stars: 25416,
			},
			{
				description:
					"☕️ simple, flexible, fun javascript test framework for node.js & the browser",
				image: "https://www.joshuakgoldberg.com/img/mocha.svg",
				owner: "mochajs",
				repo: "mocha",
				role: "Maintainer",
				stars: 22675,
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
				stars: 15437,
			},
			{
				description:
					"Converts JavaScript to TypeScript and TypeScript to better TypeScript. 🧫",
				owner: "JoshuaKGoldberg",
				repo: "TypeStat",
				stars: 2102,
			},
			{
				description:
					"Quickstart-friendly TypeScript template with comprehensive, configurable, opinionated tooling. 🎁",
				image: "https://www.joshuakgoldberg.com/img/create-typescript-app.png",
				owner: "JoshuaKGoldberg",
				repo: "create-typescript-app",
				stars: 1238,
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
				stars: 1323,
			},
			{
				description: "Blasts emoji like fireworks all up in your HTML page. 🎆",
				links: {
					Site: "https://emojiblast.dev",
				},
				owner: "JoshuaKGoldberg",
				repo: "emoji-blast",
				stars: 291,
			},
			{
				description:
					"Unofficial static export of emoji technical information from Emojipedia. 📙",
				owner: "JoshuaKGoldberg",
				repo: "emojipedia",
				stars: 15,
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
				stars: 2983,
			},
			{
				description:
					"A free HTML5 remake of the original Pokemon, expanded for modern browsing.",
				image: "https://www.joshuakgoldberg.com/images/fullscreenpokemon.png",
				owner: "FullScreenShenanigans",
				repo: "FullScreenPokemon",
				stars: 219,
			},
			{
				description:
					"Bare-bones, highly modular game engine for 2D 8-bit games.",
				owner: "FullScreenShenanigans",
				repo: "EightBittr",
				stars: 79,
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
				stars: 60,
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
				stars: 946,
			},
			{
				description:
					"Rules for consistent, readable, and valid package.json files. 🗂️",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-package-json",
				role: "Adoptive maintainer",
				stars: 137,
			},
			{
				description:
					"ESLint plugin with ^? Twoslash, $ExpectError, and $ExpectType type assertions. 🧩",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-expect-type",
				role: "Adoptive maintainer",
				stars: 113,
			},
			{
				description: "Tools to validate package.json files",
				owner: "JoshuaKGoldberg",
				repo: "package.json-validator",
				stars: 107,
			},
			{
				description:
					"Utility functions for working with TypeScript's API. Successor to the wonderful tsutils. 🛠️️",
				owner: "JoshuaKGoldberg",
				repo: "ts-api-utils",
				stars: 87,
			},
			{
				description:
					"Prettier plugin to enforce consistent brace style for all control statements. 🥌",
				owner: "JoshuaKGoldberg",
				repo: "prettier-plugin-curly",
				stars: 55,
			},
			{
				description:
					"Chrome extension for GitHub's Saved Replies that adds replies from a repository's `.github/replies.yml`. 📨",
				owner: "JoshuaKGoldberg",
				repo: "refined-saved-replies",
				stars: 30,
			},
			{
				description:
					"TypeScript transformation that inlines calls to small functions. ⚡️",
				owner: "JoshuaKGoldberg",
				repo: "ts-function-inliner",
				stars: 22,
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
					"Formats your code with whatever formatter your project is already using. 🧼",
				owner: "JoshuaKGoldberg",
				repo: "formatly",
				stars: 17,
			},
			{
				description:
					"Gently fails test runs if the console was used during them. 📢",
				owner: "JoshuaKGoldberg",
				repo: "console-fail-test",
				stars: 17,
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
					"Checks whether a semantic release should be run for a repository. 💂",
				owner: "JoshuaKGoldberg",
				repo: "should-semantic-release",
				stars: 13,
			},
			{
				description:
					"Fills in missing allcontributors entries for a repository. 👪",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-auto-action",
				stars: 13,
			},
			{
				description: "Creates and caches values under keys. 🏭",
				owner: "JoshuaKGoldberg",
				repo: "cached-factory",
				stars: 12,
			},
			{
				description: "Imports a local package or one installed from npx. 🚚",
				owner: "JoshuaKGoldberg",
				repo: "import-local-or-npx",
				stars: 11,
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
					"Runs release-it as a GitHub Action, with handling for semantic releases and protected branches. 📤",
				owner: "JoshuaKGoldberg",
				repo: "release-it-action",
				stars: 9,
			},
			{
				description:
					"debug() wrapper that creates a string based on your file's path within the package. 🧶",
				owner: "JoshuaKGoldberg",
				repo: "debug-for-file",
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
					"Finds your npm packages that are eligible for Tidelift funding. 💸",
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up",
				stars: 8,
			},
			{
				description:
					"The built-in Node.js console.table, but without the annoying (index) column. 📊",
				owner: "JoshuaKGoldberg",
				repo: "console-table-without-index",
				stars: 7,
			},
			{
				description:
					"Prunes GitHub notifications you don't care about, such as automated dependency bumps. 🧹",
				owner: "JoshuaKGoldberg",
				repo: "prune-github-notifications",
				stars: 7,
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
					"Web app to fetch any public emails associated with a GitHub username. 📧",
				owner: "JoshuaKGoldberg",
				repo: "github-username-to-emails-site",
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
					"Parses co-authors from Git/GitHub-style commit messages. ✍️",
				owner: "JoshuaKGoldberg",
				repo: "description-to-co-authors",
				stars: 4,
			},
			{
				description:
					"Generates borderless text table strings suitable for printing to stdout. Fast. 🏁",
				owner: "JoshuaKGoldberg",
				repo: "text-table-fast",
				stars: 4,
			},
			{
				description:
					"Generates an allcontributors list for an existing repository. 🤝",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-for-repository",
				stars: 4,
			},
			{
				description: "Copies an object without its undefined properties. 🫥",
				owner: "JoshuaKGoldberg",
				repo: "without-undefined-properties",
				stars: 4,
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
				description: "Converts Notion's rich text strings to Markdown. 🪢",
				owner: "JoshuaKGoldberg",
				repo: "notion-rich-text-to-markdown",
				stars: 3,
			},
			{
				description:
					"Retrieves all strings with an object, including keys, properties, recursive objects, and within arrays. 🧵",
				owner: "JoshuaKGoldberg",
				repo: "object-strings-deep",
				stars: 3,
			},
			{
				description:
					"Populates your cspell.json dictionary with existing unknown words. 🔖",
				owner: "JoshuaKGoldberg",
				repo: "cspell-populate-words",
				stars: 3,
			},
			{
				description:
					"Creates a GitHub Octokit instance from any available auth token. 🐙",
				owner: "JoshuaKGoldberg",
				repo: "octokit-from-auth",
				stars: 2,
			},
			{
				description:
					"Populates the .all-contributorsrc for a repository using all-contributors-for-repository. 📋",
				owner: "JoshuaKGoldberg",
				repo: "populate-all-contributors-for-repository",
				stars: 2,
			},
			{
				description:
					"Infers All Contributors settings from an existing README.md table. 🔄",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-inferred",
				stars: 2,
			},
			{
				description:
					"Sets labels for a GitHub repository, including renaming existing similar labels. 🏷️",
				owner: "JoshuaKGoldberg",
				repo: "set-github-repository-labels",
				stars: 1,
			},
			{
				description:
					"A version of Sinon's `useFakeTimers` that you can call multiple times in a test. ⏱️",
				owner: "JoshuaKGoldberg",
				repo: "sinon-timers-repeatable",
				stars: 1,
			},
		],
	},
};
