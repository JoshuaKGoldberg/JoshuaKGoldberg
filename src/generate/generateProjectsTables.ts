import { generateProjects } from "./generateProjects.js";
import { generateProjectsTable } from "./generateProjectsTable.js";

export async function generateProjectsTables() {
	const projectsData = await generateProjects();

	return Object.entries(projectsData)
		.map(([title, section]) => generateProjectsTable({ ...section, title }))
		.join("\n");
}
