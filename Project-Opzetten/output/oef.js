"use strict";
const leeftijdStudent = 25;
const achternaam = "Jansen";
const isStudent = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}. 
    Ingeschreven als student is: ${isStudent}`);
"use strict";
// ARRAY SEKLINDE VARIABLE YAZIYORUZ.Bu da birbirinin aynisi degerler tasiyan bir array olusturmak demek!
const dagenVanDeWeek = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
console.log(`Vandaag is het ${dagenVanDeWeek[0]}.`);
// Tuple SEKLINDE VARIABLE YAZIYORUZ,BU BIRDEN FARKLI VARIABLA CESIDI ILE BIR DIZI OLUSTURMAK DEMEK!
const persoonInfo = [30, "Arda"];
console.log(`Persoon info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}.`);
// Enum  YAZIYORUZ;
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
const huidigeRichting = Windrichting.Noord;
console.log(`De wind komt uit ${huidigeRichting}.`); //0
console.log(`De wind komt uit ${Windrichting[huidigeRichting]}.`); //Noord
// ENUM kullanarak 4mevsim yaziyoruz
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Winter"] = 0] = "Winter";
    Seasons[Seasons["Lente"] = 1] = "Lente";
    Seasons[Seasons["Zomer"] = 2] = "Zomer";
    Seasons[Seasons["Herfst"] = 3] = "Herfst";
})(Seasons || (Seasons = {}));
//maak currenSeason variable die
const currentSeason = Seasons.Herfst;
console.log(currentSeason);
//ENUM ILE GEZEGENLERI YAZIYORUZ
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Small and close to the Sun";
    Planets["Venus"] = "Similar in size to Earth, but very hot";
    Planets["Earth"] = "Our home planet";
    Planets["Mars"] = "The red planet";
    Planets["Jupiter"] = "The largest planet";
    Planets["Saturn"] = "Known for its rings";
    Planets["Uranus"] = "An ice giant";
    Planets["Neptune"] = "A distant blue world";
})(Planets || (Planets = {}));
const favorietePlanet = Planets.Neptune;
console.log(`Mijn favoriete planet is ${favorietePlanet}`); //burda ${favorietePlanet}=> demek NEPTUNE demek oluyor!
console.log(`Mijn favoriete planet2 is: ${Planets["Neptune"]}`); //Buda 2. yontem
// ANY ve UNKNOWN OZELLIGINI KULLANIYORUZ
let mijnData = "Dit kan alles zijn!";
mijnData = 100; // Dit is geldig met 'any' type
let externeInput;
externeInput = "Wat je wil intikken.";
console.log(`Mijn data: ${mijnData}`);
console.log(`Externe input: ${externeInput}`);
