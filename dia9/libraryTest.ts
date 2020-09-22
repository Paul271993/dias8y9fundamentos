import {Book} from './book';
import {Library} from './library';
  let libro: Book = new Book("12 Años de esclavitud",1231,"Es un libro muy interesante, con muy buen contenido.","Lagartijo","Debolsillo");
  let libro2: Book = new Book("Mae mia willy", 471, "Es un libro muy interesante, con muy buen contenido.", "Petter el Anguila", "Debolsillo");
  let libro3: Book = new Book("Niña, comete el pollo", 48, "Es malísimo, no lo leas", "Belen Esteban", "Catedra");
  
//   let libros: Library = new Library([libro, libro2, libro3],"Calle Alcachofa","Un tio mu loco");
let libros = [];
libros.push(libro);
libros.push(libro2);
libros.push(libro3);
let miLibreria = new Library(libros, "Calle Alcachofa","Un tio mu loco");
console.log(miLibreria.toString());
// miLibreria.findByAUthor("Belen Esteban");
// console.log(libros.toString());