window.onload = function() {
  var div_shape = $$("div#maze div.boundary");
 
      div_shape[0].onmouseover = mouse_over1;
      div_shape[1].onmouseover = mouse_over2;
      div_shape[2].onmouseover = mouse_over3;
      div_shape[3].onmouseover = mouse_over4;
      div_shape[4].onmouseover = mouse_over5;
};

function mouse_over1() {
  var div_shape = $$("div#maze div.boundary");
      div_shape[0].style.backgroundColor = "#ff8888";
}
function mouse_over2() {
  var div_shape = $$("div#maze div.boundary");
 
      div_shape[1].style.backgroundColor = "#ff8888";
  
}
function mouse_over3() {
  var div_shape = $$("div#maze div.boundary");
 
      div_shape[2].style.backgroundColor = "#ff8888";
  
}
function mouse_over4() {
  var div_shape = $$("div#maze div.boundary");
 
      div_shape[3].style.backgroundColor = "#ff8888";
  
}
function mouse_over5() {
  var div_shape = $$("div#maze div.boundary");
 
      div_shape[4].style.backgroundColor = "#ff8888";
  
}