var lose = false; 
var inside=false;
var msg="";
var x =document.getElementsByClassName("boundary example")
// 
console.log(x);
window.onload = function() {
    $("start").onclick = startGame;
   $("maze").onmouseenter = mouseEnter;
   $("maze").onmouseleave = mouseLeave;
    $("end").onmouseover = endGame;
    
    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].onmouseover = mouse_over;
    }
};

function mouse_over() {
    lose = true;
    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].style.backgroundColor = "#ff8888";
    }
}

function startGame() {
    msg="";
    x[0].innerHTML=msg;
    lose = false;
    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].style.backgroundColor = "#eeeeee";
    }
}
function mouseEnter() {
    inside=true;
  }
  function mouseLeave() {
   inside=false;
  }

function endGame() {
    if(lose) {
        if(msg=="cheating"){
            msg="cheating";
            x[0].innerHTML=msg;
        }else{

            msg="lose";
            // document.write("Hello World!");
             x[0].innerHTML=msg;
        }
           
    } else 
    if(!lose && inside){
        if(msg=="cheating"){
            msg="cheating";
            x[0].innerHTML=msg;
        }else{

            msg="win";
            x[0].innerHTML=msg;
        }
    }else if(!lose && !inside){
        msg="cheating"
        x[0].innerHTML=msg;
    }else if(msg=="cheating"&& !inside){
                msg="cheating";
                x[0].innerHTML=msg;
    }
    
}



