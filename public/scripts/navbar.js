document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasResponsive');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("openMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });