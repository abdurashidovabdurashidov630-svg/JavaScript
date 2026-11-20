// const btn = document.querySelector("#btn1")
// const btn2 = document.querySelector("#btn2")
// btn.style.cssText = `
//     padding: 20px 30px;
// `
// const func = function (e) {
//     console.log(e.target);
//     // alert("Salom")
//     console.log(this);
//     console.log("Salom");
// }

// btn.addEventListener("click",func)

// btn2.addEventListener("click", function (e) {
//     console.log(e);
//     btn.textContent = "Mubosher";
//     btn.removeEventListener("click",func)
// })

// let div = btn.closest("body")
// // let div = btn.parentElement.parentElement
// console.log(div);

let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let subChild = document.querySelector(".subChild");

parent.style.cssText = `
    width: 500px;
    height: 500px;
    border: 2px solid red;
    background-color: pink;
`;
child.style.cssText = `
    width: 300px;
    height: 300px;
    border: 2px solid blue;
    background-color: aqua;
`;
subChild.style.cssText = `
    width: 100px;
    height: 100px;
    border: 2px solid green;
    background-color: yellowgreen;
`;

parent.addEventListener("click", function (e) {
    e.stopImmediatePropagation()
  console.log("Parent ishladi.");
});

child.addEventListener("click", function (e) {
    console.log("Child ishladi.");
    // e.stopPropagation
});

subChild.addEventListener("click", function (e) {
    console.log("2 - event biriktirildi.");
    // e.stopPropagation
});
subChild.addEventListener("click", function (e) {
    console.log("Sub Child ishladi.2");
    // e.stopPropagation
});
subChild.addEventListener("click", function (e) {
    console.log("Sub Child ishladi.2");
    // e.stopPropagation
});
subChild.addEventListener("click", function (e) {
    console.log("Sub Child ishladi.2");
    // e.stopPropagation
});
subChild.addEventListener("click", function (e) {
    console.log("Sub Child ishladi.2");
    // e.stopPropagation
});
