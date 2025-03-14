"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person("Alice");
console.log(person1.name);
// Toegang tot de 'name'-eigenschap van buiten de klasse
person1.sayHello();
// Oproep van de 'sayHello'-methode van buiten de klasse
