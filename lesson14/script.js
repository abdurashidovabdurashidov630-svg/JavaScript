// // let algoritm = {
// //   nomi: "Algoritm IT Center",
// //   yil: 2016,
// //   manzil: "Chorsu, DXA binosi.",
// //   telRaqam: "+998 99 999 99 99",
// // };
// // console.log(algoritm.nomi);
// // console.log(algoritm["nomi"]);
// // let str = "nomi";
// // console.log(algoritm[str]);

// // let algoritm = {
// //   nomi: "Algoritm IT Center",
// //   yil: 2016,
// //   manzil: "Chorsu, DXA binosi.",
// //   telRaqam: "+998 99 999 99 99",
// // };

// // // let start21 = Object.assign({}, algoritm);
// // let start21 = structuredClone(algoritm);
// // start21.nomi = "Start 21";

// // console.log(algoritm);
// // console.log(start21);

// // Link o'zgartirishni 2ta usuli bor.

// // 1. Object.assign()
// // 2. structuredClone()

// // ------------------------------------------

// // let algoritm = {
// //   nomi: "Algoritm IT Center",
// //   yil: 2016,
// // };

// // let start21 = {
// //   nomi2: "Start 21",
// //   yil2: 2021,
// // };

// // let combine = Object.assign(algoritm,start21)
// // console.log(combine);

// // let obj = {
// //     ism: "Eshmat",
// //     yil: 2010,
// //     ism: "Toshmat",
// // }
// // console.log(obj);

// let obj = {
//   ism: "Eshmat",
//   yosh: 20,
//   status: "Talaba",
//   manzil: "Toshkent",
// };

// let obj2 = Object.assign({},obj);
// obj.ism = "Toshmat";
// obj.yosh = 27;
// obj.status = "Ishchi";
// obj.manzil = "Namangan";

// let obj3 = structuredClone(obj);
// obj.ism = "Ali";
// obj.yosh = 17;
// obj.status = "Maktab";
// obj.manzil = "Farg'ona";
// console.log("1.",obj3);
// console.log("2.",obj);
