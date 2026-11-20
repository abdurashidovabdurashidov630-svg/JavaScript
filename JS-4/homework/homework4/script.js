let Algoritm = {
  webDasturlash: {
    frontend: [
      {
        course: "HTML, CSS, Bootstrap, Tailwind",
        organish_vaqti: 4,
        price: 790000,
      },
      { course: "JavaScript & React JS", organish_vaqti: 5, price: 790000 },
    ],
    backend: [
      { course: "Node.js", organish_vaqti: 3, price: 790000 },
      { course: "Python", organish_vaqti: 4, price: 790000 },
    ],
  },
  dizaynVaMarketing: {
    grafikDizayn: [
      { course: "Photoshop & Illustrator", organish_vaqti: 3, price: 1000000 },
      { course: "Ui/Ux Design", organish_vaqti: 3, price: 1000000 },
    ],
    marketing: [
      {
        course: "SMM (Social Media Marketing)",
        organish_vaqti: 4,
        price: 1000000,
      },
      { course: "Targeting", organish_vaqti: 2, price: 1000000 },
    ],
  },
  ilgorTexnologiyalar: {
    kiberxavfsizlik: [
      {
        course: "Kiberxavfsizlik",
        organish_vaqti: 10,
        price: 1190000,
      },
    ],
    suniyIntellekt: [
      {
        course: "Sun'iy Intellekt va Ma'lumotlar fani",
        organish_vaqti: 6,
        price: 1190000,
      },
    ],
  },
  bolalarVaBoshlangich: {
    kompyuterSavodxonligi: [
      { course: "Kompyuter savodxonligi", organish_vaqti: 2, price: 490000 },
    ],
    itKids: [
      {
        course: "Scratch & IT Kids dasturlash",
        organish_vaqti: 3,
        price: 550000,
      },
    ],
  },
};
let price = 0;
function narx(obj) {
  for (let key in obj) {
    if (!Array.isArray(obj[key])) {
      return narx(obj[key]);
    }
    price += obj[key].reduce((acc, cur) => acc + cur.price, 0);
  }
}
narx(Algoritm);
console.log(price);