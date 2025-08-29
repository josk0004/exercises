// let myVar = "Finn"
// console.log(myVar);

let myVarGlob;

upDateFinn("Finn");
function upDateFinn(name) {
    let myVar = name;
    myVar += " is awesome!";
    myVarGlob = myVar;

}

console.log(myVarGlob);