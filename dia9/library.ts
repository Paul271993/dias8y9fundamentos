// Reto 7

import { Book } from "./book";
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
        console.log(this.books[i].toString());
        autorLibro.push(this.books[i]);
      }
    }
    return autorLibro;
  }
}

//   let libro: Book = new Book("12 Años de esclavitud",1231,"Es un libro muy interesante, con muy buen contenido.","Gabriel García Marquez","Debolsillo");
//   let libro2: Book = new Book("Mae mia willy", 471, "Es un libro muy interesante, con muy buen contenido.", "Petter el Anguila", "Debolsillo");
//   let libro3: Book = new Book("Niña, comete el pollo", 48, "Es malísimo, no lo leas", "Belen Esteban", "Catedra");
  
//   let libros: Library = new Library([libro, libro2, libro3],"Calle Alcachofa","Un tio mu loco");
