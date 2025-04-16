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
    
}




let a = new Animal("Bunny");
console.log(a)

let l = new lion("Harry");
console.log(a)





















