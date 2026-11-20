const inp = document.querySelector(".inp");
const form = document.querySelector("form");
const btn2 = document.querySelector(".btn2");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let color = inp.value;
  form.style.cssText = `
        background-color: ${color};
        box-shadow: 0 0 30px ${color};
    `;
});
btn2.addEventListener("click", function (e) {
  form.style.cssText = `
        background-color: transparent;
        box-shadow: 0 0 30px white;
    `;
});
