const CustomError = require("../extensions/custom-error");
// date = new Date(2011, 6, 15)
module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!'
  let m = date.getMonth();
  if (m == 0 || m == 1 || m == 11) {
    return 'winter'
  } else if (m == 2 || m == 3 || m == 4) {
    return "spring"
  } else if (m == 5 || m == 6 || m == 7) {
    return "summer"
  } else
    return "autumn"
}


// let z = getSeason(date);
// console.log(z);
