let myLibrary = [];

let newBook = document.querySelector('.new-book') 

function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

/*
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want.
Add a button on each book’s display to remove the book from the library.
*/