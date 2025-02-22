// Creating multilevel array
const arr = [
  ["1", "2"],
  ["3", "4", "5", ["6"], "7"],
];

// Flat the multilevel array
const flatArr = arr.flat(Infinity);
console.log(flatArr);
