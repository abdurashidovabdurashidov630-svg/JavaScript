// try {
//   console.log(ism);
// } catch (err) {
//   console.log(err.name + ":", err.message);
// }
// // ❌{
// function getData(callback) {
//   return callback(ildiz);
// }
// const ildiz = (yil) => {
//   return yil;
// };
// const sum = (callback2) => {
//   return callback2(2026);
// };
// console.log(getData(sum));
// // }❌

// let promise = new Promise((resolve, reject) => {
//   //   resolve - ✅
//   //   reject - ❌
//   //   Toq son - ✅
//   //   Juft son - ❌
//   let date = new Date();
//   let s = date.getSeconds();
//   if (s % 2) {
//     resolve(`${s} soni toq son - ✅`);
//   } else reject(`${s} soni juft son - ❌`);
// });

// promise
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res))
//   .finally(() => console.log("Jarayon ti'liq yakunlandi."));

// then() - bu ish to'g'ri bajarilsa va to'g'ri data olib kelinsa ishlaydi. ✅
// catch() - bu error berganda error ni olib keladi. ❌
// finally() - jarayon yakunlanganda ishlaydi.

// ================================================

// fetch() - vazifasi backend bilan bog'lanish uchun ko'prik.
// fetch - bu JS ning shaxsiy funksiyasi hisoblanib buni barcha browser lar qo'llab quvvatlaydi.

// api, url, endPoint, silka
// const api = "https://jsonplaceholder.typicode.com/users";
// let data = fetch(api);
// // birimchi then dan doim JSON data qaytadi.
// data
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.name));
