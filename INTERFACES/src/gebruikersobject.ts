interface User {
    id: number;
    username: string;
    email: string;
}
const user1:User = {
    id : 1,
    username : "Jan",
    email : "Jan@email.com"
}

interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
}

// Object dat voldoet aan Shape-interface voor rechthoek
const rectangle: Shape = {
    calculateArea(): number {
        return 10 * 20; // Oppervlakte van de rechthoek
    },
    calculatePerimeter(): number {
        return 2 * (10 + 20); // Omtrek van de rechthoek
    },
};

// Object dat voldoet aan Shape-interface voor driehoek
const triangle: Shape = {
    calculateArea(): number {
        return (1 / 2) * 5 * 8; // Oppervlakte van de driehoek
    },
    calculatePerimeter(): number {
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


