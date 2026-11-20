const api = "https://jsonplaceholder.typicode.com/users";
let data = fetch(api);
data
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.name));

const api2 = "https://jsonplaceholder.typicode.com/posts";
let data2 = fetch(api2);
data2
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

const api3 = "https://jsonplaceholder.typicode.com/comments";
let data3 = fetch(api3);
data3
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.name));

const api4 = "https://jsonplaceholder.typicode.com/albums";
let data4 = fetch(api4);
data4
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

const api5 = "https://jsonplaceholder.typicode.com/photos";
let data5 = fetch(api5);
data5
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.name));

const api6 = "https://jsonplaceholder.typicode.com/todos";
let data6 = fetch(api6);
data6
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
