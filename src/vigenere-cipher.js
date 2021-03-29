const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    let str = [];
    let code = 0;
    let m = message.toUpperCase();
    let k = key.toUpperCase();

    for (let i = 0, j = 0; i < m.length; i++) {
      if (m.charCodeAt(i) < 65 || m.charCodeAt(i) > 90) str[i] = m[i];
      else {
        code = (m.charCodeAt(i) + k.charCodeAt(j)) % 26;
        str[i] = String.fromCharCode(code + 65);
        if (j + 1 >= k.length) j = 0;
        else j++;
      }
    }
    if (this.direct) return str.join("");
    else return str.reverse().join("");
  }

  decrypt(message, key) {
    let str = [];
    let code = 0;
    let m = message.toUpperCase();
    let k = key.toUpperCase();

    for (let i = 0, j = 0; i < m.length; i++) {
      if (m.charCodeAt(i) < 65 || m.charCodeAt(i) > 90) str[i] = m[i];
      else {
        code = (m.charCodeAt(i) + 26 - k.charCodeAt(j)) % 26;
        str[i] = String.fromCharCode(code + 65);
        if (j + 1 >= k.length) j = 0;
        else j++;
      }
    }

    if (this.direct) return str.join("");
    else return str.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
