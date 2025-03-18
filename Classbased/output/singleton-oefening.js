"use strict";
class Database {
    // Private constructor zodat er geen nieuwe instanties van buitenaf gemaakt kunnen worden
    constructor() {
        this.data = []; // Een lijst om de data op te slaan
    } //Constructor'ı private yaparak doğrudan sınıfın örneklenmesini engelliyoruz.
    // private constructor() ifadesi, bir sınıfın dışarıdan örneklenmesini 
    // (instantiation) önlemek amacıyla kullanılır. 
    // Implementeer de private constructor
    // Publieke statische methode om toegang te krijgen tot de Singleton instantie
    //Implementeer de statische getInstance methode
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    addData(newData) {
        this.data.push(newData);
    }
    removeData(targetData) {
        this.data = this.data.filter(data => data !== targetData);
    }
    fetchData() {
        return this.data;
    }
}
const db1 = Database.getInstance();
const db2 = Database.getInstance();
// Hier controleren we of beide "instanties" eigenlijk dezelfde zijn
console.log(db1 === db2); // Outputs: true
db1.addData("Data 1");
db1.addData("Data 2");
console.log(db2.fetchData()); // Outputs: ["Data 1", "Data 2"]
db2.removeData("Data 1");
console.log(db1.fetchData()); // Outputs: ["Data 2"]
