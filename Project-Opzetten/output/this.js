"use strict";
let naam = "arda";
const persoon = {
    naam: "John",
    zegHallo: function () {
        console.log(`Hallo, mijn naam is ${this.naam}`);
        // Binnen een gewone (niet-arrow) functie wordt een nieuwe waarde van 'this' gecreëerd:
        function innerFunctie() {
            console.log(`Binnen de innerFunctie, mijn naam is ${this.naam}`);
        }
        innerFunctie();
         // Binnen een arrow-functie wordt 'this' uit de omliggende scope (zegHallo in dit geval) genomen:
        const innerArrowFunctie = () => {
        console.log(`Binnen de innerArrowFunctie, mijn naam is ${this.naam}`);
    }
    innerArrowFunctie();
}
}

persoon.zegHallo();
/*
Hallo, mijn naam is John
Binnen de innerFunctie, mijn naam is undefined
Binnen de innerArrowFunctie, mijn naam is John
*/

