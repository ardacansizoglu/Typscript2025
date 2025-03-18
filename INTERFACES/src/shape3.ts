    interface Shape3 {
        calculateArea(): number;
        calculatePerimeter(): number;
    }
    class Circle implements Shape3 {
        constructor(private radius: number) { }
    
        calculateArea(): number {
            return Math.PI * this.radius * this.radius;//berekende omtrek(cevresini)
        }
    
        calculatePerimeter(): number {
            return 2 * Math.PI * this.radius;
        }
    }
//eerste keuze een shape!RECTANGLE =>width*height
    class Rectangle implements Shape3 {
        constructor(private width: number, private height: number) { }
    
        calculateArea(): number {
            return this.width * this.height;
        }
        calculatePerimeter(): number {
            return 2 * (this.width + this.height);
        }
    }
//Triangle

    class Triangle implements Shape3 {
        constructor(private base: number, private height: number, private side1: number, private side2: number, private side3: number) { }
    
        calculateArea(): number {
            return 0.5 * this.base * this.height;
        }
        calculatePerimeter(): number {
            return this.side1 + this.side2 + this.side3;
        }
}
    const myCircle = new Circle(5); // Een cirkel met straal 5
    console.log("Oppervlakte:", myCircle.calculateArea()); // Oppervlakte: 78.53981633974483
    console.log("Omtrek:", myCircle.calculatePerimeter()); // Omtrek: 31.41592653589793

    // Gebruik de klassen
     const myTriangle = new Triangle(4, 5, 3, 4, 5); // Een driehoek met basis 4, hoogte 5 en zijden 3, 4 en 5
    console.log("Driehoek - Oppervlakte:", myTriangle.calculateArea()); // Driehoek - Oppervlakte: 10
    console.log("Driehoek - Omtrek:", myTriangle.calculatePerimeter()); // Driehoek - Omtrek: 12

    const myRectangle = new Rectangle(6, 8); // Een rechthoek met breedte 6 en hoogte 8
    console.log("Rechthoek - Oppervlakte:", myRectangle.calculateArea()); // Rechthoek - Oppervlakte: 48
    console.log("Rechthoek - Omtrek:", myRectangle.calculatePerimeter()); // Rechthoek - Omtrek: 28


        
    