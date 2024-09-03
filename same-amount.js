function sameAmount(str,reg1,reg2) {
    let x = str.match(new RegExp(reg1, "g"));
    let y = str.match(new RegExp(reg2, "g"));
    if (x === null || y === null) {
      return false;
    }
    if (x.length === y.length) {
      return true;
    }
    return false;
}