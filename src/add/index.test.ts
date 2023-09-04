import { SpyInstance, beforeEach, describe, expect, it, vi } from "vitest";

import { add } from "./index.js";

let mockConsoleInfo: SpyInstance;
let mockConsoleLog: SpyInstance;
let mockConsoleWarn: SpyInstance;

const mockWriteProjects = vi.fn();

vi.mock("../shared/writeProjects.js", () => ({
	get writeProjects() {
		return mockWriteProjects;
	},
}));

const existingProject = {
	repo: "existing-repo",
};

vi.mock("../projects.js", () => ({
	get projectCategories() {
		return {
			Tooling: {
				projects: [existingProject],
			},
		};
	},
}));

describe("add", () => {
	beforeEach(() => {
		mockConsoleInfo = vi
			.spyOn(console, "info")
			.mockImplementation(() => undefined);
		mockConsoleLog = vi
			.spyOn(console, "log")
			.mockImplementation(() => undefined);
		mockConsoleWarn = vi
			.spyOn(console, "warn")
			.mockImplementation(() => undefined);
	});

	it("throws an error when no repositories are provided", async () => {
		await expect(async () => add([])).rejects.toMatchInlineSnapshot(
			"[Error: No repositories provided.]",
		);
	});

	it("does not call writeProjects when all repos are up to date", async () => {
		await add([existingProject.repo]);

		expect(mockConsoleInfo.mock.calls).toMatchInlineSnapshot("[]");
		expect(mockConsoleLog.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "[32mNothing to update. Bailing.[39m",
			  ],
			]
		`);
		expect(mockConsoleWarn.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "[33mRepo existing-repo already exists...[39m",
			  ],
			]
		`);
		expect(mockWriteProjects.mock.calls).toMatchInlineSnapshot("[]");
	});

	it("does call writeProjects when a repo needs to be updated", async () => {
		await add([existingProject.repo, "new-repo"]);

		expect(mockConsoleInfo.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "[34mRepo new-repo does not already exist.[39m",
			  ],
			]
		`);
		expect(mockConsoleLog.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "[32mNow run the generate command.[39m",
			  ],
			]
		`);
		expect(mockConsoleWarn.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "[33mRepo existing-repo already exists...[39m",
			  ],
			]
		`);
		expect(mockWriteProjects.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    {
			      "Tooling": {
			        "projects": [
			          {
			            "repo": "existing-repo",
			          },
			          {
			            "description": "",
			            "owner": "JoshuaKGoldberg",
			            "repo": "new-repo",
			            "stars": -1,
			          },
			        ],
			      },
			    },
			  ],
			]
		`);
	});
});
