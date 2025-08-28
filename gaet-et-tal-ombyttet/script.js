const startButton = document.getElementById("startButton");
const computerGuess = document.getElementById("computerGuess");
const forLavt = document.getElementById("forLavt");
const forHoyt = document.getElementById("forHoyt");
const rigtigt = document.getElementById("rigtigt");
const container = document.querySelector(".container");
let min = 0;
let max = 100;
let currentGuess = null;
let guesses = [];

startButton.addEventListener("click", () => {
    computerGuess.classList.remove("hidden");
    forLavt.classList.remove("hidden");
    forHoyt.classList.remove("hidden");
    rigtigt.classList.remove("hidden");
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


forLavt.addEventListener("click", () => {
    generateComputerGuessHigher();
});

forHoyt.addEventListener("click", () => {
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

rigtigt.addEventListener("click", () => {
    computerGuess.textContent = `The number was ${currentGuess}. Guessed in ${guesses.length} tries.`;
    forLavt.classList.add("hidden");
    forHoyt.classList.add("hidden");
    rigtigt.classList.add("hidden");
    startButton.textContent = "Play Again";
    startButton.classList.remove("hidden");
    container.animate(celebrationRainbow, { duration: 1500, iterations: 3 });
    container.classList.add("wider");
    setTimeout(() => {
        container.classList.remove("wider");
    }, 4500);
});