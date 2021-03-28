const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        if (i < arr.length - 1) {
          arr1.push(arr[i + 1]);
        }
        break;
      case "--discard-next":
        i += 1;
        break;
      case "--double-prev":
        if (i - 1 >= 0 && arr[i - 2] !== "--discard-next") {
          arr1.push(arr[i - 1]);
        }
        break;
      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") {
          arr1.pop();
        }
        break;
      default:
        arr1.push(arr[i]);
    }
  }
  return arr1;
};
