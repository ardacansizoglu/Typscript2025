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
        let password = "";
        password += letters.charAt(Math.floor(Math.random() * letters.length)); //letters.charAt() fonksiyonu,belirtilen indeks numarasındaki karakteri döndürür.
        password += numbers.charAt(Math.floor(Math.random() * numbers.length)); //Math.random() fonksiyonu 0 ile 1 arasında rastgele bir sayı üretir.
        //Math.floor() fonksiyonu bu rastgele sayıyı aşağı yuvarlar ve tam sayı haline getirir.
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length)); //specialChars dizisinden (özel karakterler) rastgele bir karakter seçer ve password değişkenine ekler.
        // Combineer alle tekens voor de rest van het wachtwoord
        const allChars = letters + numbers + specialChars;
        // Genereer een willekeurig aantal tekens tussen 5 en 10
        const additionalLength = Math.floor(Math.random() * 6) + 5; // 5 to 10
        // Voeg de extra tekens toe
        for (let i = 0; i < additionalLength; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        // Shuffle het wachtwoord (Fisher-Yates algoritme)
        const passwordArray = password.split('');
        for (let i = passwordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
        }
        return passwordArray.join('');
    }
}
// Maak twee User-objecten aan
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Smith", "jane.smith@example.com");
// Testen
console.log("Log user info:");
user1.showUserInfo();
console.log("----------");
console.log("Log user info:");
user2.showUserInfo();
console.log("----------");
console.log("getFullName");
console.log(user1.getFullName());
console.log("----------");
user1.resetPassword();
console.log("----------");
user2.setPassword("Secure1@Password");
console.log("----------");
// Test een ongeldig wachtwoord
// user2.setPassword("weak"); // Zou falen
