import { exec, execSync } from "child_process";
import fs from "fs";

const pkg = fs.readFileSync("package.json");
const packageJSON = JSON.parse(pkg);

packageJSON.scripts = undefined;
packageJSON.devDependencies = undefined;

console.log(packageJSON);

fs.writeFileSync("package.json", JSON.stringify(packageJSON, undefined, "\t"));

execSync("pnpm pack");

fs.writeFileSync("package.json", pkg);
