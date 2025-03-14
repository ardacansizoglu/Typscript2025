"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit of funds: ${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw of funds: ${amount}`);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // Toegang tot de 'getBalance'-methode
account1.deposit(500); // Toegang tot de 'deposit'-methode
account1.withdraw(200); // Toegang tot de 'withdraw'-methode
console.log(account1.getBalance()); // Toegang tot de 'getBalance'-methode, deze heeft toegang tot de private balance property.
// Directe toegang tot 'balance' zou een fout veroorzaken:
// console.log(account1.balance); 
// Fout: Eigenschap 'balance' is privé en niet toegankelijk van buiten de klasse
