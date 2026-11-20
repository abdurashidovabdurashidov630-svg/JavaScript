// class Cat {
//   constructor() {
//     this.ism = "Masha";
//   }
// }
// let obj1 = new Cat();

// class Dog {
//   constructor() {
//     this.ism = "Simba";
//   }
// }
// let obj2 = new Dog();

// instanceof - bu object qaysi classdan yaratilgan?
// console.log(obj1 instanceof Cat);
// console.log(obj2 instanceof Dog);

// let status = "Web developer";
// let name = "getName";
// class MyClass {
//   constructor(ism) {
//     this.ism = ism;
//   }
//   // Computed name berish usuli
//   [name]() {
//     return `Mening ismim: ${this.ism}, men ${status}man.`;
//   }
// }
// let user = new MyClass("Abdurahmon");
// console.log(user[name]());

// class Car {
//   type = "GM";
//   constructor() {
//     this.ism = "Malibu";
//   }
//   getName() {
//     return this.ism;
//   }
// }

// class Matiz extends Car {
//   type = "BYD";
//   constructor(ism) {
//     super(ism)
//     this.ism = ism;
//   }
//   getName() {
//     return `Mening ismim ${this.ism}`;
//   }
// }

// let obj = new Matiz("Matiz")
// console.log(obj.getName());
// console.log(obj.type);

// class Person {
//     static count = 0
//     constructor(ism){
//         this.ism = ism
//         Person.count++
//     }
//     static getSum(a,b){
//         return a*b
//     }
// }
// let obj1 = new Person("Ali")
// let obj2 = new Person("Vali")
// let obj3 = new Person("G'ani")
// console.log(Person.count);

// console.log(Person.getSum(7*4));

// static o'zgaruvchi yoki static funksiya doim Class ning o'ziga birikadi.