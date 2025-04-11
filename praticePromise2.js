// function startDowmload(file){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Download started for" + file);
//         }, 1000);
//     })
// }


// function trackprogress(file){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve("Downloading" + file + "50% done");
//         }, 1500);
//     })
// }


// function completeDownload(file){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve(file + "Download complete");
//         }, 2000);
//     })
// }

// startDowmload("music.mp3")
// .then((msg1) =>{
//     console.log(msg1);
//     return trackprogress("music.mp3");
// })
// .then((msg2) =>{
//     console.log(msg2);
//     return completeDownload("music.mp3")
// })
// .then((msg3) =>{
//     console.log(msg3);
// })


function chopVegetables(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Vegetables chopped");
        }, 1000);
    })
}


function boilWater(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Water boiled");
        }, 1500);
    })
}

function cookMeal(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Meal is ready!")
        }, 2000);
    })
}


chopVegetables()
.then((msg1) =>{
    console.log(msg1);
    return boilWater();
})
.then((msg2) =>{
    console.log(msg2);
    return cookMeal();
})
.then((msg3) =>{
    console.log(msg3);
})

































