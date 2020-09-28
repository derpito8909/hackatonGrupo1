i = 0;
const textoTitulo = 'Bienvenidos al juego ¿Adivina Quien?';
const velocidad = 50;
window.onload = function () {
    maquinaEscribir();
}


function maquinaEscribir() {
    if (i < textoTitulo.length) {
        document.getElementById("titulo").innerHTML += textoTitulo.charAt(i);
        i++;
        setTimeout(maquinaEscribir, velocidad);
    }
}