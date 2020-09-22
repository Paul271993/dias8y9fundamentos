"use strict";
// Reto 4 
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, iss, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.iss = iss;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIss = function (iss) {
        this.iss = iss;
    };
    Book.prototype.setIAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.getIss = function () {
        return this.iss;
    };
    Book.prototype.getIAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return "Titulo: " + this.title + " \n n.Paginas: " + this.nPages + " \n ISS: " + this.iss + " \n Autor: " + this.author + " \n Editorial: " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
