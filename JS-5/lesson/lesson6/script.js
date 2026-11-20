// const element = document.getElementById("btn");
// const box = document.querySelector(".box");

// element.onmousedown = () => {
//   console.log("Down");
// };
// element.onmouseup = () => {
//   console.log("Up");
// };
// element.onclick = () => {
//   console.log("Click");
// };

// box.onmousemove = () => {
//   console.log("Mouse harakatlandi");
//   // element ustida sichqoncha harakatlanganda ishlaydi.
// };

// box.onmouseover = () => {
//   console.log("Mouse box ustiga bordi.");
//   // sichqoncha element ustiga kirganda ishlaydi.
// };

// box.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });

// box.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });

// box.onmouseout = () => {
//   console.log("mouseout");
// };

// box.addEventListener("mouseleave", () => {
//   console.log("Sichqoncha tashqariga chiqganda ishlaydi.");
// });

// box.onmouseleave = () => {
//   console.log("Box hududidan to'liq chiqganda ishlaydi.");
// };

// box.addEventListener("mouseenter", () => {
//   console.log("mouse enter");
// });

// box.onmouseenter = () => {
//   console.log("mouse enter");
//   // bu ham sichqoncha element ustiga kirganda ishlaydi ichidagi elementlar uchun ishlamaydi
// };

// box.oncontextmenu = (event) => {
//   event.preventDefault(); //buni yozilsa browserni context menusi ishlamaydi
//   console.log("sichqonchani o'ng tomoni bosildi");
// };

// box.addEventListener("contextmenu", (event) => {
//   event.preventDefaultI();
//   console.log("mouse enter");
// });

// box.onwheel = (event)=>{
//     if (event.deltaY > 0) {
//         console.log("Yuqoriga");
//     } else {
//         console.log("Pastga");
//     }
// }
// box.addEventListener("wheel",()=>{
//     console.log("scroll"); 
// })

// mousedown -> bosib turganda ishlaydi

// mouseup -> qo'yib yuborganda ishlaydi

// click ->  bosib, qo'yib yuborgandan keyin ishlaydi

// dblclick -> ikki marta bosilganda ishlaydi

// mouseover -> element ustiga kelganda ishlaydi

// mouseout -> element ustidan chiqsa ishlaydi

// mouseenter -> sichqoncha element hududiga kirganda ishlaydi

// mouseleave -> sichqoncha element hududidan kirganda chiqganda ishlaydi

// contextmenu -> sichqonchani o'ng tomoni bosilsa ishlaydi

// wheel -> scroll/wheel