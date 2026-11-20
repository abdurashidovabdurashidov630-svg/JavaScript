const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const tasks = document.querySelector(".tasks");

let data = [];

// BTN Click
function clickAction(e) {
  e.preventDefault();
  let text = btn.children[1].textContent;
  if (text === "Add") {
    addTask(inp.value);
  } else if (text === "Update") {
    let obj = JSON.parse(btn.getAttribute("obj"));
    obj = { ...obj, name: inp.value };
    data = data.map((task) => (task.id === obj.id ? obj : task));
    creeateUI(data);
    btn.children[1].textContent = "Add";
  }
}
btn.addEventListener("click", clickAction);

// Add task
function addTask(value) {
  if (value) {
    let task = {
      id: crypto.randomUUID(),
      name: value,
      done: false,
    };
    data.push(task);
    inp.value = "";
    creeateUI(data);
  } else alert("❗Task kiriting❗");
}

// Checkbox Action
function checkboxChecked(id) {
  data = data.map((task) => {
    if (task.id === id && task.done) {
      return { ...task, done: false };
    } else if (task.id === id) {
      return { ...task, done: true };
    }
    return task;
  });
  creeateUI(data);
}

// Delete Action
function removeWork(deleteID) {
  if (confirm("❗Rostdan ham shu taskni o'chirmoqchimisiz❗")) {
    data = data.filter((task) => task.id !== deleteID);
    creeateUI(data);
  }
}

// Update Action
function updateWork(obj) {
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
            padding: 0 20px 20px 20px;
            border-bottom: 1px solid grey;
        `;
    let checkbox = document.createElement("input");
    checkbox.style.cssText = `
        width: 20px;
        height: 20px;
    `;
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => checkboxChecked(task.id));
    let span = document.createElement("span");
    span.textContent = task.name;
    span.style.cssText = `
            font-size: 20px;
            font-weight: 200;
            color: ${task.done ? "#ADB5BD" : "white"};
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
            display: ${task.done ? "none" : "inline"}
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
