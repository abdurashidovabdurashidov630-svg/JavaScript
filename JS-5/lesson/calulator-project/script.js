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
      value !== "-" &&
      value !== "(" &&
      value !== ")" &&
      value !== "√" &&
      value !== "%"
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
      case "-":
      case "/":
      case "(":
      case ")":
      case "%": {
        if (
          value === "+" ||
          value === "-" ||
          value === "/" ||
          value === "%" ||
          value === "."
        ) {
          if (sum.at(-1) === value) break;
          else if (isNaN(sum.at(-1))) {
            sum = sum.slice(0, sum.length - 1) + value;
          } else sum += value;
        }
      }
      case "√": {
        if(sum[0] === value) break;
        else sum = value + sum;
        break;
      }
      case "DEL": {
        sum = sum.slice(0, sum.length - 1);
        break;
      }
      case "x": {
        sum += "*";
        break;
      }
      case "RESET": {
        sum = "0";
        break;
      }
      case "=": {
        if(sum.includes("√")){
          sum = sum.replace("√","")
          sum = String(Math.sqrt(sum))
        } else sum = String(eval(sum))
      }
    }

    ui.textContent = sum;
  });
});
