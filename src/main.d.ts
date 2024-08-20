import { styleText } from "node:util";

type OmitArray<T> = T extends (infer U)[] ? U : T;

type Params = OmitArray<Parameters<typeof styleText>[0]>;

export type ColsysProxy = {
	[key in Params]: ColsysProxy & ((...args: any[]) => string);
};

/**
 * Returns a formatted text based on `colors`, `bg` and `modifiers`, based on
 * [node:util styleText](https://nodejs.org/docs/latest-v22.x/api/util.html#utilstyletextformat-text).
 * @example
 * ```ts
 * colsys.bold("bold");
 * colsys.red("red");
 * colsys.bgRed("bgRed");
 * colsys.red.bold("red+bold");
 * ```
 */
declare const colsys: ColsysProxy;

export default colsys;
