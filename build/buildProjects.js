import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

import * as emoji from "node-emoji";
import prettier from "prettier";
import { Octokit } from "octokit";
import { writeFile } from "../shared/writeFile";

export async function buildProjects() {
	const projectsFile = path.join(
		url.fileURLToPath(import.meta.url),
		"../../projects.json"
	);
	const { default: projectsData } = await import(projectsFile, {
		assert: { type: "json" },
	});
	const octokit = new Octokit({
		auth: process.env.GH_TOKEN,
	});

	for (const { projects } of Object.values(projectsData)) {
		await processProjects(projects);
	}

	async function processProjects(projects) {
		projects.sort((a, b) => b.stars - a.stars);

		for (const project of projects) {
			await processProject(project);
		}
	}

	async function processProject(project) {
		const { owner, repo } = project;
		const response = await octokit.rest.repos.get({ owner, repo });

		project.description = emoji.emojify(response.data.description);
		project.stars = response.data.stargazers_count;

		if (project.more) {
			await processProjects(project.more);
		}
	}

	await writeFile(projectsFile, JSON.stringify(projectsData), "json");

	return projectsData;
}
