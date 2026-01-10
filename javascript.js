const myLibrary = [];
const hello = document.getElementById("test");
const addBook = document.getElementById("addBook");
const formBody = document.getElementById("formBody");
const header = document.getElementById("header");
const main = document.getElementById("main");
const stopp = document.getElementById("stop");
const form = document.getElementById("form");
const book = document.querySelector("#book");



addBook.addEventListener("click", function() {
    formBody.classList.add(`toggleflex`);
    formBody.classList.remove(`togglenone`)
    header.classList.add(`blur`);
    main.classList.add(`blur`);
}); 

stopp.addEventListener("click", function(){
    formBody.classList.remove(`toggleflex`);
    formBody.classList.add(`togglenone`);
    header.classList.remove(`blur`);
    main.classList.remove(`blur`);
})


function Book(title, author, pages, read) {
    if (!new.target){
        throw Error ("function call has to contain new");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
}

let i = 0;




book.addEventListener("click", function(e) {
    e.preventDefault();
    const addTitle = document.getElementById("addTitle");
    const addAuthor = document.getElementById("addAuthor");
    const addNumber = document.getElementById("addNumber");
    const checkbox = document.getElementById("addRead");
    if (checkbox.checked == true){
        read = "yes"
    } else{
        read = "no"
    }
    title = addTitle.value;
    author = addAuthor.value;
    pages = addNumber.value;

    addBookToLibrary(title, author, pages, read);
    form.reset();
    formBody.classList.remove(`toggleflex`);
    formBody.classList.add(`togglenone`);
    header.classList.remove(`blur`);
    main.classList.remove(`blur`);
    displayMyLibrary()
})

function displayMyLibrary(){     
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
        main.appendChild(newCard);
        i++;
}



console.log(myLibrary)