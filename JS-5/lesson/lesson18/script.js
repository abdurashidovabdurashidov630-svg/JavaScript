// localStorage.setItem("ism", "Abdurahmon");
// let a = localStorage.getItem("ism");
// console.log(a);

// const user = {
//   ism: "Abubakr",
//   age: 13,
//   isStudent: true,
// };

// localStorage.setItem("foydalanuvchi", JSON.stringify(user));
// let a = JSON.parse(localStorage.getItem("foydalanuvchi"));
// console.log(typeof a);
// console.log(a.isStudent);

// sessionStorage.setItem("foydalanuvchi", JSON.stringify(user));
// let a = JSON.parse(sessionStorage.getItem("foydalanuvchi"));
// console.log(a.ism);

// document.cookie = "username=Mubosher";
// console.log(document.cookie);

// -------------------------------------------------------------------

let data = [
  {
    id: 1,
    name: "Ibrohim",
    status: "active",
  },
  {
    id: 2,
    name: "Abubakr",
    status: "inactive",
  },
  {
    id: 3,
    name: "Mubosher",
    status: "active",
  },
];
localStorage.setItem("foydalanuvchi", JSON.stringify(data));
let a = JSON.parse(localStorage.getItem("foydalanuvchi"));
console.log(data.filter((obj) => obj.status === "active"));
