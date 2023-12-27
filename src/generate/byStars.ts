import { Project } from "../types.js";

export function byStars(a: Project, b: Project) {
	return b.stars - a.stars;
}
