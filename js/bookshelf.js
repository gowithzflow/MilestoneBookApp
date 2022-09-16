function Bookshelf(books = []) {
  this.books = books;
  this.visibleBooks = books;
  this.favorites = [];

  this.addBook = function (book) {
    this.visibleBooks.push(book);
    console.log(this.visibleBooks.length);
  };

  this.addfav = function(book){
    this.favorites.push(book);
  };

  this.removeBook = function (book) {
    // Find a book with the same title
    //str book = book.title of b
    // const ttl = 
    // const idx = this.books.map((b) => b.title).indexOf(book["book"]);
    
    
    this.visibleBooks.splice(book, 1);

      return this.visibleBooks;
    // if (idx !== -1) {
    //   this.visibleBooks.splice(idx, 1);
    //   console.log(idx);

    //   return this.visibleBooks;
    // } else {
    //   return null;
    // }
  };

  /* NOTE: Change render! This is currently a barebones template. */
  this.render = function () {
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b,i) => b.render(i));
    
    ul.replaceChildren(...books);
    return ul;
  };

  // This allows us to maintain the original list of books
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
  };

  this.sortVisibleBooks = function (sortFn) {
    this.visibleBooks.sort(sortFn);
  };
}
