let promise = new Promise((resolve, reject) => {
    if (success) {
      resolve("Success message");
    } else {
      reject("Error message");
    }
  });

  promise.then((data) => {
    console.log("Resolved:", data);
  }).catch((error) => {
    console.log("Rejected:", error);
  });
  


//problems 

// 1

let Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Download complete");
    }, 2000);
});

Promise2.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Something went wrong");
});


// problem 2


function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "Heet" && password === "1234") {
            resolve("Login successful ");
        } else {
            reject("Invalid credentials ");
        }
    });
}

login("Heet", "1234")
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//problem 3 

function checkStock(product){
    return new Promise((resolve,reject) => {
        if(product === "laptop"){
            resolve("Product is in the stock");
        }
        else{
            reject("product is out of the stock");
        }
    });
}


checkStock("laptop")
    .then((data) =>{
        console.log(data)
    })
    .catch((error) =>{
        console.log(error);
    });






//problem 4


function delayedGreet(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hello " + name)
        }, 2000);
    })
}


delayedGreet("Heet")
   .then((data)=>{
    console.log(data)
})
   .catch((error) =>{
    console.log(error)
})




