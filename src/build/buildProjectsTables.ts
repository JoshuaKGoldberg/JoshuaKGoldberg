import { buildProjects } from "./buildProjects.js";
import { buildProjectsTable } from "./buildProjectsTable.js";

export async function buildProjectsTables() {
	const projectsData = await buildProjects();

	return (
		await Promise.all(
			Object.entries(projectsData).map(([title, section]) =>
				buildProjectsTable({ ...section, title }),
			),
		)
	).join("\n");
}
