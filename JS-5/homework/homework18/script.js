let arr = [];
function addBook(title, author) {
  const book = {
    id: Math.round(Math.random() * 10),
    title: title,
    author: author,
  };
  localStorage.setItem("book", JSON.stringify(book));
  let a = JSON.parse(localStorage.getItem("book"));
  arr.push(a);
  console.log(arr, a.id);
}
addBook("kitob 1", "kimdir");
addBook("kitob 2", "kimdir2");
function removeBook(id) {
  console.log(arr.filter((book) => book.id !== id));
}
removeBook(2);

function getAllBooks(arr) {
  arr.forEach((book) => {
    console.log(`Kitob nomi: ${book.title} | Kitob muallifi : ${book.author}`);
  });
}
getAllBooks(arr);

function clearLibrary(arr) {
  arr = [];
  console.log(arr);
}
clearLibrary(arr);