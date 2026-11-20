// change event - checkbox,radioselct->option
// input event - input va textarea
// button
const input = document.querySelector("#ism");
const checkbox = document.querySelector(".chek");
const m = document.querySelector(".m");
const f = document.querySelector(".f");
const submit = document.getElementsByName("submit")[0];
// input.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });
// checkbox.addEventListener("change", function (e) {
//   console.log(e.target.checked);
// });
// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e);
// });
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    ism: input.value || "",
    check: checkbox.checked || false,
    gender: m.checked ? "Male" : f.checked ? "Female" : false,
  }
  if(obj.ism && obj.check && obj.gender) alert(JSON.stringify(obj,null,4))
    else alert("Siz bizga to'g'ri kelmadingiz!")
});
