function user(){
    console.log("f")
    console.log("a")
    console.log("i")
    console.log("y")
    console.log("a")
    console.log("z")
}

// user()                                               // user is a reference , () this is a execution

function sum(num1, num2){                               // num1, num2 is a parameter
    console.log(num1 + num2);
}
// sum(1, 3)                                      // 1, 3 is a arguments 


function mul(num3,num4){
    // const result = num3 + num4
    // return result;                     // this is a return keyword 
    // console.log("aman sharma")         // this is a not print beasuse this console is a after the return keyword
    return num3 + num4                    // second methods use of return keyword

}
const total_mul = mul(43, 32)          // this is a store of second varibale so that use of return keyword
// console.log("Result: ",total_mul)



function LogInuser(username = "faiyaz"){
    if(username === undefined){                              //  username === undefined ya (!username) same think
        console.log("please enter the username : ")
        return
    }
    return `${username} just login`
}

// const result = LogInuser("faiyaz ansari")
// console.log(result)

console.log(LogInuser("firoj"))                       // if not define argument result is undefined