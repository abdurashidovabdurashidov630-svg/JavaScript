// let a = new Date()
// let year = a.getFullYear()
// let month = a.getMonth()
// let day = a.getDay()
// let hour = a.getHours()
// let minutes = a.getMinutes()
// let second = a.getSeconds()
// let milli = a.getMilliseconds()
// console.log(`${year}/${month}/${day}/${hour}/${minutes}/${second}/${milli}`);

function clock() {
  let a = new Date();
  let hour = a.getHours();
  let minutes = a.getMinutes();
  let second = a.getSeconds();
  let milli = a.getMilliseconds();
  let year = a.getFullYear()
  let month = a.getMonth()
  let day = a.getDay()

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  second = String(second).padStart(2, "0");
  milli = String(milli).padStart(2, "0");
  year = String(year).padStart(4, "0");
  month = String(month).padStart(2, "0");
  day = String(day).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${hour} : ${minutes} : ${second} : ${milli}`;
  document.getElementById("date").textContent =
    `${year}/${month}/${day}`;
}
clock();
setInterval(clock, 100);
