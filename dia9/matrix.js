"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = new Array(n);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = new vector_1.Vector(m, k);
        }
    }
    Matrix.prototype.print = function () {
        console.log(this.elements);
    };
    Matrix.prototype.add = function (m1) {
        var result = new Matrix(this.elements.length, this.elements[0].getElements().length, 2);
        if (this.elements.length == m1.elements.length) {
            for (var i = 0; i < this.elements.length; i++) {
                for (var j = 0; j < this.elements[0].getElements().length; j++) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] + m1.elements[i].getElements()[j];
                }
            }
        }
        return result;
    };
    Matrix.prototype.multNumber = function (n) {
        var result = new Matrix(this.elements.length, this.elements[0].getElements().length, 2);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[0].getElements().length; j++) {
                result.elements[i].getElements()[j] =
                    this.elements[i].getElements()[j] * n;
            }
        }
        return result;
    };
    Matrix.prototype.mutSpecial = function (n) {
        var result = new Matrix(this.elements.length, this.elements[0].getElements().length, 2);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[0].getElements().length; j++) {
                if (this.elements[0].getElements()[j] % 2 == 0) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] * n;
                }
                else if (this.elements[0].getElements()[j] % 2 != 0) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] * (n - 1);
                }
            }
        }
        return result;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
