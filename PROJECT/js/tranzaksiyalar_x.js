let url = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1/tranzaksiya";

let dashboard = document.querySelector(".dashboard");
let tranzaksiyalar = document.querySelector(".tranzaksiyalar");
let kategoriyalar = document.querySelector(".file");
let profil = document.querySelector(".user");

let barchasi_b = document.querySelector(".barchasi_b");
let daromad_b = document.querySelector(".daromad_b");
let xarajat_b = document.querySelector(".xarajat_b");

let tranzaksiya_qoshish = document.querySelector(".Yangi_tranzaksiya");
let tranzaksiya_qoshish_inp = document.querySelector(".Yangi_tranzaksiya_inp");
let tranzaksiya_qoshish_wrapper = document.querySelector(
  ".qoshilgan_tranzaksiyalar_wrapper",
);
let xarajat_b_form = document.querySelector(".xarajat_b_form");
let daromad_b_form = document.querySelector(".daromad_b_form");
let x = document.querySelector(".x");
let bekor = document.querySelector(".b_q_b");
let qoshish = document.querySelector(".b_q_q");

let nom = document.querySelector("#nomi");
let sum = document.querySelector("#sum");
let date = document.querySelector("#date");
let select = document.querySelector("#k");

let m_title = document.querySelector(".h1_x h1");

let selectedType = null;
let ozgartirish_rejim = false;
let h_e_id = null;
let ochirish_t_i = null;

let spinnerStyle = document.createElement("style");
spinnerStyle.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);

let loaderOverlay = document.createElement("div");
loaderOverlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.6); display: none; align-items: center; 
    justify-content: center; z-index: 3000; cursor: wait;
`;
loaderOverlay.innerHTML = `
    <div style="
        width: 45px; height: 45px; border: 5px solid rgba(0, 0, 0, 0.1); 
        border-top: 5px solid rgba(3, 2, 19, 1); border-radius: 50%; 
        animation: spin 0.8s linear infinite;
    "></div>
`;
document.body.appendChild(loaderOverlay);

function loading() {
  loaderOverlay.style.display = "flex";
}

function loading_yashirish() {
  loaderOverlay.style.display = "none";
}

function formatMoney(value) {
  if (!value) return "";
  let numbers = value.toString().replace(/\D/g, "");
  if (numbers === "") return "";
  return Number(numbers).toLocaleString("en-US");
}

let deleteModal = document.createElement("div");
deleteModal.className = "delete_modal_overlay";
deleteModal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5); display: none; align-items: center; justify-content: center; z-index: 2000;
`;
deleteModal.innerHTML = `
    <div style="background: white; padding: 24px; border-radius: 14px; width: 350px; text-align: center; display: flex; flex-direction: column; gap: 16px;">
        <h3 style="font-size: 18px; font-weight: 600; color: #0a0a0a;">Rostdan ham shu tranzaksiyani o'chirmoqchimisiz?</h3>
        <div style="display: flex; gap: 10px; justify-content: center;">
            <button id="cancel_delete" style="padding: 10px 20px; border-radius: 8px; border: 2px solid rgba(0,0,0,0.1); background: white; cursor: pointer; font-weight: 500;">Bekor qilish</button>
            <button id="confirm_delete" style="padding: 10px 20px; border-radius: 8px; border: none; background: #e7000b; color: white; cursor: pointer; font-weight: 500;">O'chirish</button>
        </div>
    </div>
`;
document.body.appendChild(deleteModal);

if (dashboard)
  dashboard.addEventListener(
    "click",
    () => (window.location.href = "./dashboard.html"),
  );
if (kategoriyalar)
  kategoriyalar.addEventListener(
    "click",
    () => (window.location.href = "./kategoriyalar.html"),
  );
if (profil)
  profil.addEventListener(
    "click",
    () => (window.location.href = "./profil.html"),
  );
barchasi_b.addEventListener("click", () => {
  window.location.href = "./tranzaksiyalar.html";
});

daromad_b.addEventListener("click", () => {
  daromad_b;
  window.location.href = "./tranzaksiyalar_d.html";
});
tranzaksiya_qoshish.addEventListener("click", () => {
  ozgartirish_rejim = false;
  h_e_id = null;
  m_title.textContent = "Yangi tranzaksiya";
  qoshish.textContent = "Qo'shish";
  resetForm();
  tranzaksiya_qoshish_inp.style.display = "block";
});

function c_m() {
  tranzaksiya_qoshish_inp.style.display = "none";
  resetForm();
}

x.addEventListener("click", c_m);
bekor.addEventListener("click", c_m);

xarajat_b_form.addEventListener("click", () => {
  selectedType = "xarajat";
  xarajat_b_form.classList.add("active_type");
  daromad_b_form.classList.remove("active_type");
  validateForm();
});

daromad_b_form.addEventListener("click", () => {
  selectedType = "daromad";
  daromad_b_form.classList.add("active_type");
  xarajat_b_form.classList.remove("active_type");
  validateForm();
});

function validateForm() {
  let nom_tol = nom.value.trim() !== "";
  let sum_tol = sum.value.trim() !== "";
  let sana_tol = date.value.trim() !== "";
  let x_or_d_tol = selectedType !== null;

  if (nom_tol && sum_tol && sana_tol && x_or_d_tol) {
    qoshish.removeAttribute("disabled");
  } else {
    qoshish.setAttribute("disabled", "true");
  }
}

nom.addEventListener("input", validateForm);

sum.addEventListener("input", function () {
  let rawValue = sum.value;
  sum.value = formatMoney(rawValue);
  validateForm();
});

date.addEventListener("input", validateForm);
date.addEventListener("change", validateForm);

function resetForm() {
  nom.value = "";
  sum.value = "";
  date.value = "";
  select.selectedIndex = 0;
  selectedType = null;
  xarajat_b_form.classList.remove("active_type");
  daromad_b_form.classList.remove("active_type");
  validateForm();
}

function tranzaksiyalar_olish() {
  loading();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      tranzaksiya_qoshish_wrapper.innerHTML = "";
      data.forEach((item) => renderTransaction(item));
      loading_yashirish();
    })
    .catch((err) => {
      console.log("Xatolik:", err);
      loading_yashirish();
    });
}

document.addEventListener("DOMContentLoaded", tranzaksiyalar_olish);

qoshish.addEventListener("click", function () {
  if (qoshish.hasAttribute("disabled")) return;

  let tozalash_miqdor = sum.value.replace(/,/g, "");

  let transactionData = {
    name: nom.value.trim(),
    amount: tozalash_miqdor,
    category: select.options[select.selectedIndex].textContent,
    date: date.value,
    type: selectedType,
  };

  loading();
  c_m();

  if (!ozgartirish_rejim) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then(() => {
        tranzaksiyalar_olish();
      })
      .catch((err) => {
        console.log("Xatolik:", err);
        loading_yashirish();
      });
  } else {
    fetch(`${url}/${h_e_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then(() => {
        tranzaksiyalar_olish();
      })
      .catch((err) => {
        console.log("Xatolik:", err);
        loading_yashirish();
      });
  }
});

function renderTransaction(item) {
  let tranzaksiya = document.createElement("div");
  tranzaksiya.setAttribute("class", "qoshilgan_tranzaksiya");

  let img_n_k_s = document.createElement("div");
  img_n_k_s.setAttribute("class", "img_n_k_s");

  let s_t_d = document.createElement("div");
  s_t_d.setAttribute("class", "s_t_d");

  let img = document.createElement("img");
  img.style.width = "48px";
  img.src =
    item.type === "xarajat"
      ? "../assets/icons/xarajat_icon.svg"
      : "../assets/icons/daromad_icon.svg";

  let n_k_s = document.createElement("div");
  n_k_s.setAttribute("class", "n_k_s");

  let h3 = document.createElement("h3");
  h3.style.cssText =
    "font-weight: 500; font-size: 16px; letter-spacing: -0.31px; color: rgba(10, 10, 10, 1);";
  h3.textContent = item.name;

  let k_n_s = document.createElement("div");
  k_n_s.setAttribute("class", "k_n_s");

  let p = document.createElement("p");
  p.style.cssText =
    "font-weight: 400; font-size: 14px; letter-spacing: -0.15px; color: rgba(113, 113, 130, 1);";
  p.textContent = item.category;

  let p2 = document.createElement("p");
  p2.style.cssText =
    "font-weight: 400; font-size: 14px; letter-spacing: -0.15px; color: rgba(113, 113, 130, 1);";
  p2.textContent = "•";

  let i_s = document.createElement("div");
  i_s.setAttribute("class", "i_s");

  let img2 = document.createElement("img");
  img2.src = "../assets/icons/date.svg";

  let date_p = document.createElement("p");
  date_p.style.cssText =
    "font-weight: 400; font-size: 14px; letter-spacing: -0.15px; color: rgba(113, 113, 130, 1);";
  date_p.textContent = item.date;

  let s_t_d_h1 = document.createElement("h1");
  s_t_d_h1.setAttribute("class", "s_t_d_h1");
  s_t_d_h1.style.color =
    item.type === "xarajat" ? "rgba(231, 0, 11, 1)" : "rgba(0, 166, 62, 1)";

  let span1 = document.createElement("span");
  span1.textContent = item.type === "xarajat" ? "- " : "+ ";

  let span2 = document.createElement("span");
  span2.textContent = "so'm";

  let f_a = formatMoney(item.amount);
  s_t_d_h1.append(span1, document.createTextNode(f_a + " "), span2);

  let edit_img = document.createElement("img");
  edit_img.src = "../assets/icons/edit.svg";
  edit_img.addEventListener("click", () => {
    ozgartirish_rejim = true;
    h_e_id = item.id;
    m_title.textContent = "Tranzaksiyani o'zgartirish";
    qoshish.textContent = "O'zgartirish";

    nom.value = item.name;
    sum.value = formatMoney(item.amount);
    date.value = item.date;

    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].textContent === item.category) {
        select.selectedIndex = i;
        break;
      }
    }

    selectedType = item.type;
    if (selectedType === "xarajat") {
      xarajat_b_form.classList.add("active_type");
      daromad_b_form.classList.remove("active_type");
    } else {
      daromad_b_form.classList.add("active_type");
      xarajat_b_form.classList.remove("active_type");
    }

    validateForm();
    tranzaksiya_qoshish_inp.style.display = "block";
  });

  let del_img = document.createElement("img");
  del_img.src = "../assets/icons/delete.svg";
  del_img.addEventListener("click", () => {
    ochirish_t_i = item.id;
    deleteModal.style.display = "flex";
  });

  s_t_d.append(s_t_d_h1, edit_img, del_img);
  i_s.append(img2, date_p);
  k_n_s.append(p, p2, i_s);
  n_k_s.append(h3, k_n_s);
  img_n_k_s.append(img, n_k_s);
  tranzaksiya.append(img_n_k_s, s_t_d);
  
  tranzaksiya_qoshish_wrapper.append(tranzaksiya);
}

document.getElementById("cancel_delete").addEventListener("click", () => {
  deleteModal.style.display = "none";
  ochirish_t_i = null;
});

document.getElementById("confirm_delete").addEventListener("click", () => {
  deleteModal.style.display = "none";
  if (ochirish_t_i) {
    loading();
    fetch(`${url}/${ochirish_t_i}`, {
      method: "DELETE",
    })
      .then(() => {
        tranzaksiyalar_olish();
        ochirish_t_i = null;
      })
      .catch((err) => {
        console.log("Xatolik:", err);
        loading_yashirish();
      });
  }
});
