// let arr = ["Olma", "Uzum", "Nok","Olma"];
// arr.forEach((value)=>console.log(`Men bozordan ${value} olaman.`))

// let a = arr.map((value)=>`${value} yeyman`)
// console.log(a);

// let b = arr.filter((v) => v.length > 3);
// console.log(b);

// let c = arr.find((value)=> value==="Nok")
// console.log(c);

// let d = arr.findIndex((value)=> value==="Nok")
// console.log(d)

// let e = arr.findLastIndex((value)=> value==="Olma")
// console.log(e)

// let f = arr.sort((a,b)=> a.localeCompare(b))
// console.log(f)

// let nums = [6,4,9,5,3,2,0,1]
// let g = nums.sort((a,b)=> a-b)
// console.log(g)

// let h = nums.every((value)=> value>=0)
// console.log(h)

// let i = nums.some((value)=> value<0)
// console.log(i)

// let data = [1,[2,[3,[4,[5,[6,[7]]]]]]]
// console.log(data.flat(Infinity))

// let n = [1,2,3,4,5]
// let j = n.flatMap((v)=> v**2)
// console.log(j);

// let arr = Array(4).fill("Algoritm",0,3).fill("Oxford",2)
// console.log(arr);

// let k = n.copyWithin(0,2,3)
// console.log(k);
// let numsData = [1,2,"a",3,"b","c",4,5]
// let l = numsData.reduce((acc,cur)=>{
    // if(!isNaN(cur)) return acc+cur
    // return acc
// },0)
// console.log(l);

let arr = [
    {id:1, type:"kirim", amount: 500000},
    {id:2, type:"chiqim", amount: 120000},
    {id:3, type:"kirim", amount: 900000},
    {id:4, type:"chiqim", amount: 50000},
    {id:5, type:"kirim", amount: 150000},
    {id:6, type:"kirim", amount: 300000},
]
// let a = Object.groupBy(arr, (v)=> v.type)
// console.log(a);