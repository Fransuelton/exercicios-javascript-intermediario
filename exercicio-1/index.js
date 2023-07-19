const btnChangeColor = document.getElementById("btnChangeColor");

const blueSquare = document.querySelector(".blue");

btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
    blueSquare.classList.remove("blue");
    blueSquare.classList.add("new-background-color");
}