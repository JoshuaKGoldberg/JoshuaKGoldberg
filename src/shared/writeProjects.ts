import { ProjectCategory } from "../types.js";
import { writeFile } from "./writeFile.js";

export async function writeProjects(
	projectCategories: Record<string, ProjectCategory>,
) {
	await writeFile(
		"./src/projects.ts",
		`/* cspell:disable */
		import { ProjectCategory } from "./types.js";
		
		export const projectCategories: Record<string, ProjectCategory> = ${JSON.stringify(
			projectCategories,
			null,
			4,
		)}`,
		"typescript",
	);
}
