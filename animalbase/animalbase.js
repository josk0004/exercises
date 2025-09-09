"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
    filter: "",
    sortBy: "",
    sortDir: ""
};

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start() {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons
    document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", filterList));
    document.querySelectorAll("#sorting th").forEach(header => header.addEventListener("click", sortList));

    loadJSON();
}

function getFilteredAnimals(animals, filter) {
    if (!filter || filter === "*") return animals;
    return animals.filter(animal => animal.type === filter);
}

function sortAnimals(animals, sortBy, sortDir) {
    if (!sortBy) return animals;
    return animals.slice().sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortDir === "asc" ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortDir === "asc" ? 1 : -1;
        return 0;
    });
}

function filterList() {
    settings.filter = this.dataset.filter;
    let filtered = getFilteredAnimals(allAnimals, settings.filter);
    let sorted = sortAnimals(filtered, settings.sortBy, settings.sortDir);
    displayList(sorted);
}

function sortList() {
    settings.sortBy = this.dataset.sort;
    settings.sortDir = this.dataset.sortDirection;
    // toggle direction
    if (settings.sortDir === "asc") {
        settings.sortDir = "desc";
    } else {
        settings.sortDir = "asc";
    }
    this.dataset.sortDirection = settings.sortDir;
    let filtered = getFilteredAnimals(allAnimals, settings.filter);
    let sorted = sortAnimals(filtered, settings.sortBy, settings.sortDir);
    updateSortIndicators();
    displayList(sorted);
}

function updateSortIndicators() {
    document.querySelectorAll("#sorting th").forEach(header => {
        header.textContent = header.textContent.replace(" ↑", "").replace(" ↓", "");
        if (header.dataset.sort === settings.sortBy) {
            header.textContent += settings.sortDir === "asc" ? " ↑" : " ↓";
        }
    });
}

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    // when loaded, prepare data objects
    prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject(jsonObject) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}


function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}


