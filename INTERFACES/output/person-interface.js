"use strict";
const personA = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
const personB = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
};
function printPersonInfo(person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age} years old`);
}
printPersonInfo(personA);
printPersonInfo(personB);
