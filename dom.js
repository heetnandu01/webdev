//Praticed Callback,promises,async/await and fetch API

// callback

function brushTeeth(callback){
    setTimeout(() => {
        console.log("Brushed Teeth");
        callback()
    }, 1000);
}

function eatBreakFast(callback){
    setTimeout(() => {
        console.log("Ate Breakfast");
        callback()
    }, 1000);
}

function goToWork(callback){
    setTimeout(() => {
        console.log("Went to work");
    }, 1000);
}


brushTeeth(()=>{
    eatBreakFast(()=>{
        goToWork();
    })
})


//Promise challenge 

function checkEvenNumber(number){
    return new Promise((resolve,reject)=>{
        if(number % 2 == 0){
            resolve("Even number: " + number);
        }
        else{
            reject("Odd number: " + number);
        }
    })
}


checkEvenNumber(4)
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// Async/Await challenge

function firstTask(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("First task done");
        }, 2000);
    })
}

function secondTask(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("second task done");
        }, 1000);
    })
}

async function performTasks(){
    console.log("start");
    let msg1 = await firstTask();
    console.log(msg1)
    let msg2 = await secondTask();
    console.log(msg2)
}

performTasks();


// Fetch challenge 

async function titles(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json();
    console.log("Title:", data.title);
    console.log("Body:", data.body);
}

titles()







