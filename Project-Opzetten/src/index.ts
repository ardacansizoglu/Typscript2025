const member: boolean = true;
const getallen: number[] = [1, 2, 3];
const namen: string[] = ["Anna", "Bob", "Charlie"];
// ANY
let data: any;
data = 42;           // toegestaan
data = "Hello";      // toegestaan
data = [1, 2, 3];    // toegestaan
//data.myMethod();     // Geen typefout, ook al bestaat deze methode mogelijk niet.

let dataUnknown: unknown;
dataUnknown = 42;           // toegestaan
dataUnknown = "Hello";      // toegestaan
dataUnknown = [1, 2, 3];    // toegestaan
// dataUnknown.myMethod(); // Typefout! TypeScript staat dit niet toe zonder een typecheck.
if (typeof data === "string") {
console.log(data.toUpperCase()); // Nu toegestaan, want we hebben gecontroleerd dat data een string is.
}
//array-achtige structuur waarvan lengte en types van elementen vooraf zijn bepaald
let point: [number, number];

point = [10, 20];   // toegestaan
// point = [10, 20, 30]; // Fout, te veel elementen
//point = ["10", 20];   // Fout, verkeerd type voor het eerste element

let complexTuple: [number, string, boolean] = [1, "one", true];//:  ve = 2noktaya ve esittir e (is) dikkat et! 


//ENUM=>BIRDEN FARKLI VE CESITLI VARIABLA KULLANIYORSAK ENUM COK

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
    }
    
    const today: Days = Days.Friday;
    console.log(today);  // Outputs: 4 (omdat Friday het vijfde item is, beginnend vanaf 0)

    enum Colors {
        Red = "#FF0000",
        Green = "#00FF00",
        Blue = "#0000FF"
        }
        
        const favoriteColor: Colors = Colors.Green;
        console.log(favoriteColor);  // Outputs: "#00FF00"
        
//FUNCTIONS
function begroet(naam: string): string {
    return `Hallo, ${naam}!`;
}
console.log(begroet("Arda"));  // Outputs: "Hallo, Arda!"

//om aan te geven dat een functie geen waarde retourneert.
function logMessage(message: string): void {
    console.log(message);
}
logMessage('Hi');

function begroet2(naam: string, taal: string = "Nederlands"): string {
    return `Hallo, ${naam}! (${taal})`;
}
//optionele parameter taal indien die niet gedefinieerd is, is die automatisch “Nederlands”
//De gecompileerde versie is:
function begroet3(naam: string, taal?: string): string {
    return `Hallo, ${naam}! (${taal})`;
}
console.log(begroet3("Arda"));  // Outputs: "Hallo, Arda! (undefined)"
console.log(begroet3("Arda", "Turks"));  // Outputs: "Hallo, Arda! (Turks)"

