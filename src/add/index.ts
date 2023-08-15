import chalk from "chalk";

import { projectCategories } from "../projects.js";
import { writeFile } from "../shared/writeFile.js";

const categoryKey = "Developer Tooling";
const repos = Array.from(new Set(process.argv.slice(2).sort()));

if (!repos.length) {
	throw new Error("No repositories provided.");
}

const existingProjectNames = new Set(
	projectCategories[categoryKey].projects.map((project) => project.repo),
);

const newRepos = repos.filter((repo) => {
	const exists = existingProjectNames.has(repo);

	if (exists) {
		console.warn(chalk.yellow(`Repo ${repo} already exists...`));
		return false;
	}

	console.info(chalk.blue(`Repo ${repo} does not already exist.`));
	return true;
});

if (!newRepos.length) {
	console.log(chalk.green("Nothing to update. Bailing."));
} else {
	await writeFile(
		"./projects.json",
		JSON.stringify({
			...projectCategories,
			[categoryKey]: {
				...projectCategories[categoryKey],
				projects: [
					...projectCategories[categoryKey].projects,
					...newRepos.map((repo) => ({ owner: "JoshuaKGoldberg", repo })),
				],
			},
		}),
		"json",
	);

	await import("../build/index.js");
}
