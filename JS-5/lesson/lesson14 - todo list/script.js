const API = "https://6ae7f99e56b2ee1e5440b4a7.mockapi.io/api/v1";
const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const tasks = document.querySelector(".tasks");

let data = [];

// BTN Click
function clickAction(e) {
  e.preventDefault();
  let text = btn.children[1].textContent;
  if (text === "New task") {
    inp.style.cssText = `
            display: block;
        `;
    btn.children[1].textContent = "Add";
  } else if (text === "Add") {
    inp.style.cssText = `
            display: none;
        `;
    addTask(inp.value);
    btn.children[1].textContent = "New task";
  } else if (text === "Update") {
    let obj = JSON.parse(btn.getAttribute("obj"));
    obj = { ...obj, name: inp.value };
    fetch(`${API}/todo-list/${obj.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("!Ma'lumot saqlashda xatolik yuz berdi!");
        }
        inp.value = "";
        inp.style.cssText = `
          display: none;
        `;
        btn.children[1].textContent = "New task";
        getFetchData();
      })
      .catch((err) => alert(err.message));
  }
}
btn.addEventListener("click", clickAction);

// Post | Add task
function addTask(value) {
  if (value) {
    let task = {
      id: crypto.randomUUID(),
      name: value,
      done: false,
    };
    fetch(`${API}/todo-list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("!Ma'lumot saqlashda xatolik yuz berdi!");
        }
        inp.value = "";
        getFetchData();
      })
      .catch((err) => alert(err.message));
  } else alert("!Task kiriting!");
}

// Checkbox Action
function checkboxChecked(task, checked) {
  fetch(`${API}/todo-list/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...task, done: checked }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("!Ma'lumot saqlashda xatolik yuz berdi!");
      }
      inp.value = "";
      inp.style.cssText = `
          display: none;
        `;
      btn.children[1].textContent = "New task";
      getFetchData();
    })
    .catch((err) => alert(err.message));
}

// DELETE | Delete Action
function removeWork(deleteID) {
  if (deleteID && confirm("!Rostdan ham shu taskni o'chirmoqchimisiz!")) {
    fetch(`${API}/todo-list/${deleteID}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("!Ma'lumot o'chirishda xatolik yuz berdi!");
        }
        getFetchData();
      })
      .catch((err) => alert(""));
  }
}

// PUT | Update Action
function updateWork(obj) {
  inp.style.cssText = `
    display: block;
  `;
  btn.children[1].textContent = "Update";
  inp.value = obj.name;

  btn.setAttribute("obj", JSON.stringify(obj));
}

// Create UI
function creeateUI(arr) {
  tasks.innerHTML = "";
  arr.forEach((task) => {
    let work = document.createElement("div");
    work.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
        `;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", ({ target: { checked } }) =>
      checkboxChecked(task, checked),
    );
    let span = document.createElement("span");
    span.textContent = task.name;
    span.style.cssText = `
            font-size: 20px;
            font-weight: 200;
            color: ${task.done ? "red" : "black"};
            text-decoration-line: ${task.done ? "line-through" : "none"};
        `;
    if (task.done) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    let edit = document.createElement("img");
    edit.src = "./assets/icons/edit.svg";
    edit.style.cssText = `
            width: 20px;
            cursor: pointer;
            display: ${task.done ? "none" : "inline"}
        `;
    edit.addEventListener("click", () => updateWork(task));

    let del = document.createElement("img");
    del.src = "./assets/icons/del.svg";
    del.style.cssText = `
            width: 20px;
            cursor: pointer;
        `;
    del.addEventListener("click", () => removeWork(task.id));
    let left = document.createElement("div");
    left.style.cssText = `
            display: flex;
            align-items: center;
            gap: 15px;
        `;
    left.append(checkbox);
    left.append(span);
    let right = document.createElement("div");
    right.style.cssText = `
            display: flex;
            align-items: center;
            gap: 15px;
        `;
    right.append(edit, del);
    work.append(left);
    work.append(right);
    tasks.append(work);
  });
}

// GET | Get Data
function getFetchData() {
  fetch(`${API}/todo-list`)
    .then((res) => res.json())
    .then((res) => {
      creeateUI(res);
    })
    .catch((err) => alert(err.message));
}
getFetchData();
