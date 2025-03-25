//Defineer de interface voor CalernderEvent
// CalendarEventInterface=> OBJESININ sahip olması gereken özellikleri belirtir:
interface CalendarEventInterface {
  id: number, 
  title: string, 
  date: string, 
  description: string, 
  attendees: number
}


//defineer een type alias voor verzameling datum
// birden fazla CalendarEventInterface OBJESINI barındıran bir ARRAYI temsil eder. Yani, 
// type=> sayesinde bir etkinlikler listesiyle çalışırken daha kısa ve net bir şekilde kod yazabilirsiniz.
//type alias => Kodu tekrar tekrar yazmaktan kurtarır:
//Calenderevent Interface in =>type CalendarEventAlias olarak tanımlanması, 
// o ARRAYIN yalnızca CalendarEventInterface türündeki OBJELERI içerebileceği anlamına gelir.
type  CalendarEventAlias = CalendarEventInterface[];



// Deze zal gebruikt worden om de id in te vullen. En moet dus ook telkens verhoogd worden.
// yeni bir etkinlik oluşturulduğunda benzersiz bir kimlik vermek için kullanılır.
// NEXTiD=> Her yeni etkinlik eklenirken bu değer otomatik olarak bir artırılır.
let nextId = 0;



//const events=>(değişmez) olan events adında bir diziyi tanımlar.
//CalendarEventAlias, daha önce tanımlanmış bir türdür (bir alias) ve 
//Bir CalendarEventInterface OBJECT dizisidir.
//Yani,events dizesi yalnızca etkinlikleri (CalendarEventInterface türündeki nesneleri) içerebilir.
//Bu ARRAY, eklenen tüm etkinlikleri depolamak için kullanılır.
const events: CalendarEventAlias = [];

//FUNCTIONS!!
function addEvent(title: string, date: string, description: string, attendees: number): CalendarEventInterface {
  const newEvent: CalendarEventInterface = {  //Yeni bir etkinlik nesnesi (newEvent) oluşturur
    id: nextId++, //değerini otomatik olarak nextId ile atar.
    title,
    date,
    description,
    attendees,
  };
  events.push(newEvent); //Yeni etkinliği events dizisine ekler.
  return newEvent;    //Eklenen etkinliği döndürür.
}


//Bu REMOVEEVENT => fonksiyonu belirtilen bir id ile eşleşen etkinliği events dizisinden siler:
function removeEvent(id: number): boolean { 
  const initialLength = events.length;
  const index = events.findIndex(event => event.id === id); //EVENTS in indeksini (index) bulur.
  if (index !== -1) {
    events.splice(index, 1);//Eğer EVENTS bulunursa, splice() yöntemiyle diziden çıkarılır ve true döner.
    return true;
  }
  return false;  //Eğer EVENTS bulunmazsa, false döner.
  
}



// De functie returnt ofwel het gevonden event ofwel undefined.
//findEventByTitle FONKSIYONU=> başlığa göre bir etkinlik arar:

function findEventByTitle(title: string):  CalendarEventInterface | undefined {
//Tüm EVENTSLERI tarar ve başlık içinde verilen (title) varsa etkinliği döndürür.
//Eğer eşleşen bir EVENTS bulunMAZSA undefined döner.
return events.find(event => event.title.toLowerCase().includes(title.toLowerCase()))
}


//verilen bir anahtar kelimeye göre EVENTS arar:
function searchEvents(keyword: string): CalendarEventAlias {
//Hem başlıkta hem açıklamada (description) anahtar kelimenin olup olmadığını kontrol eder.
const lowerCaseKeyword = keyword.toLowerCase();
return events.filter(event =>
  event.title.toLowerCase().includes(lowerCaseKeyword) ||
  event.description.toLowerCase().includes(lowerCaseKeyword)
);
}


//1-> Evenementen toevoegen
addEvent("TypeScript Workshop", "2034-03-15", "Een diepgaande workshop over Typescript.", 100);
addEvent("JavaScript Conferentie", "2034-04-20", "Internationale conferentie over JS", 200);



//2=>Event zoeken op titel =>"Workshop" kelimesini içeren bir etkinlik aranır ve sonuçlar konsola yazdırılır.
const workshopEvent = findEventByTitle("Workshop");
console.log("Evenementen met titel 'Workshop';", workshopEvent);


//3=>zoek naar evenementen met 'workshop' in de titel
//workshop", "TypeScript", ve "over" anahtar kelimeleri kullanılarak arama yapılır. 
// Eşleşen etkinlikler konsola yazdırılır.
console.log("\nZoekresultaten voor 'workshop':");
const workshopResults = searchEvents("workshop");
workshopResults.forEach(event => console.log(event.title));


//4=>Zoeken naar evenementen met "TypeScript" in de titel of beschrijving
console.log("\nZoekresultaten voor 'TypeScript':");
const typescriptResults = searchEvents("TypeScript");
typescriptResults.forEach(event => console.log(event.title));


// Zoeken naar evenementen met "over" in de titel of beschrijving
console.log("\nZoekresultaten voor 'over':");
const overResults = searchEvents("over");
overResults.forEach(event => console.log(event.title));

// Evenement verwijderen
//id değeri 1 olan etkinlik silinir. Sonuç konsola yazdırılır.
console.log("\nEvenement 1 verwijderd:", removeEvent(1));


// Alle evenementen weergeven
console.log("Huidige Evenementen:", events);
