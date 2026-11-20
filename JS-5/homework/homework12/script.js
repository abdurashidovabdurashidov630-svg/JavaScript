const form = document.querySelector("form");
const form2 = document.querySelector(".form_malumotlari");
const inp = document.querySelector("#Ism");
const inp2 = document.querySelector("#Familiya");
const inp3 = document.querySelector("#Yosh");
const inp4 = document.querySelector("#TEL");
const inp5 = document.querySelector(".Shaxsiy");
const inp6 = document.querySelector("#o");
const inp7 = document.querySelector("#oo");
const inp8 = document.querySelector("#checkbox");
const eye = document.querySelector(".eye");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let talaba = document.createElement("div");
  let ism = document.createElement("h6");
  let familiya = document.createElement("h6");
  let yosh = document.createElement("h6");
  let tel = document.createElement("h6");
  let vaqt = document.createElement("h6");
  ism = `Ism: ${inp.value}`;
  familiya = `Familiya: ${inp2.value}`;
  yosh = `Yosh: ${inp3.value}`;
  tel = `Tel: ${inp4.value}`;
  inp6.addEventListener("change", function (e) {
    if (inp6.checked) vaqt = `O'qish vaqti: Ertalab`;
    inp7.addEventListener("change", function (e) {
      if (inp7.checked) vaqt = `O'qish vaqti: Abeddan keyin`;
    });
  });
  talaba.setAttribute("class","talaba")
  talaba.append(ism, familiya, yosh, tel, vaqt);
  form2.append(talaba);
  inp.value = "";
  inp2.value = "";
  inp3.value = "";
  inp4.value = "";
  inp5.value = "";
  inp.value = "";
});

eye.addEventListener("click", function (e) {
  if (inp5.type === "password") inp5.type = "text";
  else inp5.type = "password";
});
