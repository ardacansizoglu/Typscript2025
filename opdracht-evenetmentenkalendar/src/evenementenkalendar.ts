
//Defineer de interface voor CalernderEvent

interface CalendarEventInterface {
    id: number, 
    title: string, 
    date: string, 
    description: string, 
    attendees: number

}
//defineer een type alias voor verzameling datum
type  CalendarEventAlias = CalendarEventInterface[];
let nextId = 0;
const events: CalendarEventAlias = [];


//FUNCTIONS!!
function addEvent(title: string, date: string, description: string, attendees: number): CalendarEventInterface {
    const newEvent: CalendarEventInterface = {
      id: nextId++,
      title,
      date,
      description,
      attendees,
    };
    events.push(newEvent);
    return newEvent;
  }

function removeEvent(id: number): boolean {
    const initialLength = events.length;
    const index = events.findIndex(event => event.id === id);

    if (index !== -1) {
      events.splice(index, 1);
      return true;
    }

    return false;
}


// De functie returnt ofwel het gevonden event ofwel undefined.
function findEventByTitle(title: string):  CalendarEventInterface | undefined {
  return events.find(event => event.title.toLowerCase().includes(title.toLowerCase()))
}

function searchEvents(keyword: string): CalendarEventAlias {
  const lowerCaseKeyword = keyword.toLowerCase();

  return events.filter(event =>
    event.title.toLowerCase().includes(lowerCaseKeyword) ||
    event.description.toLowerCase().includes(lowerCaseKeyword)
  );
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

// Zoeken naar evenementen "TypeScript" in de titel
console.log("\nZoekresultaten voor 'TypeScript':");
const typescriptResults = searchEvents("TypeScript");
typescriptResults.forEach(event => console.log(event.title));

// Zoeken naar evenementen met "over" in de titel 
console.log("\nZoekresultaten voor 'over':");
const overResults = searchEvents("over");
overResults.forEach(event => console.log(event.title));

// Evenement verwijderen
console.log("\nEvenement 1 verwijderd:", removeEvent(1));

// Alle evenementen weergeven!!
console.log("Huidige Evenementen:", events);


