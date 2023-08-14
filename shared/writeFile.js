import fs from "node:fs/promises";
import prettier from "prettier";

let config;

export async function writeFile(filePath, contents, parser) {
	config ??= await prettier.resolveConfig("./projects.json");

	await fs.writeFile(
		filePath,
		await prettier.format(contents, { parser, ...config })
	);
}
