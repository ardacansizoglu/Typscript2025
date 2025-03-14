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
