class User {
    private firstName: string;
    private lastName: string;
    protected email: string;
    private password: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = this.generatePassword();
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public resetPassword(): void {  //void=>kan een bericht afdrukken/de waarde van een variabele wijzigen/
        this.password = this.generatePassword();
        console.log("Wachtwoord is succesvol gereset.");
    }

    public showUserInfo(): void {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Email: ${this.email}`);
    }

    public setPassword(newPassword: string): void {
        if (this.isValidPassword(newPassword)) {
            this.password = newPassword;
            console.log("Wachtwoord succesvol ingesteld.");
        } else {
            console.log("Wachtwoord voldoet niet aan de vereisten.");
        }
    }

    private isValidPassword(password: string): boolean {
        // Minimaal 8 tekens, bevat letters en cijfers, en minstens één speciaal teken (@, #, $, %)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
        return passwordRegex.test(password);
    }

    private generatePassword(): string {
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
        password = password.concat(
            Array.from({ length: additionalLength }, () =>
                allChars[Math.floor(Math.random() * allChars.length)]
            )
        );
        return password.sort(() => Math.random() - 0.5).join('');      // Şifreyi karıştır ve string olarak dön
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
    
    





        
