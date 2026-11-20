// Recursion Function - funksiya o'zini ichida o'zi chaqirilishiga aytiladi.

// let value = 1;
// function kopaytma(raqam) {
//   if (raqam) {
//     value *= raqam;
//     return kopaytma(raqam - 1);
//   }
// }
// kopaytma(5)
// console.log(value);

// Factorial
// !5 = 5 * 4 * 3 * 2 * 1 = 120
// !4 = 4 * 3 * 2 * 1 = 24

// let value = 0;
// function kopaytma(raqam) {
//   if (raqam) {
//     value += raqam;
//     return kopaytma(raqam - 1);
//   }
// }
// kopaytma(100)
// console.log(value);

// let webbrain = {
//   frontend: [
//     { course: "react", price: 120 },
//     { course: "vue", price: 110 },
//     { course: "angular", price: 100 },
//   ],
//   backend: [
//     { course: "java", price: 120 },
//     { course: "php", price: 110 },
//     { course: "nodejs", price: 100 },
//   ],
//   mobile: {
//     android: [
//       { course: "android", price: 120 },
//       { course: "flutter", price: 110 },
//     ],
//     ios: [
//       { course: "ios", price: 120 },
//       { course: "flutter", price: 110 },
//     ],
//   },
// };

// let allPrice = 0;
// function getPrice(obj) {
//   for (let key in obj) {
//     if (!Array.isArray(obj[key])) {
//       return getPrice(obj[key]);
//     }
//     allPrice += obj[key].reduce((acc, cur) => acc + cur.price, 0);
//   }
// }d
// getPrice(webbrain);
// console.log(allPrice);

// let value = 1
// function kopaytma(num) {
//     if(num >= 1){
//         value *= num
//         return kopaytma(num-1)
//     }
// }
// kopaytma(5)
// console.log(value);