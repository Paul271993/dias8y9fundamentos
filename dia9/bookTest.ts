// Reto 5

import { Book } from './book';
let libro = new Book("Mae mia willy", 471, "Es un libro muy interesante, con muy buen contenido.", "Petter el Anguila", "Debolsillo");
let libro2 = new Book("Niña, comete el pollo", 48, "Es malísimo, no lo leas", "Belen Esteban", "Catedra");
let misLibros = [libro, libro2];
console.log(misLibros);
// misLibros.toString();
libro.setTitle("Mi libro");
libro.setNpages(22);
libro.setIss("Mola");
libro.setIAuthor("Yo mismo");
libro.setEditorial("Nadie");
console.log(libro.getTitle());
console.log(libro.getNpages());
console.log(libro.getIss());
console.log(libro.getIAuthor());
console.log(libro.getEditorial());
console.log(misLibros);