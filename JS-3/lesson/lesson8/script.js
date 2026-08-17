// let arr = [1, 2, 3, 4, 5];
// let yigindi = arr.reduce((acc, cur) => {
//   if (!(cur % 2)) return acc + cur;
//   return acc;
// }, 0);
// console.log(yigindi);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0
// arr.forEach(element => {
//     sum += Value;
// });
// console.log(sum);

// map
// [1, 4, 9, 16, 25]
// let newArr = Array.map((value, index, a) => {
// return value * value
// value ** 2
// return Math.pow(value, 2)
// });
// console.log(newArr);

// let arr = [18, 2, 3, 5, 7, 10, 18]

// let sortArr = arr.sort((a, b) => a - b)
// console.log(sortArr);

// [2, 3, 5, 7, 10, 18]

// let arr = ["Oxford", "Algoritm", "start 21"]
// let sortArr = arr.sort((a, b) => a.localeCompare)
// console.log(sortArr);

// let arr = Array(5).fill("Salom", 0, 2).fill("Alik", 2)
// console.log(arr);

// reduce
// let arr = [1, 2, 3, 4, 5]
// let qiymat = arr.reducec((acc, cur) => {
//     if (cur % 2 === 1) return sum + cur;
//     return sum;
// }, 0)
// console.log(qiymat);

// Array.isArray - tekshirilayotgan qiymat rostanham arraymi

// let data1 = {};
// let data2 = [];

// console.log(typeof data1);
// console.log(typeof data2);

// if (Array.isArray(data1)) {
//     data1.push(1, 2, 3);
// } else if (Array.isArray(data2)) {
//     data2.push(1, 2, 3);
// } else if (!Array.isArray(data1)) {
//     data1.nums = "1, 2, 3";
// } else if (!Array.isArray(data2)) {
//     data2.nums = "1, 2, 3";
// }

// console.log(data1);
// console.log(data2);

// string
// let str = "Gulmat"
// ["G", "u", "l", "m", "a", "t"]

// imutable - Arrayni oziga tasir qiladi
// let arr = [1, 2, 3, 4, 5]
// let copyArr = arr.slice(0, 2)
// console.log(copyArr);

// muteyble - Arrayni oziga tasir qilmaydi. Arrayni oziga tasir korsatadi
// let arr = [1, 2, 3, 4, 5]
// let copyArr = arr.slice(0, 2)
// console.log(copyArr);

// Mutable:sort, fill, copyWithin
// Immutable: map, filter, flat, flatMap
