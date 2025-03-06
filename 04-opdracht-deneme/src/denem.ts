enum months{
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
console.log(months["3"]); // March

interface Address {
    straat: string;
    number: number;
    city: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    address: Address;
    beroep: string;
}


const user: User = {
    name: "Arda",
    age: 42,
    email: "ardacan@gmail",
    address: {
        straat: "Ispralaan",
        number: 30,
        city: "Mol"
    },
    beroep: "Full-Stack Developer"

};
console.log(user.address.city); // Mol
console.log(user.beroep); // Full-Stack Developer
console.log(user.name); // Arda
console.log(user.age); // 42