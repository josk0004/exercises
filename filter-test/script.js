const animals = [
    {
        name: "Mandu",
        type: "Cat",
    },
    {
        name: "Mia",
        type: "Cat",
    },
    {
        name: "Mona",
        type: "Dog",
    },
    {
        name: "Freddie",
        type: "Dog",
    }
]


const onlyCats = animals.filter(isCat);

function isCat(animal) {
    if (animal.type === "Cat") {
        return true;
    } else {
        return false;
    }
}

console.log(onlyCats);

const onlyDogs = animals.filter(isDog);

function isDog(animal) {
    if (animal.type === "Dog") {
        return true;
    } else {
        return false;
    }
}

console.log(onlyDogs);

// function all(animal) {
//     return true;
// }

// function none(animal) {
//     return false;
// }

// console.log(animals.filter(all));
// console.log(animals.filter(none));
