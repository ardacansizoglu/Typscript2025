class Auto2 {
    merk: string;
    model: string;
    bouwjaar: number;

    constructor(merk: string, model: string, bouwjaar: number) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }

    get beschrijving(): string {
        return `${this.merk} ${this.model}`;
    }

    set jaar(value: number) {
        if (value > 2000) {
            this.bouwjaar = value;
        } else {
            console.log("Voer een geldig bouwjaar in.");
        }
    }
}
console.log(mijnAuto); // Outputs: Toyota Corolla
mijnAuto.bouwjaar = 1999; // Outputs: Voer een geldig bouwjaar in.


