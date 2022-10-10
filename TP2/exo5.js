var lose = false; 
var x =document.getElementsByClassName("boundary example")
// 
console.log(x);
window.onload = function() {
    $("start").onclick = startGame;
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
    lose = false;
    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].style.backgroundColor = "#eeeeee";
    }
}

function endGame() {
    if(lose) {
        // document.write("Hello World!");
         x[0].innerHTML="lose";
           
    } else {
        x[0].innerHTML="win";
    }
}



