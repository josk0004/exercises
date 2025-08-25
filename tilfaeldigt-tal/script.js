const randomNumberElement = document.querySelector("#random-number");
const generateButton = document.querySelector("#generate-button");
const max = 100;

document.addEventListener("DOMContentLoaded", function () {
    randomNumber();
});

//random number 0-100
function randomNumber() {
    let number = Math.floor(Math.random() * (max + 1));
    console.log("Tilfældigt tal genereret: " + number);
    randomNumberElement.textContent = "Tilfældigt tal genereret: " + number;
    return number;
}


generateButton.addEventListener("click", function () {
    randomNumber();
});
