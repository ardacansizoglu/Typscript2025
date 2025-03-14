class Student {
    private _naam: string;   //properties
    private _studentNummer: string;
    private _cijfers: number[] = [];


    constructor(naam: string, studentNummer: string) {
        this._naam = naam.trim();  //trim=>Ruimt onnodige ruimtes op.
        this._studentNummer = studentNummer;
    }

    public get getNaam():string {
        return this._naam;
    }
    public get getMiddelde():number {
        if (this._cijfers.length ===0)
            return 0;
        const totaal = this._cijfers.reduce((accumulator, current) => accumulator + current, 0); //reduce fonksiyonu
        return parseFloat((totaal / this._cijfers.length).toFixed(2)); //2sayiyi topluyor  //acc and current variable
    }

    public set setNaam(value: string) { //
        if (value.trim() !== '') {
            this._naam = value;
        } else {
            console.log("niet leeg zijn.");
        }
    }
    public voegCijferToe(cijfer: number): void { //void=>kan een bericht afdrukken/de waarde van een variabele wijzigen/
                                                // //void=>mesaj yazdırabilir/ bir değişkenin değerini değiştirebilir/
        this._cijfers.push(cijfer);
    }
}



    const student1 = new Student("Martin", "123456");
    const student2 = new Student("Arda", "123456");
    // console.log(student1._naam);

    student1.voegCijferToe(6);

    console.log(`${student1.getNaam}'s gemiddelde cijfer is: ${student1.getMiddelde}`);

    student1.setNaam = "Arda";
    console.log(`De nieuwe naam van student1 is: ${student1.getNaam}`);




        // Begin met één teken uit elke categorie
        let password = "";
        password += letters.charAt(Math.floor(Math.random() * letters.length));//letters.charAt() fonksiyonu,belirtilen indeks numarasındaki karakteri döndürür.
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));//Math.random() fonksiyonu 0 ile 1 arasında rastgele bir sayı üretir.
                                                                                //Math.floor() fonksiyonu bu rastgele sayıyı aşağı yuvarlar ve tam sayı haline getirir.
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));//specialChars dizisinden (özel karakterler) rastgele bir karakter seçer ve password değişkenine ekler.
                                                                                    
        // Combineer alle tekens voor de rest van het wachtwoord
        const allChars = letters + numbers + specialChars;
        
        // Genereer een willekeurig aantal tekens tussen 5 en 10
        const additionalLength = Math.floor(Math.random() * 6) + 5; // 5 to 10
        
        // Voeg de extra tekens toe
        for (let i = 0; i < additionalLength; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        // Shuffle het wachtwoord (Fisher-Yates algoritme)
        const passwordArray = password.split('');
        for (let i = passwordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
        }

        return passwordArray.join('');
    }
}

// Maak twee User-objecten aan
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Smith", "jane.smith@example.com");

// Testen
console.log("Log user info:");
user1.showUserInfo();
console.log("----------");

console.log("Log user info:");
user2.showUserInfo();
console.log("----------");

console.log("getFullName");
console.log(user1.getFullName());
console.log("----------");

user1.resetPassword();
console.log("----------");

user2.setPassword("Secure1@Password");
console.log("----------");

