document.addEventListener("DOMContentLoaded", function () {
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = "<i>Oxford</i>"
  // console.log(h1);
  // inner - ichki
  // HTML - struktura
  // h1.outerHTML = "Salom"
  // h1.outerHTML = "<div>Oxford</div>"
  // outer - tashqi
  // HTML - struktura
  // h1.innerText = "Namangan"
  // h1.outerText = "O'zbekiston"
  // h1.textContent = "Chorsu"
  // console.log(h1.textContent);
  // console.log(h1);
  // console.log(h1.innerText);
  // console.log(h1.outerText);
  // let p = document.querySelector("p");
  // console.log(p.hasAttribute("class"));
  // p.setAttribute("class", "title box");
  // console.log(p.hasAttribute("class"));
  // console.log(p.getAttribute("class"));
  // p.removeAttribute("class")
  // console.log(p.hasAttribute("class"));
  // const body = document.getElementsByTagName("body")[0];
  // const p = document.getElementsByTagName("p")[0];
  // let h1 = document.createElement("h1");
  // h1.textContent = "Algoritm";
  // body.append(h1)
  // body.prepend(h1)
  // p.before(h1);
  // p.after(h1);
  // h1.remove();
  // let h2 = document.createElement("h2");
  // h2.textContent = "Oxford";
  // h1.replaceWith(h2);
  const body = document.querySelector("body");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  // wrapper.style.width = "400px";
  // wrapper.style.height = "200px";
  // wrapper.style.border = "2px solid red";
  wrapper.style.cssText = `
        width: 500px;
        height: 200px;
        border: 2px solid red;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
    `;

  const box1 = document.createElement("div");
  const box2 = document.createElement("div");
  const box3 = document.createElement("div");

  box1.style.cssText = `
        width: 100px;
        height: 100px;
        border: 2px solid green;
        background-color: lightgreen;
    `;

  box2.style.cssText = `
        width: 100px;
        height: 100px;
        border: 2px solid green;
        background-color: lightgreen;
    `;

  box3.style.cssText = `
        width: 100px;
        height: 100px;
        border: 2px solid green;
        background-color: lightgreen;
    `;

  wrapper.append(box1);
  wrapper.append(box2);
  wrapper.append(box3);

  body.prepend(wrapper);

  wrapper.hasAttribute("class") && (wrapper.style.backgroundColor = "pink");

  // wrapper.className = "Ali";

  wrapper.classList.add("Ali");
  // wrapper.classList.remove("wrapper");

  const btn = document.createElement("button");
  btn.textContent = "Click me";

  btn.addEventListener("click", function () {
    wrapper.classList.toggle("active"); // class bor bo'lsa avval o'chiradi, yo'q bo'lsa qo'shadi.
    console.log(wrapper.classList.contains("active"));
  });

  wrapper.classList.replace("Ali", "Vali");

  body.prepend(btn);
});
