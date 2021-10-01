var miBoton = document.getElementById("button")
var miNumero = document.getElementById("num")

miBoton.onclick = function() {myFunction()}

var contador = 0

function myFunction() {
  if (contador < 10) {
    contador++
    miNumero.innerHTML = contador
    console.log(contador)
  }
}