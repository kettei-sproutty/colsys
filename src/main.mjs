import { styleText } from "node:util";

let properties = [];

const handler = {
  get(_target, property, receiver) {
    properties.push(property);
    return receiver;
  },

  apply(_target, _thisArg, args) {
    const style = styleText(properties, args.join(" "));
    properties = [];
    return style
  }
};

const colsys = new Proxy(() => {}, handler);

export default colsys;