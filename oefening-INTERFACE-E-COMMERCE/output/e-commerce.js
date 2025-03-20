"use strict";
// Maak klassen voor verschillende productcategorieën
class Electronics {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
class Clothing {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
class Books {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
// Maak productobjecten
const electronics1 = new Electronics(1, "Smartphone", 699.99, "Latest smartphone with high-resolution camera", 10); // 10% korting
const electronics2 = new Electronics(2, "Laptop", 1099.99, "Powerful laptop for work and gaming");
const clothing1 = new Clothing(3, "T-shirt", 19.99, "Comfortable cotton T-shirt");
const clothing2 = new Clothing(4, "Jeans", 49.99, "Classic denim jeans", 20); // 20% korting
const book1 = new Books(5, "JavaScript Basics", 29.99, "Introduction to JavaScript programming", 15); // 15% korting
const book2 = new Books(6, "The Great Gatsby", 9.99, "Classic novel by F. Scott Fitzgerald");
// Schrijf de 'displayProductInfo'-functie
function displayProductInfo(product) {
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Description: ${product.description}`);
    if (product.discountPercentage !== undefined) {
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    }
    console.log("--------------");
}
// Roep de functie op om productinformatie af te drukken
displayProductInfo(electronics1);
displayProductInfo(electronics2);
displayProductInfo(clothing1);
displayProductInfo(clothing2);
displayProductInfo(book1);
displayProductInfo(book2);
