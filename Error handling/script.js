let a = prompt("Enter first number")

let b = prompt("Enter second Number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1
    try {
        console.log("The sum is ", sum * x)
        return true
    } catch (error) {
        console.log("error is occured")
        return false
    }
    finally {
        console.log("files are being closed and db connection is being closed")
    }
}


let c = main()



