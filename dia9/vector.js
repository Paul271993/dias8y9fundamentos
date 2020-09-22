"use strict";
// Reto 8
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = new Array(n);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = Math.round(Math.random() * k);
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var vector = new Vector(this.elements.length, 1);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                vector.elements[i] = this.elements[i] + v1.elements[i];
            }
            return vector;
        }
    };
    Vector.prototype.subs = function (v1) {
        var vector1 = new Vector(this.elements.length, 1);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                vector1.elements[i] = this.elements[i] - v1.elements[i];
            }
            return vector1;
        }
    };
    Vector.prototype.mult = function (v1) {
        var vector2 = new Vector(this.elements.length, 1);
        if (this.elements.length == v1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                vector2.elements[i] = this.elements[i] * v1.elements[i];
            }
            return vector2;
        }
    };
    Vector.prototype.multNumber = function (n) {
        var vector3 = new Vector(this.elements.length, 1);
        for (var i = 0; i < this.elements.length; i++) {
            vector3.elements[i] = this.elements[i] * n;
        }
        return vector3;
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    return Vector;
}());
exports.Vector = Vector;
