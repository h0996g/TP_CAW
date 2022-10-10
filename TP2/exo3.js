
window.onload = function() {
    $("end").onmouseover = endGame;
    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].onmouseover = mouse_over;
    }
};

function mouse_over() {

    var div_shape = $$("div#maze div.boundary");
    for (var i = 0; i < div_shape.length; i++) {
        div_shape[i].style.backgroundColor = "#ff8888";
    }
}

function endGame() {
 
        alert("You win!");
   
}


