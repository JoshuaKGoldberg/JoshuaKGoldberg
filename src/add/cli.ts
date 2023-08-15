import { add } from "./index.js";

const repos = Array.from(new Set(process.argv.slice(2).sort()));

await add(repos);
