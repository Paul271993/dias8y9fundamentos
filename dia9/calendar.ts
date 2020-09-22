//   Reto 3

import { Person } from "./person";
export class Calendar {
    public people: Person[];
    constructor() {
        this.people = new Array();
    }
    printCalendar() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    }
}