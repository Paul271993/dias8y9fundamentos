// Reto 2

import { Person }  from './person';
let person = new Person('Pepe', 32, "Calle Peperino 1");
console.log(person);

console.log(person.printName());
person.printName();

console.log(person.yearOfBirth(2020));

person.setAddress("Calle Mamamia 45");
console.log(person.getAddress());

console.log(person);