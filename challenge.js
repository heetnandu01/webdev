//solving a problem of callback,Promise and Asysnc/Await

const { reject, filterLimit, compose } = require("async");

//1.callback 

function finishWork(name,callback){
    setTimeout(() => {
        console.log(name  + " Finished work");
        callback(name);
    }, 1000);
}


function goForWalk(name,callback){
    setTimeout(() => {
        console.log(name  + " went for a walk");
        callback(name);
    }, 1500);
}


function eatDinner(name){
    setTimeout(() => {
        console.log( name  + " is eating dinner");
    }, 2000);
}

finishWork("Heet",(name)=>{
    goForWalk(name,(name)=>{
        eatDinner(name);
    })
})

// 2.promise



function openBooks(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Books opened");
        }, 1000);
    })
}

function studyTopic(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Studying topic");
        }, 2000);
    })
}

function takeBreak(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Break time")
        }, 1500);
    })
}

openBooks()
.then((data)=>{
    console.log(data);
    return studyTopic();
})
.then((data)=>{
    console.log(data);
    return takeBreak();
})
.then((data)=>{
    console.log(data);
})


//3.async/await problem

function bookFlight(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Flight Booked");
        }, 1000);
    })
}

function packBags(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Bags packed");
        }, 1500);
    })
}

function reachAirport(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Reached airport");
        }, 2000);
    })
}

async function stratTravel(){
    console.log("start");
    let msg = await(bookFlight());
    console.log(msg);
    let msg1 = await(packBags());
    console.log(msg1);
    let msg2 = await(reachAirport());
    console.log(msg2);
}

stratTravel();







