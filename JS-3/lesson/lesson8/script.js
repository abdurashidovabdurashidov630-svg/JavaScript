let arr = [1, 2, 3, 4, 5];
let yigindi = arr.reduce((acc, cur) => {
  if (!(cur % 2)) return acc + cur;
  return acc;
}, 0);
console.log(yigindi);