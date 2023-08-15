import path from "node:path";
import url from "node:url";
import * as emoji from "node-emoji";
import { Octokit } from "octokit";

import { projectCategories } from "../projects.js";
import { Project } from "../types.js";
import { writeFile } from "../shared/writeFile.js";

export async function buildProjects() {
	const { GH_TOKEN: auth } = process.env;
	if (!auth) {
		throw new Error("No auth token specified by process.env.GH_TOKEN.");
	}

	const octokit = new Octokit({ auth });

	for (const { projects } of Object.values(projectCategories)) {
		await processProjects(projects);
	}

	async function processProjects(projects: Project[]) {
		projects.sort((a, b) => b.stars - a.stars);

		for (const project of projects) {
			await processProject(project);
		}
	}

	async function processProject(project: Project) {
		const { owner, repo } = project;
		const response = await octokit.rest.repos.get({ owner, repo });

		project.description = emoji.emojify(
			response.data.description ?? project.description,
		);
		project.stars = response.data.stargazers_count;

		if (project.more) {
			await processProjects(project.more);
		}
	}

	await writeFile(
		path.join(url.fileURLToPath(import.meta.url), "../../projects.json"),
		JSON.stringify(projectCategories),
		"json",
	);

	return projectCategories;
}
