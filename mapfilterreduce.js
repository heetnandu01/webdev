// Map
let arr = [1,3,5,7,9];
let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)


//filter

const greaterThanSeven = (e)=>{
    if(e > 7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanSeven))


//reduce

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a * b;
}

console.log(arr2.reduce(red))