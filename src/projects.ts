/* cspell:disable */
import { ProjectCategory } from "./types.js";

export const projectCategories: Record<string, ProjectCategory> = {
	"Biggest Projects": {
		description:
			"If you work with TypeScript, you may have used one of the open source projects I support:",
		projects: [
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
				stars: 13813,
			},
			{
				description:
					"Converts JavaScript to TypeScript and TypeScript to better TypeScript.",
				owner: "JoshuaKGoldberg",
				repo: "TypeStat",
				stars: 1661,
			},
			{
				description:
					"Quickstart-friendly TypeScript template with comprehensive formatting, linting, releases, testing, and other great tooling built-in. ✨",
				image: "https://www.joshuakgoldberg.com/img/create-typescript-app.png",
				owner: "JoshuaKGoldberg",
				repo: "create-typescript-app",
				stars: 352,
			},
		],
	},
	Emojis: {
		description:
			"I also have an interest in making web apps more delightful. These projects will help you add emoji delighters to your page quickly.",
		projects: [
			{
				description: "😏 simple emoji support for node.js projects",
				owner: "omnidan",
				repo: "node-emoji",
				role: "Junior maintainer",
				stars: 1230,
			},
			{
				description:
					"💥 Blasts 😄 emoji 😊 like 🎆 fireworks 🎇 all up in your 💻 HTML 📄 page. 😍",
				links: {
					Site: "https://emojisplosion.dev",
				},
				owner: "JoshuaKGoldberg",
				repo: "Emojisplosion",
				stars: 88,
			},
			{
				description:
					"Connects konami-code-js to emojisplosion for a glorious easter egg. 🎉 ✨ 🎆",
				owner: "JoshuaKGoldberg",
				repo: "Konamimojisplosion",
				stars: 9,
			},
			{
				description:
					"TypeDoc plugin to quickly integrate konamimojisplosion into your docs site. 🎉 ✨ 🎆",
				owner: "JoshuaKGoldberg",
				repo: "typedoc-plugin-konamimojisplosion",
				stars: 3,
			},
			{
				description:
					"Astro integration to quickly load konamimojisplosion into your site. 🎉 ✨ 🎆",
				owner: "JoshuaKGoldberg",
				repo: "astro-konamimojisplosion",
				stars: 1,
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
				stars: 2994,
			},
			{
				description:
					"A free HTML5 remake of the original Pokemon, expanded for modern browsing.",
				image: "https://www.joshuakgoldberg.com/images/fullscreenpokemon.png",
				owner: "FullScreenShenanigans",
				repo: "FullScreenPokemon",
				stars: 205,
			},
			{
				description:
					"Bare-bones, highly modular game engine for 2D 8-bit games.",
				owner: "FullScreenShenanigans",
				repo: "EightBittr",
				stars: 70,
			},
			{
				description:
					"Choosing a modern JavaScript UI framework, Pokemon-style.",
				owner: "JoshuaKGoldberg",
				repo: "ChooseYourFramework",
				stars: 68,
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
				stars: 58,
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
				stars: 755,
			},
			{
				description:
					"ESLint plugin with $ExpectType, $ExpectError, and $ExpectTypeSnapshot type assertions",
				owner: "JoshuaKGoldberg",
				repo: "eslint-plugin-expect-type",
				role: "Adoptive maintainer",
				stars: 64,
			},
			{
				description:
					"Prettier plugin to enforce consistent brace style for all control statements.",
				owner: "JoshuaKGoldberg",
				repo: "prettier-plugin-curly",
				stars: 32,
			},
			{
				description:
					"Utility functions for working with TypeScript's API. Successor to the wonderful ajafff/tsutils.",
				owner: "JoshuaKGoldberg",
				repo: "ts-api-utils",
				stars: 21,
			},
			{
				description:
					"A Chrome extension for GitHub's Saved Replies that adds replies from a repository's .github/replies.yml.",
				owner: "JoshuaKGoldberg",
				repo: "refined-saved-replies",
				stars: 20,
			},
			{
				description:
					"🎭 Mocks out Redux actions and selectors for clean React Jest tests.",
				owner: "JoshuaKGoldberg",
				repo: "mock-react-redux",
				stars: 20,
			},
			{
				description:
					"TypeScript transformation that inlines calls to small functions. ⚡️",
				owner: "JoshuaKGoldberg",
				repo: "ts-function-inliner",
				stars: 20,
			},
			{
				description: "Creates and caches values under keys. 🏭",
				owner: "JoshuaKGoldberg",
				repo: "cached-factory",
				stars: 13,
			},
			{
				description:
					"Gently fails test runs if the console was used during them.",
				owner: "JoshuaKGoldberg",
				repo: "console-fail-test",
				stars: 10,
			},
			{
				description:
					"Fills in missing allcontributors entries for a repository. 👪",
				owner: "JoshuaKGoldberg",
				repo: "all-contributors-auto-action",
				stars: 9,
			},
			{
				description:
					"Checks whether a documentation description introduces any new information. ℹ️",
				owner: "JoshuaKGoldberg",
				repo: "are-docs-informative",
				stars: 7,
			},
			{
				description:
					"Checks whether a semantic release should be run for a commit.",
				owner: "JoshuaKGoldberg",
				repo: "should-semantic-release",
				stars: 7,
			},
			{
				description:
					"Finds your npm packages that are eligible for Tidelift funding. 💸",
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up",
				stars: 6,
			},
			{
				description:
					"Creates a Markdown table summarizing your GitHub sponsors.",
				owner: "JoshuaKGoldberg",
				repo: "github-sponsors-to-markdown",
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
				description: "Find your npm packages eligible for Tidelift funding. 💸",
				links: {
					Site: "https://tidelift-me-up-site.vercel.app/",
				},
				owner: "JoshuaKGoldberg",
				repo: "tidelift-me-up-site",
				stars: 3,
			},
			{
				description: "Contributed markdownlint rule for one sentence per line.",
				owner: "JoshuaKGoldberg",
				repo: "sentences-per-line",
				stars: 2,
			},
			{
				description:
					"A version of Sinon's `useFakeTimers` that you can call multiple times in a test.",
				owner: "JoshuaKGoldberg",
				repo: "sinon-timers-repeatable",
				stars: 1,
			},
		],
	},
};
