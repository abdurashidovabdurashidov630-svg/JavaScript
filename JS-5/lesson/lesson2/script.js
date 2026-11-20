// let h = window.innerHeight
// let w = window.innerWidth

// console.log(`Balandlik: ${h}`);
// console.log(`Kenglik: ${w}`);

// innerHeight - Ekranning ichki balandligini chiqarib beradi.
// innerWidth - Ekranning ichki kengligini chiqarib beradi.

// let h = window.outerHeight
// let w = window.outerWidth

// console.log(`Balandlik: ${h}`);
// console.log(`Kenglik: ${w}`);

// outerHeight - Ekranning tashqi balandligini chiqarib beradi.
// outerWidth - Ekranning tashqi kengligini chiqarib beradi.

// let l = window.location
// console.log((l));

// l.href = "https://uzum.uz"

// let body = document.body
// let head = document.head
// Nodes
// console.log(body.childNodes); //❌
// console.log(body.parentNode);
// console.log(body.previousSibling.previousSibling);
// console.log(head.nextSibling.nextSibling);
// console.log(head.firstChild);
// console.log(head.lastChild);

// Element
// console.log(body.children); //✅
// console.log(head.children); //✅
// console.log(body.previousElementSibling.previousElementSibling);
// console.log(head.nextElementSibling.nextElementSibling);
// console.log(head.firsElementtChild);
// console.log(head.lastElementChild);

// Element - bu tag, shu tag ga ishlatilgan barcha attribute lar va uning ichidagi qiymati

// =================================================================================================

// Selectors

// let h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);
// h1.style.color = "red";

// let h2 = document.getElementsByClassName("abu")[0];
// console.log(h2);
// h2.style.backgroundColor = "pink";
// h2.style.color = "red";

// let h3 = document.getElementsByName("title")[0];
// console.log(h3);
// h3.style.backgroundColor = "blue";
// h3.style.color = "aqua";

// let h4 = document.getElementById("mubosher");
// console.log(h4);
// h4.style.backgroundColor = "greenyellow";
// h4.style.color = "green";

// let abu = document.querySelector(".abu");
// console.log(abu);

// let mubosher = document.querySelectorAll("#mubosher");
// console.log(mubosher);