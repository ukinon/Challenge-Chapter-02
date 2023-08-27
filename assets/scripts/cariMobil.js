document.addEventListener("DOMContentLoaded", function(){
    var inputs = document.querySelectorAll('.input');

    for(let i = 0; i < inputs.length; i++){
inputs[i].addEventListener('focus', function (){
      document.querySelector('#hero').style.filter = "brightness(50%)";
      document.querySelector('#footer').style.filter = "brightness(50%)";
      document.querySelector('#carContainer').style.filter = "brightness(50%)";
    }, true)
  
inputs[i].addEventListener('focusout', function (){
  document.querySelector('#hero').style.filter = "brightness(100%)";
  document.querySelector('#footer').style.filter = "brightness(100%)";
  document.querySelector('#carContainer').style.filter = "brightness(100%)";
    }, true)
  }

  document.getElementById('searchButton').addEventListener('click', function(){
    document.getElementById('carContainer').innerHTML = "";
    for(let i = 0; i < 5; i++){
    document.getElementById('carContainer').innerHTML += "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='assets/images/img_car.png' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>Card title</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn btn-primary'>Go somewhere</a>  </div> </div>"
    }
  })

  });