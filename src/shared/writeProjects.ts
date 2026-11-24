import { ProjectCategory } from "../types.ts";
import { writeFile } from "./writeFile.ts";

export async function writeProjects(
	projectCategories: Record<string, ProjectCategory>,
) {
	await writeFile(
		"./src/projects.ts",
		`/* cspell:disable */
		import { ProjectCategory } from "./types.ts";
		
		export const projectCategories: Record<string, ProjectCategory> = ${JSON.stringify(
			projectCategories,
			null,
			4,
		)}`,
		"typescript",
	);
}
