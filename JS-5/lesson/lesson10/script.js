// // const box = document.querySelector(".box");
// document.addEventListener("scroll", function (e) {
//     console.log(`X o'qi: ${window.scrollX}, Y o'qi: ${window.scrollY}`);
//     if (window.scrollY >= 100) {
//         box.style.cssText = `
//             visibility: visible;
//         `;
//     } else {
//         box.style.cssText = `
//             visibility: hidden;
//         `;
//     }
// });

// box.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0, // Y o'qi bo'yicha masofa (pikselda)
//         left: 0, // X o'qi bo'yicha masofa (pikselda)
//         behavior: "smooth", // Silliq aylantirishni yoqadi
//     });
//     console.log("Salom");
// });

const inp = document.querySelector("#inp");
const legend = document.querySelector("legend");

inp.addEventListener("focus", function (e) {
    inp.style.cssText = `
        border: 2px solid green;
    `;
    legend.textContent = "Success";
    legend.style.color = "green";
});

inp.addEventListener("blur", function (e) {
    if (inp.value) {
        inp.style.cssText = `
            border: 2px solid green;
        `;
        legend.textContent = "Success";
        legend.style.color = "green";
        return;
    }

    inp.style.cssText = `
        border: 2px solid red;
    `;
    legend.textContent = "Error";
    legend.style.color = "red";
});

