import { styleText } from "node:util";

// Factory function to create a proxy with isolated state
const createHandler = (properties = []) => {
	return {
		get(_target, property) {
			// When a property is accessed, create a new proxy with the updated properties
			return createColsysProxy([...properties, property]);
		},

		apply(_target, _thisArg, args) {
			// When the function is invoked, apply the styles using the accumulated properties
			const style = styleText(properties, args.join(" "));
			return style;
		},
	};
};

// Function that generates a new proxy with the given properties
const createColsysProxy = (properties = []) => {
	return new Proxy(() => {}, createHandler(properties));
};

/**
 * Returns a formatted text based on `colors`, `bg`, and `modifiers`, based on
 * [node:util styleText](https://nodejs.org/docs/latest-v22.x/api/util.html#utilstyletextformat-text).
 * @example
 * ```ts
 * colsys.bold("bold");
 * colsys.red("red");
 * colsys.bgRed("bgRed");
 * colsys.red.bold("red+bold");
 * colsys.red(`Hello ${colsys.underline.bgBlue("world")}!`);
 * ```
 *
 * @type {import('./main.d.ts').ColsysProxy}
 */
const colsys = createColsysProxy();

export default colsys;
