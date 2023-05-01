const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks() {
 
    const availableBooks = books.filter(book => book.isAvailable);
    
    return availableBooks;
  }
  const availableBooks = getAvailableBooks();
console.log('Available books:', availableBooks);
// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(books, authorName) {
    return books.filter(book => book.author == authorName);
  }
  let authorName = 'J.D. Salinger';
let booksByAuthor = getBooksByAuthor(books, authorName);
console.log(booksByAuthor);
getBooksByAuthor(booksByAuthor);



// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
//     publicationYear, and isAvailable).

function addNewBook(book) {
    if (!book.author , !book.publicationYear , !book.isAvailable) {
      console.log("Error: The book object is missing some required properties.");
      return;
    }
    
    books.push(book);
    console.log("The new book has been added to the library:", book);
  }
  addNewBook()


// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title) {

    let  book = books.find(book => book.title === title);
    if (!book) {
      console.log('The book is not available.');
      return;
    }
    book.isAvailable = false;
    console.log('The book has been checked out:', book);
  }
  checkoutBook(title);



    
    

// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

function returnBook(title) {
 
  const book = books.find(book => book.title === title);
  

  if (!book) {
    console.log('The book does not belong to the library.');
    return;
  }
  
  book.isAvailable = true;
  console.log('The book has been returned:', book);
}

returnBook('The Catcher in the Rye');
