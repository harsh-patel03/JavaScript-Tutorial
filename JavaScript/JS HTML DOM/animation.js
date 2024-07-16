var a = 0;
var id = setInterval(Anim, 100);

function Anim(){
    a = a + 10;
    if(a == 200){
        clearInterval(id)
    }else{
        var target = document.getElementById("test");
        target.style.width = a + 'px'
    }


}