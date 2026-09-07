// let parent = {
//   ism: "Mubosher",
//   yosh: 60,
//   child: {
//     ism: "Abubakr",
//     yosh: 40,
//   },
// };

// let {ism,child:{ism:ism2}} = parent
// console.log(ism,ism2);

// let arr = [1,2,3,["Olma","Anor"]]
// let [a,b,c,[e,f]]=arr

// let date = new Date();
// console.log(`${date.toDateString().split(" ")[2]}-${date.toISOString().split("-")[1]}-${date.getFullYear()}, ${date.toTimeString().split(" ")[0]}`);

// let parent = {
//     ism: "Mubosher",
//     yosh: 60,
//     child: {
//         ism: "Abubakr",
//         yosh: 40,
//     },
// };

// // console.log(parent.child.ism);
// let {
//     ism,
//     child: { ism: a },
// } = parent;
// console.log(ism, a);

// let arr = [1, 2, 3, ["Olma", "Anor"]];
// let [a, b, c, [e, f]] = arr;
// console.log(a, b, c, e, f);

// let parentObj = {
//     ism: "Mubosher",
//     yosh: 60,
//     child: {
//         ism: "Abubakr",
//         yosh: 40,
//         skills: ["scratch", "python"],
//     },
//     skills: ["html", "css", "js"],
// };

// function getData({ skills, child: { skills: a } }) {
//     console.log(skills, a);
// }

// getData(parentObj);
// Spreed - obj va array ni parchalab beradi
// Rest - data ni bitta arrayga jamlaydi.

// let arr1 =;
// let arr2 =;
// let arr3 = arr1.concat(arr2);
// let arr4 = [...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

// let obj1 = { ism: "Ali" };
// let obj2 = { ism: "Vali" };

// let obj3 = Object.assign(obj1, obj2);
// let obj4 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj4);


// function getSum(...nums) {
//   return nums.reduce((acc, cur) => acc + cur, 0);
// }

// let sum = getSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(sum);


// let date = new Date();

// console.log(date.getFullYear()); // Yil
// console.log(date.getMonth()); // Oy
// console.log(date.getDate()); // Kun
// console.log(date.getDay()); // Hafta kuni
// console.log(date.getHours()); // Soat
// console.log(date.getMinutes()); // Daqiqa
// console.log(date.getSeconds()); // Soniya
// console.log(date.getMilliseconds()); // Soniyaning mingdan bir qismi
// console.log(date.getTime()); // 1970 yil, 1-yanvardan hozirgi kungacha bo'lgan millisekund

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
