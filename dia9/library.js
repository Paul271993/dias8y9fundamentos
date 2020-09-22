"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        var result = "";
        for (var i = 0; i < this.books.length; i++) {
            result += this.books[i].toString() + "\n";
        }
        return result + " \n Calle: " + this.address + "  \n Manager: " + this.manager;
    };
    Library.prototype.getNumberOfBooks = function () {
        var numeroLibros = this.books.length;
        return numeroLibros;
    };
    Library.prototype.findByAUthor = function (author) {
        var autorLibro = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getIAuthor() === author) {
                console.log(this.books[i].toString());
                autorLibro.push(this.books[i]);
            }
        }
        return autorLibro;
    };
    return Library;
}());
exports.Library = Library;
//   let libro: Book = new Book("12 Años de esclavitud",1231,"Es un libro muy interesante, con muy buen contenido.","Gabriel García Marquez","Debolsillo");
//   let libro2: Book = new Book("Mae mia willy", 471, "Es un libro muy interesante, con muy buen contenido.", "Petter el Anguila", "Debolsillo");
//   let libro3: Book = new Book("Niña, comete el pollo", 48, "Es malísimo, no lo leas", "Belen Esteban", "Catedra");
//   let libros: Library = new Library([libro, libro2, libro3],"Calle Alcachofa","Un tio mu loco");
