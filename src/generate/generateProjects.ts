import * as emoji from "node-emoji";
import { Octokit } from "octokit";

import { projectCategories } from "../projects.js";
import { writeProjects } from "../shared/writeProjects.js";
import { Project } from "../types.js";
import { byStars } from "./byStars.js";

export async function generateProjects() {
	const { GH_TOKEN: auth } = process.env;
	if (!auth) {
		throw new Error("No auth token specified by process.env.GH_TOKEN.");
	}

	const octokit = new Octokit({ auth });

	for (const { projects } of Object.values(projectCategories)) {
		await processProjects(projects);
	}

	async function processProjects(projects: Project[]) {
		projects.sort(byStars);

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

	await writeProjects(projectCategories);

	return projectCategories;
}
