
const displayNumber = document.querySelector("#displayNumber");
let amountInQueue;

async function fetchData() {
    try {
        const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
        const data = await response.json();
        if (displayNumber) {
            displayNumber.textContent = data.inQueue;
            amountInQueue = data.inQueue;
            updateSunPosition();
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
setInterval(fetchData, 10000);

function updateSunPosition() {
    //100% = 0 in queue
    //0% = 30 in queue
    const percentage = Math.max(0, 100 - (amountInQueue / 30) * 100);
    document.documentElement.style.setProperty('--sun-position', percentage + '%');
    document.documentElement.style.setProperty('--bg-color-lightness', (100 - percentage) + '%');
}