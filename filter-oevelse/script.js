const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const allVehiclesButton = document.getElementById("allVehicles");
const electricVehiclesButton = document.getElementById("electricVehicles");
const moreThan2PassengersButton = document.getElementById("moreThan2Passengers");
const electricVehiclesOwnedByJonasButton = document.getElementById("electricVehiclesOwnedByJonas");
const runsOnRugbrødButton = document.getElementById("runsOnRugbrød");

allVehiclesButton.addEventListener("click", () => showTheseVehicles(vehicles));
electricVehiclesButton.addEventListener("click", () => showElectricVehicles(vehicles));
moreThan2PassengersButton.addEventListener("click", () => showMoreThan2Passengers(vehicles));
electricVehiclesOwnedByJonasButton.addEventListener("click", () => showElectricVehiclesOwnedByJonas(vehicles));
runsOnRugbrødButton.addEventListener("click", () => showRunsOnRugbrød(vehicles));

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    const type = each.type ?? "-";
    const fuel = each.fuel ?? "-";
    const passengers = (each.passengers !== undefined && each.passengers !== null) ? each.passengers : "-";
    const stops = Array.isArray(each.stops) ? each.stops.join(", ") : "-";
    const ownedBy = each.ownedBy ?? "-";
    const isElectric = (typeof each.isElectric === "boolean") ? (each.isElectric ? "Ja" : "Nej") : "-";
    const isTandem = (typeof each.isTandem === "boolean") ? (each.isTandem ? "Ja" : "Nej") : "-";
    tbodyPointer.innerHTML += `<tr>
      <td>${type}</td>
      <td>${fuel}</td>
      <td>${passengers}</td> 
      <td>${stops}</td>
      <td>${ownedBy}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`;
  });
}


function showElectricVehicles(arr) {
  const electricVehicles = arr.filter((each) => each.isElectric);
  showTheseVehicles(electricVehicles);
}

function showMoreThan2Passengers(arr) {
  const filtered = arr.filter((each) => each.passengers > 2);
  showTheseVehicles(filtered);
}

function showElectricVehiclesOwnedByJonas(arr) {
  const filtered = arr.filter((each) => each.isElectric && each.ownedBy === "Jonas");
  showTheseVehicles(filtered);
}

function showRunsOnRugbrød(arr) {
  const filtered = arr.filter((each) => each.fuel === "Rugbrød");
  showTheseVehicles(filtered);
}


