document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasResponsive');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    var inputs = document.querySelectorAll('.input');
    document.getElementById("openMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });

    for(let i = 0; i < inputs.length; i++){
inputs[i].addEventListener('focus', function (){
      document.querySelector('#hero').style.filter = "brightness(50%)";
      document.querySelector('#footer').style.filter = "brightness(50%)";
    }, true)
  
inputs[i].addEventListener('focusout', function (){
      document.getElementById('hero').style.filter = "brightness(100%)"
      document.getElementById('footer').style.filter = "brightness(100%)"
    }, true)
  }
  });