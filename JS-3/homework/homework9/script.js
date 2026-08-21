// let people = [
//   {
//     id: 1,
//     firstName: "Eshmat",
//     lastName: "Toshmatov",
//     age: 20,
//     status: "Talaba",
//   },
//   {
//     id: 2,
//     firstName: "Gulmat",
//     lastName: "Surmatov",
//     age: 17,
//     status: "O'quvchi",
//   },
//   {
//     id: 3,
//     firstName: "Dilshod",
//     lastName: "Karimov",
//     age: 25,
//     status: "Ishchi",
//   },
//   {
//     id: 4,
//     firstName: "Malika",
//     lastName: "Xoliqova",
//     age: 30,
//     status: "Uqituvchi",
//   },
//   { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
//   {
//     id: 6,
//     firstName: "Umida",
//     lastName: "Raxmatova",
//     age: 22,
//     status: "Tadbirkor",
//   },
//   {
//     id: 7,
//     firstName: "Rustam",
//     lastName: "Ziyodov",
//     age: 35,
//     status: "Dasturchi",
//   },
//   {
//     id: 8,
//     firstName: "Nodira",
//     lastName: "Saidova",
//     age: 28,
//     status: "Muhandis",
//   },
//   {
//     id: 9,
//     firstName: "Javlon",
//     lastName: "Qurbonov",
//     age: 24,
//     status: "Frilanser",
//   },
//   {
//     id: 10,
//     firstName: "Shahnoza",
//     lastName: "Ergasheva",
//     age: 18,
//     status: "O'quvchi",
//   },
// ];
// function a(data, ID) {
//   let a1 = data.findIndex((value) => value.id === ID);
//   data[a1] = {
//     id: 5,
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 25,
//     status: "Dasturchi",
//   };
// }

// a(people, 5);
// console.log(people);

// function b(data, word) {
//   return data.filter((value) => value.lastName.endsWith(word));
// }
// people = b(people, "va");
// console.log(people);

// function c(data, son1, son2) {
//   return data.filter((value) => value.id !== son1 && value.id !== son2);
// }

// people = c(people, 4, 9);
// console.log(people);

// function d(data, ID) {
//   let d1 = data.find((value) => value.id === ID);
//   if (d1) d1.firstName = "Gulbashakar";
// }
// d(people, 7);
// console.log(people);

// function e(data) {
//   data.sort((a, b) => a.lastName.localeCompare(b.lastName));
// }
// e(people);
// console.log(people);
