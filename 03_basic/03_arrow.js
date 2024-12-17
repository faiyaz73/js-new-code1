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
    console.log(this)   

}
arr()
console.log(this)