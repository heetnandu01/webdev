async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// 3) spread syntax

function sum(a,b,c){
    return a+b+c
}


(async function main() {
    // 1) llFE
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // 2) Destructing
    // let [x,y,] = [1,5]
    // console.log(x,y)

    // let [a,b, ...rest] = [1,5,7,8,9,10]
    // console.log(a,b,rest)

    let obj = {
        a:1,
        b:2,
        c:3
    }

    let {a,b }= obj
    console.log(a,b)

    // 3) spread syntax
    let arr = [1,4,6]
    console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(...arr))
 
})()



// 1) local scope

function greet(){
    let message = "Hello";
    console.log(message)
}

greet()
// console.log(message) 
// this message will give error


// 2) Global scope

let name = "Heet"
function sayName(){
    console.log(name);
}
sayName()

// 3) Block Scope 

if(true){
    let age = 25; // Block scope
    console.log(age);
}

console.log(age); //Error: age is not defined 





