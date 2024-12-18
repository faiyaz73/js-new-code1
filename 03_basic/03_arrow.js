const user = {
    username:"hitesh",
    price:999,
    welcomeMessage : function(){
        console.log(`${this.username} price ${this.price}`)
        // console.log(this)
    }
   
    
}
// user.welcomeMessage()
user.username = "faiyaz"
// user.welcomeMessage()
// console.log(this)


const arr = () => {
    let usename  = "firoj ansari"
    console.log(usename);
    // console.log(this)                              // this is a empty 

}
// arr()
// console.log(this)                       // this is empty


const am = () => {
    const n = 233;
    console.log(n)

}

am()

const y = () => {
    const r = "faiyaz"
    console.log(r)
console.log(this)
}
                        
y()                       

const sum =(num1,num2) => {
return num1 + num2
}
const sum1 = sum(34,45)
console.log(sum1)

// const number = (no1, no2) => no1 * no2              // implicit return 
// console.log(number(34,5))

const ob = (ob1, obj2) => ({name:"faiyaz"})           // this is a object implicit 
console.log(ob(3,5))