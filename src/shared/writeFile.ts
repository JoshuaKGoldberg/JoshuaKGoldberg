import fs from "node:fs/promises";
import prettier from "prettier";

let config: null | prettier.Options = null;

export async function writeFile(
	filePath: string,
	contents: string,
	parser: string,
) {
	config ??= await prettier.resolveConfig(filePath);

	await fs.writeFile(
		filePath,
		await prettier.format(contents, { parser, ...config }),
	);
}
