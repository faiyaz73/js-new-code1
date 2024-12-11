let mydate =  new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toTimeString())
// console.log(mydate.toUTCString())

// let createdate = new Date(2002,0,20)
// console.log(createdate.toDateString())

// let mycreatedate = new Date(2023,0,2,5,30)
let mycreatedate = new Date("01-13-2023")               // date formate 

// console.log(mycreatedate.toLocaleString())
// let timestamp = Date.now()
// console.log(timestamp)
// console.log(mycreatedate.getTime())
// console.log(Math.floor(Date.now()/1000))

let createday = new Date()
// console.log(createday.getDate() + 1)
// console.log(createday.getDay())
// console.log(createday.getFullYear())
// // console.log(createday.getHours())
// console.log(createday.getMilliseconds())
// console.log(createday.getMinutes())
// console.log(createday.getMonth())
// console.log(createday.getSeconds())
// console.log(createday.getTime())
// console.log(createday.getTimezoneOffset())
let nedate = new Date()
nedate.toLocaleString('default',{
    weekday : "long",
})