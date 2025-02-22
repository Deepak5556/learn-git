const arr = [
  ["1", "2"],
  ["3", "4", "5", ["6"], "7"],
];
const flatArr = arr.flat(Infinity);
console.log(flatArr);
