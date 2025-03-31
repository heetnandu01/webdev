function nice(name){
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your shirt is fire!");
    console.log("Hey " + name + " your course is good too!");
}

// nice("Harry")
// nice("rohan")

function sum(a,b){
    console.log(a+b);
}
sum(2,2);

function sum(num1,num2){
    return num1 + num2;
}
result = sum(3,6);

console.log("The sum of these numbers is: ",result);


function sum(x,y,z=3){
    return x + y + z;
}

result = sum(5,6);
console.log("The sum of these numbers is: ",result);

// arrow functions 

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}
func1(34);
func1(66);
func1(84);
