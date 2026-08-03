// forEch 
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// // let sum = 0
// arr.forEach((value, index, a ) => {
// sum += value.length;
// if (index === 3) {
//     console.log(value);
    
// }
// })
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value))
// console.log(sum);


// map
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => {
//     return value+ " olaman."
// })
// console.log(newArr);

// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => ${value} ${index + 1})
// console.log(newArr);

// forEch va map | farqi
// forEch da return ishlamaydi , qiymat qaytarmaydi
// map da return ishlaydi ozidan yangi array qaytaradi. 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => {
//    if (value <= 5) return value
// })

// console.log(newArr);
// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map ((value, index, a) => value * 2)
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = arr.filter((value, index, a) => value % 2 === 1)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value.length))
// console.log(sum);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.filter((value, index, a) => value.length <= 4)
// console.log(newArr);

// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
// return value.length+" "+value
// }) 
// console.log(newArr);

// let arr = [1, 20, 14, 7, 2, 5, 18, 17];
// let newArr = arr.filter
//  ((value, index, a) => value >= 10 && value < 100)
//  console.log(newArr);
 
// let arr = ["olma", "Nok", "Uzum", "Shaftoli"]
// let newArr = arr.map((value, index, a) => {
//   return *${value.slice(1)}
// })
// console.log(newArr);

// find() - array ichidagi  qiymat qidiradi. topsa qiymatni qaytaradi.
// topa olmasa undefined qaytaradi

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// let newValue = arr.find((value, index, a) => {
// if (value === "Apelsin") return value;
// })
// console.log(newValue);

// findindex()

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"]
// arr.findIndex((value, index, a) => value === "Olma")

// let i = arr.findLastIndex((value, index, a) => {
//     if (value === "Nok") return index
// })

// console.log(i);