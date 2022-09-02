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



function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = myLibrary.length
}

const book1 = new Book("Jozef z Bazin", "Wariat na rowerze", "555", "yes")
const book2 = new Book("Drugi Autor", "Druga ksiazka", "123", "no")

function submitData(){
  let book = new Book(titleString, authorString, pagesString, readStatus)
  myLibrary.push(book)
  clearInputs()
  hideInputCard()
  return addBookToLibrary(book)
}


function clearInputs(){
  titleInput.value = null
  authorInput.value = null
  pagesInput.value = null
  readStatus = false
}

function addBookToLibrary(book) {
  
}

function removeAddButton(){
  newBook.remove()
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
  card.remove()
}

function removeAttribute(element){
  
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

function createCard(){
  //const hasClass = card.classList.contains('hidden')
  addAttrubutes(card, 'class', 'card-dynamic')
  appendElements(card, mainWrapper)
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





/*
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want.
Add a button on each book’s display to remove the book from the library.
*/