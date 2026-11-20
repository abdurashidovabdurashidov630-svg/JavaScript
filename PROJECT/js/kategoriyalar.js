let url = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1/tranzaksiya";
let dashboard = document.querySelector(".dashboard");
let tranzaksiyalar = document.querySelector(".tranzaksiyalar");
let kategoriyalar = document.querySelector(".file");
let profil = document.querySelector(".user");
let Yangi_tranzaksiya_inp = document.querySelector(".Yangi_tranzaksiya_inp");
let x = document.querySelector(".x");
let nomi = document.querySelector("#nomi");
let qoshish = document.querySelector(".b_q_q");
let bekor = document.querySelector(".b_q_b");
let Yangi_kategoriya = document.querySelector(".Yangi_kategoriya");
let kategories = document.querySelector(".kategories");
let u_x_k = document.querySelector(".u_x_k");

let errorMsg = document.createElement("p");
errorMsg.style.color = "red";
errorMsg.style.fontSize = "12px";
errorMsg.style.marginTop = "4px";
errorMsg.style.display = "none";
errorMsg.textContent = "Bu kategoriya qo'shilgan";
nomi.parentNode.appendChild(errorMsg);

tranzaksiyalar.addEventListener("click", function () {
  window.location = "./tranzaksiyalar.html";
});
dashboard.addEventListener("click", function () {
  window.location = "./dashboard.html";
});
profil.addEventListener("click", function () {
  window.location = "./profil.html";
});

Yangi_kategoriya.addEventListener("click", function () {
  Yangi_tranzaksiya_inp.style.display = "block";
});

let iconParentButtons = document.querySelectorAll(
  ".icon-btns-container button",
);
let colorButtons = document.querySelectorAll(".color-picker-row button");

let selectedIcon = null;
let selectedColor = null;

function clearForm() {
  nomi.value = "";
  iconParentButtons.forEach((b) => b.classList.remove("active_icon"));
  colorButtons.forEach((b) => b.classList.remove("active_color"));
  selectedIcon = null;
  selectedColor = null;
  errorMsg.style.display = "none";
  qoshish.setAttribute("disabled", "true");
}

function d_n() {
  Yangi_tranzaksiya_inp.style.display = "none";
  clearForm();
}
x.addEventListener("click", d_n);
bekor.addEventListener("click", d_n);

function parseAmount(val) {
  const cleaned = Number(String(val ?? 0).replace(/[^\d.-]/g, ""));
  return Number.isNaN(cleaned) ? 0 : cleaned;
}

function renderUmumiyXarajatlar(data, savedCategories) {
  if (!u_x_k) return;
  u_x_k.innerHTML = "";

  const xarajatItems = data.filter(
    (item) => String(item.type || "").toLowerCase() === "xarajat",
  );

  const categoryMap = new Map();
  savedCategories.forEach((cat) => {
    const key = String(cat.name || "")
      .trim()
      .toLowerCase();
    if (!key) return;

    const catAmount = xarajatItems
      .filter(
        (item) =>
          String(item.category || "")
            .trim()
            .toLowerCase() === key,
      )
      .reduce((sum, item) => sum + parseAmount(item.amount), 0);

    categoryMap.set(key, {
      name: cat.name,
      iconSrc: cat.iconSrc || "",
      bgColor: cat.bgColor || "#2b7fff",
      amount: catAmount,
    });
  });

  const rows = Array.from(categoryMap.values()).sort(
    (a, b) => b.amount - a.amount,
  );

  const totalAllXarajat = rows.reduce((sum, row) => sum + row.amount, 0);

  rows.forEach((row) => {
    const pct =
      totalAllXarajat > 0
        ? ((row.amount / totalAllXarajat) * 100).toFixed(1)
        : "0.0";

    const itemEl = document.createElement("div");
    itemEl.className = "ux_item";

    const iconBox = document.createElement("div");
    iconBox.className = "ux_icon";
    iconBox.style.backgroundColor = row.bgColor;

    if (row.iconSrc) {
      const img = document.createElement("img");
      img.src = row.iconSrc;
      img.alt = row.name;
      iconBox.appendChild(img);
    }

    const bodyEl = document.createElement("div");
    bodyEl.className = "ux_body";

    const topRow = document.createElement("div");
    topRow.className = "ux_top";

    const titleEl = document.createElement("span");
    titleEl.className = "ux_name";
    titleEl.textContent = row.name;

    const amountEl = document.createElement("span");
    amountEl.className = "ux_amount";
    amountEl.textContent = `${row.amount.toLocaleString("en-US")} so'm`;

    topRow.appendChild(titleEl);
    topRow.appendChild(amountEl);

    const trackEl = document.createElement("div");
    trackEl.className = "ux_bar_track";

    const fillEl = document.createElement("div");
    fillEl.className = "ux_bar_fill";
    fillEl.style.width = `${Math.min(100, Number(pct))}%`;
    fillEl.style.backgroundColor = row.bgColor;

    trackEl.appendChild(fillEl);
    bodyEl.appendChild(topRow);
    bodyEl.appendChild(trackEl);

    const pctEl = document.createElement("span");
    pctEl.className = "ux_pct";
    pctEl.textContent = `${pct}%`;

    itemEl.appendChild(iconBox);
    itemEl.appendChild(bodyEl);
    itemEl.appendChild(pctEl);

    u_x_k.appendChild(itemEl);
  });
}

async function renderCategories() {
  let response = await fetch(url);
  let data = await response.json();
  let totalCount = data.length;

  kategories.innerHTML = "";
  let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];

  savedCategories.forEach((cat) => {
    let filteredItems = data.filter((item) => item.category === cat.name);
    let filteredCount = filteredItems.length;
    let percentage =
      totalCount > 0 ? ((filteredCount / totalCount) * 100).toFixed(1) : 0;

    let totalDaromad = filteredItems
      .filter((item) => item.type === "daromad")
      .reduce((sum, item) => sum + parseAmount(item.amount), 0);

    let totalXarajat = filteredItems
      .filter((item) => item.type === "xarajat")
      .reduce((sum, item) => sum + parseAmount(item.amount), 0);

    let diffAmount = Math.abs(totalXarajat - totalDaromad);

    let kategory = document.createElement("div");
    kategory.setAttribute("class", "kategory");

    let i_f = document.createElement("div");
    i_f.setAttribute("class", "i_f");

    let iconWrapper = document.createElement("div");
    iconWrapper.style.width = "40px";
    iconWrapper.style.height = "40px";
    iconWrapper.style.borderRadius = "50%";
    iconWrapper.style.display = "flex";
    iconWrapper.style.alignItems = "center";
    iconWrapper.style.justifyContent = "center";
    if (cat.bgColor) {
      iconWrapper.style.backgroundColor = cat.bgColor;
    }

    let img = document.createElement("img");
    if (cat.iconSrc) {
      img.src = cat.iconSrc;
    }
    img.alt = "img";
    iconWrapper.appendChild(img);

    let foiz_p = document.createElement("p");
    foiz_p.textContent = `${percentage}%`;

    i_f.appendChild(iconWrapper);
    i_f.appendChild(foiz_p);

    let h1_p_s = document.createElement("div");
    h1_p_s.setAttribute("class", "h1_p_s");

    let h1 = document.createElement("h1");
    h1.textContent = cat.name;

    let p_h1_div = document.createElement("div");
    p_h1_div.setAttribute("class", "p_h1_div");

    let son_p = document.createElement("p");
    son_p.textContent = `${filteredCount} ta tranzaksiya`;

    let sum_h1 = document.createElement("h1");
    sum_h1.textContent = `${diffAmount.toLocaleString()} so'm`;

    let bar_div = document.createElement("div");
    let foiz_div = document.createElement("div");
    foiz_div.setAttribute("class", "foiz");
    foiz_div.style.width = `${percentage}%`;
    if (cat.bgColor) {
      foiz_div.style.backgroundColor = cat.bgColor;
    }
    bar_div.appendChild(foiz_div);

    p_h1_div.appendChild(son_p);
    p_h1_div.appendChild(sum_h1);
    p_h1_div.appendChild(bar_div);

    h1_p_s.appendChild(h1);
    h1_p_s.appendChild(p_h1_div);

    kategory.appendChild(i_f);
    kategory.appendChild(h1_p_s);

    kategories.appendChild(kategory);
  });

  renderUmumiyXarajatlar(data, savedCategories);
}

document.addEventListener("DOMContentLoaded", renderCategories);

qoshish.addEventListener("click", async function () {
  if (!qoshish.hasAttribute("disabled")) {
    let iconImg = selectedIcon ? selectedIcon.querySelector("img") : null;
    let iconSrc = iconImg ? iconImg.src : "";
    let bgColor = selectedColor
      ? window.getComputedStyle(selectedColor).backgroundColor
      : "";

    let newCategory = {
      name: nomi.value.trim(),
      iconSrc: iconSrc,
      bgColor: bgColor,
    };

    let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];

    let isDuplicate = savedCategories.some(
      (cat) => cat.name.toLowerCase() === newCategory.name.toLowerCase(),
    );

    if (isDuplicate) {
      errorMsg.style.display = "block";
      qoshish.setAttribute("disabled", "true");
      return;
    }

    savedCategories.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(savedCategories));

    d_n();
    renderCategories();
  }
});

function checkForm() {
  let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
  let enteredName = nomi.value.trim().toLowerCase();

  let isDuplicate = savedCategories.some(
    (cat) => cat.name.toLowerCase() === enteredName,
  );

  if (isDuplicate) {
    errorMsg.style.display = "block";
    qoshish.setAttribute("disabled", "true");
  } else {
    errorMsg.style.display = "none";
    if (
      nomi.value.trim() !== "" &&
      selectedIcon !== null &&
      selectedColor !== null
    ) {
      qoshish.removeAttribute("disabled");
    } else {
      qoshish.setAttribute("disabled", "true");
    }
  }
}

iconParentButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    iconParentButtons.forEach((b) => b.classList.remove("active_icon"));
    let targetBtn = e.currentTarget;
    targetBtn.classList.add("active_icon");
    selectedIcon = targetBtn;
    checkForm();
  });
});

colorButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    colorButtons.forEach((b) => b.classList.remove("active_color"));
    let targetBtn = e.currentTarget;
    targetBtn.classList.add("active_color");
    selectedColor = targetBtn;
    checkForm();
  });
});

nomi.addEventListener("input", function () {
  checkForm();
});
