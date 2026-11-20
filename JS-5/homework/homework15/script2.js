const body = document.querySelector("body");
const form = document.querySelector("#user_form");
const inp = document.querySelector("#name");
const inp2 = document.querySelector("#password");
const eye = document.querySelector("#eye");
const nur = document.querySelector(".nur");
let text = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  text = inp.value;
  console.log(inp.value);
  console.log(inp2.value);
  inp.value = "";
  inp2.value = "";
});
eye.addEventListener("click", function (e) {
  if (inp2.type === "text") {
    inp2.type = "password";
    body.style.cssText = `
        background: linear-gradient(125deg, rgba(131, 35, 209, 0.679), rgb(94, 40, 196), blueviolet)
    `;
    inp2.style.cssText = `
        background-color: white;
        border: 1px solid white;
    `;
    nur.style.cssText = `
        visibility: hidden;
    `;
  } else {
    inp2.type = "text";
    nur.textContent = inp2.value;
    inp2.value = "";
    body.style.cssText = `
        background: linear-gradient(125deg, black, black, black)
    `;
    inp2.style.cssText = `
        background-color: black;
        border: none;
        color: white;
        z-index: 1;
    `;
    nur.style.cssText = `
        visibility: visible;
        z-index: 2;
        color: white;
        font-size: 30px;
        padding-left: 15px;
    `;
  }
});
