const close = document.querySelector(".close");
const open = document.querySelector(".open");
const username = document.querySelector("#username");
const password = document.querySelector(".password");
const register = document.querySelector(".register");
const email = document.querySelector(".email");
const signin = document.querySelector(".signin");
const url = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1";

signin.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./login.html";
});

username.addEventListener("focus", function ({ target: { value } }) {
  if (value) {
    username.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
    usernameValidation(value);
  }
});

username.addEventListener("blur", function ({ target: { value } }) {
  if (!value) {
    username.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
    usernameValidation(value);
  }
});

username.addEventListener("input", function ({ target: { value } }) {
  usernameValidation(value);
});

function usernameValidation(value) {
  if (
    value.length >= 3 &&
    value.length <= 25 &&
    value === value.toLowerCase()
  ) {
    username.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
  } else {
    username.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
  }
  registerValidation();
}

password.addEventListener("focus", function ({ target: { value } }) {
  if (value) {
    password.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
    passwordValidation(value);
  }
});

password.addEventListener("blur", function ({ target: { value } }) {
  if (!value) {
    password.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
    passwordValidation(value);
  }
});

password.addEventListener("input", function ({ target: { value } }) {
  passwordValidation(value);
});

function passwordValidation(value) {
  const allSymbol = ".?/|!@#$%^&*()`;:,'*-+_=~<>";
  const isCheckLength = value.length >= 8 && value.length <= 25;
  const isCheckLower = value
    .split("")
    .some(
      (str) =>
        isNaN(str) && !allSymbol.includes(str) && str === str.toUpperCase(),
    );
  const isCheckUpper = value
    .split("")
    .some(
      (str) =>
        isNaN(str) && !allSymbol.includes(str) && str === str.toLowerCase(),
    );
  const isCheckSymbol = value.split("").some((str) => allSymbol.includes(str));
  const isCheckNumber = value.split("").some((str) => !isNaN(str));
  if (
    isCheckLength &&
    isCheckLower &&
    isCheckUpper &&
    isCheckNumber &&
    isCheckSymbol
  ) {
    password.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
  } else {
    password.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
  }
  registerValidation();
}

register.addEventListener("click", checkregister);

function checkregister() {
  const isChekUsernameBorder = username
    .getAttribute("style")
    ?.includes("rgb(0, 198, 0)");
  const isChekPasswordBorder = password
    .getAttribute("style")
    ?.includes("rgb(0, 198, 0)");
  if (isChekPasswordBorder && isChekUsernameBorder) {
    createrUserFetch(`${url}/users1`);
  } else {
    usernameValidation();
    emailValidation();
    passwordValidation();
  }
}

function registerValidation() {
  const isChekUsernameBorder = username
    .getAttribute("style")
    ?.includes("rgb(0, 198, 0)");
  const isChekPasswordBorder = password
    .getAttribute("style")
    ?.includes("rgb(0, 198, 0)");
  if (isChekUsernameBorder && isChekPasswordBorder) {
    register.disabled = false;
    register.style.cssText = `
      background-color: #769bf2;
      cursor: pointer;
      box-shadow: 0 2px 2px #6c6c6c;
    `;
  } else {
    register.disabled = true;
    register.style.cssText = `
      background-color: rgb(212,212,212);
      cursor: not-allowed;
      box-shadow: none;
    `;
  }
}

close.addEventListener("click", function () {
  close.style.cssText = `
    display: none;
  `;
  open.style.cssText = `
    display: block;
  `;
  password.type = "text";
});

open.addEventListener("click", function () {
  open.style.cssText = `
    display: none;
  `;
  close.style.cssText = `
    display: block;
  `;
  password.type = "password";
});

email.addEventListener("focus", function ({ target: { value } }) {
  if (value) {
    email.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
    emailValidation(value);
  }
});

email.addEventListener("blur", function ({ target: { value } }) {
  if (!value) {
    email.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
    emailValidation(value);
  }
});

email.addEventListener("input", function ({ target: { value } }) {
  emailValidation(value);
});

function emailValidation(value) {
  let v = value.split("@")[0].length;
  const isCheckLength = v >= 3 && v <= 45;
  const isCheckLower = value
    .split("")
    .some((str) => isNaN(str) && str === str.toUpperCase());
  const isCheckSymbol = value.split("").some((str) => str === "@");
  const isCheckend = value.endsWith("gmail.com");
  if (isCheckLength && isCheckLower && isCheckSymbol && isCheckend) {
    email.style.cssText = `
      border: 1px solid rgb(0,198,0);
    `;
  } else {
    email.style.cssText = `
      border: 1px solid rgb(255,0,0);
    `;
  }
  registerValidation();
}

async function createrUserFetch(url) {
  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  const isCheckUnicalUsers = await checkUnicalUser(obj, url);
  if (isCheckUnicalUsers) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!res.ok) {
        throw new Error("!Nimadir xato ketdi!");
      }
      username.value = "";
      email.value = "";
      password.value = "";
      window.location.href = "./login.html";
    } catch (err) {
      console.log(err.message);
    }
  }
}

async function checkUnicalUser(newObj, url) {
  try {
    let res = await fetch(url);
    throw new Error("Ma'lumot olib kelishda xatolik bo'ldi");
    res = await res.json();
    return res.every(
      (obj) => obj.username !== newObj.username && obj.email !== newObj.email,
    );
  } catch (err) {
    alert(err.message);
  }
}
