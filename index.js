// --------------------------
//#region Initialization
// --------------------------
const bookList = document.querySelector(".books");
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
  const book = new Book(
    bookInfo.author,
    bookInfo.language,
    bookInfo.subject,
    bookInfo.title
  );
  bookshelf.addBook(book);
}

const render = () => {
  bookList.replaceChildren(bookshelf.render());
};

// Render the first time the page loads
bookshelf.filterVisibleBooks(() => true);
bookshelf.sortVisibleBooks();

render();

//#endregion Initialization

// --------------------------
//#region Searching
// --------------------------

const searchInput = document.querySelector("nav input");
const searchBy = document.querySelector(".searchBy");

 
  const searchBtnT = document.querySelector(".searchBtnT");
  const searchBtnA = document.querySelector(".searchBtnA");

  

  
  searchBtnT.addEventListener("click", () => {
    let query = searchInput.value.toLowerCase();
    const searchFn = (b) => b.title.toLowerCase().includes(query);
    bookshelf.filterVisibleBooks(searchFn);
    
    render();  
    });
  
    searchBtnA.addEventListener("click",()=>
    {
      let query = searchInput.value.toLowerCase();
    const searchFn = (b) => b.author.toString().toLowerCase().includes(query);
    bookshelf.filterVisibleBooks(searchFn);
    render();
    });
  





//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------

const sortBy = document.querySelector(".sortFrom");

sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "az") {
    sortFn = (a, b) => a.title.localeCompare(b.title);
  } else if (query === "za") {
    sortFn = (a, b) => b.title.localeCompare(a.title);
  } else if (query === "topics+") {
    
    sortFn = (a, b) => a.subject.length - b.subject.length;
  } 
  else if (query === "topics-") {
    sortFn = (a, b) => b.subject.length - a.subject.length;
  }

  bookshelf.sortVisibleBooks(sortFn);
  render();
});
//#endregion Sorting

// --------------------------
//#region Comments
// --------------------------
//Manage Books

const manageBooks = document.querySelector(".manageBooks");
const app = manageBooks.parentElement;

manageBooks.addEventListener("click", () => {
  const nTitle = document.createElement("input");
  nTitle.id = "nTitle";
  nTitle.type = "text";

  //arr input
  const nAuthor = document.createElement("input");
  nAuthor.id = "nAuthor";
  nAuthor.type = "text";

  const nLanguage = document.createElement("input");
  nLanguage.id = "nTitle";
  nLanguage.type = "text";

  //arr input
  const nSubject = document.createElement("input");
  nSubject.id = "nSubject";
  nSubject.type = "text";

  const nSubmit = document.createElement("button");
  nSubmit.id = "nSubmit";
  const sendIcon = `<span class="material-symbols-outlined">
      send</span>`;
      nSubmit.innerHTML = sendIcon;

app.append( nAuthor, nLanguage, nSubject, nTitle, nSubmit); 

nSubmit.addEventListener("click", () => {
  const nBook = new Book(nAuthor.value, nLanguage.value, nSubject.value, nTitle.value);
bookshelf.addBook(nBook);

bookshelf.render();
bookshelf.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
render();
})

});

//select comment button, create event listener for add comment button that sets hidden prop od input field to false, set input capacity max 

//#endregion Comments