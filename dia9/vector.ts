// Reto 8

export class Vector {
    private elements: number[];
    constructor(n: number, k: number) {
      this.elements = new Array(n);
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i] = Math.round(Math.random() * k);
      }
    }
    print() {
      console.log(this.elements);
    }
    add(v1: Vector) {
      let vector = new Vector(this.elements.length, 1);
      if (this.elements.length == v1.elements.length) {
        for (let i = 0; i < this.elements.length; i++) {
          vector.elements[i] = this.elements[i] + v1.elements[i];
        }
        return vector;
      }
    }
    subs(v1: Vector) {
      let vector1 = new Vector(this.elements.length, 1);
      if (this.elements.length == v1.elements.length) {
        for (let i = 0; i < this.elements.length; i++) {
          vector1.elements[i] = this.elements[i] - v1.elements[i];
        }
        return vector1;
      }
    }
    mult(v1: Vector) {
      let vector2 = new Vector(this.elements.length, 1);
      if (this.elements.length == v1.elements.length) {
        for (let i = 0; i < this.elements.length; i++) {
          vector2.elements[i] = this.elements[i] * v1.elements[i];
        }
        return vector2;
      }
    }
    multNumber(n: number) {
      let vector3 = new Vector(this.elements.length, 1);
      for (let i = 0; i < this.elements.length; i++) {
        vector3.elements[i] = this.elements[i] * n;
      }
      return vector3;
    }
    getElements(){
        return this.elements;
    }
  }