const CustomError = require("../extensions/custom-error");

// let arr = null;
module.exports = function createDreamTeam(arr) {
  let arr1 = [];
  let arr2 = [];
  let result;
  if (arr == null) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string")
        arr1.push(arr[i].replace(/\s+/g, "").slice(0, 1));
    }
  }
  let r = arr1.join("").toUpperCase();
  arr2 = r.split("").sort();
  result = arr2.join("");

  return result;
};

// createDreamTeam(arr);
// console.log(arr2.join(""));
