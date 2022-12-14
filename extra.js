let myLibrary = [];

const newBook = document.querySelector('.new-book')
const mainWrapper = document.querySelector('.main-content')
const contentWrapper = document.querySelector('.content-wrapper')
let card = document.createElement('div')
let header = document.createElement('div')
let headerText = document.createElement('span')
let title = document.createElement('div')
let titleSpan = document.createElement('span')
let titleInput = document.createElement('input')
let author = document.createElement('div')
let authorInput = document.createElement('input')
let pages = document.createElement('div')
let pagesInput = document.createElement('input')
let toggle = document.createElement('div')
let toggleBtn = document.createElement('button')
let submit = document.createElement('div')
let submitBtn = document.createElement('button')
let nosubmitBtn = document.createElement('button')
newBook.addEventListener('click', userPrompt);
toggleBtn.addEventListener('click', buttonToggler);
nosubmitBtn.addEventListener('click', hideInputCard);
submitBtn.addEventListener('click', submitData)

let titleString = null // gets value from dataHandler
let authorString = null // gets value from dataHandler
let pagesString = null // gets value from dataHandler
let readStatus = false // true/false from buttonToggler







function Book(title, author, pages, read, index) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = index
}

const book1 = new Book("Jozef z Bazin", "Wariat na rowerze", "555", "yes", "0")
const book2 = new Book("Drugi Autor", "Druga ksiazka", "123", "no", "1")
const book3 = new Book("Jozef z Bazin", "Trzecia ksiazka", "555", "yes", "2")
const book4 = new Book("Jozef z Bazin", "czwarta ksiazka", "555", "yes", "3")

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)
console.log(myLibrary)

function displayBooks(){
  for (let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i].read)
    let cardBook = document.createElement('div')
    addAttrubutes(cardBook, "class", "card")
    let topButtons = document.createElement('div')
    addAttrubutes(topButtons, "class", "modify-buttons")
    appendElements(topButtons, cardBook)
    let editBtn = document.createElement('button')
    addAttrubutes(editBtn, "class", "edit")
    addAttrubutes(editBtn, "text", 'EDIT')
    let deleteBtn = document.createElement('button')
    addAttrubutes(deleteBtn, "class", "delete")
    addAttrubutes(deleteBtn, "text", "DELETE")
    appendElements(editBtn, topButtons)
    appendElements(deleteBtn, topButtons)
    let bookSpan = document.createElement('span')
    addAttrubutes(bookSpan, "text", "Book: ")
    let bookPara = document.createElement('p')
    let title = document.createElement('div')
    addAttrubutes(title, "class", "title")
    addAttrubutes(bookPara, "text", myLibrary[i].title)
    appendElements(bookSpan, title)
    appendElements(bookPara, title)
    appendElements(title, cardBook)
    let author = document.createElement('div')
    let authorSpan = document.createElement('span')
    addAttrubutes(author, "class", "author")
    addAttrubutes(authorSpan, "text", myLibrary[i].author)
    appendElements(authorSpan, author)
    appendElements(author, cardBook)
    let bookInfo = document.createElement('div')
    addAttrubutes(bookInfo, "class", "book-info")
    let pagesSpan = document.createElement('span')
    addAttrubutes(pagesSpan, "text", myLibrary[i].pages)
    appendElements(pagesSpan,bookInfo)
    let confirmWrap = document.createElement('div')
    addAttrubutes(confirmWrap, "class", "confirm-wrap")
    let confirmBtn = document.createElement('button')
    addAttrubutes(confirmBtn, "class", "confirm")
    addAttrubutes(confirmBtn, "text", "???")
    let cancelBtn = document.createElement('button')
    addAttrubutes(cancelBtn, "class", "cancel")
    addAttrubutes(cancelBtn, "text", "X")
    let readSpan = document.createElement('span')
    if (myLibrary[i].read == false){
      addAttrubutes(readSpan, "text", "No")
    } else if (myLibrary[i].read == true){
      addAttrubutes(readSpan, "text", "Yes")
    }
    appendElements(confirmWrap, bookInfo)
    appendElements(confirmBtn, confirmWrap)
    appendElements(cancelBtn, confirmWrap)
    appendElements(readSpan, bookInfo)
    appendElements(bookInfo, cardBook)
    appendElements(cardBook, mainWrapper)
    }
    removeAddButton()
    hideInputCard()
    addAddButton()
}


function submitData(){
  /*
  if (titleString == null || authorString == null || pagesString == null){
    return;
  }*/
  let book = new Book(titleString, authorString, pagesString, readStatus)
  myLibrary.push(book)
  console.log(book)
  clearInputs()
  removeAddButton()
  hideInputCard()
  addAddButton()
  return //addBookToLibrary(book.title, book.author, book.pages, book.read)
}


function clearInputs(){
  titleInput.value = null
  authorInput.value = null
  pagesInput.value = null
  readStatus = false
}


function addBookToLibrary(bookTitle, authorText, pagesText, bookStatus) {
  let cardBook = document.createElement('div')
  addAttrubutes(cardBook, "class", "card")
  let topButtons = document.createElement('div')
  addAttrubutes(topButtons, "class", "modify-buttons")
  appendElements(topButtons, cardBook)
  let editBtn = document.createElement('button')
  addAttrubutes(editBtn, "class", "edit")
  addAttrubutes(editBtn, "text", 'EDIT')
  let deleteBtn = document.createElement('button')
  addAttrubutes(deleteBtn, "class", "delete")
  addAttrubutes(deleteBtn, "text", "DELETE")
  appendElements(editBtn, topButtons)
  appendElements(deleteBtn, topButtons)
  let bookSpan = document.createElement('span')
  addAttrubutes(bookSpan, "text", "Book: ")
  let bookPara = document.createElement('p')
  let title = document.createElement('div')
  addAttrubutes(title, "class", "title")
  addAttrubutes(bookPara, "text", bookTitle)
  appendElements(bookSpan, title)
  appendElements(bookPara, title)
  appendElements(title, cardBook)
  let author = document.createElement('div')
  let authorSpan = document.createElement('span')
  addAttrubutes(author, "class", "author")
  addAttrubutes(authorSpan, "text", authorText)
  appendElements(authorSpan, author)
  appendElements(author, cardBook)
  let bookInfo = document.createElement('div')
  addAttrubutes(bookInfo, "class", "book-info")
  let pagesSpan = document.createElement('span')
  addAttrubutes(pagesSpan, "text", pagesText)
  appendElements(pagesSpan,bookInfo)
  let confirmWrap = document.createElement('div')
  addAttrubutes(confirmWrap, "class", "confirm-wrap")
  let confirmBtn = document.createElement('button')
  addAttrubutes(confirmBtn, "class", "confirm")
  addAttrubutes(confirmBtn, "text", "???")
  let cancelBtn = document.createElement('button')
  addAttrubutes(cancelBtn, "class", "cancel")
  addAttrubutes(cancelBtn, "text", "X")
  let readSpan = document.createElement('span')
  if (readStatus == false){
    addAttrubutes(readSpan, "text", "No")
  } else if (readStatus == true){
    addAttrubutes(readSpan, "text", "Yes")
  }
  appendElements(confirmWrap, bookInfo)
  appendElements(confirmBtn, confirmWrap)
  appendElements(cancelBtn, confirmWrap)
  appendElements(readSpan, bookInfo)
  appendElements(bookInfo, cardBook)
  appendElements(cardBook, mainWrapper)
  
  deleteBtn.addEventListener('click', deleteBook)
}

function deleteBook(){
  console.log(book)
}

function addAddButton(){
  let addBook = document.createElement('button')
  addAttrubutes(addBook, "class", "new-book")
  addAttrubutes(addBook, "text", "+")
  appendElements(addBook, mainWrapper)
  addBook.addEventListener('click', userPrompt);
}

function bookContainer(titleString, authorString, pagesString, readStatus){
  
}


function dataHandler(e){
  const inputClass = e.target.classList
  if (inputClass == 'title-input'){
    let titleStr = e.target.value
    titleString = titleStr
  } else if (inputClass == 'author-input'){
    let authorStr = e.target.value
    authorString = authorStr
  } else if (inputClass == 'pages-input'){
    let pageStr = e.target.value
    pagesString = pageStr
  }
}






function userPrompt(){ // prompts user with form
  createCard()
  createCardHeader()
  createTitle()
  createAuthor()
  createPages()
  createReadToggle()
  createSubmit()
  let inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.addEventListener('input', dataHandler))
}

function createCard(type){
  //const hasClass = card.classList.contains('hidden')
  addAttrubutes(card, 'class', 'card-dynamic')
  appendElements(card, mainWrapper)
  if (type == 'book'){
    addAttrubutes(card, 'class', 'card')
  }
}

function createCardHeader(){
  addAttrubutes(header, 'class', 'modify-buttons-dynamic')
  addAttrubutes(header, 'class', 'newBookText')
  addAttrubutes(headerText, "text", "Add new book")
  appendElements(header, card)
  appendElements(headerText, header)
}

function createTitle(){
  addAttrubutes(title, "class", "title-dynamic")
  addAttrubutes(titleInput, 'placeholder', 'Enter book title...')
  addAttrubutes(titleInput, 'class', 'title-input')
  appendElements(titleSpan, title)
  appendElements(titleInput, title)
  appendElements(title, card)
}

function createAuthor(){
  addAttrubutes(author, "class", "author-dynamic")
  addAttrubutes(authorInput, "type", 'author-dynamic')
  addAttrubutes(authorInput, "placeholder", "Enter book author...")
  addAttrubutes(authorInput, 'class', 'author-input')
  appendElements(authorInput, author)
  appendElements(author, card)
}

function createPages(){
  addAttrubutes(pages, 'class', 'pages-dynamic')
  addAttrubutes(pagesInput, 'type', 'pages')
  addAttrubutes(pagesInput, 'placeholder', 'Enter book pages...' )
  addAttrubutes(pagesInput, 'class', 'pages-input')
  appendElements(pagesInput, pages)
  appendElements(pages, card)
}

function createReadToggle(){
  addAttrubutes(toggle, 'class', 'toggle-dynamic')
  addAttrubutes(toggleBtn, 'class', 'OFF')
  addAttrubutes(toggleBtn, 'text', 'NOT READ')
  appendElements(toggleBtn, toggle)
  appendElements(toggle, card)
}

function createSubmit(){
  addAttrubutes(submit, 'class', 'submit-dynamic')
  addAttrubutes(submitBtn, 'class', 'submitbtn')
  addAttrubutes(submitBtn, 'text', "ADD")
  addAttrubutes(nosubmitBtn, 'class', 'nosubmitbtn')
  addAttrubutes(nosubmitBtn, 'text', "CANCEL")
  appendElements(submitBtn, submit)
  appendElements(nosubmitBtn, submit)
  appendElements(submit, card)
}

function buttonToggler(e){
  const hasClass = e.target.classList.contains('OFF')
  if (hasClass == true){
    toggleBtn.classList.value = "ON"
    toggleBtn.textContent = "READ"
    readStatus = hasClass
  } else if(hasClass == false){
    toggleBtn.classList.value = "OFF"
    toggleBtn.textContent = "NOT READ"
    readStatus = hasClass
  }
}

function addAttrubutes(x, y, z){
  let element = x
  if (y == 'class'){
    element.classList = z
  } else if(y == 'text'){
    element.textContent = z
  } else if (y == 'placeholder'){
    element.placeholder = z
  } else if (y == 'type'){
    element.type = z
  }
}

function appendElements(element, parent){
  parent.appendChild(element)
}

function hideInputCard(){
  titleSpan.remove()
  titleInput.remove()
  authorInput.remove()
  card.remove()
}

function removeAddButton(){
  let button = document.querySelector('.new-book')
  button.remove()
}



/*
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own ???card???. 
It might help for now to manually add a few books to your array so you can see the display.
Add a ???NEW BOOK??? button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it???s been read and anything else you might want.
Add a button on each book???s display to remove the book from the library.
*/