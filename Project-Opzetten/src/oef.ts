const leeftijdStudent: number = 25;
const achternaam: string = "Jansen";
const isStudent: boolean = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}. 
    Ingeschreven als student is: ${isStudent}`);
    "use strict";

    // ARRAY SEKLINDE VARIABLE YAZIYORUZ.Bu da birbirinin aynisi degerler tasiyan bir array olusturmak demek!
    const dagenVanDeWeek: string[] = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
    console.log(`Vandaag is het ${dagenVanDeWeek[0]}.`);
    
    // Tuple SEKLINDE VARIABLE YAZIYORUZ,BU BIRDEN FARKLI VARIABLA CESIDI ILE BIR DIZI OLUSTURMAK DEMEK!
    const persoonInfo: [number, string] = [30, "Arda"];
    console.log(`Persoon info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
    

    // Enum  YAZIYORUZ;
    enum Windrichting {
        Noord,
        Oost,
        Zuid,
        West
    }
    const huidigeRichting: Windrichting = Windrichting.Noord;
        console.log(`De wind komt uit ${huidigeRichting}.`);//0
        console.log(`De wind komt uit ${Windrichting[huidigeRichting]}.`);//Noord

// ENUM kullanarak 4mevsim yaziyoruz
enum Seasons{
    Winter,
    Lente,
    Zomer,
    Herfst
}
//maak currenSeason variable die
const currentSeason: Seasons = Seasons.Herfst;
console.log(currentSeason);


//ENUM ILE GEZEGENLERI YAZIYORUZ
enum Planets{
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet", //variablein degeri
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"
}
const favorietePlanet: Planets =  Planets.Neptune;
console.log(`Mijn favoriete planet is ${favorietePlanet}`);//burda ${favorietePlanet}=> demek NEPTUNE demek oluyor!
console.log(`Mijn favoriete planet2 is: ${Planets["Neptune"]}`);//Buda 2. yontem


// ANY ve UNKNOWN OZELLIGINI KULLANIYORUZ
let mijnData: any = "Dit kan alles zijn!";
mijnData = 100;  // Dit is geldig met 'any' type

let externeInput: unknown;
externeInput = "Wat je wil intikken."

console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);
