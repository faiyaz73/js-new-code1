// singleton 
// Object.create

// object literals

const mysym = Symbol("key1")

const jsUser = {
    name:"faiyaz",
    "full name":"faiyaz ansari",
    rollNo:3445,
    bol:true,
    [mysym]:"mykey1",
    Email:"faiyazansari15901@gmail.com",
    city:"uttar pradesh",

    isLogIned:true,
    lastLoginDay: ["sunday","","satursday"]
}

// console.log(jsUser.Email)                    // 1st methods 
// console.log(jsUser["Email"])                // 2nd methods 
// console.log(jsUser["full name"])            // this is a access 2nd method but 1st methods not valid beacuse keys write in the string
// console.log(typeof jsUser[mysym]);

jsUser.Email = "faiyaz@34455"
// console.log(jsUser.Email);
// Object.freeze(jsUser)                      // this freeze is a function not a update means lock

// jsUser.Email = "prince@11233"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hellow js user ")
}



jsUser.greeting1 = function(){
    console.log(`hellow js user ${this.name}`),
    console.log(this.Email)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting1())




