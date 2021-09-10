let myLibrary = getLibraryFromStorage();
const bookContainer = document.querySelector('.book-container');

window.onload = displayAllBooks();
document.querySelector('.add-form').addEventListener('submit', addBookToLibrary);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = document.querySelector('input[name=title]').value;
  let author = document.querySelector('input[name=author]').value;
  let pages = document.querySelector('input[name=pages]').value;
  let book = new Book(title, author, pages);

  myLibrary.push(book);
  populateStorage();
  displayBook(book);
}

function displayBook(book) {
  const bookDiv = document.createElement('div');
  const titleP = document.createElement('p');
  const authorP = document.createElement('p');
  const pagesP = document.createElement('p');

  bookDiv.classList.add('book');
  titleP.classList.add('title');
  authorP.classList.add('author');
  pagesP.classList.add('pages');

  titleP.textContent = book.title;
  authorP.textContent = `By: ${book.author}`;
  pagesP.textContent = `Length: ${book.pages}`;

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(pagesP);

  bookContainer.appendChild(bookDiv);
}

function displayAllBooks() {
  myLibrary.forEach(book => {
    displayBook(book);
  });
}

function getLibraryFromStorage() {
  let array = [];
  if (localStorage.getItem('myLibrary') !== null) {
    return JSON.parse(localStorage.getItem('myLibrary'));
  }

  return array;
}

function populateStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}