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
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "@#$%";
        const allChars = letters + numbers + specialChars;
        // Şifre başlangıcı için her türden bir karakter al
        let password = [
            letters[Math.floor(Math.random() * letters.length)],
            numbers[Math.floor(Math.random() * numbers.length)],
            specialChars[Math.floor(Math.random() * specialChars.length)],
        ];
        // Rastgele uzunlukta ek karakterler
        const additionalLength = Math.floor(Math.random() * 6) + 5;
        password = password.concat(Array.from({ length: additionalLength }, () => allChars[Math.floor(Math.random() * allChars.length)]));
        return password.sort(() => Math.random() - 0.5).join(''); // Şifreyi karıştır ve string olarak dön
    }
}
const user1 = new User("John", "Doe", "john.doe@example.com");
const user2 = new User("Jane", "Smith", "jane.smith@example.com");
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
