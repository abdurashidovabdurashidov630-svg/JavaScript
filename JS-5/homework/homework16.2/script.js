const url = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1";

const btn_post = document.querySelector(".Post");
const btn_put = document.querySelector(".put");
const btn_del = document.querySelector(".del");

// GET - ma'lumot olish uchun
function getFetchData() {
  fetch(`${url}/user`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err.message);
    });
}

getFetchData();

// POST - yangi ma'lumot qo'shish uchun
function setFetchData(obj) {
  fetch(`${url}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      console.log(res);

      if (res.ok) {
        console.log("to'g'ri saqlandi");
        getFetchData();
      } else {
        throw new Error("Ma'lumot saqlanmadi");
      }
    })
    .catch((err) => alert(err.message));
}

const task = {
  name: "task 3",
  done: false,
};

btn_post.addEventListener("click", () => setFetchData(task));

// PUT - ma'lumotni to'liq o'zgartirish uchun
function updateFetchData(id, newObj) {
  fetch(`${url}/user/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newObj),
  })
    .then((res) => {
      console.log(res);

      if (res.ok) {
        console.log("to'g'ri yangilandi");
        getFetchData();
      } else {
        throw new Error("Ma'lumot yangilanmadi");
      }
    })
    .catch((err) => alert(err.message));
}

const newtask = {
  name: "task 4",
  done: true,
};

btn_put.addEventListener("click", () => updateFetchData(3, newtask));

// DELETE - ma'lumotni o'chirish uchun
function deleteFetchData(id) {
  fetch(`${url}/user/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);

      if (res.ok) {
        console.log("to'g'ri o'chirildi");
        getFetchData();
      } else {
        throw new Error("Ma'lumot o'chirilmadi");
      }
    })
    .catch((err) => alert(err.message));
}

btn_del.addEventListener("click", () => deleteFetchData(3));
