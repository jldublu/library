let myLibrary = [new Book('Title1', 'Author1', 100), new Book('Title2', 'Author2', 101)];
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
  let author = '';
  let pages = '';
  let book = new Book(title, author, pages);

  myLibrary.push(book);
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