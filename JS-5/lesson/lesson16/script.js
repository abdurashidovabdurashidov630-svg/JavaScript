const api = "https://jsonplaceholder.typicode.com/users";
// api, url, endpoint, link

// Promise
// fetch("api","option")

// Methods:
// 1. GET - ma'lumot olish uchun ishlatilasi.
// 2. POST - ma'lumot saqlash uchun ishlatilasi.
// 3. PUT - ma'lumotni to'liq o'zgartirish uchun ishlatilasi.
// 4. PATCH - ma'lumotni qisman o'zgartirish uchun ishlatilasi.
// 5. DELETE - ma'lumotni o'chirish uchun ishlatilasi.

// GET
fetch(api)
  .then((res) => res.json())
  .then((res) => console.log(res).catch((err) => alert(err.message)));
// then() - jarayon to'g'ri bajarilganda ishlaydi.
// catch - jarayon error berganda ishlaydi