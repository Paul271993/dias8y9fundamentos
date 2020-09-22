"use strict";
exports.__esModule = true;
exports.Person = void 0;
// export class Person {
//         public name: string;
//         public age: number;
//         private address: string;
//         constructor(name: string, age: number, address: string) {
//             this.name = name;
//             this.age = age;
//             this.address = address;
//         }
//         public printName() {
//             console.log(this.name);
//         }
//         public yearOfBirth(currentYear: number): number {
//             currentYear = 2020;
//             return (this.age - currentYear);
//         }
//         public setAddress(address: string) {
//             this.address = address;
//         }
//         public getAddress(): string {
//             return this.address;
//         }
//     }
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return (currentYear - this.age);
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
