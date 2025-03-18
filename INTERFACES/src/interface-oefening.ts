interface Shape2 {
    calculateArea2(width: number, height: number): number;
    calculatePerimeter2(width: number, height: number): number;
}

const rectangle2: Shape2 = {
    calculateArea2(width: number, height: number): number {
        return width * height; 
    },
    calculatePerimeter2(width: number, height: number): number {
        return 2 * (width + height); 
    },
}

const triangle2: Shape2 = {  //// Object dat voldoet aan Shape-interface voor driehoek
    calculateArea2(width: number, height: number): number {
        return (1 / 2) * width * height; // Oppervlakte van de driehoek

    },
    calculatePerimeter2(width: number, height: number): number {
        return width + height + Math.sqrt(width ** 2 + height ** 2); // Omtrek van de driehoek

    },
};
console.log("Rechthoek oppervlakte:", rectangle2.calculateArea2(10, 20));
console.log("Rechthoek omtrek:", rectangle2.calculatePerimeter2(10, 20));
console.log("Driehoek oppervlakte:", triangle2.calculateArea2(5, 8));
console.log("Driehoek omtrek:", triangle2.calculatePerimeter2(5, 8));



