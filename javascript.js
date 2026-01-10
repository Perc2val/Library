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
let i = 0;

function displayMyLibrary(){
    for (newBook in myLibrary) {
        
        const newCard = document.createElement("div");
        newCard.classList.add("card")
        const heading = document.createElement("h2");
        heading.innerHTML = `${myLibrary[i].title}`;
        const author = document.createElement("p");
        author.innerHTML = "Author: " + `${myLibrary[i].author}`;
        const pages = document.createElement("p");
        pages.innerHTML = "Pages Count: " + `${myLibrary[i].pages}`;
        const read = document.createElement("input");
        read.type = "checkbox";
        if (`${myLibrary[i].read}` == "yes") {
            read.checked = true;
        } else {
            read.checked = false; 
        }
          
        const label = document.createElement("label");
        label.innerHTML = "Have you read this book?"

        
        newCard.appendChild(heading);
        newCard.appendChild(author);
        newCard.appendChild(pages);
        newCard.appendChild(read);
        newCard.appendChild(label);
        hello.appendChild(newCard);
        i++;
    }
}

displayMyLibrary()