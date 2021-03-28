const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let def = 1;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        const depth = this.calculateDepth(item) + 1;
        if (depth > def) {
          def = depth;
        }
      }
    });
    return def;
  }
};
