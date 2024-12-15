// singleton
const tinderUser = new Object()     // this is a singleton object and empty element
const tinderUser1 = {}              // this a  non-singleton object  and empty element


// console.log(tinderUser)
// console.log(tinderUser1);

const user = new Object()
user.email = "faiyazansari15901@gmail.com"
user.name = "faiyaz"
user.islogIn = false
user.Fullname = "faiyaz ansari"


// console.log(user["email"]);
// console.log(user["name"]);
// console.log(user["islogIn"]);
// console.log(user["Fullname"]);
// console.log(user)

const regularUser = {
    name:"faiyaz",
    email:"faiyazansari15901@gmail.com",
    fullname:{
            userfullname:{
                firstname:"faiyaz",
                lastName:"ansari"
            }
    }
}
// console.log(regularUser.fullname.userfullname["firstname"])
// console.log(regularUser.fullname.userfullname["lastName"])
// console.log(regularUser.fullname.userfullname)




const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const final = Object.assign({}, obj1,obj2,obj3)   // all object combined
const final_1 = {...obj1, ...obj2, ...obj3}       // this is a combined spread methods
// console.log(final)
// console.log(final_1)

const obj = [
    {
        id:1,
        Email:"faiyazansari@122344"
    },
    {
        id:2,
        Email:"aman1233.com"
    },
    {
        id:3,
        Email:"akash@.com"
    },
    {
        id:4,
        Email:"faiyazansari@122344"
    },
    {
        id:5,
        Email:"faiyazansari@122344"
    },
    {
        id:6,
        Email:"faiyazansari@122344"
    },
    {
        id:7,
        Email:"faiyazansari@122344"
    },
    {
        id:8,
        Email:"faiyazansari@122344"
    },
    {
        id:9,
        Email:"faiyazansari@122344"
    },
    {
        id:1,
        Email:"faiyazansari@122344"
    },
]

// console.log(obj);
// console.log(user);
// console.log(Object.keys(user));            // this is a print keys in the user object 
// console.log(Object.values(user));         // this is a print in the value user object
// console.log(Object.entries(user));          // keys and value both are print as it as details print

console.log(regularUser.hasOwnProperty('name'))   // hasOwnproperty is a available or not check any object 
console.log(user.hasOwnProperty('email'));



