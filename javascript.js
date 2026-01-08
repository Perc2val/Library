function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("function call has to contain new");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        const readStatus = this.read ? "already read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295 , true)
let percyJackson = new Book("Percy Jackson", "Rick Rijordan", 360, true)
