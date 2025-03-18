"use strict";
const rectangle2 = {
    calculateArea2(width, height) {
        return width * height;
    },
    calculatePerimeter2(width, height) {
        return 2 * (width + height);
    },
};
const triangle2 = {
    calculateArea2(width, height) {
        return (1 / 2) * width * height; // Oppervlakte van de driehoek
    },
    calculatePerimeter2(width, height) {
        return width + height + Math.sqrt(width ** 2 + height ** 2); // Omtrek van de driehoek
    },
};
console.log("Rechthoek oppervlakte:", rectangle2.calculateArea2(10, 20));
console.log("Rechthoek omtrek:", rectangle2.calculatePerimeter2(10, 20));
console.log("Driehoek oppervlakte:", triangle2.calculateArea2(5, 8));
console.log("Driehoek omtrek:", triangle2.calculatePerimeter2(5, 8));
