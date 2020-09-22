import { Calendar } from "./calendar";
import { Person } from "./person";
let person1 = new Person("FMeme", 32, "Calle Puntiagudo");
let person2 = new Person("Maria", 28, "Calle Antorcha");
// let person3 = new Person("Peperino", 26, "Calle Torreperogil");
let calendario = new Calendar();

calendario.people = [person1, person2];
console.log(calendario);
console.log(calendario.people[0].age);
// calendario.printCalendar();

// calendario.people.push(person3);
calendario.printCalendar();

calendario.people[0].setAddress("Huelva");
console.log(calendario.people[0].getAddress());
calendario.printCalendar();