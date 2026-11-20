const on = document.querySelector(".on");
const off = document.querySelector(".off");
const bottom = document.querySelector(".bottom");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");
const div = document.querySelector(".div");
on.addEventListener("click", function (e) {
  bottom.style.cssText = `
        background-color: rgb(245, 255, 198);
    `;
  circle.style.cssText = `
        background-color: rgb(245, 255, 198);
    `;
  body.style.cssText = `
        background: rgb(245, 255, 198);
    `;
  div.style.cssText = `
        background: rgb(245, 255, 198);
    `;
});
off.addEventListener("click", function (e) {
  bottom.style.cssText = `
        background-color: transparent;
    `;
  circle.style.cssText = `
        background-color: transparent;
    `;
  body.style.cssText = `
        background-color: rgb(170, 0, 255);
    `;
  div.style.cssText = `
        background: rgb(170, 0, 255);
    `;
});
