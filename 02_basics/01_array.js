let myarr = [1,2,5,8,9,89,76]
let arr = ["akash","rahul","anil","aman"]
let ar = new Array(23,45,667,33)
// console.log(myarr[2])

// Array methods

// myarr.push(34)                          // in the last element add
// console.log(myarr)
// myarr.pop()                         // pop is a last value remove 
// // console.log(myarr)
// myarr.unshift(23)                   // in the start value insert
// console.log(myarr)                  
// // myarr.shift()                      // remove start value 

// console.log(myarr.includes(76))
// console.log(myarr.indexOf(2))

const j = myarr.join()           // this is a change in string 
// console.log(j)
// console.log(myarr)  

// slice and splice

console.log("A ",myarr)
const myn1 = myarr.slice(1,3)        // 1,2 index include not a include 3 index 
console.log(myn1)
console.log("B ",myn1)

const myn2 = myarr.splice(1,3)       // 1,2 and 3 indexes value  are remove 
console.log(myn2)
console.log("C ",myarr)
