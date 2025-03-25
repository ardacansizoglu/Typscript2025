class Stack<T> {
    private items: T[] = [];
 
    push(element: T): void {
        this.items.push(element);//arrayin sonuna ekliyor
    }
    pop(): T | null {  //pop method,GENERIC DEMEK
        return this.items.pop() || null; //ARRAYDAKI SON ELEMANI WEGGEHAAL YAPAR.
    }
    peek(): T | null {  //GENERICS MI NULL MU DIYE soruyor//peek ensonda ne duuryor onu kontrol etmeyi sagliyor
        return this.items[this.items.length - 1] || null;
                                 //length-1 demek => laatste positie of array
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
    
    const numberStack = new Stack<number>();
    console.log(numberStack.isEmpty());

    numberStack.push(10);
    console.log(numberStack.peek());  // Outputs: 10
    
    const stringStack = new Stack<string>();
    stringStack.push("apple");
    stringStack.push("banana");
    console.log(stringStack.pop()); // Resultaat: "banana"
    console.log(stringStack.isEmpty()); //false


