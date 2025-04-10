function sayBye(name, callback) {
    console.log("Goodbye, " + name);
    callback();
}

sayBye("Heet",() =>{
    console.log("see you soon!");
})  


function fetchdata(callback){
    console.log("Fetching Data from the server...");
    setTimeout(() => {
        callback();
    },2000);
}

fetchdata(() =>{
    console.log("Data received Successfully");
})

function calculate(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
}
calculate(5,3,(result)=>{
    console.log("the result is " + result);
})



function checkage(age,callback){
    if(age >= 18){
        callback(true)
    }
    else{
        callback(false)
    }
}


checkage(20,(isEligible)=>{
    if(isEligible){
        console.log("You are eligible");
    }
    else{
        console.log("You are not eligible");
    }
})


function checkNumber(num,callback){
    if(num % 2 == 0){
        callback("even")
    }
    else{
        callback("odd")
    }
}

checkNumber(7,(result)=>{
    console.log("the answer is " + result);
})



    function transformString(str, callback) {
        let upstr = str.toUpperCase();
        callback(upstr)    
    }

    transformString("hello world",(result) =>{
        console.log("transformed string:" + result);
    });
  


function greetUser(name,callback){
    console.log("Hi" + name);
    callback(name);
}

greetUser("Heet",(name)=>{
    console.log("You are welcome Aboard" + name)
})
  

function multiplyNumbers(a, b, callback) {
    let result = a*b;
    callback(result);
}

multiplyNumbers(6,4,(result)=>{
    console.log("the result is " + result)
})

  


  













