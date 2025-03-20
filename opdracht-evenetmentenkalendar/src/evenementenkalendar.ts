
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

// Deze zal gebruikt worden om de id in te vullen. En moet dus ook telkens verhoogd worden.
// Bu, kimliği doldurmak için kullanılacaktır. Ve bu nedenle her seferinde arttırılmalıdır.
//nextId =>adındaki değişken, her yeni etkinliğe benzersiz bir id sağlamak için kullanılır.
let nextId = 0;

//const events=>(değişmez) olan events adında bir diziyi tanımlar.
//CalendarEventAlias, daha önce tanımlanmış bir türdür (bir alias) ve 
//Bir CalendarEventInterface OBJECT dizisidir.
//Yani,events dizesi yalnızca etkinlikleri (CalendarEventInterface türündeki nesneleri) içerebilir.
const events: CalendarEventAlias = [];


//FUNCTIONS!!
function addEvent(event: CalendarEventInterface): number {
    if(event.length === 0 ){
        return 0;
    }
}