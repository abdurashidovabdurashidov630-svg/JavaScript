// // Promise
// function getData1() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err.message));
// }
// getData1();

// // Async / Await
// const getData2 = async () => {
//   try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/users");
//     data = await data.json();
//     console.log(data);
//   } catch (err) {
//     console.log(`${err.name}: ${err.message}`);
//   }
// };
// getData2();

// Moduls

function getFullName(ism,familiya) {
    return `Salom ${ism} ${familiya}`
}
const arr = [1,2,3,4,5,]
const obj = {
    id:1,
    ism:"Ali",
    yosh:20
}
export {getFullName,arr}
export default obj