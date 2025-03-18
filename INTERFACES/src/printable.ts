interface Printable {
    print(): void;
}

class Doc implements Printable {
    constructor(private content: string) { }

    print():void {
        console.log(this.content);//this: Bu, şu anda metodu çağıran sınıf örneğini (instance) ifade eder.
    }
}

const myDocument = new Doc("Dit is een document om af te drukken.");
myDocument.print();


