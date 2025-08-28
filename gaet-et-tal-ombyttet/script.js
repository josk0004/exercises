const startButton = document.getElementById("startButton");
const computerGuess = document.getElementById("computerGuess");
const tooLow = document.getElementById("tooLow");
const tooHigh = document.getElementById("tooHigh");
const correct = document.getElementById("correct");
const container = document.querySelector(".container");
let min = 0;
let max = 100;
let currentGuess = null;
let guesses = [];

startButton.addEventListener("click", () => {
    computerGuess.classList.remove("hidden");
    tooLow.classList.remove("hidden");
    tooHigh.classList.remove("hidden");
    correct.classList.remove("hidden");
    startButton.classList.add("hidden");
    min = 0;
    max = 100;
    guesses = [];
    generateComputerGuess();
});


function generateComputerGuess() {
    currentGuess = Math.floor((min + max) / 2);
    computerGuess.textContent = `Computer guesses: ${currentGuess}`;
    guesses.push(currentGuess);
    return currentGuess;
}


function generateComputerGuessLower() {
    max = currentGuess - 1;
    generateComputerGuess();
}

function generateComputerGuessHigher() {
    min = currentGuess + 1;
    generateComputerGuess();
}


tooLow.addEventListener("click", () => {
    generateComputerGuessHigher();
});

tooHigh.addEventListener("click", () => {
    generateComputerGuessLower();
});

const celebrationRainbow = {
    border: [
        "10px solid red",
        "10px solid orange",
        "10px solid yellow",
        "10px solid green",
        "10px solid blue",
        "10px solid indigo",
        "10px solid violet"
    ],
};

correct.addEventListener("click", () => {
    computerGuess.textContent = `The number was ${currentGuess}. Guessed in ${guesses.length} tries.`;
    tooLow.classList.add("hidden");
    tooHigh.classList.add("hidden");
    correct.classList.add("hidden");
    startButton.textContent = "Play Again";
    startButton.classList.remove("hidden");
    container.animate(celebrationRainbow, { duration: 1500, iterations: 3 });
    container.classList.add("wider");
    setTimeout(() => {
        container.classList.remove("wider");
    }, 4500);
});