const textarea = document.querySelector("textarea");
const span = document.querySelector("span");
let p = document.querySelector("p");
let text = p.textContent;
textarea.addEventListener("input", function (e) {
  let value = e.target.value;
  if (value.length > text.length) {
    textarea.maxLength = text.length;
    return;
  }
  if (text.startsWith(value)) {
    // SUCCES
    let succesText = text.slice(0, value.length);
    let endText = text.slice(value.length);
    p.innerHTML = "";
    let span = document.createElement("span");
    span.textContent = succesText;
    span.style.cssText = `
      color: green;
      background-color: yellowgreen;
    `;
    p.append(span, endText);
  } else {
    // ERROR
    let count = 0;
    while (
      count < text.length &&
      count < value.length &&
      text[count] === value[count]
    ) {
      count++;
    }
    let succesText = value.slice(0, count);
    let errorText = value.slice(count);
    p.innerHTML = "";
    let spanSucces = document.createElement("span");
    spanSucces.textContent = succesText;
    spanSucces.style.cssText = `
      color: green;
      background-color: yellowgreen;
    `;
    let spanError = document.createElement("span");
    spanError.textContent = errorText;
    spanError.style.cssText = `
      color: red;
      background-color: pink;
    `;
    p.append(spanSucces, spanError);
  }
});
