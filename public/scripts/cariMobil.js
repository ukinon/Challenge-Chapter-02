document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('.input');

    for(let i = 0; i < inputs.length; i++){
inputs[i].addEventListener('focus', function (){
      document.querySelector('#hero').style.filter = "brightness(50%)";
      document.querySelector('#footer').style.filter = "brightness(50%)";
      document.querySelector('#container').style.filter = "brightness(50%)";
    }, true)
  
inputs[i].addEventListener('focusout', function (){
  document.querySelector('#hero').style.filter = "brightness(100%)";
  document.querySelector('#footer').style.filter = "brightness(100%)";
  document.querySelector('#container').style.filter = "brightness(100%)";
    }, true)
  }

  });