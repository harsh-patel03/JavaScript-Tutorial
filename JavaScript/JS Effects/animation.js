// var a = 0;
// var id = setInterval(Anim, 100);

// function Anim(){
//     a = a + 10;
//     if(a == 200){
//         clearInterval(id)
//     }else{
//         var target = document.getElementById("test");
//         target.style.width = a + 'px'
//     }

// }



/* JavaScript setTimeout*/

/*var id = setTimeout(Anim,5000);

function Anim(){
	var target = document.getElementById("test");
	target.style.width = "500px";
	//console.log("Hello");
}*/

var id = setTimeout(function(){
	var target = document.getElementById("test");
	target.style.width = "500px";
},5000);


/* JavaScript clearTimeout*/
function stopAnimation(){
	clearTimeout(id);
}