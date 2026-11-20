// DOM = Document Object Model

// const knopka = document.querySelector(".btn");
// const a = document.querySelector("#sarlavha");
// const abubakr = document.querySelector("p")
// const abubakr = document.querySelectorAll("p");
// querySelector - htmldagi elementni tanlab olish uchun ishlatiladi.
// querySelector - shu nomdagi barcha elementlarni tanlab, array ko'rinishida qaytaradi.
// console.log(knopka);
// console.log(a);
// console.log(abubakr[0].textContent);

// let count = 0;
// knopka.addEventListener("click", function logger() {
//   console.log(count+=10);
// });
// addEventListener - qaysidir elementga hodisa qo'shish uchun ishlatiladi.
// const idBoyichaTanlanganLaylo = document.getElementById("laylo")
// console.log(idBoyichaTanlanganLaylo);
// const bomba = document.getElementById("bomb");

// bomba.addEventListener("click", function a() {
//   alert("Bu button hozir portlaydi qoch!");
// });
const a = document.getElementById("salomlash")
a.addEventListener("click",function salom() {
    alert(`Salom ${a.textContent}`)
})