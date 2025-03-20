class Logger {            // uygulamanın her yerinde kullanılabilecek bir singleton yapıdadır.
    private static instance: Logger; //bu sinifin tekbir ornegini tutmak icin kullanilan statikm bir alan

    private constructor() {}//private olarak tanimlandi,bu sayede Logger sinifinin disindan yeni bir ornek olusTURULAMAZ!!

    public static getInstance(): Logger {  //getInstance=>classin tek ornegini donduren bir metot
        if (!Logger.instance){             //Eğer Logger.instance henüz oluşturulmamışsa, yeni bir Logger oluşturulur ve saklanır.
            Logger.instance = new Logger();
        }
        return Logger.instance;

    }
                                        //void =>method,herhangi bir değer döndürmez.
    public log(message:string): void {  // log()method,methode voegt een tijdstempel toe en logt het bericht naar de console.
        const timestamp = new Date().toISOString();//=>new Date=>Yeni bir tarih nesnesi oluşturur (şu anki tarih ve saat).
        console.log(`${timestamp} ${message}`);  //.toISOString=> Tarih nesnesini ISO 8601 formatında bir string'e dönüştürür.
    }
}

class Users {         //users klasse=> gebruikt de Logger Singleton en 
                    // logt activiteiten zoals het aanmaken van een gebruiker en het wijzigen van de naam.
    private logger: Logger = Logger.getInstance();
    private name: string;

    constructor (name: string) {
        this.name = name;
        this.logger.log(`Een nieuwe gebruiker met de naam ${this.name} is aangemaakt`);
    }
    public setName(newName: string): void {
        const oldName = this.name;
        this.name = newName;
        this.logger.log(`De gebruikersnaam is veranderd van ${oldName} naar ${this.name}.`);
    }
}

//=>> Test
const users1 = new Users("John Doe");
users1.setName("Jane Doe");


