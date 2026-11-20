const body = document.querySelector("body");

body.style.cssText = `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let h1 = document.createElement("h1");

h1.textContent = "Registion Form";

h1.style.cssText = `
    color: white;
    font-size: 25px;
`;

div2.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(19, 86, 129);
    height: 60px;
`;

div1.style.cssText = `
    height: 410px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    box-shadow: 0 0 10px rgb(172, 171, 171);
`;

body.prepend(div1);
div1.prepend(div2);
div2.append(h1);

let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");

let h2 = document.createElement("h4");
let h3 = document.createElement("h4");

h2.textContent = "First Name";
h3.textContent = "Last Name";

let input1 = document.createElement("input");
let input2 = document.createElement("input");

input1.type = "text";
input2.type = "text";

div3.style.cssText = `
    display: flex;
    gap: 10px;
    padding: 0 20px;
    margin-top: 20px;
`;

div4.style.width = "230px";
div5.style.width = "230px";

h2.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

h3.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

input1.style.cssText = `
    width: 100%;
    height: 22px;
    border: 1px solid rgb(221, 221, 221);
`;

input2.style.cssText = `
    width: 100%;
    height: 25px;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);
`;

div1.append(div3);

div3.append(div4, div5);

div4.append(h2, input1);
div5.append(h3, input2);

let form = document.createElement("form");

form.style.cssText = `
    padding: 0 20px;
`;

div1.append(form);

let div6 = document.createElement("div");
let h4 = document.createElement("h4");
let input3 = document.createElement("input");

h4.textContent = "Email Address";
input3.type = "email";

div6.style.marginTop = "15px";

h4.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

input3.style.cssText = `
    width: 100%;
    height: 28px;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);
`;

form.append(div6);
div6.append(h4, input3);

let div7 = document.createElement("div");
let h5 = document.createElement("h4");
let input4 = document.createElement("input");

h5.textContent = "Phone";
input4.type = "text";

div7.style.marginTop = "15px";

h5.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

input4.style.cssText = `
    width: 100%;
    height: 28px;
    box-sizing: border-box;
    border: 1px solid rgb(221, 221, 221);
`;

form.append(div7);
div7.append(h5, input4);

let div8 = document.createElement("div");
let div9 = document.createElement("div");
let div10 = document.createElement("div");

let h6 = document.createElement("h4");
let h7 = document.createElement("h4");

h6.textContent = "City";
h7.textContent = "Country";

let city = document.createElement("select");
let country = document.createElement("select");

let option1 = document.createElement("option");
let option2 = document.createElement("option");

option1.textContent = "London";
option2.textContent = "India";

city.append(option1);
country.append(option2);

div8.style.cssText = `
    display: flex;
    gap: 10px;
    margin-top: 15px;
`;

div9.style.width = "230px";
div10.style.width = "230px";

h6.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

h7.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 15px;
    font-weight: normal;
`;

city.style.cssText = `
    width: 100%;
    height: 30px;
`;

country.style.cssText = `
    width: 100%;
    height: 30px;
`;

form.append(div8);

div8.append(div9, div10);

div9.append(h6, city);
div10.append(h7, country);

let button = document.createElement("button");

button.textContent = "Get Started";

button.style.cssText = `
    width: 100%;
    height: 35px;
    margin-top: 25px;
    border: none;
    background-color: rgb(35, 153, 207);
    color: white;
    cursor: pointer;
    border-radius: 3px;
`;

form.append(button);