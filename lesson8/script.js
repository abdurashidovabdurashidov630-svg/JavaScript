// // 1. While
// // 2. do While

// // FOR Loop
// for (let raqam1 = 1; raqam1 <= 10; raqam1++) {
//   console.log(raqam1);
// }

// // WHILE Loop
// let raqam2 = 1;
// while (raqam2 <= 10) {
//   console.log(raqam2);
//   raqam2++;
// }

// // DO WHILE Loop
// let raqam3 = 1;
// do {
//   console.log(raqam3);
//   raqam3++;
// } while (raqam3 <= 10);

// __________________________________________________

// 1. 1 dan 100 gacha bo‘lgan sonlar yig‘indisini toping.
// let raqam = 1;
// let yigindi = 0;
// while (raqam <= 100) {
//   yigindi += raqam;
//   raqam++;
// }
// console.log(yigindi);

// // ___________________________________________________

// let raqam2 = 1;
// let yigindi2 = 0;
// do {
//   yigindi2 += raqam2;
//   raqam2++;
// } while (raqam2 <= 100);
// console.log(yigindi2);

// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

// let raqam1 = 1;
// while (raqam1 <= 50) {
//   if (raqam1 % 2 === 0) console.log(raqam1);
//   raqam1++;
// }

// let raqam2 = 1;
// do {
//   if (raqam2 % 2 === 0) console.log(raqam2);
//   raqam2++;
// } while (raqam2 <= 50);

// 4. 1 dan 50 gacha bo‘lgan toq sonlarni chiqaring.

// let raqam1 = 1;
// while (raqam1 <= 50) {
//   if (raqam1 % 2 === 1) console.log(raqam1);
//   raqam1++;
// }

// let raqam2 = 1;
// do {
//   if (raqam2 % 2 === 1) console.log(raqam2);
//   raqam2++;
// } while (raqam2 <= 50);

// 5. 1 dan N gacha bo‘lgan sonlarning kvadratlarini chiqaring (N raqam prompt dan olinadi).

// let raqam1 = 1;
// let n = 15;
// while (raqam1 <= n) {
//   console.log(raqam1 + "²" + " = " + raqam1 * raqam1);
//   raqam1++;
// }

// let raqam2 = 1;
// let a = 15;
// do {
//   console.log(raqam2 + "²" + " = " + raqam2 * raqam2);
//   raqam2++;
// } while (raqam2 <= a);

// 6. 1 dan N gacha bo‘lgan sonlar ichida 3 ga bo‘linadiganlarini chiqaring.

// let raqam1 = 1;
// let a = 15
// while (raqam1 <= a) {
//   if (raqam1 % 3 === 0) console.log(raqam1);
//   raqam1++;
// }

// let raqam2 = 1;
// let b = 15
// do {
//   if (raqam2 % 3 === 0) console.log(raqam2);
//   raqam2++;
// } while (raqam2 <= b);

// 7. prompt dan berilgan N sonigacha bo‘lgan sonlar ko‘paytmasini hisoblang.

// let raqam = 1;
// let kopaytma = 1;
// let a = 15
// while (raqam <= a) {
//   kopaytma *= raqam;
//   raqam++;
// }
// console.log(kopaytma);


// let raqam2 = 1;
// let kopaytma2 = 1;
// let b = 15
// do {
//   kopaytma2 *= raqam2;
//   raqam2++;
// } while (raqam2 <= b);
// console.log(kopaytma2);

// 8. 1 dan 100 gacha bo‘lgan sonlar ichida 5 ga ham, 7 ga ham bo‘linadigan sonlarni chiqaring.
// let raqam1 = 1;
// while (raqam1 <= 100) {
//   if (raqam1 % 5 === 0 && raqam1 % 7 == 0) console.log(raqam1);
//   raqam1++;
// }

// let raqam2 = 1;
// do {
//   if (raqam2 % 5 === 0 && raqam2 % 7 == 0) console.log(raqam2);
//   raqam2++;
// } while (raqam2 <= 100);

// 9. 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda chiqaring.

// let raqam1 = 10;
// while (raqam1 >= 1) {
//   console.log(raqam1);
//   raqam1--;
// }

// let raqam2 = 10;
// do {
//   console.log(raqam2);
//   raqam2--;
// } while (raqam2 >= 1);

// 10. 1 dan berilgan N sonigacha bo‘lgan sonlarni faqat toq larini yig'indisini hisoblang. (N soni prompt dan kiritiladi.)

// let raqam1 = 1;
// yigindi = 0
// let a = 5
// while (raqam1 <= a) {
//   if (raqam1 % 2 === 1) yigindi +=raqam1;
//   raqam1++;
// }
// console.log(yigindi);

// let raqam2 = 1;
// let b = 5
// yigindi2 = 0
// do {
//   if (raqam2 % 2 === 1) yigindi2 +=raqam2;
//   raqam2++;
// } while (raqam2 <= b);
// console.log(yigindi2);

// 11. 1 dan N gacha bo‘lgan sonlar ichida nechta juft son borligini aniqlang. (N soni prompt dan kiritiladi.)

let raqam1 = 1;
son = 0
let a = 5
while (raqam1 <= a) {
  if (raqam1 % 2 === 0) son += raqam1;
  raqam1++;
}
console.log(son);

let raqam2 = 1;
let b = 6
son2 = 0
do {
  if (raqam2 % 2 === 0) son2 += raqam2;
  raqam2++;
} while (raqam2 <= b);
console.log(son2);