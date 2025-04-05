document.title = "Selecting by ids,classes and more";

// let  boxes = document.getElementsByClassName("box")
// boxes[2].style.backgroundColor = "Blue"


// document.getElementById("redbox").style.backgroundColor = "red";


// document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
});


















