const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// let SA = "3.142";
module.exports = function dateSample(SA) {
  let z;
  let b;
  if (
    typeof SA == "string" &&
    Math.abs(SA) == +SA &&
    SA < 15 &&
    SA !== "0" &&
    SA !== "" &&
    SA !== " " &&
    SA !== " \n\t\r"
  ) {
    z = SA;
    const t = 0.693 / 5730;
    let x = Math.log(15 / z) / t;
    b = Math.ceil(x);
  } else {
    b = false;
  }
  return b;
};

// let n = dateSample(SA);
// console.log(n);
