const CustomError = require("../extensions/custom-error");
let arr = [];
const chainMaker = {
  getLength() {
    arr.length();
  },
  addLink(value) {
    arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number(position)) {
      arr = [];
      throw new Error("Error");
    }
    arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    arr.reverse();
    return this;
  },
  finishChain() {
    const chain = arr.join("~~");
    arr = [];
    return chain;
  }
};

module.exports = chainMaker;
