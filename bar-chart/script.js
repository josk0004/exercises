import { randomNumber } from "../utils/utils.js";

const list = document.querySelector("ul");
let bars = [];

setInterval(function () {
    if (bars.length >= 20) {
        list.removeChild(list.firstElementChild);
        bars.shift();
    }
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNumber(100));
    list.appendChild(li);
    bars.push(li.style.getPropertyValue("--height"));
}, 1000);