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
				stars: 26069,
			},
			{
				description:
					"☕️ simple, flexible, fun javascript test framework for node.js & the browser",
				image: "https://www.joshuakgoldberg.com/img/mocha.svg",
				owner: "mochajs",
				repo: "mocha",
				role: "Maintainer",
				stars: 22795,
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
				stars: 15804,
			},
			{
				description:
					"Converts JavaScript to TypeScript and TypeScript to better TypeScript. 🧫",
				owner: "JoshuaKGoldberg",
				repo: "TypeStat",
				stars: 2144,
			},
			{
				description:
					"Quickstart-friendly TypeScript template with comprehensive, configurable, opinionated tooling. 🎁",
				image: "https://www.joshuakgoldberg.com/img/create-typescript-app.png",
				owner: "JoshuaKGoldberg",
				repo: "create-typescript-app",
				stars: 1320,
			},
			{
				description: "Delightful templates for web repositories. 💝",
				image: "https://www.joshuakgoldberg.com/img/create.png",
				links: {
					Site: "https://create.bingo",
				},
				owner: "JoshuaKGoldberg",
				repo: "Bingo",
				stars: 102,
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
				stars: 1345,
			},
			{
				description: "Blasts emoji like fireworks all up in your HTML page. 🎆",
				links: {
					Site: "https://emojiblast.dev",
				},
				owner: "JoshuaKGoldberg",
				repo: "emoji-blast",
				stars: 318,
			},
			{
				description:
					"Unofficial static export of technical information from Emojipedia. 📙",
				owner: "JoshuaKGoldberg",
				repo: "emojipedia",
				stars: 17,
			},
			{
				description:
					"Static export of platform-specific metadata for unicode emojis. 🗝️",
				owner: "JoshuaKGoldberg",
				repo: "emoji-platform-data",
				stars: 9,
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
				stars: 2976,
			},
			{
				description:
					"A free HTML5 remake of the original Pokemon, expanded for modern browsing.",
				image: "https://www.joshuakgoldberg.com/images/fullscreenpokemon.png",
				owner: "FullScreenShenanigans",
				repo: "FullScreenPokemon",
				stars: 222,
			},
			{
				description:
					"Bare-bones, highly modular game engine for 2D 8-bit games.",
				owner: "FullScreenShenanigans",
				repo: "EightBittr",
				stars: 80,
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
				stars: 1033,
			},
			{
				description:
					"Rules for consistent, readable, and valid package.json files. 🗂️",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-package-json",
				role: "Adoptive maintainer",
				stars: 179,
			},
			{
				description:
					"ESLint plugin with ^? Twoslash, $ExpectError, and $ExpectType type assertions. 🧩",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-expect-type",
				role: "Adoptive maintainer",
				stars: 115,
			},
			{
				description: "Tools to validate package.json files.",
				owner: "JoshuaKGoldberg",
				repo: "package.json-validator",
				role: "Adoptive maintainer",
				stars: 108,
			},
			{
				description:
					"Utility functions for working with TypeScript's API. Successor to the wonderful tsutils. 🛠️️",
				owner: "JoshuaKGoldberg",
				repo: "ts-api-utils",
				stars: 99,
			},
			{
				description:
					"Prettier plugin to enforce consistent brace style for all control statements. 🥌",
				owner: "JoshuaKGoldberg",
				repo: "prettier-plugin-curly",
				stars: 62,
			},
			{
				description:
					"ESLint plugin to granularly enforce TypeScript's erasableSyntaxOnly flag. ❎",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-erasable-syntax-only",
				stars: 42,
			},
			{
				description:
					"Formats code with whatever formatter a project is already using. 🧼",
				owner: "JoshuaKGoldberg",
				repo: "formatly",
				stars: 36,
			},
			{
				description:
					"Browser extension for GitHub's Saved Replies that adds replies from a repository's .github/replies.yml. 📨",
				owner: "JoshuaKGoldberg",
				repo: "refined-saved-replies",
				stars: 31,
			},
			{
				description:
					"Helps contributors adhere to best practices for your repository on GitHub. 🗺️",
				owner: "JoshuaKGoldberg",
				repo: "OctoGuide",
				stars: 26,
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
					"Mocks out Redux actions and selectors for clean React Jest tests.",
				owner: "JoshuaKGoldberg",
				repo: "mock-react-redux",
				stars: 20,
			},
			{
				description:
					"Gently fails test runs if the console was used during them. 📢",
				owner: "JoshuaKGoldberg",
				repo: "console-fail-test",
				stars: 19,
			},
			{
				description:
					"Fetches any public emails associated with a GitHub username. 📧",
				owner: "JoshuaKGoldberg",
				repo: "github-username-to-emails",
				stars: 17,
			},
			{
				description:
					"Fills in missing allcontributors entries for a repository. 👪",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-auto-action",
				stars: 14,
			},
			{
				description: "Utilities for ESLint rule fixers and suggestions. 🧑‍🔧",
				owner: "JoshuaKGoldberg",
				repo: "eslint-fix-utils",
				stars: 14,
			},
			{
				description:
					"Contributed markdownlint rule for limiting sentences per line. 📐",
				owner: "JoshuaKGoldberg",
				repo: "sentences-per-line",
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
				description: "Imports a local package or one installed from npx. 🚚",
				owner: "JoshuaKGoldberg",
				repo: "import-local-or-npx",
				stars: 12,
			},
			{
				description:
					"Checks whether a documentation description introduces any new information. ℹ️",
				owner: "JoshuaKGoldberg",
				repo: "are-docs-informative",
				stars: 12,
			},
			{
				description:
					"Runs release-it as a GitHub Action, with handling for semantic releases and protected branches. 📤",
				owner: "JoshuaKGoldberg",
				repo: "release-it-action",
				stars: 10,
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
					"debug() wrapper that creates a string based on your file's path within the package. 🧶",
				owner: "JoshuaKGoldberg",
				repo: "debug-for-file",
				stars: 9,
			},
			{
				description:
					"CLI that checks if your npm packages are eligible for Tidelift funding. 💸",
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up",
				stars: 9,
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
				description: "Converts Notion's rich text strings to Markdown. 🪢",
				owner: "JoshuaKGoldberg",
				repo: "notion-rich-text-to-markdown",
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
					"Populates your cspell.json dictionary with existing unknown words. 🔖",
				owner: "JoshuaKGoldberg",
				repo: "cspell-populate-words",
				stars: 5,
			},
			{
				description:
					"Parses co-authors from Git/GitHub-style commit messages and issue bodies. ✍️",
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
				description:
					"Retrieves all strings with an object, including keys, properties, recursive objects, and within arrays. 🧵",
				owner: "JoshuaKGoldberg",
				repo: "object-strings-deep",
				stars: 3,
			},
			{
				description:
					"Quickly removes dependencies from your package.json file. 🔪",
				owner: "JoshuaKGoldberg",
				repo: "remove-dependencies",
				stars: 3,
			},
			{
				description: "Zod schemas for TypeScript's TSConfig properties. ⚙️",
				owner: "JoshuaKGoldberg",
				repo: "zod-tsconfig",
				stars: 3,
			},
			{
				description:
					"Populates the .all-contributorsrc for a repository using all-contributors-for-repository. 📋",
				owner: "JoshuaKGoldberg",
				repo: "populate-all-contributors-for-repository",
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
					"Infers All Contributors settings from an existing README.md table and package.json. 💗",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-inferred",
				stars: 2,
			},
			{
				description:
					"Evalutes the properties of an object, including functions, Promises, and their combination. 😴",
				owner: "JoshuaKGoldberg",
				repo: "all-properties-lazy",
				stars: 2,
			},
			{
				description:
					"Determines whether the text of a comment doesn't add anything to the conversation. 😶",
				owner: "JoshuaKGoldberg",
				repo: "is-comment-meaningless",
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
			{
				description:
					"Creates a new repository on GitHub, including waiting for initialization. 🆕",
				owner: "JoshuaKGoldberg",
				repo: "new-github-repository",
				stars: 1,
			},
			{
				description: "Static export of GitHub's default labels. 🗂",
				owner: "JoshuaKGoldberg",
				repo: "github-default-labels",
				stars: 1,
			},
			{
				description: "Efficiently (re)-prints text into your terminal. 🖨",
				owner: "JoshuaKGoldberg",
				repo: "terminal-reprint",
				stars: 1,
			},
		],
	},
};
