const lock = document.querySelector(".lock");
const unlock = document.querySelector(".unlock");
const arr = document.querySelectorAll(".inp__box");
const username = arr[0].children[0];
const password = arr[2].children[0];
const btn = document.querySelector("button");
unlock.addEventListener("click", function (e) {
  lock.style.cssText = `
        display: block;
    `;
  unlock.style.cssText = `
        display: none;
    `;
  password.type = "text";
});
lock.addEventListener("click", function (e) {
  unlock.style.cssText = `
        display: block;
    `;
  lock.style.cssText = `
        display: none;
    `;
  password.type = "password";
});
btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "https://uzum.uz";
});
