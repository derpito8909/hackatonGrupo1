/* En este script se captura cada carta de imagen y se realiza la animacion para voltiar */
const foto1 = document.getElementById('foto1');
const foto2 = document.getElementById('foto2');
const foto3 = document.getElementById('foto3');
const foto4 = document.getElementById('foto4');
const adivinar = document.getElementById('botonAdivinar');
const inputAdivinar = document.getElementById('inputAdivinar');
const usuario = document.getElementById('usuario');
const puntaje = document.getElementById('puntaje');
let contadorPuntos = 12;
/* funcion para voltiar la carta */
function flip(event) {
    let element = event.currentTarget;
    if (element.className === "carta") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};
foto1.addEventListener('click', flip);
foto2.addEventListener('click', flip);
foto3.addEventListener('click', flip);
foto4.addEventListener('click', flip);
function adivinarNombre(event) {
    let element = event.currentTarget;
    if (inputAdivinar.value == 'David Rodriguez' || inputAdivinar.value == 'David Esteban Rodriguez' || inputAdivinar.value == 'David Esteban Rodriguez' || inputAdivinar.value == 'David Esteban Rodriguez Pineda') {
        puntaje.textContent = contadorPuntos;
        guardarPuntajeLocalStorage(puntaje.textContent);
        swal("Actertaste, Felicidades", {
            className: "swal-text",
            icon: "success",
        });
    } else if (inputAdivinar.value == 'Guillermo Acosta' || inputAdivinar.value == 'Guillermo Acosta Melo') {
        puntaje.textContent = contadorPuntos;
        guardarPuntajeLocalStorage(puntaje.textContent);
        swal("Actertaste, Felicidades", {
            className: "swal-text",
            icon: "success",
        });
    } else if (inputAdivinar.value == 'Santiago Marquez' || inputAdivinar.value == 'Santiago Marquez Ortiz') {
        puntaje.textContent = contadorPuntos;
        swal("Actertaste, Felicidades", {
            className: "swal-text",
            icon: "success",
        });
    } else if (inputAdivinar.value == 'Guillermo' || inputAdivinar.value == 'Daniel Gonzalez') {
        puntaje.textContent = contadorPuntos;
        guardarPuntajeLocalStorage(puntaje.textContent);
        swal("Actertaste, Felicidades", {
            className: "swal-text",
            icon: "success",
        });
    } else {
        if (contadorPuntos <= 0) {
            swal("SE ACABO EL JUEGO", {
                className: "swal-text",
                icon: "warning",
            });
        }
        swal("Esa persona no es la de la foto, vuelve a intentar", {
            className: "swal-text",
            icon: "warning",
        });
        contadorPuntos = contadorPuntos - 1;
        puntaje.textContent = contadorPuntos;
        guardarPuntajeLocalStorage(puntaje.textContent);
    }
}
adivinar.addEventListener('click', adivinarNombre);

const guardarPuntajeLocalStorage = (puntaje) => {
    localStorage.setItem("puntajeUsuario", puntaje);
}
const cargarPuntaje = () => {
    const puntajeGuardado = localStorage.getItem('puntajeUsuario');    
    puntaje.textContent = puntajeGuardado;
}
cargarPuntaje();