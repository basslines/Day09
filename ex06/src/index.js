function comparisionToEqual(a) {
  if (a < 5) {
    return "Less than 5";
  }
  if (a < 10) {
    return "Less than 10";
  }
  if (a > 20) {
    return "More than 20";
  }
  if (a >= 10) {
    return "10 or over";
  }
}

console.log(comparisionToEqual(0));
console.log(comparisionToEqual(5));
console.log(comparisionToEqual(17));
console.log(comparisionToEqual(21));

module.exports = comparisionToEqual;
