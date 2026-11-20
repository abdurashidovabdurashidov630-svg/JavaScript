const body = document.querySelector("body");
body.style.cssText = `
    height: 100vh;
    background-color: rgb(6,17,39);
    font-family: sans-serif;
    display: flex;
    place-content: center;
`;
const cardwrapper = document.createElement("div");
cardwrapper.style.cssText = `
    display: flex;
    align-items:center;
    gap: 50px;
`;
body.prepend(cardwrapper);
const card1 = document.createElement("div");
card1.style.cssText = `
    width: 350px;
    padding: 8px 8px 19px 8px;
    display:flex;
    flex-direction: column;
    align-items: start;
    background-color: white;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap:13px;
`;
cardwrapper.append(card1);

const img = document.createElement("img");
img.setAttribute("src", "./images/card1.jpg");
img.style.cssText = `
    width: 100%;
    border-radius: 5px;
`;
card1.append(img);
card1.addEventListener("mouseenter", function () {
  card1.setAttribute("class", "active");
});
card1.addEventListener("mouseleave", function () {
  card1.removeAttribute("class");
});
const div = document.createElement("div");
div.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    margin-top: 9px;
`;
const h2 = document.createElement("h2");
const designer = document.createElement("h4");
designer.style.cssText = `
    color: rgb(110, 111, 80);
    font-weight: 100;
    font-size: 15px;
    letter-spacing: 1px;
    margin: 0;
`;
h2.style.cssText = `
    letter-spacing: 1px;
    font-weight: 100;
    color: rgb(110, 111, 80); 
    margin-bottom: 0;
    margin: 0;
`;
h2.textContent = "Darcey Pay";
card1.append(div);
div.append(h2, designer);
designer.textContent = "(Designer)";

const p = document.createElement("p");
p.textContent = "PS Figma HTML5 CSS3 AI";
p.style.cssText = `
    font-weight: 300;
    font-size: 13px;
    color: #444;
    word-spacing: 44px;
`;
card1.append(p);

const btn = document.createElement("button");
btn.style.cssText = `
    width: 105px;
    height: 25px;
    border-radius: 39px;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: rgb(255, 182, 64);
    border-color: rgb(255, 182, 64);
`;
const p2 = document.createElement("p");
p2.textContent = "Projects";
p2.style.cssText = `
    color:white;
    font-size: 15px;
    letter-spacing: 2px;
`;
btn.append(p2);
card1.append(btn);

// =================================================

const card2 = document.createElement("div");
card2.style.cssText = `
    width: 350px;
    padding: 8px 8px 19px 8px;
    display:flex;
    flex-direction: column;
    align-items: start;
    background-color: white;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap:13px;
`;
cardwrapper.append(card2);

const img2 = document.createElement("img");
img2.setAttribute("src", "./images/card2.jpg");
img2.style.cssText = `
    width: 100%;
    border-radius: 5px;
`;
card2.append(img2);
card2.addEventListener("mouseenter", function () {
  card2.setAttribute("class", "active");
});
card2.addEventListener("mouseleave", function () {
  card2.removeAttribute("class");
});
const div2 = document.createElement("div");
div2.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 9px;
`;
const h22 = document.createElement("h2");
const designer2 = document.createElement("h4");
designer2.style.cssText = `
    color: rgb(110, 111, 80);
    font-weight: 100;
    font-size: 15px;
    letter-spacing: 1px;
    margin: 0;
`;
h22.style.cssText = `
    letter-spacing: 1px;
    font-weight: 100;
    color: rgb(110, 111, 80); 
    margin-bottom: 0;
    margin: 0;
`;
h22.textContent = "Daniel Harnandez";
card2.append(div2);
div2.append(h22, designer2);
designer2.textContent = "(Designer)";

const p22 = document.createElement("p");
p22.textContent = "PS Figma HTML5 CSS3 AI";
p22.style.cssText = `
    font-weight: 300;
    font-size: 13px;
    color: #444;
    word-spacing: 44px;
`;
card2.append(p22);

const btn2 = document.createElement("button");
btn2.style.cssText = `
    width: 105px;
    height: 25px;
    border-radius: 39px;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: rgb(255, 182, 64);
    border-color: rgb(255, 182, 64);
`;
const p23 = document.createElement("p");
p23.textContent = "Projects";
p23.style.cssText = `
    color:white;
    font-size: 15px;
    letter-spacing: 2px;
`;
btn2.append(p23);
card2.append(btn2);

// =================================================

const card3 = document.createElement("div");
card3.style.cssText = `
    width: 350px;
    padding: 8px 8px 19px 8px;
    display:flex;
    flex-direction: column;
    align-items: start;
    background-color: white;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap:13px;
`;
cardwrapper.append(card3);

const img3 = document.createElement("img");
img3.setAttribute("src", "./images/card3.jpg");
img3.style.cssText = `
    width: 100%;
    border-radius: 5px;
`;
card3.append(img3);
card3.addEventListener("mouseenter", function () {
  card3.setAttribute("class", "active");
});
card3.addEventListener("mouseleave", function () {
  card3.removeAttribute("class");
});
const div3 = document.createElement("div");
div3.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    margin-top: 9px;
`;
const h23 = document.createElement("h2");
const designer3 = document.createElement("h4");
designer3.style.cssText = `
    color: rgb(110, 111, 80);
    font-weight: 100;
    font-size: 15px;
    letter-spacing: 1px;
    margin: 0;
`;
h23.style.cssText = `
    letter-spacing: 1px;
    font-weight: 100;
    color: rgb(110, 111, 80); 
    margin-bottom: 0;
    margin: 0;
`;
h23.textContent = "Darcey Pay";
card3.append(div3);
div3.append(h23, designer3);
designer3.textContent = "(Designer)";

const p33 = document.createElement("p");
p33.textContent = "PS Figma HTML5 CSS3 AI";
p33.style.cssText = `
    font-weight: 300;
    font-size: 13px;
    color: #444;
    word-spacing: 44px;
`;
card3.append(p33);

const btn3 = document.createElement("button");
btn3.style.cssText = `
    width: 105px;
    height: 25px;
    border-radius: 39px;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: rgb(255, 182, 64);
    border-color: rgb(255, 182, 64);
`;
const p3 = document.createElement("p");
p3.textContent = "Projects";
p3.style.cssText = `
    color:white;
    font-size: 15px;
    letter-spacing: 2px;
`;
btn3.append(p3);
card3.append(btn3);
