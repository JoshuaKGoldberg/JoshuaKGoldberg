import type { KnipConfig } from "knip";

export default {
	entry: ["src/**/*.test.*"],
	ignoreExportsUsedInFile: { interface: true, type: true },
	project: ["!src/{add,generate,shared}/**!", "src/**/*.ts!"],
	treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
