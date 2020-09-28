const cards = document.querySelectorAll('.card');
//console.log(cards);

function flip(event) {
    let element = event.currentTarget;
    element.className = ''
};

for (let card of cards) {
    card.addEventListener('click', flip);
}