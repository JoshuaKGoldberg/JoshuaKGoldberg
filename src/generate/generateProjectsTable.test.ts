import { expect, test } from "vitest";

import { generateProjectsTable } from "./generateProjectsTable.ts";

test("generateProjectsTable", () => {
	expect(
		generateProjectsTable({
			description: "Test description.",
			projects: [
				{
					description: "Test project description.",
					owner: "TestOwner",
					repo: "test-repo",
					stars: 123,
				},
			],
			title: "Test Title",
		}),
	).toMatchInlineSnapshot(`
		"### Test Title

		Test description.

		<table width="100%">
			<thead>
				<th span="col">Project ⚙️</th>
				<th span="col">Description 📝</th>
				<th span="col">Role 🧑‍🏭</th>
				<th span="col">Stars ⭐</th>
			</thead>
			<tbody>
				<tr>
					<th span="row"><a href="https://github.com/TestOwner/test-repo">test-repo</a></th>
					<td>Test project description.</td>
					<td>Creator & maintainer</td>
					<td><img alt="Stars: test-repo" src="https://img.shields.io/github/stars/TestOwner/test-repo" /></td>
				</tr>
			</tbody>
		</table>
		"
	`);
});
