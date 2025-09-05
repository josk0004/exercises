
const fullName = "Peter Heronimous Lind";

const firstSpaceIndex = fullName.indexOf(" ");
const lastSpaceIndex = fullName.lastIndexOf(" ");

const firstName = fullName.slice(0, firstSpaceIndex);
const middleName = fullName.slice(firstSpaceIndex + 1, lastSpaceIndex);
const lastName = fullName.slice(lastSpaceIndex + 1);
console.log(firstName);
console.log(middleName);
console.log(lastName);

const fullName2 = "Jonathan Skadhauge Jensen";

const firstSpaceIndex2 = fullName2.indexOf(" ");
const lastSpaceIndex2 = fullName2.lastIndexOf(" ");

const firstName2 = fullName2.slice(0, firstSpaceIndex2);
const middleName2 = fullName2.slice(firstSpaceIndex2 + 1, lastSpaceIndex2);
const lastName2 = fullName2.slice(lastSpaceIndex2 + 1);
console.log(firstName2);
console.log(middleName2);
console.log(lastName2);


const fullName3 = "Albus Percival Wulfric Brian Dumbledore";

const firstSpaceIndex3 = fullName3.indexOf(" ");
const lastSpaceIndex3 = fullName3.lastIndexOf(" ");

const firstName3 = fullName3.slice(0, firstSpaceIndex3);
const middleName3 = fullName3.slice(firstSpaceIndex3 + 1, lastSpaceIndex3);
const lastName3 = fullName3.slice(lastSpaceIndex3 + 1);
console.log(firstName3);
console.log(middleName3);
console.log(lastName3);