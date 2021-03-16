function myForLoop1() {
  for (var evenNumbers = 0; evenNumbers < 10; evenNumbers++) {
    if (evenNumbers % 2 == 0) {
      console.log("String of: " + evenNumbers);
    }
  }
}

function myForLoop2() {
  for (var evenInverseNumbers = 8; evenInverseNumbers > -1; evenInverseNumbers--) {
    if (evenInverseNumbers % 2 == 0) {
      console.log("String of: " + evenInverseNumbers);
    }
  }
}

console.log(myForLoop1());
console.log(myForLoop2());


module.exports = {
  myForLoop1,
  myForLoop2,
};
