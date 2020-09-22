// Reto 1
// class Person {
//     public name: string;
//     public age: number;
//     private address: string;
//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     public printName() {
//         console.log(this.name);
//     }
//     public yearOfBirth(currentYear: number): number {
//         currentYear = 2020;
//         return (this.age - currentYear);
//     }
//     public setAddress(address: string) {
//         this.address = address;
//     }
//     public getAddress(): string {
//         return this.address;
//     }
// }

// Reto 1

 export class Person {
    public name: string;
    public age: number;
    private address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public printName() {
        console.log(this.name);
    }
    public yearOfBirth(currentYear: number): number {
        return (currentYear - this.age);
    }
    public setAddress(address: string) {
        this.address = address;
    }
    public getAddress(): string {
        return this.address;
    }
}

import { Person }  from './person';
let person = new Person('Pepe', 32, "Calle Peperino 1");
// console.log(person);
// console.log(person.printName());
// person.printName();
// console.log(person.yearOfBirth(2020));
person.setAddress("Mamamia 45");
console.log(person.getAddress());
// console.log(person);

// Reto 3

import { Person } from "../Reto2/person";
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

import { Calendar } from "./calendar";
import { Person } from "../Reto2/person";
let person1 = new Person("Felipe", 32, "Miño");
let person2 = new Person("Maria", 28, "Alcala");
let person3 = new Person("Pedro", 26, "Madrid");
let calendario = new Calendar();
// console.log(calendario);
calendario.people = [person1, person2];
console.log(calendario);
console.log(calendario.people[0].age);
// calendario.printCalendar();
// AÑADIENDO UNA NUEVA PERSONA
calendario.people.push(person3);
calendario.printCalendar();
// PROBANDO CAMBIAR EL VALOR DEL ATRIBUTO DE ADDRESS POR EL METODO CREADO COMO SETADDRESS
calendario.people[0].setAddress("Huelva");
console.log(calendario.people[0].getAddress());
// calendario.printCalendar();

// Reto 4

import { Person } from "../Reto2/person";
export class Book {
    private title: string;
    private nPages: number;
    private iss: string;
    private author: string;
    private editorial: string;
    constructor(title: string, nPages: number, iss: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.iss = iss;
        this.author = author;
        this.editorial = editorial;
    }
    public setTitle(title: string) {
        this.title = title;
    }
    public setNpages(nPages: number) {
        this.nPages = nPages;
    }
    public setIss(iss: string) {
        this.iss = iss;
    }
    public setIAuthor(author: string) {
        this.author = author;
    }
    public setEditorial(editorial: string) {
        this.editorial = editorial;
    }
    public getTitle(): string {
        return this.title;
    }
    public getNpages():number {
        return this.nPages;
    }
    public getIss():string {
        return this.iss;
    }
    public getIAuthor():string {
        return this.author;
    }
    public getEditorial():string {
        return this.editorial;
    }
    public toString():string {
        return `Titulo: ${this.title} \n n.Paginas: ${this.nPages} \n ISS: ${this.iss} \n Autor: ${this.author} \n Editorial: ${this.editorial}`;        
    }
}
// let libro:Book = new Book("Cien años de soledad,", 471, "Es un libro muy interesante, con muy buen contenido.", "Gabriel García Marquez,", "Debolsillo");
// let libro2:Book = new Book("La casa encantada", 321, "Es un libro muy interesante, con muy buen contenido.", "Pedro Piqueras", "Ayala");
// let books = [libro, libro2];
// console.log(books.toString());

import { Book } from './book';
let libro = new Book("Cien años de soledad", 471, "Es un libro muy interesante, con muy buen contenido.", "Gabriel García Marquez", "Debolsillo");
let libro2 = new Book("Las bicicletas son para el verano", 248, "Es un libro muy interesante, con muy buen contenido.", "Fernando Fernán Gómez", "Catedra");
let misLibros = [libro, libro2];
console.log(misLibros);
// misLibros.toString();
libro.setTitle("Mi libro");
libro.setNpages(22);
libro.setIss("Mola");
libro.setIAuthor("Yo mismo");
libro.setEditorial("La prueba");
console.log(libro.getTitle());
console.log(libro.getNpages());
console.log(libro.getIss());
console.log(libro.getIAuthor());
console.log(libro.getEditorial());
console.log(misLibros);

// Reto 6

import { Book } from "../Reto4/book";
export class Library {
  private books: Book[];
  private address: string;
  private manager: string;
  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }
  public setAddress(address: string) {
    this.address = address;
  }
  public setManager(manager: string) {
    this.manager = manager;
  }
  public getAddress(): string {
    return this.address;
  }
  public getManager() {
    return this.manager;
  }
  public toString() {
    let result = "";
    for (let i = 0; i < this.books.length; i++) {
      result += this.books[i].toString() + "\n";
    }
    return `${result} \n Calle: ${this.address}  \n Manager: ${this.manager}`;
  }
  public getNumberOfBooks(): number {
    let numeroLibros = this.books.length;
    return numeroLibros;
  }
  public findByAUthor(author: string): Book[] {
    let autorLibro = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getIAuthor() === author) {
        // console.log(this.books[i].toString());
        autorLibro.push(this.books[i]);
      }
    }
    return autorLibro;
  }
}
// PARA PROBAR:
// 1.
let libro: Book = new Book(
  "Cien años de soledad",
  471,
  "Es un libro muy interesante, con muy buen contenido.",
  "Gabriel García Marquez",
  "Debolsillo"
);
let libro2: Book = new Book(
  "Las bicicletas son para el verano",
  248,
  "Es un libro muy interesante, con muy buen contenido.",
  "Fernando Fernán Gómez",
  "Catedra"
);
let libro3: Book = new Book(
  "Cronica de una muerte anunciada",
  300,
  "Es un libro muy interesante, con muy buen contenido.",
  "Gabriel García Marquez",
  "Catedral"
);
// 2. DECLARO EL NUEVO OBJETO CON TRES ATRIBUTOS, UNO DEL OBJETO IMPORTADO Y LOS SIGUIENTES DOS DE LA NUEVA CLASE
let libros: Library = new Library(
  [libro, libro2, libro3],
  "Calle mia",
  "Bedoya Guzman"
);
// console.log(libros.toString());
// console.log(libros.getNumberOfBooks());
// console.log(libros.getNumberOfBooks());
console.log(libros.findByAUthor("Gabriel García Marquez"));

import {Book} from '../Reto4/book';
import {Library} from './library';
let libro = new Book("Cien años de soledad", 471, "Es un libro muy interesante, con muy buen contenido.", "Gabriel García Marquez", "Debolsillo");
let libro2 = new Book("Las bicicletas son para el verano", 248, "Es un libro muy interesante, con muy buen contenido.", "Fernando Fernán Gómez", "Catedra");
let libros = [];
libros.push(libro);
libros.push(libro2);
let bibliotecaPipe = new Library(libros, "Calle Soledad", "Pipe");
console.log(bibliotecaPipe.toString());
bibliotecaPipe.findByAUthor("Fernando Fernán Gómez");
// console.log(libros.toString());

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
// let v3 = new Vector(2, 6);
// let v2 = new Vector(2, 8);
// // SIRVE PARA VER LOS VECTORES ALEATORIOS
// v2.print();
// v3.print();
// // HACE LA RESTA
// console.log(v2.subs(v3));
// // HACE LA SUMA
// console.log(v2.add(v3));
// // HACE LA MULTIPLICACION ENTRE VECTORES
// console.log(v2.mult(v3));
// // HACER LA MULTIPLICACION POR UN NUMERO N
// console.log(v3.multNumber(6));

import { Vector } from './vector';
let v3 = new Vector(2, 6);
let v2 = new Vector(2, 8);
// SIRVE PARA VER LOS VECTORES ALEATORIOS
v2.print();
v3.print();
// HACE LA RESTA
console.log(v2.subs(v3));
// HACE LA SUMA
console.log(v2.add(v3));
// HACE LA MULTIPLICACION ENTRE VECTORES
console.log(v2.mult(v3));
// HACER LA MULTIPLICACION POR UN NUMERO N
console.log(v3.multNumber(6));

// Reto 10

import { Vector } from "../Reto8/vector";
export class Matrix {
  // Cada elemento de mi array es un vector, la matrix es un
  // array de vectores...
  private elements: Vector[];
  constructor(n: number, m: number, k: number) {
    this.elements = new Array(n);
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i] = new Vector(m, k);
    }
  }
  print() {
    console.log(this.elements);
  }
  // Suma
  add(m1: Matrix) {
    let result = new Matrix(
      this.elements.length,
      this.elements[0].getElements().length,
      2
    );
    if (this.elements.length == m1.elements.length) {
      for (let i = 0; i < this.elements.length; i++) {
        for (let j = 0; j < this.elements[0].getElements().length; j++) {
          result.elements[i].getElements()[j] =
            this.elements[i].getElements()[j] + m1.elements[i].getElements()[j];
        }
      }
    }
    return result;
  }
  multNumber(n: number) {
    let result = new Matrix(
      this.elements.length,
      this.elements[0].getElements().length,
      2
    );
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = 0; j < this.elements[0].getElements().length; j++) {
        result.elements[i].getElements()[j] =
          this.elements[i].getElements()[j] * n;
      }
    }
    return result;
  }
  mutSpecial(n: number) {
    let result = new Matrix(
      this.elements.length,
      this.elements[0].getElements().length,
      2
    );
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = 0; j < this.elements[0].getElements().length; j++) {
        if (this.elements[0].getElements()[j] % 2 == 0) {
          result.elements[i].getElements()[j] =
            this.elements[i].getElements()[j] * n;
        } else if (this.elements[0].getElements()[j] % 2 != 0) {
          result.elements[i].getElements()[j] =
            this.elements[i].getElements()[j] * (n - 1);
        }
      }
    }
    return result;
  }
}
let v3 = new Matrix(2, 6, 4);
let v2 = new Matrix(2, 6, 4);
let v1 = new Matrix(2, 6, 4);
let matriz1 = new Matrix(2, 6, 4);
// v3.print();
// v2.print();
// v1.print();
matriz1.print();
// v1.add(v2).print();
matriz1.mutSpecial(6).print();
// console.log(matriz1.mutSpecial(4));

import { Matrix } from './matrix';
let v3 = new Matrix(2, 6, 4);
let v2 = new Matrix(2, 6, 4);
let v1 = new Matrix(2, 6, 4);
let matriz1 = new Matrix(2, 6, 4);
// v3.print();
// v2.print();
// v1.print();
matriz1.print();
// v1.add(v2).print();
matriz1.mutSpecial(6).print();
// console.log(matriz1.mutSpecial(4));