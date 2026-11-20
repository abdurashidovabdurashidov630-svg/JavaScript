const form = document.querySelector("#user_form");
const inp = document.querySelector("#name");
const inp2 = document.querySelector("#password");
const eye = document.querySelector("#eye");
let text = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  text = inp.value;
  console.log(inp.value);
  console.log(inp2.value);
  inp.value = ""
  inp2.value = ""
});
// inp.addEventListener("input", function(e){
//     console.log(e.target.value);

// })

eye.addEventListener("click", function (e) {
  if (inp2.type === "text") inp2.type = "password";
  else inp2.type = "text";
});
