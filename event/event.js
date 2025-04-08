let button = document.getElementById("btn");

// alert("I am clicked")

//dbl - it means when you double click it will pop Yayy you were clicked 
button.addEventListener("dblclick",() =>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

// In contextmenu if you right click then Yayy you were clicked
button.addEventListener("contextmenu",() =>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

// e means event object 
button.addEventListener("keydown",(e) =>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
    // console.log(e)
    console.log(e.key)
})





