const square = document.querySelector(".square");

square.addEventListener('click', () => {

    const classBlueExists = square.classList.contains('blue');

    if (classBlueExists) {
        square.classList.remove("blue");
    } else {
        square.classList.add("blue");
    }

});