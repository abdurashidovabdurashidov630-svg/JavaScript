const body = document.querySelector("body");
body.style.cssText = `
    height: 100vh;
    background-color: rgb(236,236,236);
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
    border-radius: 10px;
    padding: 15px;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
    background-color: white;
    box-shadow: 0 2px 10px #bfbfbf;
    transition: 0.4s;
`;
cardwrapper.append(card1);

const img = document.createElement("img");
img.setAttribute("src", "./images/laptop.jpg");
img.style.cssText = `
    width: 100%;
    border-radius: 10px;
`;
card1.append(img);
card1.addEventListener("mouseenter", function () {
  card1.setAttribute("class", "active");
});
card1.addEventListener("mouseleave", function () {
  card1.removeAttribute("class");
});
const status = document.createElement("div");
status.style.cssText = `
    width: fit-content;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: rgb(235,212,233);
    display: grid;
    place-content: center;
    font-size: 13px;
    color: rgb(228, 0, 152);
`;
status.textContent = "Developer";
card1.append(status);

const p = document.createElement("p");
p.textContent = "Lorem Impsum is simply dummy text of the printing.";
p.style.cssText = `
    font-weight: 700;
    font-size: 15px;
    color: #444
`;
card1.append(p);

const btn = document.createElement("button");
btn.style.cssText = `
    padding: 5px;
    border-radius: 50%;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: transparent;
`;
const arrow = document.createElement("img");
arrow.setAttribute("src", "./images/arrow.svg");
arrow.style.cssText = `
    width: 17px;
    transform: rotate(-45deg);
`;
btn.append(arrow);
card1.append(btn);

// =======================================================

const card2 = document.createElement("div");
card2.style.cssText = `
    width: 350px;
    border-radius: 10px;
    padding: 15px;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
    background-color: white;
    box-shadow: 0 2px 10px #bfbfbf;
    transition: 0.4s;
`;
cardwrapper.append(card2);

const img2 = document.createElement("img");
img2.setAttribute("src", "./images/laptop.jpg");
img2.style.cssText = `
    width: 100%;
    border-radius: 10px;
`;
card2.append(img2);
card2.addEventListener("mouseenter", function () {
  card2.setAttribute("class", "active");
});
card2.addEventListener("mouseleave", function () {
  card2.removeAttribute("class");
});
const status2 = document.createElement("div");
status2.style.cssText = `
    width: fit-content;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: rgb(200,227,247);
    display: grid;
    place-content: center;
    font-size: 13px;
    color: rgb(0, 94, 177);
`;
status2.textContent = "Designer";
card2.append(status2);

const p2 = document.createElement("p");
p2.textContent = "Lorem Impsum is simply dummy text of the printing.";
p2.style.cssText = `
    font-weight: 700;
    font-size: 15px;
    color: #444
`;
card2.append(p2);

const btn2 = document.createElement("button");
btn2.style.cssText = `
    padding: 5px;
    border-radius: 50%;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: transparent;
`;
const arrow2 = document.createElement("img");
arrow2.setAttribute("src", "./images/arrow.svg");
arrow2.style.cssText = `
    width: 17px;
    transform: rotate(-45deg);
`;
btn2.append(arrow2);
card2.append(btn2);

// =====================================================

const card3 = document.createElement("div");
card3.style.cssText = `
    width: 350px;
    border-radius: 10px;
    padding: 15px;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
    background-color: white;
    box-shadow: 0 2px 10px #bfbfbf;
    transition: 0.4s;
`;
cardwrapper.append(card3);

const img3 = document.createElement("img");
img3.setAttribute("src", "./images/laptop.jpg");
img3.style.cssText = `
    width: 100%;
    border-radius: 10px;
`;
card3.append(img3);
card3.addEventListener("mouseenter", function () {
  card3.setAttribute("class", "active");
});
card3.addEventListener("mouseleave", function () {
  card3.removeAttribute("class");
});
const status3 = document.createElement("div");
status3.style.cssText = `
    width: fit-content;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: rgb(215,247,214);
    display: grid;
    place-content: center;
    font-size: 13px;
    color: green;
`;
status3.textContent = "Editor";
card3.append(status3);

const p3 = document.createElement("p");
p3.textContent = "Lorem Impsum is simply dummy text of the printing.";
p3.style.cssText = `
    font-weight: 700;
    font-size: 15px;
    color: #444
`;
card3.append(p3);

const btn3 = document.createElement("button");
btn3.style.cssText = `
    padding: 5px;
    border-radius: 50%;
    border: 1px solid black;
    display: grid;
    place-content: center;
    cursor:pointer;
    background-color: transparent;
`;
const arrow3 = document.createElement("img");
arrow3.setAttribute("src", "./images/arrow.svg");
arrow3.style.cssText = `
    width: 17px;
    transform: rotate(-45deg);
`;
btn3.append(arrow3);
card3.append(btn3);
