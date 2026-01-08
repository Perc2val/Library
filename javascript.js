const myLibrary = [];
const hello = document.getElementById("test")

function Book(title, author, pages, read) {
    if (!new.target){
        throw Error ("function call has to coontain new");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title) {
    title = prompt("Type in the title");
    author = prompt("Type in the author");
    pages = prompt("How many pages does the book have?")
    read = prompt("have you read the book")

    let newBook = new Book(title, author, pages, read)
  // take params, create a book then store it in the array
    myLibrary.push(newBook);
}
addBookToLibrary()
addBookToLibrary()


function displayMyLibrary(){
    for (newBook in myLibrary) {
        const newCard = document.createElement("div");
        const heading = document.createElement("h2");
        heading.innerHTML = `${myLibrary[0].title}`;
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("input");
        const label = document.createElement("label");

        
        newCard.appendChild(heading);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(read);
        newCard.appendChild(label);
        hello.appendChild(newCard);
        
    }
}

displayMyLibrary()