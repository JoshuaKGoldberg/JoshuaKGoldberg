import { projectCategories } from "./projects.js";

export { projectCategories };

export type * from "./types.js";

export async function add() {
	await import("./add/index.js");
}

export async function build() {
	await import("./add/index.js");
}
