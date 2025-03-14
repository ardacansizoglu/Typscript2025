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
    
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";    // Alfabetische tekens (hoofdletters en kleine letters)
    
        const numbers = "0123456789";  // Cijfers
    
        const specialChars = "@#$%";   // Speciale tekens



