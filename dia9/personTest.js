"use strict";
// Reto 2
exports.__esModule = true;
var person_1 = require("./person");
var person = new person_1.Person('Pepe', 32, "Calle Peperino 1");
console.log(person);
console.log(person.printName());
person.printName();
console.log(person.yearOfBirth(2020));
person.setAddress("Calle Mamamia 45");
console.log(person.getAddress());
console.log(person);
