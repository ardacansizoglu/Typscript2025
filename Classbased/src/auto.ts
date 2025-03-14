class Auto {
    merk: string;
    model: string;
    bouwjaar: number;

    constructor(
        merk: string, 
        model: string, 
        bouwjaar: number) 
    {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    toonDetails(){ //method constructor altinda olmali!!
        console.log(`${this.merk} ${this.model} (Bouwjaar: ${this.bouwjaar})`);
    
    }
}
console.log(Auto);

const mijnAuto = new Auto ("Toyota", "Corolla",2020);
const haarAuto =  new Auto ("Honda", "Civic", 2024);


console.log(mijnAuto.merk);//ilk olarak mijnAuto yu yazdiriyor


mijnAuto.bouwjaar = 2020; //veranderde bouwjaar van mijnAUTO
console.log(mijnAuto.bouwjaar);




mijnAuto.toonDetails();




