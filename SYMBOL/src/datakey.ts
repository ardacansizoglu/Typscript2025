const dataKey = Symbol('dataKey');

class HiddenData {
//sadece bu class icnde ulasilabilir
    private [dataKey] : string;


//constructor methodu=>HiddenData classinda yeni OBJECT olusturunca cagrilir
    constructor(data: string) {
        this[dataKey] = data;
    }

//implement/uygulamak  de 'getData' methode
    getData(): string {
        return this[dataKey];
    }

    //implementeer de  'setData' methode
    setData(newData: string): void{
        this[dataKey] = newData;
    
    }
}
// Testcode
const hidden = new HiddenData("Initiële verborgen data");
console.log(hidden.getData());  // Zal "Initiële verborgen data" afdrukken
hidden.setData("Nieuwe verborgen data");
console.log(hidden.getData());  // Zal "Nieuwe verborgen data" afdrukken


