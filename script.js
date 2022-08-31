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
let pagesInput = document.createElement('input')
let toggle = document.createElement('div')
let toggleBtn = document.createElement('button')
let submit = document.createElement('div')
let submitBtn = document.createElement('button')
let nosubmitBtn = document.createElement('button')
newBook.addEventListener('click', userPrompt);
toggleBtn.addEventListener('click', buttonToggler);
nosubmitBtn.addEventListener('click', hideInputCard)

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


const book1 = new Book("Jozef z Bazin", "Wariat na rowerze", "555", "yes")
const book2 = new Book("Drugi Autor", "Druga ksiazka", "123", "no")




/*
let bookInfo = document.createElement('div')
let pageSpan = document.createElement('span')
let confirmWrap = document.createElement('div')
let confirmBtn = document.createElement('button')
let cancelBtn = document.createElement('button')
let readSpan = document.createElement('span')
*/



function userPrompt(){ // prompts user with form
  createCard()
  createCardHeader()
  createTitle()
  createAuthor()
  createPages()
  createReadToggle()
  createSubmit()
}

function hideInputCard(){
  card.remove()
}

function createCard(){
  const hasClass = card.classList.contains('hidden')
  if (hasClass == false){
    card.setAttribute('class', 'card-dynamic')
    mainWrapper.appendChild(card)
  } else if(hasClass == true){
    card.classList.remove("hidden")
    mainWrapper.appendChild(card)
  }
}


function createCardHeader(){

  header.setAttribute('class', 'modify-buttons-dynamic')
  headerText.setAttribute("class", 'newBookText' )
  headerText.textContent = "Add new book"
  card.appendChild(header)
  header.appendChild(headerText)
}

function createTitle(){
  title.setAttribute('class', 'title-dynamic')
  titleInput.setAttribute('placeholder', 'Enter book title...')
  title.appendChild(titleSpan)
  title.appendChild(titleInput)
  card.appendChild(title)
}

function createAuthor(){
  author.setAttribute('class', 'author-dynamic')
  authorInput.setAttribute('type' , 'author-dynamic')
  authorInput.setAttribute('placeholder', 'Enter book author...')
  author.appendChild(authorInput)
  card.appendChild(author)
}

function createPages(){
  let pages = document.createElement('div')
  pages.setAttribute('class', 'pages-dynamic')
  pagesInput.setAttribute('type', 'pages')
  pagesInput.setAttribute('placeholder', 'Enter book pages...')
  pages.appendChild(pagesInput)
  card.appendChild(pages)
}

function createReadToggle(){
  toggle.setAttribute('class', 'toggle-dynamic')
  toggleBtn.setAttribute('class', 'OFF')
  toggleBtn.textContent = "NOT READ"
  toggle.appendChild(toggleBtn)
  card.appendChild(toggle)
}

function createSubmit(){
  submit.setAttribute('class', 'submit-dynamic')
  submitBtn.setAttribute('class', 'submitbtn')
  submitBtn.textContent = "ADD"
  nosubmitBtn.setAttribute('class', 'nosubmitbtn')
  nosubmitBtn.textContent = "CANCEL"
  submit.appendChild(submitBtn)
  submit.appendChild(nosubmitBtn)
  card.appendChild(submit)
}

function createBookInfo(){
  bookInfo.setAttribute('class', 'book-info-dynamic')
  card.appendChild(bookInfo);
  // page
  pageSpan.textContent = "666"
  bookInfo.appendChild(pageSpan)
  //button wrap
  confirmWrap.setAttribute('class', 'confirm-wrap-dynamic')
  bookInfo.appendChild(confirmWrap)
  // confirm btn
  confirmBtn.setAttribute('class', 'confirm-dynamic')
  confirmBtn.textContent = '✓'
  confirmWrap.appendChild(confirmBtn)
  // cancel btn
  cancelBtn.setAttribute('class', 'cancel-dynamic')
  cancelBtn.textContent = 'X'
  confirmWrap.appendChild(cancelBtn)
  // read 
  readSpan.textContent = "Yes"
  bookInfo.appendChild(readSpan)
  console.log(card)
}

function buttonToggler(e){
  const hasClass = e.target.classList.contains('OFF')
  console.log(hasClass)
  if (hasClass == true){
    console.log(toggleBtn.classList.value)
    toggleBtn.classList.value = "ON"
    toggleBtn.textContent = "READ"
  } else if(hasClass == false){
    toggleBtn.classList.value = "OFF"
    toggleBtn.textContent = "NOT READ"
  }
}

function setAtribute(){


  // to card



  //title


  //author


  // book-info


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