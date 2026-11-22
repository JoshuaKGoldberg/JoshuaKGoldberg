import { Project } from "../types.ts";

export function byStars(a: Project, b: Project) {
	return b.stars - a.stars;
}
