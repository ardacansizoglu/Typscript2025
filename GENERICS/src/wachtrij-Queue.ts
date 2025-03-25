//First In, First Out (FIFO): denk aan rij mensen die wachten op hun beurt bij loket: persoon die als eerste komt, wordt als eerste geholpen, en nieuwe mensen sluiten achteraan aan
// Bewerkingen:
// Enqueue: Voeg een item toe aan einde van wachtrij
// Dequeue: Verwijder en retourneer item aan begin van wachtrij
// Front/Peek: Bekijk voorste item zonder te verwijderen

// Toepassingen: Orderverwerking, taakplanning in besturingssystemen, gegevensoverdracht, enz.

class Queue<T> {
    private items: T[] = [];//initial leeg array

    enqueue(element: T): void { //void =>niet return
        this.items.push(element);
    }

    dequeue(): T | null { //Verwijder en retourneer item aan begin van wachtrij
        return this.items.shift() || null; //shift => ile 'vooraan weggehaal'
    }

    front(): T | null {  //union types olarak adlandırılan bir türdür. 
                        //Union types,bir değişkenin veya dönüş değerinin birden fazla türden biri olabileceğini ifade eder.
        return this.items[0] || null;
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

    const stringQueue = new Queue<string>();
    stringQueue.enqueue("apple");
    console.log(stringQueue.front());  // Outputs: apple
    
