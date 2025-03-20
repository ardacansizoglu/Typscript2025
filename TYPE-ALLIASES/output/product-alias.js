"use strict";
// type=> ürünlerinizi organize etmek ve her ürün için tip güvenliği sağlamak amacıyla kullanılır. 
//  Type ozelligi=>TypeScript'in önemli bir özelliğidir ve hataları daha kolay tespit etmenizi sağlar.
// Gegevens van elke producten,apart scrijven zoals object!!
//burda her product yukardaki type ozelliklerine sahip
const products = [
    {
        name: "Product A",
        price: 19.99,
        description: "Dit is product A.",
    },
    {
        name: "Product B",
        price: 29.99,
        description: "Dit is product B.",
    },
];
// Functie om producten op de console weer te geven
//   
function displayProducts(products) {
    products.forEach((product) => {
        console.log(`Naam: ${product.name}`);
        console.log(`Prijs: ${product.price}`);
        console.log(`Beschrijving: ${product.description}`);
    });
}
// Roep de functie aan met de lijst van producten
displayProducts(products);
