console.log("Harry is a hacker")
console.log("rohan is a hecker")


setTimeout(()=>{
    console.log("I am inside settimeout")
},0);


setTimeout(()=>{
    console.log("I am inside settimeout")
},0);



console.log("The end")



//callback function 

/*
A callback function is a function based into another function as an argument which is then invoked inside the outer function to complete an action 
*/

const fn = () => {
    console.log("Nothing")  
}


const callback = (arg,fn) => {
  console.log(arg)
  fn()
}


const loadScript = (src,callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry",fn);
  document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)




