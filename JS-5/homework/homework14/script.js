const body = document.querySelector("body");
const form = document.querySelector("form");
const label1 = document.querySelector(".lbl1");
const label2 = document.querySelector(".lbl2");
const inp1 = document.querySelector(".ism");
const inp2 = document.querySelector(".familiya");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inp1.value && inp2.value) {
    form.style.cssText = `
      display: none;
      `;
    label1.style.cssText = `
      display: none;
      `;
    label2.style.cssText = `
      display: none;
      `;
    inp1.style.cssText = `
      display: none;
      `;
    inp2.style.cssText = `
      display: none;
      `;
  }
  let div = document.createElement("div");
  div.style.cssText = `
    border: 2px solid black;
    border-radius: 20px;
    width: 300px;
    height: 32px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: white;
    `;
  let div2 = document.createElement("div");
  div2.classList.add("loading");

  let text = document.createElement("span");
  text.textContent = "Loading...";
  text.classList.add("a");
  div.append(div2,text);
  body.style.cssText = `
    background: linear-gradient(125deg, blueviolet);
  `
  body.append(div);
});
