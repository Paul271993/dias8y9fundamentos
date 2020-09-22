// Reto 9 

import { Vector } from './vector';
let v1 = new Vector(2, 6);
let v2 = new Vector(2, 8);

v2.print();
v1.print();

console.log(v2.subs(v1));

console.log(v2.add(v1));

console.log(v2.mult(v1));

console.log(v1.multNumber(6));