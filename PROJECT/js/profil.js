let p = document.querySelector(".d_p");
let dashboard = document.querySelector(".dashboard");
let tranzaksiyalar = document.querySelector(".tranzaksiyalar");
let kategoriyalar = document.querySelector(".file");
let profil = document.querySelector(".user");
let userImg = document.querySelector(".profil_e_i > img");
let username = document.querySelector(".username");
let email = document.querySelector(".email");
let tel = document.querySelector(".tel");
let password = document.querySelector(".password_e");
let password_y = document.querySelector(".password_y");
let manzil = document.querySelector(".manzil");
let s_button_b = document.querySelector(".s_button_b");
let btn_outline = document.querySelector(".btn_outline");
let eskiParol = document.querySelector('input[placeholder="Eski parol"]');
let twoFaCard = document.querySelector(".two_fa");
let yoqishBtn = document.querySelector(".two_fa .yoqish");
let manzilYangilashBtn = document.querySelectorAll(
  ".xisob_harakatlari .s_button",
)[0];
let maxfiylikBtn = document.querySelectorAll(".xisob_harakatlari .s_button")[2];
let logout = document.querySelector(".logout");
let sana = document.querySelector(".royxat");
let yangi_qurilma = document.querySelector(".yangi_qurilma");
let ozgarish = document.querySelector(".ozgarish");
let foydalanuvchi_name = document.querySelector(".foydalanuvchi_name");
let email_text = document.querySelector(".email_text");
let statValues = document.querySelectorAll(".st_i h4");
let jami_tranzaksiyalar = statValues[1];
let jami_xarajat = statValues[2];
let jami_daromad = statValues[3];

const API = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1/tranzaksiya";
const API2 = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1/users";

const MONTHS_UZ = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

function safeParseJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

function formatUzbekDate(dateInput) {
  if (!dateInput) return "";
  const d = new Date(dateInput);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getDate()} ${MONTHS_UZ[d.getMonth()]}, ${d.getFullYear()}`;
}

function getRegisteredDateFormatted() {
  const keys = ["register", "login", "profilData", "ozgarish"];
  for (const key of keys) {
    const obj = safeParseJSON(key);
    if (obj && obj.registeredDateFormatted) {
      return obj.registeredDateFormatted;
    }
  }

  const directFormatted = localStorage.getItem("registeredDateFormatted");
  if (directFormatted) {
    return directFormatted;
  }

  for (const key of keys) {
    const obj = safeParseJSON(key);
    const raw = obj && (obj.registeredAt || obj.createdAt);
    const formatted = formatUzbekDate(raw);
    if (formatted) return formatted;
  }

  return formatUzbekDate(localStorage.getItem("registeredAt"));
}

function renderRegisteredDate() {
  if (!sana) return;
  const formatted = getRegisteredDateFormatted();
  if (formatted) {
    sana.textContent = formatted;
  }
}

renderRegisteredDate();

if (ozgarish) {
  ozgarish.disabled = true;
}

if (btn_outline) {
  btn_outline.disabled = true;
  btn_outline.style.cursor = "not-allowed";
}

function formatElapsedTime(totalMinutes) {
  const mins = Math.max(0, Math.floor(totalMinutes));
  if (mins < 60) {
    return `${mins} daqiqa oldin`;
  }
  const hours = Math.floor(mins / 60);
  if (hours < 24) {
    return `${hours} soat oldin`;
  }
  const days = Math.floor(hours / 24);
  return `${days} kun oldin`;
}

function getRegisterTimestamp() {
  const keys = ["register", "login", "profilData", "ozgarish"];
  for (const key of keys) {
    const obj = safeParseJSON(key);
    if (!obj) continue;
    const raw = obj.registeredAt || obj.createdAt || obj.registerTime;
    if (raw !== undefined && raw !== null && raw !== "") {
      const ts = typeof raw === "number" ? raw : new Date(raw).getTime();
      if (!Number.isNaN(ts)) return ts;
    }
  }

  const directRaw =
    localStorage.getItem("registeredAt") ||
    localStorage.getItem("registerTime");
  if (directRaw) {
    const ts = Number.isNaN(Number(directRaw))
      ? new Date(directRaw).getTime()
      : Number(directRaw);
    if (!Number.isNaN(ts)) return ts;
  }

  const regTracker = safeParseJSON("registerFaoliyat");
  if (regTracker && typeof regTracker.startedAt === "number") {
    return regTracker.startedAt;
  }

  return null;
}

function renderRegisteredElapsed() {
  if (!yangi_qurilma) return;
  const regTs = getRegisterTimestamp();
  if (regTs === null) return;
  const elapsedMinutes = Math.floor((Date.now() - regTs) / 60000);
  yangi_qurilma.textContent = formatElapsedTime(elapsedMinutes);
}

renderRegisteredElapsed();

function getExistingFaoliyatParagraph(rowKeyword) {
  const aItems = Array.from(document.querySelectorAll(".a_i"));
  for (const item of aItems) {
    const innerDiv = item.querySelector("div");
    if (!innerDiv) continue;
    const h4 = innerDiv.querySelector("h4");
    const h4Text = (h4 ? h4.textContent : innerDiv.textContent || "")
      .trim()
      .toLowerCase();
    if (h4Text.includes(rowKeyword.toLowerCase())) {
      let targetP = innerDiv.querySelector("p");
      if (!targetP) {
        targetP = document.createElement("p");
        innerDiv.appendChild(targetP);
      }
      return targetP;
    }
  }
  return null;
}

function recordFaoliyatTime(storageKey, rowKeyword) {
  const now = Date.now();
  const state = {
    startedAt: now,
    lastRefreshAt: now,
    elapsedMinutes: 0,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));

  const targetP = getExistingFaoliyatParagraph(rowKeyword);
  if (targetP) {
    targetP.textContent = formatElapsedTime(0);
  }
}

function updateFaoliyatOnRefresh(storageKey, rowKeyword) {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const state = JSON.parse(raw);
    if (!state || typeof state.startedAt !== "number") return;

    const now = Date.now();
    const prevRefresh =
      typeof state.lastRefreshAt === "number"
        ? state.lastRefreshAt
        : state.startedAt;
    const sinceRefreshMin = Math.floor((now - prevRefresh) / 60000);
    const totalFromStartMin = Math.floor((now - state.startedAt) / 60000);

    const nextMinutes = Math.max(
      (Number(state.elapsedMinutes) || 0) + Math.max(0, sinceRefreshMin),
      Math.max(0, totalFromStartMin),
    );

    state.elapsedMinutes = nextMinutes;
    state.lastRefreshAt = now;
    localStorage.setItem(storageKey, JSON.stringify(state));

    const targetP = getExistingFaoliyatParagraph(rowKeyword);
    if (targetP) {
      targetP.textContent = formatElapsedTime(nextMinutes);
    }
  } catch (err) {
    console.error(err);
  }
}

function getOrCreateErrorEl(inputEl) {
  if (!inputEl) return null;

  let colWrap = inputEl.parentElement;
  if (!colWrap || !colWrap.classList.contains("input-col-wrap")) {
    colWrap = document.createElement("div");
    colWrap.className = "input-col-wrap";
    colWrap.style.display = "flex";
    colWrap.style.flexDirection = "column";
    colWrap.style.width = "100%";

    inputEl.parentNode.insertBefore(colWrap, inputEl);
    colWrap.appendChild(inputEl);
  }

  let errEl = colWrap.querySelector(".input-error-msg");
  if (!errEl) {
    errEl = document.createElement("small");
    errEl.className = "input-error-msg";
    errEl.style.color = "#dc2626";
    errEl.style.fontSize = "12px";
    errEl.style.marginTop = "4px";
    errEl.style.display = "none";
    colWrap.appendChild(errEl);
  }
  return errEl;
}

function showInputError(inputEl, message) {
  const errEl = getOrCreateErrorEl(inputEl);
  if (!errEl) return;
  errEl.textContent = message;
  errEl.style.display = "block";
}

function hideInputError(inputEl) {
  const errEl = getOrCreateErrorEl(inputEl);
  if (!errEl) return;
  errEl.textContent = "";
  errEl.style.display = "none";
}

function getPasswordError(value) {
  if (!value) return "Parol bo'sh bo'lmasligi kerak";
  const allSymbol = ".?/|!@#$%^&*()`;:,'*-+_=~<>";
  const chars = value.split("");
  if (value.length < 8 || value.length > 25) {
    return "Parol 8 tadan 25 tagacha belgidan iborat bo'lishi kerak";
  }
  if (!chars.some((str) => /[a-z]/.test(str))) {
    return "Parolda kamida bitta kichik harf bo'lishi kerak";
  }
  if (!chars.some((str) => /[A-Z]/.test(str))) {
    return "Parolda kamida bitta katta harf bo'lishi kerak";
  }
  if (!chars.some((str) => /\d/.test(str))) {
    return "Parolda kamida bitta raqam bo'lishi kerak";
  }
  if (!chars.some((str) => allSymbol.includes(str))) {
    return "Parolda kamida bitta maxsus belgi bo'lishi kerak";
  }
  return "";
}

function saveTwoFaPasswordToStorage(secretPass) {
  const keys = ["profilData", "register", "ozgarish", "login"];
  let savedAny = false;

  keys.forEach((key) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          parsed["o-password2"] = secretPass;
          localStorage.setItem(key, JSON.stringify(parsed));
          savedAny = true;
        }
      } catch (err) {
        console.error(err);
      }
    }
  });

  if (!savedAny) {
    const currentProfil = JSON.parse(localStorage.getItem("profilData")) || {};
    currentProfil["o-password2"] = secretPass;
    localStorage.setItem("profilData", JSON.stringify(currentProfil));
  }
}

let twoFaInput = null;
let twoFaFieldColumn = null;
let twoFaErrorEl = null;
let twoFaEnabled = localStorage.getItem("twoFaEnabled") === "true";

function isTwoFaInputVisible() {
  return Boolean(twoFaFieldColumn && twoFaFieldColumn.style.display !== "none");
}

function syncTwoFaButtonLabel() {
  if (!yoqishBtn) return;
  if (isTwoFaInputVisible() && twoFaInput && twoFaInput.value === "") {
    yoqishBtn.textContent = "Bekor qilish";
    return;
  }
  yoqishBtn.textContent = twoFaEnabled ? "Yoqilgan" : "Yoqish";
}

function validateTwoFaInput(value) {
  if (!twoFaInput) return false;
  const errMsg = getPasswordError(value);
  if (!errMsg) {
    twoFaInput.style.border = "1px solid rgb(0, 198, 0)";
    if (twoFaErrorEl) {
      twoFaErrorEl.textContent = "";
      twoFaErrorEl.style.display = "none";
    }
    return true;
  } else {
    twoFaInput.style.border = "1px solid rgb(255, 0, 0)";
    if (twoFaErrorEl) {
      twoFaErrorEl.textContent = errMsg;
      twoFaErrorEl.style.display = "block";
    }
    return false;
  }
}

if (yoqishBtn && twoFaEnabled) {
  yoqishBtn.textContent = "Yoqilgan";
}

if (yoqishBtn && twoFaCard) {
  yoqishBtn.addEventListener("click", function () {
    if (!twoFaInput || !twoFaFieldColumn) {
      twoFaFieldColumn = document.createElement("div");
      twoFaFieldColumn.style.display = "flex";
      twoFaFieldColumn.style.flexDirection = "column";
      twoFaFieldColumn.style.gap = "4px";

      const rowWrap = document.createElement("div");
      rowWrap.style.display = "flex";
      rowWrap.style.alignItems = "center";
      rowWrap.style.gap = "10px";

      twoFaInput = document.createElement("input");
      twoFaInput.type = "password";
      twoFaInput.placeholder =
        "Ikki bosqichli audentifikatsiyani yoqish uchun parol kiriting";
      twoFaInput.style.display = "block";
      twoFaInput.style.width = "360px";
      twoFaInput.style.minWidth = "300px";
      twoFaInput.style.height = "42px";
      twoFaInput.style.backgroundColor = "#f3f4f6";
      twoFaInput.style.border = "1px solid rgba(0, 0, 0, 0.14)";
      twoFaInput.style.borderRadius = "8px";
      twoFaInput.style.padding = "0 14px";
      twoFaInput.style.fontSize = "13.5px";
      twoFaInput.style.outline = "none";

      twoFaErrorEl = document.createElement("small");
      twoFaErrorEl.className = "input-error-msg";
      twoFaErrorEl.style.color = "#dc2626";
      twoFaErrorEl.style.fontSize = "12px";
      twoFaErrorEl.style.marginTop = "4px";
      twoFaErrorEl.style.display = "none";

      twoFaInput.addEventListener("input", function ({ target: { value } }) {
        syncTwoFaButtonLabel();
        if (value.length > 0) {
          validateTwoFaInput(value);
        } else {
          twoFaInput.style.border = "1px solid rgba(0, 0, 0, 0.14)";
          if (twoFaErrorEl) {
            twoFaErrorEl.textContent = "";
            twoFaErrorEl.style.display = "none";
          }
        }
      });

      twoFaInput.addEventListener("blur", function ({ target: { value } }) {
        if (value.length > 0) {
          validateTwoFaInput(value);
        }
        syncTwoFaButtonLabel();
      });

      twoFaCard.insertBefore(rowWrap, yoqishBtn);
      twoFaFieldColumn.appendChild(twoFaInput);
      twoFaFieldColumn.appendChild(twoFaErrorEl);
      rowWrap.appendChild(twoFaFieldColumn);
      rowWrap.appendChild(yoqishBtn);

      syncTwoFaButtonLabel();
      twoFaInput.focus();
      return;
    }

    if (isTwoFaInputVisible() && twoFaInput.value === "") {
      twoFaInput.value = "";
      twoFaInput.style.border = "1px solid rgba(0, 0, 0, 0.14)";
      if (twoFaErrorEl) {
        twoFaErrorEl.textContent = "";
        twoFaErrorEl.style.display = "none";
      }
      twoFaFieldColumn.style.display = "none";
      yoqishBtn.textContent = "Yoqish";
      return;
    }

    if (!isTwoFaInputVisible()) {
      twoFaFieldColumn.style.display = "flex";
      twoFaInput.value = "";
      twoFaInput.style.border = "1px solid rgba(0, 0, 0, 0.14)";
      if (twoFaErrorEl) {
        twoFaErrorEl.textContent = "";
        twoFaErrorEl.style.display = "none";
      }
      syncTwoFaButtonLabel();
      twoFaInput.focus();
      return;
    }

    const enteredPass = twoFaInput.value;
    const isValid = validateTwoFaInput(enteredPass);
    if (!isValid) {
      syncTwoFaButtonLabel();
      twoFaInput.focus();
      return;
    }

    saveTwoFaPasswordToStorage(enteredPass);
    twoFaEnabled = true;
    localStorage.setItem("twoFaEnabled", "true");
    yoqishBtn.textContent = "Yoqilgan";
    alert("Ikki bosqichli autentifikatsiya yoqildi va parol saqlandi!");
  });
}

function updateStorageField(field, newValue) {
  const keys = ["profilData", "register", "ozgarish"];
  keys.forEach((key) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          parsed[field] = newValue;
          localStorage.setItem(key, JSON.stringify(parsed));
        }
      } catch (err) {
        console.error(err);
      }
    } else if (key === "profilData") {
      localStorage.setItem(key, JSON.stringify({ [field]: newValue }));
    }
  });
}

function saveDraftInputs() {
  const draft = {
    username: username ? username.value : "",
    email: email ? email.value : "",
    tel: tel ? tel.value : "",
    manzil: manzil ? manzil.value : "",
  };
  sessionStorage.setItem("profilInputDraft", JSON.stringify(draft));

  const currentProfil = JSON.parse(localStorage.getItem("profilData")) || {};
  ["username", "email", "tel", "manzil"].forEach((key) => {
    if (draft[key] === "") {
      currentProfil[key] = "";
    }
  });
  localStorage.setItem("profilData", JSON.stringify(currentProfil));
}

function restoreDraftInputs() {
  const rawDraft = sessionStorage.getItem("profilInputDraft");
  if (rawDraft) {
    try {
      const draft = JSON.parse(rawDraft);
      if (username && typeof draft.username === "string") {
        username.value = draft.username;
        if (draft.username !== "") usernameValidation(draft.username);
      }
      if (email && typeof draft.email === "string") {
        email.value = draft.email;
        if (draft.email !== "") emailValidation(draft.email);
      }
      if (tel && typeof draft.tel === "string") {
        tel.value = draft.tel;
        if (draft.tel !== "") telValidation(draft.tel);
      }
      if (manzil && typeof draft.manzil === "string") {
        manzil.value = draft.manzil;
        if (draft.manzil !== "") manzilValidation(draft.manzil);
      }
      return;
    } catch (err) {
      console.error(err);
    }
  }

  if (profilData) {
    if (profilData.username && username) {
      username.value = profilData.username;
      usernameValidation(profilData.username);
    }
    if (profilData.email && email) {
      email.value = profilData.email;
      emailValidation(profilData.email);
    }
    if (profilData.tel && tel) {
      tel.value = profilData.tel;
      telValidation(profilData.tel);
    }
    if (profilData.manzil && manzil) {
      manzil.value = profilData.manzil;
      manzilValidation(profilData.manzil);
    }
  }
}

window.addEventListener("beforeunload", saveDraftInputs);
window.addEventListener("pagehide", saveDraftInputs);

const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.accept = "image/*";
fileInput.style.display = "none";
document.body.appendChild(fileInput);

const savedAvatar = localStorage.getItem("profilAvatar");
if (savedAvatar && userImg) {
  userImg.src = savedAvatar;
}

if (userImg) {
  userImg.addEventListener("click", function () {
    fileInput.click();
  });
}

fileInput.addEventListener("change", function (e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const result = event.target && event.target.result;
    if (result && userImg) {
      userImg.src = result;
      try {
        localStorage.setItem("profilAvatar", result);
      } catch (err) {
        console.error(err);
      }
    }
  };
  reader.readAsDataURL(file);
});

function formatSumma(num) {
  return `${Number(num).toLocaleString("en-US")} so'm`;
}

function getItemAmount(item) {
  const raw = item.summa ?? item.amount ?? item.price ?? item.narx ?? 0;
  const cleaned = Number(String(raw).replace(/[^\d.-]/g, ""));
  return Number.isNaN(cleaned) ? 0 : cleaned;
}

async function loadTranzaksiyalarStats() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    if (Array.isArray(data)) {
      if (jami_tranzaksiyalar) {
        jami_tranzaksiyalar.textContent = data.length;
      }

      const xarajatSumma = data
        .filter((item) => String(item.type || "").toLowerCase() === "xarajat")
        .reduce((acc, item) => acc + getItemAmount(item), 0);

      const daromadSumma = data
        .filter((item) => String(item.type || "").toLowerCase() === "daromad")
        .reduce((acc, item) => acc + getItemAmount(item), 0);

      if (jami_xarajat) {
        jami_xarajat.textContent = formatSumma(xarajatSumma);
      }

      if (jami_daromad) {
        jami_daromad.textContent = formatSumma(daromadSumma);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

async function loadUsers() {
  try {
    const res = await fetch(API2);
    const users = await res.json();
    if (Array.isArray(users) && users.length > 0 && !profilData) {
      const currentUser = users[0];
      if (!loginUser && !registerUser) {
        if (foydalanuvchi_name) {
          foydalanuvchi_name.textContent =
            currentUser.username || currentUser.name || "";
        }
        if (email_text) {
          email_text.textContent = currentUser.email || "";
        }
      }
      if (currentUser.registeredDateFormatted && sana && !sana.textContent) {
        sana.textContent = currentUser.registeredDateFormatted;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

loadTranzaksiyalarStats();
loadUsers();

if (manzilYangilashBtn && manzil) {
  manzilYangilashBtn.addEventListener("click", function () {
    manzil.scrollIntoView({ behavior: "smooth", block: "center" });
    manzil.focus();
  });
}

if (maxfiylikBtn && eskiParol) {
  maxfiylikBtn.addEventListener("click", function () {
    eskiParol.scrollIntoView({ behavior: "smooth", block: "center" });
    eskiParol.focus();
  });
}

if (tranzaksiyalar) {
  tranzaksiyalar.addEventListener("click", function () {
    window.location.href = "./tranzaksiyalar.html";
  });
}

if (dashboard) {
  dashboard.addEventListener("click", function () {
    window.location.href = "./dashboard.html";
  });
}

if (kategoriyalar) {
  kategoriyalar.addEventListener("click", function () {
    window.location.href = "./kategoriyalar.html";
  });
}

if (s_button_b) {
  s_button_b.addEventListener("click", function () {
    window.location.href = "./dashboard.html";
  });
}

if (logout) {
  logout.addEventListener("click", function () {
    let a = confirm("Rostdan ham hisobdan chiqmoqchimisiz?");
    if (a) {
      window.location.href = "./ozgarish.html";
    }
  });
}

let loginUser = JSON.parse(localStorage.getItem("ozgarish"));
let registerUser = JSON.parse(localStorage.getItem("register"));
let profilData = JSON.parse(localStorage.getItem("profilData"));

if (loginUser) {
  if (foydalanuvchi_name) {
    foydalanuvchi_name.textContent = loginUser.username || "";
  }
  if (email_text) {
    email_text.textContent = loginUser.email || "";
  }
}

if (registerUser) {
  if (foydalanuvchi_name) {
    foydalanuvchi_name.textContent = registerUser.username || "";
  }
  if (email_text) {
    email_text.textContent = registerUser.email || "";
  }
}

if (profilData) {
  if (profilData.username && foydalanuvchi_name) {
    foydalanuvchi_name.textContent = profilData.username;
  }
  if (profilData.email && email_text) {
    email_text.textContent = profilData.email;
  }
}

renderRegisteredDate();
renderRegisteredElapsed();
restoreDraftInputs();
updateFaoliyatOnRefresh("parolYangilandiFaoliyat", "Parol yangilandi");
updateFaoliyatOnRefresh("profilTahrirlandiFaoliyat", "Profil tahrirlandi");

if (username) {
  username.addEventListener("focus", function ({ target: { value } }) {
    usernameValidation(value);
  });

  username.addEventListener("blur", function ({ target: { value } }) {
    usernameValidation(value);
  });

  username.addEventListener("input", function ({ target: { value } }) {
    usernameValidation(value);
  });
}

function usernameValidation(value) {
  if (!username) return;
  const trimmed = value.trim();
  if (trimmed.length >= 3) {
    username.style.border = "1px solid rgb(0, 198, 0)";
    hideInputError(username);
    updateStorageField("username", trimmed);
    if (foydalanuvchi_name) {
      foydalanuvchi_name.textContent = trimmed;
    }
  } else {
    username.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(username, "Harflar 3tadan kam bo'lmasligi kerak");
  }
  ozgarishValidation();
}

if (email) {
  email.addEventListener("focus", function ({ target: { value } }) {
    emailValidation(value);
  });

  email.addEventListener("blur", function ({ target: { value } }) {
    emailValidation(value);
  });

  email.addEventListener("input", function ({ target: { value } }) {
    emailValidation(value);
  });
}

function emailValidation(value) {
  if (!email) return;
  const trimmed = value.trim();
  if (!trimmed) {
    email.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(email, "Email bo'sh bo'lmasligi kerak");
    ozgarishValidation();
    return;
  }
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  if (isValidEmail) {
    email.style.border = "1px solid rgb(0, 198, 0)";
    hideInputError(email);
    updateStorageField("email", trimmed);
    if (email_text) {
      email_text.textContent = trimmed;
    }
  } else {
    email.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(email, "Email formati noto'g'ri kiritilgan");
  }
  ozgarishValidation();
}

if (tel) {
  tel.addEventListener("focus", function ({ target: { value } }) {
    telValidation(value);
  });

  tel.addEventListener("blur", function ({ target: { value } }) {
    telValidation(value);
  });

  tel.addEventListener("input", function ({ target: { value } }) {
    telValidation(value);
  });
}

function telValidation(value) {
  if (!tel) return;
  const toza = value.trim().replace(/\s+/g, "");
  if (!toza) {
    tel.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(tel, "Telefon raqam kiritilishi kerak");
    ozgarishValidation();
    return;
  }

  let digits = "";
  if (toza.startsWith("+")) {
    if (toza.slice(1).includes("+")) {
      tel.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(tel, "Ortib ketgan '+' belgisi bo'lmasligi kerak");
      ozgarishValidation();
      return;
    }
    digits = toza.slice(1);
  } else {
    if (toza.includes("+")) {
      tel.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(tel, "'+' belgisi faqat boshida bo'lishi mumkin");
      ozgarishValidation();
      return;
    }
    digits = toza;
  }

  const onlyDigits = /^\d+$/.test(digits);
  if (!onlyDigits) {
    tel.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(
      tel,
      "Telefon raqam faqat raqamlardan iborat bo'lishi kerak",
    );
    ozgarishValidation();
    return;
  }

  const isValidLength =
    (digits.startsWith("998") && digits.length === 12) ||
    (!digits.startsWith("998") && digits.length >= 7 && digits.length <= 15);

  if (isValidLength) {
    tel.style.border = "1px solid rgb(0, 198, 0)";
    hideInputError(tel);
  } else {
    tel.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(tel, "Telefon raqam uzunligi noto'g'ri");
  }
  ozgarishValidation();
}

if (manzil) {
  manzil.addEventListener("focus", function ({ target: { value } }) {
    manzilValidation(value);
  });

  manzil.addEventListener("blur", function ({ target: { value } }) {
    manzilValidation(value);
  });

  manzil.addEventListener("input", function ({ target: { value } }) {
    manzilValidation(value);
  });
}

function manzilValidation(value) {
  if (!manzil) return;
  const trimmed = value.trim();
  if (trimmed.length < 3) {
    manzil.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(manzil, "Manzil kamida 3 ta belgidan iborat bo'lishi kerak");
    ozgarishValidation();
    return;
  }
  if (!trimmed.includes(",")) {
    manzil.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(manzil, "Manzilda vergul (,) bilan ajratib yozing");
    ozgarishValidation();
    return;
  }
  const afterComma = trimmed.split(",")[1] ? trimmed.split(",")[1].trim() : "";
  if (afterComma.length < 3) {
    manzil.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(
      manzil,
      "Verguldan keyingi qism kamida 3 ta harf bo'lishi kerak",
    );
    ozgarishValidation();
    return;
  }

  manzil.style.border = "1px solid rgb(0, 198, 0)";
  hideInputError(manzil);
  ozgarishValidation();
}

function ozgarishValidation() {
  if (!ozgarish) return;
  const isChekEmailBorder =
    email && email.style.borderColor === "rgb(0, 198, 0)";
  const isChektelBorder = tel && tel.style.borderColor === "rgb(0, 198, 0)";
  const isChekmanzilBorder =
    manzil && manzil.style.borderColor === "rgb(0, 198, 0)";
  const isChekusernameBorder =
    username && username.style.borderColor === "rgb(0, 198, 0)";

  if (
    isChekEmailBorder ||
    isChektelBorder ||
    isChekmanzilBorder ||
    isChekusernameBorder
  ) {
    ozgarish.disabled = false;
    ozgarish.style.backgroundColor = "#090910";
    ozgarish.style.cursor = "pointer";
  } else {
    ozgarish.disabled = true;
    ozgarish.style.backgroundColor = "rgb(212, 212, 212)";
    ozgarish.style.cursor = "not-allowed";
    ozgarish.style.boxShadow = "none";
  }
}

if (ozgarish) {
  ozgarish.addEventListener("click", function () {
    if (ozgarish.disabled) return;

    const preservedDate = getRegisteredDateFormatted();
    const updatedData = {
      username: username ? username.value.trim() : "",
      email: email ? email.value.trim() : "",
      tel: tel ? tel.value.trim() : "",
      manzil: manzil ? manzil.value.trim() : "",
      ...(preservedDate ? { registeredDateFormatted: preservedDate } : {}),
    };

    localStorage.setItem("profilData", JSON.stringify(updatedData));
    sessionStorage.setItem("profilInputDraft", JSON.stringify(updatedData));
    if (username && username.style.borderColor === "rgb(0, 198, 0)") {
      updateStorageField("username", updatedData.username);
    }
    if (email && email.style.borderColor === "rgb(0, 198, 0)") {
      updateStorageField("email", updatedData.email);
    }
    if (foydalanuvchi_name) {
      foydalanuvchi_name.textContent = updatedData.username;
    }
    if (email_text) {
      email_text.textContent = updatedData.email;
    }
    renderRegisteredDate();
    renderRegisteredElapsed();
    recordFaoliyatTime("profilTahrirlandiFaoliyat", "Profil tahrirlandi");
    alert("Ma'lumotlar saqlandi!");
  });
}

if (password) {
  password.addEventListener("input", ({ target: { value } }) => {
    passwordValidation(value);
    if (password_y && password_y.value) {
      password_yValidation(password_y.value);
    }
    password_a();
  });
}

function passwordValidation(value) {
  if (!password) return false;
  const errMsg = getPasswordError(value);
  if (!errMsg) {
    password.style.border = "1px solid rgb(0, 198, 0)";
    hideInputError(password);
    return true;
  } else {
    password.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(password, errMsg);
    return false;
  }
}

if (password_y) {
  password_y.addEventListener("input", ({ target: { value } }) => {
    password_yValidation(value);
    password_a();
  });
}

function password_yValidation(value) {
  if (!password_y) return false;
  const errMsg = getPasswordError(value);
  const oldVal = password ? password.value : "";

  if (errMsg) {
    password_y.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(password_y, errMsg);
    return false;
  }
  if (value === oldVal) {
    password_y.style.border = "1px solid rgb(255, 0, 0)";
    showInputError(password_y, "Yangi parol eski paroldan farq qilishi kerak");
    return false;
  }

  password_y.style.border = "1px solid rgb(0, 198, 0)";
  hideInputError(password_y);
  return true;
}

function password_a() {
  if (!btn_outline) return;
  const isPassword_e =
    password && password.style.borderColor === "rgb(0, 198, 0)";
  const isPassword_y =
    password_y && password_y.style.borderColor === "rgb(0, 198, 0)";

  if (isPassword_e && isPassword_y) {
    btn_outline.disabled = false;
    btn_outline.style.cursor = "pointer";
  } else {
    btn_outline.disabled = true;
    btn_outline.style.cursor = "not-allowed";
  }
}

if (btn_outline) {
  btn_outline.addEventListener("click", function () {
    if (btn_outline.disabled || !password || !password_y) return;

    let updated = false;
    const currentReg = JSON.parse(localStorage.getItem("register"));
    const currentOzgarish = JSON.parse(localStorage.getItem("ozgarish"));
    const currentLogin = JSON.parse(localStorage.getItem("login"));

    if (currentReg && currentReg.password === password.value) {
      currentReg.password = password_y.value;
      localStorage.setItem("register", JSON.stringify(currentReg));
      updated = true;
    }

    if (currentOzgarish && currentOzgarish.password === password.value) {
      currentOzgarish.password = password_y.value;
      localStorage.setItem("ozgarish", JSON.stringify(currentOzgarish));
      updated = true;
    }

    if (currentLogin && currentLogin.password === password.value) {
      currentLogin.password = password_y.value;
      localStorage.setItem("login", JSON.stringify(currentLogin));
      updated = true;
    }

    if (updated) {
      password.value = "";
      password_y.value = "";
      password.style.border = "";
      password_y.style.border = "";
      hideInputError(password);
      hideInputError(password_y);
      password_a();
      recordFaoliyatTime("parolYangilandiFaoliyat", "Parol yangilandi");
      recordFaoliyatTime("profilTahrirlandiFaoliyat", "Profil tahrirlandi");
      alert("Parol muvaffaqiyatli yangilandi!");
    } else {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(password, "Eski parol noto'g'ri kiritildi");
    }
  });
}
