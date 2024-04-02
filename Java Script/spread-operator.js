//array spread

let list = ["audi","bmw","honda"]
let newlist = [...list,"farari"]
let newlist2 = ["farari",...list]

console.log(newlist);
console.log(newlist2);

//object spread

let person ={
    myname:"yagnik",
    age:20
}
let newperson ={
    ...person,
    surname:"mayani"
}
console.log(newperson);