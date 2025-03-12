"use strict";
//CALCULATE OEFENING
const calculate = (x, y, operator) => {
    if (operator === "subtract") { // ? isareti istege bagli oldugunu gosterir
        return x - y; //// Burada iki sayı arasındaki fark döndürülür.
    }
    return x + y; //// Diğer durumlarda (veya operator verilmemişse) iki sayı arasındaki toplam döndürülür.
};
console.log(calculate(4, 6));
console.log(calculate(8, 10));
console.log(calculate(9, 8, "substract"));
// INTRODUCE OEFENING
const introduce = (name, age = 30) => `Hello my name is ${name} and I am ${age} years old`;
//intro fonks=> şablon dizelerini (template literals) kullanarak bir selamlama mesajı döndürüyor:
console.log(introduce("John")); // age parametresini belirtmedigim icin yukardakini kullandi
console.log(introduce("Elisabeth", 95)); //burda age=parameter=95 olmasini soyluyorum!
// USER OEFENING
//user= object
const user = {
    name: "Jane",
    age: 85,
    describe() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(user.describe());
//# sourceMappingURL=calculate.js.map