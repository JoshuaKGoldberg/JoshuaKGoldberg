import chalk from "chalk";

import { generate } from "../generate/index.js";
import { projectCategories } from "../projects.js";
import { writeProjects } from "../shared/writeProjects.js";

export async function add(repos: string[]) {
	const categoryKey = "Developer Tooling";

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
		await writeProjects({
			...projectCategories,
			[categoryKey]: {
				...projectCategories[categoryKey],
				projects: [
					...projectCategories[categoryKey].projects,
					...newRepos.map((repo) => ({
						owner: "JoshuaKGoldberg",
						repo,
						// Placeholder data that will be filled in by generate()
						description: "",
						stars: -1,
					})),
				],
			},
		});

		await generate();
	}
}
