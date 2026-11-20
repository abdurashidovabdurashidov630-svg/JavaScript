document.addEventListener("DOMContentLoaded", () => {
  const close = document.querySelector(".close");
  const open = document.querySelector(".open");
  const password = document.querySelector("#parol");
  const close2 = document.querySelector(".close2");
  const open2 = document.querySelector(".open2");
  const inp_p = document.querySelector("#parol2");
  const username = document.querySelector("#ism");
  const registerBtn = document.querySelector(".btn");
  const email = document.querySelector("#email");
  const API = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1";

  if (registerBtn) {
    registerBtn.disabled = true;
    registerBtn.style.backgroundColor = "rgb(212, 212, 212)";
    registerBtn.style.cursor = "not-allowed";
    registerBtn.style.boxShadow = "none";
  }

  function getOrCreateErrorEl(inputEl) {
    if (!inputEl) return null;

    let container = inputEl.parentElement;
    if (
      container &&
      (container.querySelector(".close, .open, .close2, .open2") ||
        container.classList.contains("input_box") ||
        container.classList.contains("password_box") ||
        container.classList.contains("p_i_p"))
    ) {
      container = container.parentElement || container;
    }

    let errEl = container.querySelector(".input-error-msg");
    if (!errEl) {
      errEl = document.createElement("small");
      errEl.className = "input-error-msg";
      errEl.style.color = "rgb(255, 0, 0)";
      errEl.style.fontSize = "12px";
      errEl.style.marginTop = "4px";
      errEl.style.display = "none";
      errEl.style.width = "100%";
      container.appendChild(errEl);
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

  if (close && open && password) {
    close.addEventListener("click", () => {
      close.style.display = "none";
      open.style.display = "block";
      password.type = "text";
    });
    open.addEventListener("click", () => {
      open.style.display = "none";
      close.style.display = "block";
      password.type = "password";
    });
  }

  if (close2 && open2 && inp_p) {
    close2.addEventListener("click", () => {
      close2.style.display = "none";
      open2.style.display = "block";
      inp_p.type = "text";
    });
    open2.addEventListener("click", () => {
      open2.style.display = "none";
      close2.style.display = "block";
      inp_p.type = "password";
    });
  }

  function getAllLocalStorageValues() {
    const result = [];
    const walk = (item) => {
      if (item === null || item === undefined) return;
      if (
        typeof item === "string" ||
        typeof item === "number" ||
        typeof item === "boolean"
      ) {
        result.push(String(item).trim());
        return;
      }
      if (Array.isArray(item)) {
        item.forEach(walk);
        return;
      }
      if (typeof item === "object") {
        Object.values(item).forEach(walk);
      }
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      result.push(raw.trim());
      try {
        walk(JSON.parse(raw));
      } catch (_) {}
    }
    return result;
  }

  async function getApiUsers() {
    try {
      const res = await fetch(`${API}/users`);
      if (!res.ok) return [];
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch (_) {
      return [];
    }
  }

  function usernameValidation(value) {
    if (!username) return true;
    const trimmed = (value || "").trim();
    if (trimmed.length >= 3 && trimmed.length <= 25) {
      username.style.border = "1px solid rgb(0, 198, 0)";
      hideInputError(username);
      registerValidation();
      return true;
    } else {
      username.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        username,
        "Ism kamida 3 ta va ko'pi bilan 25 ta belgidan iborat bo'lishi kerak",
      );
      registerValidation();
      return false;
    }
  }

  async function emailValidation(value) {
    if (!email) return true;
    const trimmed = (value || "").trim();

    if (!trimmed) {
      email.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(email, "Email bo'sh bo'lmasligi kerak");
      registerValidation();
      return false;
    }

    const parts = trimmed.split("@");
    const prefixLen = parts[0] ? parts[0].length : 0;
    if (
      parts.length !== 2 ||
      prefixLen < 3 ||
      prefixLen > 45 ||
      !trimmed.endsWith("gmail.com")
    ) {
      email.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        email,
        "Email gmail.com bilan tugashi va '@' dan oldin 3-45 ta belgi bo'lishi kerak",
      );
      registerValidation();
      return false;
    }

    const localVals = getAllLocalStorageValues().map((v) => v.toLowerCase());
    const apiUsers = await getApiUsers();

    const isMatched =
      localVals.includes(trimmed.toLowerCase()) ||
      apiUsers.some(
        (u) =>
          String(u.email || "")
            .trim()
            .toLowerCase() === trimmed.toLowerCase(),
      );

    if (isMatched) {
      email.style.border = "1px solid rgb(0, 198, 0)";
      hideInputError(email);
      registerValidation();
      return true;
    } else {
      email.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(email, "Emailni qayta tekshiring");
      registerValidation();
      return false;
    }
  }

  async function passwordValidation(value) {
    if (!password) return true;
    const val = value || "";

    if (!val) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(password, "Parol bo'sh bo'lmasligi kerak");
      registerValidation();
      return false;
    }

    const allSymbol = ".?/|!@#$%^&*()`;:,'*-+_=~<>";
    const chars = val.split("");
    if (val.length < 8 || val.length > 25) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        password,
        "Parol 8 tadan 25 tagacha belgidan iborat bo'lishi kerak",
      );
      registerValidation();
      return false;
    }
    if (!chars.some((s) => /[a-z]/.test(s))) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        password,
        "Parolda kamida bitta kichik harf bo'lishi kerak",
      );
      registerValidation();
      return false;
    }
    if (!chars.some((s) => /[A-Z]/.test(s))) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        password,
        "Parolda kamida bitta katta harf bo'lishi kerak",
      );
      registerValidation();
      return false;
    }
    if (!chars.some((s) => /\d/.test(s))) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(password, "Parolda kamida bitta raqam bo'lishi kerak");
      registerValidation();
      return false;
    }
    if (!chars.some((s) => allSymbol.includes(s))) {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(
        password,
        "Parolda kamida bitta maxsus belgi bo'lishi kerak",
      );
      registerValidation();
      return false;
    }

    const trimmedPass = val.trim();
    const localVals = getAllLocalStorageValues();
    const apiUsers = await getApiUsers();

    const isMatched =
      localVals.includes(trimmedPass) ||
      apiUsers.some((u) => {
        const p = u.password ?? u.parol ?? u.pass ?? u["o-password2"] ?? "";
        return String(p).trim() === trimmedPass;
      });

    if (isMatched) {
      password.style.border = "1px solid rgb(0, 198, 0)";
      hideInputError(password);
      if (inp_p && inp_p.value) {
        inp_pValidation(inp_p.value);
      }
      registerValidation();
      return true;
    } else {
      password.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(password, "Parolni qayta tekshiring");
      if (inp_p && inp_p.value) {
        inp_pValidation(inp_p.value);
      }
      registerValidation();
      return false;
    }
  }

  function inp_pValidation(value) {
    if (!inp_p || !password) return true;
    if (!value) {
      inp_p.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(inp_p, "Parolni qayta kiriting");
      registerValidation();
      return false;
    }
    if (password.value === value) {
      inp_p.style.border = "1px solid rgb(0, 198, 0)";
      hideInputError(inp_p);
      registerValidation();
      return true;
    } else {
      inp_p.style.border = "1px solid rgb(255, 0, 0)";
      showInputError(inp_p, "Parollar bir xil emas");
      registerValidation();
      return false;
    }
  }

  function registerValidation() {
    if (!registerBtn) return;

    const isUserOk =
      !username || username.style.borderColor === "rgb(0, 198, 0)";
    const isEmailOk = !email || email.style.borderColor === "rgb(0, 198, 0)";
    const isPassOk =
      !password || password.style.borderColor === "rgb(0, 198, 0)";
    const isInpOk = !inp_p || inp_p.style.borderColor === "rgb(0, 198, 0)";

    if (isUserOk && isEmailOk && isPassOk && isInpOk) {
      registerBtn.disabled = false;
      registerBtn.style.backgroundColor = "rgba(3, 2, 19, 1)";
      registerBtn.style.cursor = "pointer";
      registerBtn.style.boxShadow = "0 2px 2px #6c6c6c";
    } else {
      registerBtn.disabled = true;
      registerBtn.style.backgroundColor = "rgb(212, 212, 212)";
      registerBtn.style.cursor = "not-allowed";
      registerBtn.style.boxShadow = "none";
    }
  }

  if (username) {
    username.addEventListener("input", ({ target: { value } }) => {
      usernameValidation(value);
    });
  }

  if (email) {
    email.addEventListener("input", ({ target: { value } }) => {
      emailValidation(value);
    });
  }

  if (password) {
    password.addEventListener("input", ({ target: { value } }) => {
      passwordValidation(value);
    });
  }

  if (inp_p) {
    inp_p.addEventListener("input", ({ target: { value } }) => {
      inp_pValidation(value);
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", checkRegister);
  }

  async function checkRegister(e) {
    e.preventDefault();
    const isUserOk = usernameValidation(username ? username.value : "");
    const isEmailOk = await emailValidation(email ? email.value : "");
    const isPassOk = await passwordValidation(password ? password.value : "");
    const isInpOk = inp_pValidation(inp_p ? inp_p.value : "");

    if (isUserOk && isEmailOk && isPassOk && isInpOk && !registerBtn.disabled) {
      createrUserFetch(`${API}/users`);
    }
  }

  async function createrUserFetch(url) {
    const obj = {
      username: username ? username.value.trim() : "",
      email: email ? email.value.trim() : "",
      password: password ? password.value : "",
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!res.ok) {
        throw new Error("!Nimadir xato ketdi!");
      }
      localStorage.setItem("login", JSON.stringify(obj));
      if (username) {
        username.value = "";
        username.style.borderColor = "";
        hideInputError(username);
      }
      if (email) {
        email.value = "";
        email.style.borderColor = "";
        hideInputError(email);
      }
      if (password) {
        password.value = "";
        password.style.borderColor = "";
        hideInputError(password);
      }
      if (inp_p) {
        inp_p.value = "";
        inp_p.style.borderColor = "";
        hideInputError(inp_p);
      }
      window.location.href = "./profil.html";
    } catch (err) {
      console.log(err.message);
    }
  }
});
