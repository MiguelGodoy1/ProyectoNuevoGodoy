const pantalla = document.querySelector(".present");
const sonido = new Audio ("assets/Car Driving Off Fast Sound Effect.mp3");
pantalla.addEventListener("click",function(){
        sonido.currentTime = 0;
        sonido.play();
});

const tarjetas = document.querySelectorAll(".card");
tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener("click", function () {
        tarjeta.classList.toggle("activa");
    });
});