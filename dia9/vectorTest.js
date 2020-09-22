"use strict";
// Reto 9 
exports.__esModule = true;
var vector_1 = require("./vector");
var v1 = new vector_1.Vector(2, 6);
var v2 = new vector_1.Vector(2, 8);
v2.print();
v1.print();
// HACE LA RESTA
console.log(v2.subs(v1));
// HACE LA SUMA
console.log(v2.add(v1));
// HACE LA MULTIPLICACION ENTRE VECTORES
console.log(v2.mult(v1));
// HACER LA MULTIPLICACION POR UN NUMERO N
console.log(v1.multNumber(6));
