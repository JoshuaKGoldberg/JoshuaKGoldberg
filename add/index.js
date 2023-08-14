import chalk from "chalk";
import fs from "node:fs/promises";
import prettier from "prettier";
import { writeFile } from "../shared/writeFile.js";

const owner = "JoshuaKGoldberg";
const repos = Array.from(new Set(process.argv.slice(2).sort()));

if (!repos.length) {
	throw new Error("No repositories provided.");
}

const existingKey = "Developer Tooling";
const existingFile = JSON.parse(await fs.readFile("./projects.json"));
const existingProjects = existingFile[existingKey].projects;
const existingProjectNames = new Set(
	existingProjects.map((project) => project.repo)
);

const newRepos = repos.filter((repo) => {
	const newLocal = existingProjectNames.has(repo);
	if (newLocal) {
		console.warn(chalk.yellow(`Repo ${repo} already exists...`));
		return false;
	}

	console.info(chalk.blue(`Repo ${repo} does not already exist.`));
	return true;
});

await writeFile(
	"./projects.json",
	JSON.stringify({
		...existingFile,
		[existingKey]: {
			...existingFile[existingKey],
			projects: [
				...existingProjects,
				...newRepos.map((repo) => ({ owner, repo })),
			],
		},
	}),
	"json"
);

await import("../build/index.js");
