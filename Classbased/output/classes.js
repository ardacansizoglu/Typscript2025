"use strict";
class Animal {
    // Constructor
    constructor(name) {
        this.name = name;
    }
    // GET=>
    get animalName() {
        return `De naam is: ${this.name}`;
    }
    // SET=>
    set animalNameInstellen(value) {
        if (value.length > 0) {
            this.name = value;
        }
        else {
            console.log("Voer een geldige naam in.");
        }
    }
    // Methode
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
const myAnimal = new Animal("Dog");
myAnimal.makeSound();
console.log(myAnimal.name);
// Roep de makeSound-methode aan
myAnimal.name = "MyDog";
// console.log(myAnimal.name);// Geeft "MyDog" weer
console.log(myAnimal.animalName);
myAnimal.animalNameInstellen = ""; //burayi bos birakirsan=> VOer een geldige naam cikar!
console.log(myAnimal.animalName);
class Dier {
    constructor(naam) {
        this.naam = naam;
    }
    maakGeluid() {
        return `${this.naam} maakt een geluid.`;
    }
}
class Hond extends Dier {
    maakGeluid() {
        return `${this.naam} blaft!`;
    }
}
const mijnHond = new Hond("Rex");
console.log(mijnHond.maakGeluid()); // Output: "Rex blaft!"
