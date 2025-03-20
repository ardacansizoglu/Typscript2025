"use strict";
class Logger {
    constructor() { } //private olarak tanimlandi,bu sayede Logger sinifinin disindan yeni bir ornek olusTURULAMAZ!!
    static getInstance() {
        if (!Logger.instance) { //Eğer Logger.instance henüz oluşturulmamışsa, yeni bir Logger oluşturulur ve saklanır.
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    //void =>method,herhangi bir değer döndürmez.
    log(message) {
        const timestamp = new Date().toISOString(); //=>new Date=>Yeni bir tarih nesnesi oluşturur (şu anki tarih ve saat).
        console.log(`${timestamp} ${message}`); //.toISOString=> Tarih nesnesini ISO 8601 formatında bir string'e dönüştürür.
    }
}
class Users {
    constructor(name) {
        // logt activiteiten zoals het aanmaken van een gebruiker en het wijzigen van de naam.
        this.logger = Logger.getInstance();
        this.name = name;
        this.logger.log(`Een nieuwe gebruiker met de naam ${this.name} is aangemaakt`);
    }
    setName(newName) {
        const oldName = this.name;
        this.name = newName;
        this.logger.log(`De gebruikersnaam is veranderd van ${oldName} naar ${this.name}.`);
    }
}
//=>> Test
const users1 = new Users("John Doe");
users1.setName("Jane Doe");
