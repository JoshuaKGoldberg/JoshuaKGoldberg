import { generateProjects } from "./generateProjects.ts";
import { generateProjectsTable } from "./generateProjectsTable.ts";

export async function generateProjectsTables() {
	const projectsData = await generateProjects();

	return Object.entries(projectsData)
		.map(([title, section]) => generateProjectsTable({ ...section, title }))
		.join("\n");
}
