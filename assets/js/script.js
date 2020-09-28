/* En este script se captura cada carta de imagen y se realiza la animacion para voltiar */
const foto1 = document.getElementById('foto1');
const foto2 = document.getElementById('foto2');
const foto3 = document.getElementById('foto3');
const foto4 = document.getElementById('foto4');

function flip(event) {
    var element = event.currentTarget;
    console.log(event.originalTarget);
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