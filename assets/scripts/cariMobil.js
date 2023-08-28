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
    document.getElementById('carContainer').innerHTML += "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='assets/images/img_car.png' alt='Card image cap'> <div class='card-body d-flex flex-column gap-2'> <h5 style='font-size: small; font-weight: 400px;'> Nama/Tipe Mobil </h5> <h3 style='font-size:larger; font-weight: 800px;' class='card-title'>Rp 430.000/Hari</h3> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a href='#' class='btn rounded-1 w-100' style='background-color: #5CB85F; color: white'>Pilih Mobil</a>  </div> </div>"
    }
  })

  });