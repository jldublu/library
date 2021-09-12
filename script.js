let myLibrary = getLibraryFromStorage();
const bookContainer = document.querySelector('.book-container');

window.onload = displayAllBooks();
document.querySelector('.add-form').addEventListener('submit', addBookToLibrary);

let modal = document.querySelector('.modal');
let newBookButton = document.querySelector('button[name=new-book]');
let closeModal = document.querySelector('.close');

//open modal
newBookButton.onclick = function() {
  modal.style.display = 'block';
}

//close modal
closeModal.onclick = function() {
  modal.style.display = 'none';
}

//close modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

//delete book
window.onclick = function(event) {
  if (event.target.classList.contains('delete-book')) {
    myLibrary.splice(event.target.dataset.index, 1);
    populateStorage();
    location.reload();
  }
}

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
  const deleteButton = document.createElement('button');

  bookDiv.classList.add('book');
  titleP.classList.add('title');
  authorP.classList.add('author');
  pagesP.classList.add('pages');
  deleteButton.classList.add('delete-book');

  titleP.textContent = book.title;
  authorP.textContent = `By: ${book.author}`;
  pagesP.textContent = `Length: ${book.pages} pages`;
  deleteButton.textContent = 'Remove From Library'

  deleteButton.setAttribute('data-index', myLibrary.indexOf(book));

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(pagesP);
  bookDiv.appendChild(deleteButton);

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