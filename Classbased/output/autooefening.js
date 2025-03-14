"use strict";
class Auto2 {
    constructor(merk, model, bouwjaar) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    get beschrijving() {
        return `${this.merk} ${this.model}`;
    }
    set jaar(value) {
        if (value > 2000) {
            this.bouwjaar = value;
        }
        else {
            console.log("Voer een geldig bouwjaar in.");
        }
    }
}
console.log(mijnAuto); // Outputs: Toyota Corolla
mijnAuto.bouwjaar = 1999; // Outputs: Voer een geldig bouwjaar in.
