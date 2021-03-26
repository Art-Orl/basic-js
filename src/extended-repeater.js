// const CustomError = require("../extensions/custom-error");
str = "STRING";
// options = {
//   repeatTimes: 3,
//   separator: '**',
//   addition: 'PLUS',
//   additionRepeatTimes: 3,
//   additionSeparator: '00'
// }

// console.log(options.additionSeparator.length)
module.exports = function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (typeof options.addition === "undefined") {
    options.addition = "";
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.separator) {
    options.separator = "+";
  }
  let result = "";
  let y = ""
  for (let j = 1; j < options.additionRepeatTimes + 1; j++) {
    y += options.addition + options.additionSeparator;

  }
  let u = y.slice(0, -options.additionSeparator.length)
  for (let i = 1; i < options.repeatTimes + 1; i++) {
    result += options.separator + str + u;
  }
  let result1 = result.slice(options.separator.length)
  return result1;
};

// let x = repeater(str, options);
// console.log(x);
