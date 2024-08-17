import { styleText } from "node:util";

type OmitArray<T> = T extends (infer U)[] ? U : T;

type Params = OmitArray<Parameters<typeof styleText>[0]>;

type NodeStylesProxy = {
	[key in Params]: NodeStylesProxy;
	(...args: any[]): string;
}

declare const nodeStyles: NodeStylesProxy;

export default nodeStyles;
