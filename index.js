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
bookshelf.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
render();

//#endregion Initialization

// --------------------------
//#region Searching
// --------------------------

const searchInput = document.querySelector("nav input");
const searchBy = document.querySelector(".searchBy");

 searchBy.addEventListener("change", () =>{
  const searchBtn = document.querySelector(".searchBtn");
  let query = searchInput.value.toLowerCase();

  if (searchBy.value = "title"){
  searchBtn.addEventListener("click", () => {
   
    const searchFn = (b) => b.title.toLowerCase().includes(query);
    bookshelf.filterVisibleBooks(searchFn);
    render();  
    })
  };

  if(searchBy.value = "author"){
    searchBtn.addEventListener("click",()=>
    {
       // console.log(auth);
    const searchFn = (b) => b.author.toString().toLowerCase().includes(query);
    bookshelf.filterVisibleBooks(searchFn);
    render();
    })
  };

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

//select comment button, create event listener for add comment button that sets hidden prop od input field to false, set input capacity max 

//#endregion Comments