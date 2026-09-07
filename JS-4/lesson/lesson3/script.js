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
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());

// let mapData = new Map();

// console.log(mapData); // Map Object ini qaytadi.

// set
// mapData.set("ism", "Ali");
// mapData.set("yosh", 20);

// console.log(mapData.get("ism"));
// console.log(mapData.get("yosh"));
// console.log(mapData.size);
// console.log(mapData.has("ism"));
// console.log(mapData.has("yosh"));

// console.log(mapData.has("status")); // X
// let key = "ism";
// if (mapData.has(key)) {
//     console.log(mapData.get(key));
// } else {
//     console.log("Bu kalit mavjud emasss?");
// }

// get
// size
// has // true yoki false

// get
// size
// has // true yoki false
// delete
// clear

// mapData.delete("yosh");

// mapData.clear();

// console.log(mapData);

// new Set

// let arr =;
// arr = arr.filter((v, i, a) => !a.slice(i + 1).includes(v));
// console.log(arr);
// arr = Array.from(new Set(arr)); // Set Array qaytadi.
// console.log(arr);

// let setArr = new Set("1, 2, 3, 4");
// let setArr = new Set();
// setArr.add(1);
// setArr.add(2);
// setArr.add("Olma");
// console.log(Array.from(setArr));

// add
// has

// console.log(setArr.has(5));
// console.log(setArr.has("Olma"));
// console.log(setArr.size);
// setArr.delete(2);
// setArr.clear();
// console.log(setArr);

// add
// has
// size
// delete
// clear

// clear

// new WeakMap, new WeakSet
// new Map , new Set

// let data = new WeakMap();
// let key = {};
// data.set(key, "Ali");
// console.log(data.get(key));

// let data = new WeakSet();
// let value1 = { value: 1 };
// data.add(value1);
// data.add({ value: 2 });
// data.add({ value: 3 });

// console.log(data.has(value1));

// data.delete(value1);

// console.log(data.has(value1));

// let mapData = new Map();
// console.log(mapData.set("ism", "Abdurahmon"));
// console.log(mapData.set("familiya", "Abdurashidov"));
// console.log(mapData.set("yosh", 13));
// console.log(mapData.set("manzil", "Namangan tumani Qorako'l qishlog'i"));
// console.log(mapData.set("bilim", "HTML,CSS,JAVASCRIPT"));
// console.log(mapData.get("bilim"));
// console.log(mapData.get("ism"));
// console.log(mapData.get("familiya"));
// console.log(mapData.has("manzil"));
// console.log(mapData.has("status"));
// console.log(mapData.size);
// console.log(mapData.delete("bilim"));
// console.log(mapData.delete("yosh"));
// mapData.clear()
// console.log(mapData);

// let setData = new Set();
// console.log(setData.add("ism", "Abdurahmon"));
// console.log(setData.add("familiya", "Abdurashidov"));
// console.log(setData.add("yosh", 13));
// console.log(setData.add("manzil", "Namangan tumani Qorako'l qishlog'i"));
// console.log(setData.add("bilim", "HTML,CSS,JAVASCRIPT"));
// console.log(setData.has("manzil"));
// console.log(setData.has("status"));
// console.log(setData.size);
// console.log(setData.delete("bilim"));
// console.log(setData.delete("yosh"));
// setData.clear()
// console.log(setData);
