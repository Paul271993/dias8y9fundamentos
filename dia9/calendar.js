"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.people = new Array();
    }
    Calendar.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    };
    return Calendar;
}());
exports.Calendar = Calendar;
