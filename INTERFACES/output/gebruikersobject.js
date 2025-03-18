"use strict";
const user1 = {
    id: 1,
    username: "Jan",
    email: "Jan@email.com"
};
// Object dat voldoet aan Shape-interface voor rechthoek
const rectangle = {
    calculateArea() {
        return 10 * 20; // Oppervlakte van de rechthoek
    },
    calculatePerimeter() {
        return 2 * (10 + 20); // Omtrek van de rechthoek
    },
};
// Object dat voldoet aan Shape-interface voor driehoek
const triangle = {
    calculateArea() {
        return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
    },
    calculatePerimeter() {
        return 5 + 8 + Math.sqrt(5 ** 2 + 8 ** 2); // Omtrek van de driehoek
    },
};
console.log("Rechthoek oppervlakte:", rectangle.calculateArea());
console.log("Rechthoek omtrek:", rectangle.calculatePerimeter());
console.log("Driehoek oppervlakte:", triangle.calculateArea());
console.log("Driehoek omtrek:", triangle.calculatePerimeter());
// Object dat NIET voldoet aan de Shape-interface voor een vierkant
// const square: Shape = {
//     calculateArea(): number {
//         return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
//     }
// };
