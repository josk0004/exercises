
const firstName = "PEtEr";

const lowerCaseFirstName = firstName.toLowerCase();
const upperCaseThirdChar = lowerCaseFirstName.toUpperCase().charAt(2);
const modifiedFirstName = lowerCaseFirstName.replace(lowerCaseFirstName.charAt(2), upperCaseThirdChar);


console.log(firstName);

console.log(modifiedFirstName);