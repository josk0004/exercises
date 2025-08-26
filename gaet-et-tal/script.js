const max = 100;
let randomNum;
const resultDisplay = document.querySelector("#result");

document.addEventListener("DOMContentLoaded", function () {
    randomNum = randomNumber();
});

function randomNumber() {
    let number = Math.floor(Math.random() * (max + 1));
    return number;
}

const fadeOutFrames = {
    opacity: [1, 0]
};

const noAnimation = {
    opacity: [1, 1]
};

const celebrationRainbow = {
    border: [
        "10px solid red",
        "10px solid orange",
        "10px solid yellow",
        "10px solid green",
        "10px solid blue",
        "10px solid indigo",
        "10px solid violet"
    ]
};


function handleGuess() {
    const userGuess = parseInt(document.querySelector("#guess-input").value);
    checkGuess(userGuess);
}

document.querySelector("#guess-button").addEventListener("click", handleGuess);

document.querySelector("#guess-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleGuess();
    }
});

function checkGuess(guess) {
    if (guess === randomNum) {
        resultDisplay.textContent = "Tillykke! Du gættede det rigtige tal.";
        resultDisplay.animate(noAnimation, { duration: 1, fill: "forwards" });
        document.querySelector(".container").animate(celebrationRainbow, { duration: 2000, iterations: 3 });
        randomNum = randomNumber();
    } else if (guess < randomNum) {
        resultDisplay.textContent = "For lavt! Prøv igen.";
        resultDisplay.animate(fadeOutFrames, { duration: 3000, fill: "forwards" });
    } else {
        resultDisplay.textContent = "For højt! Prøv igen.";
        resultDisplay.animate(fadeOutFrames, { duration: 3000, fill: "forwards" });
    }
}
