// var element;
// element = document.URL;
// console.log(element);


// var element;
// element = document.getElementById("header").innerHTML;
// console.log(element);


// var element;
// element = document.getElementById("header").getAttribute("class");
// console.log(element);


// var element;
// document.getElementById("header").innerHTML = "<h1>Hello world</h1>"
// element = document.getElementById("header").innerHTML;
// console.log(element);


// var element;
// document.querySelector("#header").innerHTML = "<h1>Wow</h1>"
// element = document.querySelector(".list");
// console.log(element);


// var element;
// element = document.querySelector("#header").style.border;
// console.log(element);



// var element;
// document.querySelector("#header").classList.add("abc", "Pqr");
// element = document.querySelector("#header").classList;
// console.log(element);


var element ;
document.getElementById("header").addEventListener("mouseleave", abc);
document.getElementById("header").addEventListener("click", xyz);

function abc(){
    document.getElementById("header").style.background = "green";
}

function xyz(){
    document.getElementById("header").removeEventListener("mouseleave",abc);
}