"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element); //arrayin sonuna ekliyor
    }
    pop() {
        return this.items.pop() || null; //ARRAYDAKI SON ELEMANI WEGGEHAAL YAPAR.
    }
    peek() {
        return this.items[this.items.length - 1] || null;
        //length-1 demek => laatste positie of array
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const numberStack = new Stack();
console.log(numberStack.isEmpty());
numberStack.push(10);
console.log(numberStack.peek()); // Outputs: 10
const stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
console.log(stringStack.pop()); // Resultaat: "banana"
console.log(stringStack.isEmpty()); //false
