// async function getdata(){
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
// }


// challenge 1

// async function getJoke() {
//     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//     const data = await response.json();
//     console.log(data.setup);
//     console.log(data.punchline);

// }
// getJoke();



async function randomUser() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    console.log(data.results[0].name.first)
    console.log(data.results[0].name.last)
    console.log(data.results[0].location.country)
}
randomUser();









