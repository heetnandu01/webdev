// Problem 1

const { reject } = require("async");

// function wakeUp(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Woke up!");
//         }, 1000);
//     })
// }

// function brushTeeth(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Brushed teeth");
//         }, 1500);
//     })
// }

// function eatBreakfast(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Ate breakfast");
//         }, 2000);
//     })
// }


// async function startDay(){
//     console.log("Start");
//     let msg = await wakeUp();
//     console.log(msg);
//     let msg1 = await brushTeeth();
//     console.log(msg1);
//     let msg2 = await eatBreakfast();
//     console.log(msg2);
// }

// startDay();


//Problem 2


function bookTickets(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Tickets booked");
        }, 1000);
    })
}
function buySnacks(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Snacks bought");
        }, 1500);
    })
}
function startMovie(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Movie started");
        }, 2000);
    })
}
async function movieNight(){
    console.log("start");
    let msg = await bookTickets();
    console.log(msg);
    let msg1 = await buySnacks();
    console.log(msg1);
    let msg2 = await startMovie();
    console.log(msg2);
}
movieNight();





