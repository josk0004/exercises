const people = ["Harry", "Hermione", "Ron", "Neville"];

function testParms(a, b, c, d) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}

people.forEach(testParms);