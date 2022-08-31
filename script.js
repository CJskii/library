let myLibrary = [];

const newBook = document.querySelector('.new-book')
const mainWrapper = document.querySelector('.main-content')
newBook.addEventListener('click', userPrompt);

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


const book1 = new Book("Jozef z Bazin", "Wariat na rowerze", "555", "yes")
const book2 = new Book("Drugi Autor", "Druga ksiazka", "123", "no")



function userPrompt(){ // prompts user with form
    setAtribute()
}

function setAtribute(){
  let card = document.createElement('div')
  card.setAttribute('class', 'card')
  mainWrapper.appendChild(card)
  //title
  let title = document.createElement('div')
  title.setAttribute('class', 'title')
  let titleInput = document.createElement('input')
  title.appendChild(titleInput)
  card.appendChild(title)
  //author
  let author = document.createElement('div')
  title.setAttribute('class', 'author')
  let authorInput = document.createElement('input')
  author.appendChild(authorInput)
  card.appendChild(author)
  // book-info
  let bookInfo = document.createElement('div')
  bookInfo.setAttribute('class', 'book-info')
  card.appendChild(bookInfo);
  let pageSpan = document.createElement('span')
  pageSpan.textContent = "666"
  bookInfo.appendChild(pageSpan)
  let confirmWrap = document.createElement('div')
  confirmWrap.setAttribute('class', 'confirm-wrap')
  bookInfo.appendChild(confirmWrap)
  let confirmBtn = document.createElement('button')
  confirmBtn.setAttribute('class', 'confirm')
  confirmBtn.textContent = '✓'
  confirmWrap.appendChild(confirmBtn)
  let cancelBtn = document.createElement('button')
  cancelBtn.setAttribute('class', 'cancel')
  cancelBtn.textContent = 'X'
  confirmWrap.appendChild(cancelBtn)
  let readSpan = document.createElement('span')
  readSpan.textContent = "Yes"
  bookInfo.appendChild(readSpan)
}

function appendElements(){
  
  
  
  
}

function removeAttribute(){
  
}


function addBookToLibrary() {
  // do stuff here
  // click button --> create form prompt
  // user enter -- > title, author, pages, read
  // on submit -- addBookToLibrary
  // remove prompt
}

/*
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want.
Add a button on each book’s display to remove the book from the library.
*/