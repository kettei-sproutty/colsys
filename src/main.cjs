const util = require("node:util");

const handler = {
	get(target, property) {
    let properties = [];
    if (target && typeof target === 'function' && target()) {
      properties = target().properties || [];
    }
    properties.push(property)
    return new Proxy(() => ({ properties }), handler);
	},

	apply(target, _thisArg, args) {
		const properties = target().properties;
		return util.styleText(properties, args.join(" "));
	},
};

const nodeSyles = new Proxy(function() {}, handler);

module.exports = nodeSyles;
