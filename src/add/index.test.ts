import chalk from "chalk";
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

		expect(mockConsoleInfo).not.toHaveBeenCalled();
		expect(mockConsoleLog).toHaveBeenCalledWith(
			chalk.green("Nothing to update. Bailing."),
		);
		expect(mockConsoleWarn).toHaveBeenCalledWith(
			chalk.yellow(`Repo ${existingProject.repo} already exists...`),
		);
		expect(mockWriteProjects).not.toHaveBeenCalled();
	});

	it("does call writeProjects when a repo needs to be updated", async () => {
		const repo = "new-repo";

		await add([existingProject.repo, repo]);

		expect(mockConsoleInfo).toHaveBeenCalledWith(
			chalk.blue(`Repo ${repo} does not already exist.`),
		);
		expect(mockConsoleLog).toHaveBeenCalledWith(
			chalk.green("Now run the generate command."),
		);
		expect(mockConsoleWarn).toHaveBeenCalledWith(
			chalk.yellow(`Repo ${existingProject.repo} already exists...`),
		);
		expect(mockWriteProjects).toHaveBeenCalledWith({
			Tooling: {
				projects: [
					{
						repo: "existing-repo",
					},
					{
						description: "",
						owner: "JoshuaKGoldberg",
						repo: "new-repo",
						stars: -1,
					},
				],
			},
		});
	});
});
