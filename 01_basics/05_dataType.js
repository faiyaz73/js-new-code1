//1-  primitive data type::
// 1 string 
//2 number
// 3 Boolean
// 4 null
// 5 undefined
// 6 Symbol
// 7 BigInt


// const score  = 234;
// const scoreValue = 234.434
//  const isLoIn = false
//  const outsideTem = null      typeof object data type 
//  let userEmail;
//  const id = Symbol('123')
//  const anotherId = Symbol('123')

//  console.log(id===anotherId);
//  const bigNumber = 23233434333443344343433434n









// 2-Reference (Non-primitive)

// Array,object,functions


// const hero = ["satyam","faiyaz","amit","rakesh"] // this is a array define
// let myobj = {
//     name:"faiyaz ansari",
//     rollNumber:4444,
// }

// console.log(typeof myobj);


// const myfunction = function num(){
//     console.log("hellow");

// }


// console.log(typeof myfunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++
// Stack memory (primitive)  Heap memory (Non-primitive)




// let myyoutube = "coderboy@";
// let anotherchanel = myyoutube
// anotherchanel = "faiyaz@1234"
// console.log(myyoutube)
// console.log(anotherchanel)


let userone = {
    email:"user@gmail.com",
    upi:"you@221"
}

let usertwo = userone
usertwo.email = "faiyazansari@15901@gmail.com"

console.log(userone.email)
console.log(usertwo.email)



