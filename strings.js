console.log("This is Strings");
let a = "Harry";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

let real_name = "harry"
let friend = "Brook"
console.log("His name is " + real_name + " and my friend name is " + friend);

// this is called template literals 

console.log(`His name is ${real_name} and his friends name is ${friend}`)

//Escape Sequence character
a = "Har\"ry"
console.log(a);


//uppercase  letters
let b = "Harry";
console.log(b.toUpperCase())

//lowercase letters
let c = "DATAWAREHOUSE";
console.log(c.toLowerCase())
console.log(c.length)
console.log(c.slice(1,4))
console.log(c.replace("DA","77"))
console.log(c.concat(a,"Harolds"))

console.log(c) 
// the output will remain same as DATAWAREHOUSE because strings are immutable 















