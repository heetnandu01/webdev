//Problem No 1
// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["shubh","anjali","shivani","shivangi","shubham","rahul","kaif","Emanuel","krishnanendu","Ravindranathan"]

let houses = []

for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor")
    }
    else if(student.length < 8){
        houses.push("hufflepuff")
    }
    else if(student.length < 12){
        houses.push("Ravenclaw")
    }
    else{
        houses.push(" Slytherin")
    }
} 
console.log(houses)


// Problem No 2
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubleTrouble(arr){
    let result = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i-1]){
            result.push(arr[i]);
        }else{
            result.push(arr[i] * 2);
        }
    }
    return result;
}

console.log(doubleTrouble([2, 2, 3, 4, 4, 4]));



// another similar problem like above 
// You're given an array of numbers. Write a function that squares each element unless it is the same as the next element.
// If it has a duplicate right after it, just skip squaring that one.

function sqaure(arr){
    let result = [];
    
    for(let i =0;i<arr.length;i++){
        if(arr[i] === arr[i + 1]){
            result.push(arr[i] * arr[i]);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
}


// another Problem 

// Problem: Odd Even Split
// You’re given an array of numbers. Write a function that separates the odd and even numbers in the array, and returns a new array where all even numbers come first, followed by all odd numbers.


function numSplit(arr){
    let  odd_num = [];
    let even_num = [];

    for(let i =0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            even_num.push(arr[i])
        }
        else{
            odd_num.push(arr[i])  
        }
    }
    return even_num.concat(odd_num);
}

// Another problem 
// You’re given an array of integers.
// Write a function that separates positive and negative numbers, and returns a new array where:
// All positive numbers come first
// Followed by all negative numbers
// Ignore zero (do not include it in the result)



function PosNegSplit(arr){
    let positive_num = [];
    let negative_num = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positive_num.push(arr[i])
        }
        else{
            negative_num.push(arr[i])
        }
    }
    return positive_num.concat(negative_num)
}
//Another problem 
// Long Short Split
// You're given an array of strings.
// Write a function that returns a new array where:
// All long strings (length ≥ 5) come first
// Then all short strings (length < 5) come after


function stringSplit(arr){
    let long_string = []
    let short_string = []

    for(let i=0;i<arr.length;i++){
        if(arr[i].length >=5){
            long_string.push(arr[i])
        }
        else{
            short_string.push(arr[i])
        }
    }
    return long_string.concat(short_string)
}




