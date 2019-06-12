var h1 = document.querySelector("h1")
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.getElementById("reset");
var mensaje = document.getElementById("mensaje");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var cuadrados = document.querySelectorAll(".cuadrados")
var botonesDificultad = document.getElementsByClassName("normal");

var colorElegido;
var rgbCorrecto;
var valorDificultad;

valorDificultad = 6;

asignarColores();

function asignarColores() {
    for (var i = 0; i < cuadrados.length; i++) {
        if (i < valorDificultad) {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        cuadrados[i].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
        cuadrados[i].addEventListener("click", comparar);  
        cuadrados[i].style.display = "block";
        } else {
        cuadrados[i].style.display = "none";
    }
    colorElegido = Math.floor(Math.random()*valorDificultad);  
    rgbCorrecto = cuadrados[colorElegido].style.backgroundColor;
    colorDisplay.textContent = rgbCorrecto;
    easyButton.addEventListener("click", dificultad)
    hardButton.addEventListener("click", dificultad)
    resetButton.addEventListener("click", reset)
    }
}

function comparar(){
    if (rgbCorrecto === this.style.backgroundColor) {
        mensaje.textContent = "Correct!";
        h1.style.backgroundColor = rgbCorrecto;
        resetButton.textContent = "PLAY AGAIN?"
        for (var i = 0; i < cuadrados.length; i++) {
            cuadrados[i].style.backgroundColor = rgbCorrecto;
        }
        
    } else {
        this.style.backgroundColor = "#232323";
        mensaje.textContent = "Try Again";
    }
}

function dificultad() {
    valorDificultad = Number(this.value);
    easyButton.classList.remove("select");
    hardButton.classList.remove("select");
    this.classList.add("select");
    reset()    
}

function reset() {
    asignarColores();
    mensaje.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS"
}