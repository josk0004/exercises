export function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function select(str) {
    return document.querySelector(str);
}

export function selectAll(str) {
    return document.querySelectorAll(str);
}

export function selectId(id) {
    return document.getElementById(id);
}

export function clog(...args) {
    console.log(...args);
}