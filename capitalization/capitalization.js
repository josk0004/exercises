

const firstName = "paTrIcK";

const lowerCaseFirstName = firstName.toLowerCase();
const upperCaseFirstChar = lowerCaseFirstName.toUpperCase().charAt(0);
const modifiedFirstName = lowerCaseFirstName.replace(lowerCaseFirstName.charAt(0), upperCaseFirstChar);


console.log(firstName);

console.log(modifiedFirstName);