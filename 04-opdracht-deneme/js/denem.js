"use strict";
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["October"] = 10] = "October";
    months[months["November"] = 11] = "November";
    months[months["December"] = 12] = "December";
})(months || (months = {}));
console.log(months["3"]); // March
const user = {
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
