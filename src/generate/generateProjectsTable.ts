import { Project } from "../types.ts";

export interface ProjectsTableOptions {
	description: string;
	projects: Project[];
	title: string;
}

export function generateProjectsTable({
	description,
	projects,
	title,
}: ProjectsTableOptions) {
	return `
### ${title}

${description.replaceAll(". ", ".\n")}

<table width="100%">
	<thead>
		<th span="col">Project ⚙️</th>
		<th span="col">Description 📝</th>
		<th span="col">Role 🧑‍🏭</th>
		<th span="col">Stars ⭐</th>
	</thead>
	<tbody>
		${projects
			.map(
				({
					description,
					repo,
					name = repo,
					owner,
					role = "Creator & maintainer",
				}) =>
					`
		<tr>
			<th span="row"><a href="https://github.com/${owner}/${repo}">${name}</a></th>
			<td>${description}</td>
			<td>${role}</td>
			<td><img alt="Stars: ${name}" src="https://img.shields.io/github/stars/${owner}/${repo}" /></td>
		</tr>
		`.trim(),
			)
			.join("\n\t\t")}
	</tbody>
</table>
`.trimStart();
}
