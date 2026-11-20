// class - bu Object yaratish uchun shablon(qolif).
// this - bu, class ichida ishlatilayotgan bo'lsangiz,shu class ni o'ziga teng bo'ladi.

// class Person {
//   constructor(ism, familiya, yosh, manzil, tel_raqam,a) {
//     this.ism = ism;
//     this.familiya = familiya;
//     this.yosh = yosh;
//     this.manzil = manzil;
//     this.tel_raqam = tel_raqam;
//   }
// }
// let obj = new Person("Ali", "Valiyev", 15, "Chorsu", "+998999999999");
// let obj2 = new Person("Vali", "Aliyev", 14, "Chortoq", "+998933933393");
// console.log(obj);
// console.log(obj2);

// class Animals {
//   constructor() {}
// }
// let cat = new Animals("");
// let dog = new Animals("");

// class Parent {
//   constructor(arr) {
//     this.arr = arr;
//   }

//   getSum() {
//     let sum = this.arr.reduce((acc, cur) => acc + cur, 0);
//     return sum;
//   }
// }
// class Child extends Parent {
//   constructor(arr) {
//     super(arr);
//   }
// }
// let obj = new Child([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(obj.getSum());

class User{
    constructor(ism){
        this.ism = ism
        this.check = null
    }
    get checking(){
        return this.check
    }
    set checking(yosh){
        if(yosh>=12) this.check = "Siz Attraktsionga chiqishga ruxsat berildi."
        return this.check = "Siz Attraktsionga chiqishga ruxsat berilmadi."
    }
}

let obj1 = new User("Ali")

obj1.checking = 15
console.log(obj1.checking);

obj1.checking = 11
console.log(obj1.checking);
