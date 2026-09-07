// let arr = [10,22,58,70,95]
// arr.forEach((value)=>console.log(`Bu ${value} sonini ${value}% - ${value*value/100} ga teng.`))

// let arr = ["olma",20,"uzum",30,"nok",40]
// let a = arr.map((v)=>{
//     if(typeof v === "string") return v[0].toUpperCase()+v.slice(1)
//     else return v+v/10
// })
// console.log(a);

// let arr = [4.213,98.5715,74.87,642.23357,4.322]
// arr = arr.filter((v)=>{
//     if(+v.toFixed(3) === v) return v
// })
// console.log(arr);

// console.log(result);
// let a = arr.filter((v)=>{
//     if(v === v.toFixed(0)) return b
// })
// console.log(a);

// let arr = ["Olma","Anor","Nok","Olcha","Nok"]
// let a = arr.find((v)=>v==="Anor")
// console.log(a);
// let a = arr.findIndex((v)=>v==="Nok")
// console.log(a);
// let a = arr.findLastIndex((v)=>v==="Nok")
// console.log(a);

// let arr = ["olma","Anor","nok","Olcha","Nok"]
// let a = arr.sort((a,b)=>a.localeCompare(b))
// console.log(a);

// let arr = ["Olma","Anor","nok","Olcha","Nok"]
// let a = arr.every((v)=> v[0] === v[0].toUpperCase())
// console.log(a);

// let arr = ["Olma","Anor","nok","Olcha","Nok"]
// let a = arr.some((v)=>v[0]===v[0].toLowerCase())
// console.log(a);

// let arr = [1,[2,[3,[4,[5,[6,[7]]]]]]]
// arr = arr.flat(Infinity)
// console.log(arr);

// let arr = [1,2,3,4,5]
// let a = arr.flatMap((v)=>[v,v**2])
// console.log(a);

// let arr = Array(10).fill(1,0,6).fill(0,5)
// console.log(arr);

// let arr = [4,4,4,4,5,6,7,8,9,1,2,3]
// let a = arr.copyWithin(0,9)
// console.log(a);

// let arr = [1,"2","3",4,5,6.5,7.9]
// let a = arr.reduce((acc,cur)=>{
//     cur = +cur
//     cur = Math.trunc(cur)
//     if(Number.isInteger(cur)) return acc+cur
//     return acc
// },0)
// console.log(a);