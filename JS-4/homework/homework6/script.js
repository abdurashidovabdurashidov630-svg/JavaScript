// let name = "cheking"
// class Malumot {
//   constructor(ism,familiya,yosh,tugulgan_yil,tel_raqam) {
//     this.ism = ism;
//     this.familiya = familiya;
//     this.yosh = yosh;
//     this.tugulgan_yil = tugulgan_yil;
//     this.tel_raqam = tel_raqam;
//     this.check = null;
//   }
//   get [name]() {
//     return this.check;
//   }
//   set [name](yosh) {
//     if (yosh >= 18 && yosh < 30) this.check = "Siz Universitetda o'qiysiz.";
//     else if(yosh >=7 && yosh < 18) (this.check = "Siz maktabda o'qiysiz.");
//     else if(yosh >=2 && yosh < 7) (this.check = "Siz bog'chada o'qiysiz.");
//     else if(yosh >=0 && yosh < 2) (this.check = "Siz hali chaqaloqsiz.");
//     else if(yosh >=30 && yosh < 60) (this.check = "Siz ishlaysiz.");
//     else this.check = "Siz nafaqa olasiz."

//   }
// }

// let obj1 = new Malumot("Abdurahmon","Abdurashidov",13,2013,"+998933575616");

// obj1[name] = 61;
// console.log(obj1[name]);

// obj1.[name] = 11;
// console.log(obj1[name]);

// class Father {
    // static name = "Sharoff   iddin" 
//   constructor(qiziqish, koz_rangi) {
//     this.qiziqish = qiziqish;
//     this.koz_rangi = koz_rangi;
//   }
// }
// class Son extends Father {
//   constructor(qiziqish,koz_rangi) {
//     super(qiziqish,koz_rangi);
//   }
// }
// let obj = new Son(["Ingiliz tili","Matematika","Musiqa"],"Jigarrang");
// console.log(obj);
// console.log(obj instanceof Son);