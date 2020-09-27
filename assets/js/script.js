const cards = document.querySelectorAll('.card');
console.log(cards);

function flip(event) {
    var element = event.currentTarget;
    console.log(element)
    if (element.className === "card col-6") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        } else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};

for (let card of cards) {
    card.addEventListener('click', flip);
}