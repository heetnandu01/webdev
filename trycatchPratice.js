//Problem 1

// async function main() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if (!response.ok) {
//             throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         console.log("Title:", data.title);
//         console.log("Body:", data.body);
//     } catch (error) {
//         console.log("Failed to fetch data");
//     } finally {
//         console.log("Fetch attempt completed");
//     }
// }

// main();


//Problem 2

// function parseInput(input) {
//     try {
//         const number = parseInt(input);
//         if (isNaN(number)) {
//             throw new Error("Invalid number");
//         }
//         console.log("Valid number:", number);
//     } catch (error) {
//         console.log("Error:", error.message);
//     } finally {
//         console.log("Parsing complete");
//     }
// }

// parseInput("123");   
// parseInput("hello"); 
// parseInput("50px");    
// parseInput("");       








function parseString(input){
    try{
        const String = JSON.parse(input);
        console.log("Valid String:",String);
    }catch(error){
        console.log("Error:",error.message);
    }finally{
        console.log("Parsing Attempt finished");
    }
}

parseString("123");
parseString("Hello");
parseString("123trying");
parseString("50px");
parseString("")