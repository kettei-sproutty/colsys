const util = require('node:util');

const handler = {
	get(target, property) {
		const properties = target?.()?.properties || [];
		properties.push(property);
		return new Proxy(() => ({ properties }), handler);
	},

	apply(target, _thisArg, args) {
		const properties = target?.()?.properties;
		return util.styleText(properties, args.join(' '));
	},
};

const nodeSyles = new Proxy(() => {}, handler);

module.exports = nodeSyles;
