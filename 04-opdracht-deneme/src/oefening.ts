interface Products  {
    naam: string;
    prijs: number;
    beschrijving: string;
    details?: string;
    reviews?: string[];
} ;


const product: Products = {
    naam: 'Schoenen',
    prijs: 50,
    beschrijving: 'Mooie schoenen',
    details: 'Maat 42',
    reviews: ['Mooie schoenen', 'Zitten lekker'] // Doğru yazım
};

console.log(product.naam); // Schoenen
console.log(product.prijs); // 50
console.log(product.beschrijving); // Mooie schoenen
console.log(product.details); // Maat 42
console.log(product.reviews); // [ 'Mooie schoenen', 'Zitten lekker' ]

