let myLibrary = [{title: '123', author: '123', pages: '123', read: false},
{title: '234', author: '543', pages: '345', read: true},
{title: '123', author: '123', pages: '123', read: false}
];

// VARIABLES

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
//EventListeners

newBook.addEventListener('click', userPrompt);
toggleBtn.addEventListener('click', buttonToggler);
nosubmitBtn.addEventListener('click', hideInputCard);
submitBtn.addEventListener('click', submitData)


let titleString = null // gets value from dataHandler
let authorString = null // gets value from dataHandler
let pagesString = null // gets value from dataHandler
let readStatus = false // true/false from buttonToggler

// BOOK CONSTRUCTOR

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}
/*
let book1 = new Book("Harry Potter i komnata tajemnic", "J.K Rowling", "585", "false")
let book2 = new Book("Harry Potter i kamien filozoficzny", "J.K Rowling", "666", "true")
let book3 = new Book("Harry Potter i wiezien azkabanu", "J.K Rowling", "522", "false")
let book4 = new Book("Harry Potter i czara ognia", "J.K Rowling", "896", "false")
let book5 = new Book("Harry Potter i zakon feniksa", "J.K Rowling", "145", "false")
let book6 = new Book("Harry Potter i ksiaze polkrwii", "J.K Rowling", "755", "false")
let book7 = new Book("Harry Potter", "J.K Rowling", "256", "true")
let book8 = new Book("Harry Potter", "J.K Rowling", "265", "true")
let book9 = new Book("Harry Potter", "J.K Rowling", "643", "true")

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)
myLibrary.push(book5)
myLibrary.push(book6)
myLibrary.push(book7)
myLibrary.push(book8)
myLibrary.push(book9)

*/

// BOOK INFORMATION




// DATA HANDLER 

function dataHandler(e){
  const inputClass = e.target.classList
  let key = e.which
  console.log(e.which)
  if (inputClass == 'title-input'){
    let titleStr = e.target.value
    titleString = titleStr
  } else if (inputClass == 'author-input'){
    let authorStr = e.target.value
    authorString = authorStr
  } else if (inputClass == 'pages-input'){
    if (this.value.length > 4){
      this.value = pagesString
      return
    } else {
      let pageStr = e.target.value
      pagesString = pageStr
    }
  }
}


// USER PROMPT FOR BOOK INFO

function userPrompt(){
  card.remove()
  let pages = document.createElement('div')
  let title = document.createElement('div')
  let author = document.createElement('div')
  addAttrubutes(card, 'class', 'card-dynamic')
  appendElements(card, mainWrapper)
  addAttrubutes(header, 'class', 'modify-buttons-dynamic')
  addAttrubutes(header, 'class', 'newBookText')
  addAttrubutes(headerText, "text", "Add new book")
  appendElements(header, card)
  appendElements(headerText, header)
  addAttrubutes(title, "class", "title-dynamic")
  addAttrubutes(titleInput, 'placeholder', 'Enter book title...')
  addAttrubutes(titleInput, 'class', 'title-input')
  addAttrubutes(titleInput, "maxlength", "46")
  appendElements(titleSpan, title)
  appendElements(titleInput, title)
  appendElements(title, card)
  addAttrubutes(author, "class", "author-dynamic")
  addAttrubutes(authorInput, "type", 'author-dynamic')
  addAttrubutes(authorInput, "placeholder", "Enter book author...")
  addAttrubutes(authorInput, 'class', 'author-input')
  addAttrubutes(authorInput, "maxlength", "32")
  appendElements(authorInput, author)
  appendElements(author, card)
  addAttrubutes(pages, 'class', 'pages-dynamic')
  addAttrubutes(pagesInput, 'type', 'pages')
  addAttrubutes(pagesInput, 'placeholder', 'Enter book pages...' )
  addAttrubutes(pagesInput, 'class', 'pages-input')
  appendElements(pagesInput, pages)
  appendElements(pages, card)
  addAttrubutes(toggle, 'class', 'toggle-dynamic')
  addAttrubutes(toggleBtn, 'class', 'OFF')
  addAttrubutes(toggleBtn, 'text', 'NOT READ')
  appendElements(toggleBtn, toggle)
  appendElements(toggle, card)
  addAttrubutes(submit, 'class', 'submit-dynamic')
  addAttrubutes(submitBtn, 'class', 'submitbtn')
  addAttrubutes(submitBtn, 'text', "ADD")
  addAttrubutes(nosubmitBtn, 'class', 'nosubmitbtn')
  addAttrubutes(nosubmitBtn, 'text', "CANCEL")
  appendElements(submitBtn, submit)
  appendElements(nosubmitBtn, submit)
  appendElements(submit, card)
  let inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.addEventListener('input', dataHandler))
  inputs.forEach(input => input.addEventListener('keydown', dataHandler))
}

// ADD TO LIBRARY

function submitData(){
  if (titleString == null || authorString == null || pagesString == null){
    return;
  } else if (this.textContent == "ADD"){
    let book = new Book(titleString, authorString, pagesString, readStatus)
    myLibrary.push(book)
    clearInputs()
    hideInputCard()
    displayBooks()
    console.log(myLibrary)
    return
  } else if (this.textContent == "SUBMIT"){
    myLibrary[this.data].title = titleString
    myLibrary[this.data].author = authorString
    myLibrary[this.data].pages = pagesString
    myLibrary[this.data].read = readStatus
    clearInputs()
    hideInputCard()
    displayBooks()
  }
}

// DISPLAY BOOKS

function displayBooks(){
  let card = document.querySelectorAll('.card')
  card.forEach(div => div.remove())
  for (let i = 0; i < myLibrary.length; i++){
  let cardBook = document.createElement('div')
  addAttrubutes(cardBook, "class", "card")
  addAttrubutes(card, "data", i)
  let bookParaContainer = document.createElement('div')
  addAttrubutes(bookParaContainer, "class", "modify-buttons")
  appendElements(bookParaContainer, cardBook)
  let bookParagraph = document.createElement('span')
  addAttrubutes(bookParagraph, "class", "book-paragraph")
  addAttrubutes(bookParagraph, "text", 'Book ' + (i + 1))
  addAttrubutes(bookParagraph, "data", i)
  appendElements(bookParagraph, bookParaContainer) 
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
  addAttrubutes(confirmBtn, "text", "...")
  addAttrubutes(confirmBtn, "data", i)
  let cancelBtn = document.createElement('button')
  addAttrubutes(cancelBtn, "class", "cancel")
  addAttrubutes(cancelBtn, "text", "X")
  addAttrubutes(cancelBtn, "data", i)
  let readSpan = document.createElement('button')
  addAttrubutes(readSpan, "class", "read-btn")
  addAttrubutes(readSpan, "type", "notread")
  addAttrubutes(readSpan, "text", "Not read")
  addAttrubutes(readSpan, "data", i)
  if (myLibrary[i].read == false){
    addAttrubutes(readSpan, "text", "Not read")
    addAttrubutes(readSpan, "type", "notread")
  } else if (myLibrary[i].read == true){
    addAttrubutes(readSpan, "text", "Read")
    addAttrubutes(readSpan, "type", "read")
  }
  appendElements(confirmWrap, bookInfo)
  appendElements(confirmBtn, confirmWrap)
  appendElements(cancelBtn, confirmWrap)
  appendElements(readSpan, bookInfo)
  appendElements(bookInfo, cardBook)
  appendElements(cardBook, mainWrapper)
  }
  let editBtns = document.querySelectorAll('.confirm')
  editBtns.forEach(button => button.addEventListener('click', editBook))
  let deleteBtns = document.querySelectorAll('.cancel')
  deleteBtns.forEach(button => button.addEventListener('click', deleteBook))
  let readBtns = document.querySelectorAll('.read-btn')
  readBtns.forEach(button => button.addEventListener('click', readToggler)) 
  removeAddButton()
  addAddButton()
  updateStatistic()  
}



// FILTERS

function updateStatistic(){
  booksInLibrary()
  noReadCheck()
  completedBooksCheck()
  completedPageCheck()
  totalPagesCheck()
}
// Books in library
function booksInLibrary(){
  const books = myLibrary.length
  let span = document.querySelector('.books')
  addAttrubutes(span, "text", books)
}

//Books total pages


function totalPagesCheck(){
  let totalPages = 0
  for (let i = 0; i < myLibrary.length; i++){
    let pages = myLibrary[i].pages
    totalPages += Number(pages)
  }
  let span = document.querySelector('.pages')
  addAttrubutes(span, "text", totalPages)
}

//Unfinished books
function noReadCheck(){
  const unreadBooks = myLibrary.filter(book => book.read == false);
  let unfinished = document.querySelector('.unfinished')
  unfinished.textContent = unreadBooks.length
  return unreadBooks.length
}
// Completed books
function completedBooksCheck(){
  const completedBooks = myLibrary.filter(book => book.read == true);
  let books = document.querySelector('.completedbooks')
  books.textContent = completedBooks.length
  return completedBooks.length
}

// completed pages
function completedBookFilter(){
  const books = myLibrary.filter(function (book) {
    return book.read !== false;
  });
  return books
}

function completedPageCheck(){
  let myArr = completedBookFilter()
  let completedPages = 0
  for (let i = 0; i < myArr.length; i++){
    let pages = myArr[i].pages
    completedPages += Number(pages)
  }
  let span = document.querySelector('.completedpages')
  addAttrubutes(span, "text", completedPages)
}





// BOOK INFORMATION



// EDIT BOOK

function editBook(){
  index = this.data
  title = myLibrary[index].title
  author = myLibrary[index].author
  pages = myLibrary[index].pages
  read = myLibrary[index].read
  console.log("You try to edit book " + title + " written by " + author + " which has " + pages + " pages " )
  return userEdit(index)
}

function userEdit(index){
  card.remove()
  let pages = document.createElement('div')
  let title = document.createElement('div')
  let author = document.createElement('div')
  addAttrubutes(card, 'class', 'card-dynamic')
  appendElements(card, mainWrapper)
  addAttrubutes(header, 'class', 'modify-buttons-dynamic')
  addAttrubutes(header, 'class', 'newBookText')
  addAttrubutes(headerText, "text", "Edit book: ")
  appendElements(header, card)
  appendElements(headerText, header)
  addAttrubutes(title, "class", "title-dynamic")
  addAttrubutes(titleInput, 'value', myLibrary[index].title)
  addAttrubutes(titleInput, 'class', 'title-input')
  appendElements(titleSpan, title)
  appendElements(titleInput, title)
  appendElements(title, card)
  addAttrubutes(author, "class", "author-dynamic")
  addAttrubutes(authorInput, "type", 'author-dynamic')
  addAttrubutes(authorInput, "value", myLibrary[index].author)
  addAttrubutes(authorInput, 'class', 'author-input')
  appendElements(authorInput, author)
  appendElements(author, card)
  addAttrubutes(pages, 'class', 'pages-dynamic')
  addAttrubutes(pagesInput, 'type', 'pages')
  addAttrubutes(pagesInput, 'value', myLibrary[index].pages )
  addAttrubutes(pagesInput, 'class', 'pages-input')
  appendElements(pagesInput, pages)
  appendElements(pages, card)
  addAttrubutes(toggle, 'class', 'toggle-dynamic')
  addAttrubutes(toggleBtn, 'class', 'OFF')
  addAttrubutes(toggleBtn, 'value', myLibrary[index].read)
  appendElements(toggleBtn, toggle)
  appendElements(toggle, card)
  addAttrubutes(submit, 'class', 'submit-dynamic')
  addAttrubutes(submitBtn, 'class', 'submitbtn')
  addAttrubutes(submitBtn, 'text', "SUBMIT")
  addAttrubutes(submitBtn, "data", index)
  addAttrubutes(nosubmitBtn, 'class', 'nosubmitbtn')
  addAttrubutes(nosubmitBtn, 'text', "CANCEL")
  appendElements(submitBtn, submit)
  appendElements(nosubmitBtn, submit)
  appendElements(submit, card)
  updateStatistic() 
}

// DELETE BOOK

function deleteBook(){
  index = this.data
  myLibrary.splice(index, 1)
  displayBooks()
}

// BUTTON TOGGLER

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

function readToggler() {
  let index = this.data
  let readStatus = myLibrary[index].read
  if (readStatus == false){
    this.classList = "read"
    myLibrary[index].read = true
    addAttrubutes(this, "text", "Read")
    addAttrubutes(this, "type", "read")
    updateStatistic() 
  } else if (readStatus == true){
    this.classList = "notread"
    myLibrary[index].read = false
    addAttrubutes(this, "text", "Not read")
    addAttrubutes(this, "type", "notread")
    updateStatistic() 
  }
  
}

// ATTRIBUTES

function clearInputs(){
  titleInput.value = null
  authorInput.value = null
  pagesInput.value = null
  readStatus = false
  /*
  titleString = null
  authorString = null
  pagesString = null
  readStatus = false
  */
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
  } else if (y == 'data'){
    element.data = z
  } else if (y == 'value'){
    element.value = z
  } else if (y == 'maxlength'){
    element.maxLength = z
  }
}

function addAddButton(){
  let addBook = document.createElement('button')
  addAttrubutes(addBook, "class", "new-book")
  addAttrubutes(addBook, "text", "+")
  appendElements(addBook, mainWrapper)
  addBook.addEventListener('click', userPrompt);
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