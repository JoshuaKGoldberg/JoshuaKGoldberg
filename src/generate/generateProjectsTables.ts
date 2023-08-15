import { generateProjects } from "./generateProjects.js";
import { generateProjectsTable } from "./generateProjectsTable.js";

export async function generateProjectsTables() {
	const projectsData = await generateProjects();

	return (
		await Promise.all(
			Object.entries(projectsData).map(([title, section]) =>
				generateProjectsTable({ ...section, title }),
			),
		)
	).join("\n");
}
