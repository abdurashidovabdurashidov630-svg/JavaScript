// let obj = {
//   id: 1,
//   ism: "Algoritm",
//   yil: 2016,
//   manzil: "DXA binosi",
// };
// let obj2 = Object.assign({},obj)
// obj2.id = 2
// obj2.ism = "Oxford"
// obj2.yil = 2022
// obj2.manzil = "Chorsu,Shirin dunyo yonida"

// let obj3 = structuredClone(obj)
// obj3.id = 3
// obj3.ism = "Start21"
// obj3.yil = 2021
// obj3.manzil = "Korzinka yonida."
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// let ball = 100;
// if (ball <= 100 && ball >= 91) console.log("Zo'r");
// else if (ball <= 90 && ball >= 81) console.log("A'lo");
// else if (ball <= 80 && ball >= 71) console.log("Yaxshi");
// else if (ball <= 70 && ball >= 60) console.log("O'rtacha");
// else if (ball <= 59 && ball >= 0) console.log("Yiqildi");
// else console.log("Noto'g'ri ball kiritdingiz!");

// let yigindi = 0;
// for (let raqam = 1; raqam <= 10; raqam++) {
//   if (raqam % 2 === 1) yigindi += raqam;
// }
// console.log(yigindi);

// let yigindi2 = 0;
// let raqam2 = 1;
// while (raqam2 <= 10) {
//   if (raqam2 % 2 === 1) yigindi2 += raqam2;
//   raqam2++
// }
// console.log(yigindi2);

// let yigindi3 = 0;
// let raqam3 = 1;
// do {
//   if (raqam3 % 2 === 1) yigindi3 += raqam3;
//   raqam3++
// } while (raqam3 <= 10)
// console.log(yigindi3);

// let a = prompt("Raqam kiriting:");
// if (a % 2 === 1) alert("Bu son Toq son.");
// else alert("Bu son Juft son.");

// let obj = {
//   name: "Webbrain Academy",
//   status: "IT Center",
// };
// function ozgartirish(obj) {
//     obj.name = "WBA"
//     obj["status"] = "IT"
//     console.log(obj);
// }
// ozgartirish(obj)

// const ozgartirish2 = function(obj) {
//     obj.name = "WBA"
//     obj["status"] = "IT"
//     console.log(obj);
// }
// ozgartirish2(obj)

// const ozgartirish3 = (obj) => {
//     obj.name = "WBA"
//     obj["status"] = "IT"
//     console.log(obj);
// }
// ozgartirish3(obj)