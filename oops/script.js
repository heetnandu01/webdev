// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created...")
    }
    eats(){
        super.eats()
        console.log("he is eating the entire piece of chicken")
    }
}




let a = new Animal("Bunny");
console.log(a)

let L = new lion("shera");
console.log(L)


//Static method

class Employee{
    static smethod(){
        alert("Hey");
    }
}
Employee.smethod()


















