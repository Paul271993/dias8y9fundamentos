"use strict";
exports.__esModule = true;
var matrix_1 = require("./matrix");
var v1 = new matrix_1.Matrix(2, 6, 4);
var v2 = new matrix_1.Matrix(2, 6, 4);
var v3 = new matrix_1.Matrix(2, 6, 4);
var matriz1 = new matrix_1.Matrix(2, 6, 4);
v1.print();
v2.print();
v3.print();
matriz1.print();
v1.add(v2).print();
matriz1.mutSpecial(6).print();
console.log(matriz1.mutSpecial(4));
