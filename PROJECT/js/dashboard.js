let url = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1/tranzaksiya";

let p = document.querySelector(".d_p");
let dashboard = document.querySelector(".dashboard");
let tranzaksiyalar = document.querySelector(".tranzaksiyalar");
let kategoriyalar = document.querySelector(".file");
let profil = document.querySelector(".user");

let balansH1 = document.querySelector(".balans h1");
let daromadH1 = document.querySelector(".daromad h1");
let xarajatH1 = document.querySelector(".xarajat h1");
let songiTranzaksiyalarWrapper = document.querySelector(
  ".songi_tranzaksiyalar",
);
let kategoriyalarWrapper = document.querySelector(".k_b");
let barchasiniKo_rishBtn = document.querySelector(".h1_i_p button");

let a = new Date();
let dates = {
  1: "Yanvar",
  2: "Fevral",
  3: "Mart",
  4: "Aprel",
  5: "May",
  6: "Iyun",
  7: "Iyul",
  8: "Avgust",
  9: "Sentyabr",
  10: "Oktyabr",
  11: "Noyabr",
  12: "Dekabr",
};
let b = a.getMonth() + 1;
if (p) {
  for (let key in dates) {
    if (b === Number(key)) {
      p.textContent = `${dates[key]} ${a.getFullYear()}`;
    }
  }
}

if (dashboard) {
  dashboard.addEventListener("click", () => {
    window.location.href = "./dashboard.html";
  });
}
if (tranzaksiyalar) {
  tranzaksiyalar.addEventListener("click", () => {
    window.location.href = "./tranzaksiyalar.html";
  });
}
if (kategoriyalar) {
  kategoriyalar.addEventListener("click", () => {
    window.location.href = "./kategoriyalar.html";
  });
}
if (profil) {
  profil.addEventListener("click", () => {
    window.location.href = "./profil.html";
  });
}
if (barchasiniKo_rishBtn) {
  barchasiniKo_rishBtn.addEventListener("click", () => {
    window.location.href = "./tranzaksiyalar.html";
  });
}

let spinnerStyle = document.createElement("style");
spinnerStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);

let loading = document.createElement("div");
loading.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(255, 255, 255, 0.6); display: none; align-values: center; 
    justify-content: center; z-index: 3000; cursor: wait;
`;

let spinnerDiv = document.createElement("div");
spinnerDiv.style.cssText = `
    width: 45px; height: 45px; border: 5px solid rgba(0, 0, 0, 0.1); 
    border-top: 5px solid rgba(3, 2, 19, 1); border-radius: 50%; 
    animation: spin 0.8s linear infinite;
`;
loading.appendChild(spinnerDiv);
document.body.appendChild(loading);

function loader_korsatish() {
  loading.style.display = "flex";
  loading.style.justifyContent = "center";
  loading.style.alignItems = "center";
}

function loading_y() {
  loading.style.display = "none";
}

function pul_format(value) {
  if (!value) return "0";
  let numbers = value.toString().replace(/\D/g, "");
  if (numbers === "") return "0";
  return Number(numbers).toLocaleString("en-US");
}

function dahsboard_malumot_load() {
  loader_korsatish();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let totalDaromad = 0;
      let totalXarajat = 0;
      let obj = {};

      let kategoriya_ranglar = {
        Ovqat: "#2563eb",
        Transport: "#10b981",
        "To'lovlar": "#f97316",
        "O'yin-kulgi": "#8b5cf6",
        Kafe: "#F6339A",
        Salomatlik: "#FB2C36",
        Ish: "#615FFF",
        "Sovg'alar": "#F0B100",
      };

      if (Array.isArray(data)) {
        data.forEach((value) => {
          let amount = Number(value.amount) || 0;
          if (value.type && value.type.toLowerCase() === "daromad") {
            totalDaromad += amount;
          } else if (value.type && value.type.toLowerCase() === "xarajat") {
            totalXarajat += amount;
          }

          if (value.category) {
            if (!obj[value.category]) {
              obj[value.category] = 0;
            }
            obj[value.category] += amount;
          }
        });
      }

      let totalBalans = totalDaromad - totalXarajat;

      if (daromadH1) {
        daromadH1.textContent = "";
        let span = document.createElement("span");
        span.textContent = "so'm";
        daromadH1.append(pul_format(totalDaromad) + " ", span);
      }
      if (xarajatH1) {
        xarajatH1.textContent = "";
        let span = document.createElement("span");
        span.textContent = "so'm";
        xarajatH1.append(pul_format(totalXarajat) + " ", span);
      }
      if (balansH1) {
        balansH1.textContent = "";
        let span = document.createElement("span");
        span.textContent = "so'm";
        balansH1.append(pul_format(totalBalans) + " ", span);
        balansH1.style.color =
          totalBalans >= 0 ? balansH1.prepend("") : balansH1.prepend("-");
      }

      if (songiTranzaksiyalarWrapper) {
        songiTranzaksiyalarWrapper.textContent = "";

        if (Array.isArray(data) && data.length > 0) {
          let songi5ta = [...data].reverse().slice(0, 5);

          songi5ta.forEach((value) => {
            let tranzaksiyaDiv = document.createElement("div");
            tranzaksiyaDiv.className = "tranzaksiya";

            let bH1K = document.createElement("div");
            bH1K.className = "b_h1_k";

            let img = document.createElement("img");
            img.className = "img";
            img.src =
              value.type === "xarajat"
                ? "../assets/icons/xarajat_icon.svg"
                : "../assets/icons/daromad_icon.svg";

            let h1K = document.createElement("div");
            h1K.className = "h1_k";

            let h1 = document.createElement("h1");
            h1.textContent = value.name;

            let pTag = document.createElement("p");
            pTag.textContent = value.category;

            h1K.append(h1, pTag);
            bH1K.append(img, h1K);

            let moneySana = document.createElement("div");
            moneySana.className = "money_sana";

            let moneyH1 = document.createElement("h1");
            let isXarajat = value.type === "xarajat";
            moneyH1.style.color = isXarajat
              ? "rgba(231, 0, 11, 1)"
              : "rgba(0, 166, 62, 1)";
            moneyH1.textContent = `${isXarajat ? "-" : "+"}${pul_format(value.amount)} so'm`;

            let dateP = document.createElement("p");
            dateP.className = "t_d_p";
            dateP.textContent = value.date;

            moneySana.append(moneyH1, dateP);
            tranzaksiyaDiv.append(bH1K, moneySana);
            songiTranzaksiyalarWrapper.append(tranzaksiyaDiv);
          });
        }
      }

      if (kategoriyalarWrapper) {
        kategoriyalarWrapper.textContent = "";

        let titleH1 = document.createElement("h1");
        titleH1.style.cssText =
          "font-weight: 500; font-size: 24px; letter-spacing: -0.44px; color: rgba(10, 10, 10, 1); margin-bottom: 20px;";
        titleH1.textContent = "Kategoriyalar bo'yicha";
        kategoriyalarWrapper.append(titleH1);
        let chegara = 2000000;

        for (let key in obj) {
          let qiymat = obj[key];
          let foiz = (qiymat / chegara) * 100;
          if (foiz > 100) foiz = 100;
          let color = kategoriya_ranglar[key] || "#2563eb";

          let rowDiv = document.createElement("div");
          rowDiv.style.cssText =
            "display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;";

          let topRow = document.createElement("div");
          topRow.style.cssText =
            "display: flex; justify-content: space-between; align-values: center;";

          let nameP = document.createElement("p");
          nameP.style.cssText =
            "font-weight: 500; font-size: 16px; color: rgba(10, 10, 10, 1);";
          nameP.textContent = key;

          let sumH1 = document.createElement("h1");
          sumH1.style.cssText =
            "font-weight: 600; font-size: 16px; color: rgba(10, 10, 10, 1);";
          sumH1.textContent = `${pul_format(qiymat)} so'm`;

          topRow.append(nameP, sumH1);

          let trackDiv = document.createElement("div");
          trackDiv.style.cssText =
            "width: 100%; height: 6px; background: rgba(0,0,0,0.06); border-radius: 4px; overflow: hidden;";

          let barDiv = document.createElement("div");
          barDiv.style.cssText = `width: ${foiz}%; height: 100%; background: ${color}; border-radius: 4px; transition: width 0.3s ease;`;

          trackDiv.append(barDiv);
          rowDiv.append(topRow, trackDiv);
          kategoriyalarWrapper.append(rowDiv);
        }
      }

      loading_y();
    })
    .catch((err) => {
      console.log("Xatolik:", err);
      loading_y();
    });
}

document.addEventListener("DOMContentLoaded", dahsboard_malumot_load);
