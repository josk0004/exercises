
// console.log("My name is Klaus. I have a dog called Mona.");

// const firstName = "Jonathan";
// const petName = "Buster";
// const petType = "Cat";

// console.log(`My name is ${firstName}.\nI have a ${petType} called ${petName}.`);

// const len = firstName.length;
// console.log(`The length of my name is ${len}.`);

// const letter = firstName[0];
// console.log(`The first letter of ${firstName} is ${letter}.`);


const fullName = "Albus Percival Wulfric Brian Dumbledore";

const nameLength = fullName.length;
console.log(`The name ${fullName} has ${nameLength} characters with spaces included.`);

const thirdLetter = fullName[2];
console.log(`The third letter of ${fullName} is ${thirdLetter}.`);

const sixthLetter = fullName[5];
console.log(`The sixth letter of ${fullName} is ${sixthLetter}.`);

const firstD = fullName.indexOf("D");
console.log(`The first "D" in ${fullName} is at index ${firstD}.`);

const lastE = fullName.lastIndexOf("e");
console.log(`The last "e" in ${fullName} is at index ${lastE}.`);


const str1 = " There is     space here  \n  ";
console.log("_"+str1+"_");

const str2 = str1.trim();
console.log("_"+str2+"_");


const firstName = fullName.substring(0, 5);
console.log(firstName);

const lastName = fullName.substring(29);
console.log(lastName);

const middleName = fullName.substring(15, 22);
console.log(middleName);

const wulfric = fullName.substring(14, 22);
console.log(wulfric);

const ian = fullName.substring(25, 28);
console.log(ian);

const bus = fullName.substring(2, 5);
console.log(bus);
