// Example 1:Variable Hoisting with var
console.log(a); // undefined 
var a = 5;

// corrected version 
var a;
console.log(a);
a = 5;


// Example 2:variable Hoisting with let and const

console.log(b);
let b = 10;



// Example 3:Function Hoisting (Function Declaration) 

sayHi();
function sayHi(){
    console.log("Hello!")
}

// Example 4:Function Expression with car

greet();
var greet = function(){
    console.log("Hi!");
};

