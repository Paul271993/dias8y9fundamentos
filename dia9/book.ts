// Reto 4 


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
