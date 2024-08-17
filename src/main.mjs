import { styleText } from "node:util";

const handler = {
	get(target, property) {
		const properties = target?.()?.properties || [];
		properties.push(property);
		return new Proxy(() => ({ properties }), handler);
	},

	apply(target, _thisArg, [message]) {
		const properties = target?.()?.properties;
		return styleText(properties, message);
	},
};

const nodeSyles = new Proxy(() => {}, handler);

export default nodeSyles;
