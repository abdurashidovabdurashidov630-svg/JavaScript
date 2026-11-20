// document.addEventListener("keydown", function (e) {
//   let target = e;
//   console.log(target.key);
// });

// function a(e) {
//   console.log("Salom", e);
// }

// Eveny berishni 3xil usuli bor:
// 1.addEventListener
// 2.JS dan turib element.onevent qilib ishlatish
// 3.HTML dan turib attribute ga event yozib ishlatish

// document.addEventListener("keydown", function (e) {
//   console.log(e.key,"Bosildi");
// });
// document.addEventListener("keyup", function (e) {
//   console.log(e.key,"Ko'tarildi");
// });
// document.addEventListener("keypress", function (e) {
//   console.log(e.key,e.code,e.ctrlKey,e.altKey,e.shiftKey,e.windowKey,e.repeat);
// });

// document.addEventListener("copy", function (e) {
//   e.preventDefault()
// });
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault()
// });
// document.addEventListener("selectstart", function (e) {
//   e.preventDefault()
// });
// document.addEventListener("dragstart", function (e) {
//   e.preventDefault()
// });
// document.addEventListener("keydown", function (e) {
//   if(e.ctrKey && e.key === "i") e.preventDefault()
// });