const signup = document.querySelector(".signup");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const username = document.querySelector("#username");
const password = document.querySelector(".password");
const login = document.querySelector(".login");

const API = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1";

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

signup.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "./register.html";
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
  loginValidation();
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
  loginValidation();
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
  loginValidation();
});

function passwordValidation(value) {
  const allSymbol = ".?/|!@#$%^&*()`;:,'*-+_=~<>";
  const isCheckLength = value.length >= 8 && value.length <= 25;
  const isCheckLower = value
    .split("")
    .some((str) => isNaN(str) && str === str.toUpperCase());
  const isCheckUpper = value
    .split("")
    .some((str) => isNaN(str) && str === str.toLowerCase());
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
  loginValidation();
}

login.addEventListener("click", checkLogin);

function checkLogin() {
  const isEmailValid = emailValidation(email.value);
  const isPasswordValid = passwordValidation(password.value);

  if (isEmailValid && isPasswordValid) {
    getUsersFetchAction(`${API}/users`);
  }
}

function loginValidation() {
  const isChekEmailBorder = email.style.borderColor === "rgb(0, 198, 0)";
  const isChekPasswordBorder = password.style.borderColor === "rgb(0, 198, 0)";

  if (isChekEmailBorder && isChekPasswordBorder) {
    login.disabled = false;
    login.style.cssText = `
      background-color: rgba(3, 2, 19, 1);
      cursor: pointer;
      box-shadow: 0 2px 2px #6c6c6c;
    `;
  } else {
    login.disabled = true;
    login.style.cssText = `
      background-color: rgb(212,212,212);
      cursor: not-allowed;
      box-shadow: none;
    `;
  }
}

async function getUsersFetchAction(url) {
  const emailValue = email.value;
  const passwordValue = password.value;
  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error("Ma'lumot olib kelishda xatolik bo'ldi!");
    }
    const users = await res.json();
    const user = users.find(
      (obj) => obj.email === emailValue && obj.password === passwordValue,
    );
    if (user) {
      window.location.href = "./dashboard.html";
    } else {
      alert("Siz hali ro'yxatdan o'tmagansiz yoki email yoki parol xato!");
    }
  } catch (err) {
    console.log(err.message);
  }
}
