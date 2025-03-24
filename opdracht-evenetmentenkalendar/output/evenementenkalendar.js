"use strict";
// Deze zal gebruikt worden om de id in te vullen. En moet dus ook telkens verhoogd worden.
// Bu, kimliği doldurmak için kullanılacaktır. Ve bu nedenle her seferinde arttırılmalıdır.
//nextId =>adındaki değişken, her yeni etkinliğe benzersiz bir id sağlamak için kullanılır.
let nextId = 0;
//const events=>(değişmez) olan events adında bir diziyi tanımlar.
//CalendarEventAlias, daha önce tanımlanmış bir türdür (bir alias) ve 
//Bir CalendarEventInterface OBJECT dizisidir.
//Yani,events dizesi yalnızca etkinlikleri (CalendarEventInterface türündeki nesneleri) içerebilir.
const events = [];
//FUNCTIONS!!
function addEvent(title, date, description, attendees) {
    const newEvent = {
        id: nextId++,
        title,
        date,
        description,
        attendees,
    };
    events.push(newEvent);
    return newEvent;
}
function removeEvent(id) {
    const initialLength = events.length;
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    }
    return false;
}
// De functie returnt ofwel het gevonden event ofwel undefined.
function findEventByTitle(title) {
    return events.find(event => event.title.toLowerCase().includes(title.toLowerCase()));
}
function searchEvents(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    return events.filter(event => event.title.toLowerCase().includes(lowerCaseKeyword) ||
        event.description.toLowerCase().includes(lowerCaseKeyword));
}
// Evenementen toevoegen
addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over Typescript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JS", 200);
//Event zoeken op titel 
const workshopEvent = findEventByTitle("Workshop");
console.log("Evenementen met titel 'Workshop';", workshopEvent);
//zoek naar evenementen met 'workshop' in de titel
console.log("\nZoekresultaten voor 'workshop':");
const workshopResults = searchEvents("workshop");
workshopResults.forEach(event => console.log(event.title));
// Zoeken naar evenementen met "TypeScript" in de titel of beschrijving
console.log("\nZoekresultaten voor 'TypeScript':");
const typescriptResults = searchEvents("TypeScript");
typescriptResults.forEach(event => console.log(event.title));
// Zoeken naar evenementen met "over" in de titel of beschrijving
console.log("\nZoekresultaten voor 'over':");
const overResults = searchEvents("over");
overResults.forEach(event => console.log(event.title));
// Evenement verwijderen
console.log("\nEvenement 1 verwijderd:", removeEvent(1));
// Alle evenementen weergeven
console.log("Huidige Evenementen:", events);
