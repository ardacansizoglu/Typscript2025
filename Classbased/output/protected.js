"use strict";
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    startEngine() {
        console.log(`${this.brand} engine started.`);
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); //constructor van bovenliggende klasse (Vehicle) wordt aangeroepen en brand wordt opgestuurd
        this.model = model;
    }
    drive() {
        this.startEngine(); // Toegang tot de 'startEngine'-methode via overerving
        console.log(`Driving the ${this.brand} ${this.model}.`);
    }
}
const myCar = new Car("Toyota", "Camry");
myCar.drive();
//console.log(myCar.brand); // Fout: Eigenschap 'brand' is beschermd en niet toegankelijk van buiten de klasse
// encapsulation
//     const naam="jan";
//     const plaats= document.getElementById.div;
//     function doeiets(ontvangenNaam, waar){
//         console.log(ontvangenNaam);
//         return "Hallo" + ontvangenNaam;
// }
//     const returnWaarde = doeiets(naam,plaats)
//     plaats.innerHtml = returnWaarde;
