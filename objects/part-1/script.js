const student1 = {
    firstName: "Harry",
    lastName: "Potter",
};

const student2 = {
    firstName: "Harry",
    lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 === student2) {
    console.log("The two students are the same.");
} else {
    console.log("The two students are different.");
}