import { randomNumber } from "../utils/utils.js";

const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "20");
// list.appendChild(li);
let bars = [];

setInterval(function () {
    if (bars.length >= 19) {
        list.removeChild(list.firstChild);
        bars.shift();
    }
    const li = document.createElement("li");
    li.style.setProperty("--height", randomNumber(100));
    list.appendChild(li);
    bars.push(li.style.getPropertyValue("--height"));
    // console.log(bars);
    // console.log(bars.length);
}, 1000);