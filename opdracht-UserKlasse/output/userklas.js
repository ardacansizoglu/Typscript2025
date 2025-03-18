"use strict";
class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = this.generatePassword();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    resetPassword() {
        this.password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }
    showUserInfo() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Email: ${this.email}`);
    }
    setPassword(newPassword) {
        if (this.isValidPassword(newPassword)) {
            this.password = newPassword;
            console.log("Wachtwoord succesvol ingesteld.");
        }
        else {
            console.log("Wachtwoord voldoet niet aan de vereisten.");
        }
    }
    isValidPassword(password) {
        // Minimaal 8 tekens, bevat letters en cijfers, en minstens één speciaal teken (@, #, $, %)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
        return passwordRegex.test(password);
    }
    generatePassword() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Alfabetische tekens (hoofdletters en kleine letters)
        const numbers = "0123456789"; // Cijfers
        const specialChars = "@#$%"; // Speciale tekens
        // Begin met één teken uit elke categorie
    }

}