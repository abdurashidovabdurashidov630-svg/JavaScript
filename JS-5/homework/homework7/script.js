const btns = document.querySelector(".btns");
const ui = document.querySelector(".ui");
let sum = "";
Array.from(btns.children).forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let value = e.target.textContent;
    if (
      sum === "0" &&
      value !== "." &&
      value !== "=" &&
      value !== "x" &&
      value !== "-"
    ) {
      sum = "";
    }
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-": {
        sum += value;
        break;
      }
      case "x": {
        sum += "*";
        break;
      }

      case "C": {
        sum = "0";
        break;
      }
      case "=": {
        sum = String(eval(sum));
        break;
      }
    }

    ui.textContent = sum;
  });
});
