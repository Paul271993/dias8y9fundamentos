"use strict";
exports.__esModule = true;
var calendar_1 = require("./calendar");
var person_1 = require("./person");
var person1 = new person_1.Person("FMeme", 32, "Calle Puntiagudo");
var person2 = new person_1.Person("Maria", 28, "Calle Antorcha");
var person3 = new person_1.Person("Peperino", 26, "Calle Torreperogil");
var calendario = new calendar_1.Calendar();
calendario.people = [person1, person2];
console.log(calendario);
console.log(calendario.people[0].age);
// calendario.printCalendar();
calendario.people.push(person3);
calendario.printCalendar();
calendario.people[0].setAddress("Huelva");
console.log(calendario.people[0].getAddress());
calendario.printCalendar();
