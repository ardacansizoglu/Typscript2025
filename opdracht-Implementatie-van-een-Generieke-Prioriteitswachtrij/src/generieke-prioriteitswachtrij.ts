// Define the QueueElement interface

interface QueueElement<T> {
    value: T;                 //elemanin kendisi
    priority: number;         //ex:1-3, 1=>highest priority/ilk onem sirasi
}

//implement the PRIORITYQueue class

class PriorityQueue<T> {
    private elements: QueueElement<T>[] = [];

//Add an element to the queue with the specifik priority

enqueue(value: T, priority: number): void {
    const newElement: QueueElement<T> = {value, priority};
    let added = false;

// Loop through existing elements to find the correct position
for (let i = 0; i < this.elements.length; i++) {
    if (priority < this.elements[i].priority){
        //insert the element at the correct position
    this.elements.splice(i, 0, newElement);  //elemanın önceliği mevcut elemanların önceliğinden düşükse, o pozisyona yerleştirilir
    added = true;
    }

}
 // Eğer eleman en düşük önceliğe sahipse => onu dizinin sonuna ekle
        if (!added) {
            this.elements.push(newElement);
        }
    }

    // Display all elements in the queue
    displayElements(): void {
        for (let i = 0; i < this.elements.length; i++) {
            console.log(`${i + 1}: Value = ${this.elements[i].value}, Priority = ${this.elements[i].priority}`);
        }
    }

    // Remove and return 
    dequeue(): T | undefined { //en yüksek önceliğe sahip elemanı kuyruktan çıkarır ve döndürür:
        if (this.isEmpty()) {
            return undefined;
        }
        const element = this.elements.shift();
        return element?.value;
    }

    // Return the value of the highest priority element without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.elements[0].value;
    }

    // Queue`nin  boş olup olmadığını kontrol eder:
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

}

// Test 
const priorityQueue = new PriorityQueue<string>();

priorityQueue.enqueue("Gamen", 3);
priorityQueue.enqueue("TypeScript herhalen", 1);
priorityQueue.enqueue("JavaScript herhalen", 2);
priorityQueue.enqueue("TypeScript oefenen", 1);

console.log("\nHuidige staat van de prioriteitswachtrij:");
priorityQueue.displayElements();

console.log("\ndequeue");
console.log(priorityQueue.dequeue());

console.log("\npeek");
console.log(priorityQueue.peek());

console.log("\nisEmpty");
console.log(priorityQueue.isEmpty());


