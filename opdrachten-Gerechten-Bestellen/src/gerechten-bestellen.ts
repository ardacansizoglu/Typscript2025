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

function calculateTotalPrice(dishes: Dish[]):number //die een array van gerechten accepteert en de totale prijs berekent.
       let totalPrice = 0 ;    //baslangicta yemek fiyati=>0  //Dish[]:yemek listesi
    
    dishes.forEach((dish) => {
        let pricePerGerecht = dish.price;
        if(                       //dit is voor discount
            dish.discountPercentage &&
        )
    }
}

