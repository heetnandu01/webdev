// 1) Basic pratice question 

class person{
    constructor(name,age){
        this.name = name
        this.age  = age
    }
    sayHello(){
       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`) 
    }
}
// 2) Pratice question

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`The speed of the car is ${this.speed}`);
    }
}

class SportsCar extends Car {
    constructor(name, speed) {
        super(name, speed);
        console.log(`The fastest car is ${this.speed}`);
    }

    drive() {
        console.log(`Zoom! The ${this.brand} is going at ${this.speed + 50} km/h`);
    }
}


// 3) Iheritance and overriding


class shape{
    area(){
        console.log("Nothing")
    }
}

class rectangle extends shape{
    area(width,length){
        let result = width * length
        console.log(result);
    }
}

// 4)  Iheritance and overriding

class animal{
    jumps(){
        console.log("Jumps higher")
    }
}

class dog extends animal{
    jumps(){
        console.log("Jumps faster and better")
    }
}

let d = new dog()
d.jumps()


// 5) Using super

class vehicle{
    constructor(name){
        this.name = name
    }
    speed(){
        console.log("I bought a new Bike")
    }
}

class Bike extends vehicle{
    constructor(name){
        super(name);
        console.log("Bikes speed faster")
    }

    speed(){
        console.log(`bike speed at the maximum rate ${this.name} km/hr`)
    }
}

// 6) Prototype Chain

const parent = {
    walk:function(){
        console.log("walks")
    }
}

const child = {};
child.__proto__ = parent;

child.walk();

// 6.1) another prototype problem

const engine = {
    start: function(){
        console.log("Engine started")
    }
}

const car = {}
car.__proto__ = engine;

car.start();

