import chalk from "chalk";
import { describe, expect, test } from "vitest";
import colsys from "..";
import { styleText } from "util";

describe("basic chalk compatibility", () => {
	test("it can combine styled and normal strings", () => {
		const ns = `${colsys.blue("Hello")} World${colsys.red("!")}`;
		const c = `${chalk.blue("Hello")} World${chalk.red("!")}`;
		expect(ns).toBe(c);
	});

	test("compose multiple styles using the chainable API", () => {
		const ns = colsys.blue.bgRed.bold("Hello world!");
		const c = chalk.blue.bgRed.bold("Hello world!");
		expect(ns).toBe(c);
	});

	test("pass in multiple arguments", () => {
		const ns = colsys.blue("Hello", "World!", "Foo", "bar", "biz", "baz");
		const c = chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz");
		expect(ns).toBe(c);
	});

	test("nest styles", () => {
		const ns = colsys.red(`Hello ${colsys.underline.bgBlue("world")}!`);
		const c = chalk.red(`Hello ${chalk.underline.bgBlue("world")}!`);
    
		expect(ns).toBe(c);
	});

	test.fails("[FAILS] nest styles of the same type even (color, underline, background)", () => {
		const ns = colsys.green(
			`I am a green line ${colsys.blue.underline.bold("with a blue substring")} that becomes green again!`,
		);
		const c = chalk.green(
			`I am a green line ${chalk.blue.underline.bold("with a blue substring")} that becomes green again!`,
		);

		expect(ns).toBe(c);
	});

	test("works with ES2015 template literal", () => {
		const ns = `
      CPU: ${chalk.red("90%")}
      RAM: ${chalk.green("40%")}
      DISK: ${chalk.yellow("70%")}
      `;

		const c = `
      CPU: ${chalk.red("90%")}
      RAM: ${chalk.green("40%")}
      DISK: ${chalk.yellow("70%")}
      `;

		expect(ns).toBe(c);
	});
});

describe.skip("advanced chalk compatibility", () => {
	test("it can parse RGB", () => {
		const ns = colsys
			.rgb(123, 45, 67)
			.underline("Underlined reddish color");
		const c = chalk.rgb(123, 45, 67).underline("Underlined reddish color");

		expect(ns).toBe(c);
	});

	test("it can parse HEX", () => {
		const ns = colsys.hex("#DEADED").bold("Bold gray!");
		const c = chalk.hex("#DEADED").bold("Bold gray!");

		expect(ns).toBe(c);
	});
});
