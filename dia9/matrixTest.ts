// Reto 11

import { Matrix } from './matrix';
let v1 = new Matrix(2, 6, 4);
let v2 = new Matrix(2, 6, 4);
let v3 = new Matrix(2, 6, 4);
let matriz1 = new Matrix(2, 6, 4);
v1.print();
v2.print();
v3.print();
matriz1.print();
v1.add(v2).print();
matriz1.mutSpecial(6).print();
console.log(matriz1.mutSpecial(4));