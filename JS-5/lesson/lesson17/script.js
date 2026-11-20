// fetch() - Backend ga so'rov yuborish uchun kerak.

const url = "https://jsonplaceholder.typicode.com";

// GET - Ma'lumot olish uchun ishlatiladi
fetch(`${url}/posts`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  });
fetch(`${url}/users`);