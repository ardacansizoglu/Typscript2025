//interface tanımlanıyor ve bu Dish adındaki arayüz, belirli bir OBJECTIN sahip olması 
// gerekenEIGENSCHAPPEN tanımlamak için kullanılıyor. TypeScript'teki interface,
//  bir tür "Sjabloon" görevi görür ve nesnelerin belirli bir yapıya uymasını sağlar.

//Als u gegevens invoert die niet voldoen aan de Dish-structuur, 
// geeft TypeScript dit als een fout weer.

interface Dish {
    name: string;
    price: number;
    quantityOrdered: number;
    discountPercentage?: number;
    quantityForDiscount?: number;
}

class MainCourse implements Dish { 
    name: string;
    price: number;
    quantityOrdered: number;
    discountPercentage?: number;
    quantityForDiscount?: number;
    
    constructor(  //bu parametreler const icinde ve class in ozelliklerini baslatir
        name: string,
        price: number,
        quantityOrdered: number,
        discountPercentage?: number,
        quantityForDiscount?: number
    ) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}

class Dessert implements Dish {
    name: string;
    price: number;
    quantityOrdered: number;
    discountPercentage?: number;
    quantityForDiscount?: number;

    constructor(
        name: string,
        price: number,
        quantityOrdered: number,
        discountPercentage?: number,
        quantityForDiscount?: number
    ) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}

function calculateTotalPrice(dishes: Dish[]): number { //die een array van gerechten accepteert en de totale prijs berekent.
    let totalPrice = 0; //baslangicta yemek fiyati=>0

    
    dishes.forEach((dish) => {
        let pricePerGerecht = dish.price;
        let discountApplied = false;
        
        if (
            // discount
            dish.discountPercentage !== undefined &&
            dish.quantityForDiscount !== undefined &&
            dish.quantityOrdered >= dish.quantityForDiscount
        ) {
            // Apply discount!
            pricePerGerecht = pricePerGerecht * (1 - dish.discountPercentage / 100);
            discountApplied = true;
        }
        
        // Calculate!! 
        const dishTotal = pricePerGerecht * dish.quantityOrdered;
        totalPrice += dishTotal;
        
        // Display dish information
        console.log(`${dish.name} - ${dish.price.toFixed(2)}€`);
        
        if (discountApplied) {
            console.log(`Discount of ${dish.discountPercentage}% applied on ${dish.name}`);
        }
        
        console.log(`${pricePerGerecht.toFixed(2)}€ * ${dish.quantityOrdered} ordered = ${dishTotal.toFixed(2)}`);
        console.log('---');
    });
    
    console.log(`Total price: ${totalPrice.toFixed(2)}€`);
    return totalPrice;
}


//Voorbeeldgebruik:
const steak = new MainCourse('Steak', 18.99, 4, 10, 2); 
const chickenCurry = new MainCourse('Chicken Curry', 12.99, 1);

const chocolateCake = new Dessert('Chocolate Cake', 6.99, 4, 15, 3);
const bananaMilkshake = new Dessert('Banana Milkshake', 4.99, 1);

// []=>all dishes
const allDishes: Dish[] = [steak, chickenCurry, chocolateCake, bananaMilkshake];


calculateTotalPrice(allDishes);
