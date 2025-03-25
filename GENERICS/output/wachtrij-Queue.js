"use strict";
//First In, First Out (FIFO): denk aan rij mensen die wachten op hun beurt bij loket: persoon die als eerste komt, wordt als eerste geholpen, en nieuwe mensen sluiten achteraan aan
// Bewerkingen:
// Enqueue: Voeg een item toe aan einde van wachtrij
// Dequeue: Verwijder en retourneer item aan begin van wachtrij
// Front/Peek: Bekijk voorste item zonder te verwijderen
// Toepassingen: Orderverwerking, taakplanning in besturingssystemen, gegevensoverdracht, enz.
class Queue {
    constructor() {
        this.items = []; //initial leeg array
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift() || null; //shift => ile 'vooraan weggehaal'
    }
    front() {
        //Union types,bir değişkenin veya dönüş değerinin birden fazla türden biri olabileceğini ifade eder.
        return this.items[0] || null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const stringQueue = new Queue();
stringQueue.enqueue("apple");
console.log(stringQueue.front()); // Outputs: apple
