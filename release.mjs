import { exec } from "node:child_process";
import fs from "node:fs";
import { promisify } from 'node:util'

const pkg = fs.readFileSync("package.json");
const packageJSON = JSON.parse(pkg);

packageJSON.scripts = undefined;
packageJSON.devDependencies = undefined;

fs.writeFileSync("package.json", JSON.stringify(packageJSON, undefined, "\t"));

const execPromise = promisify(exec);

const { stdout } =  await execPromise("pnpm publish --no-git-checks")

console.log(stdout);

fs.writeFileSync("package.json", pkg);
