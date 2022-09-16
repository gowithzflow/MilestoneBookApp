function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;
  this.comments = [];

  this.addCom = (str) => {
    this.comments.push(str);
    const p = document.createElement("p");
    p.class = "comments";
    p.textContent = str;

    console.log(this.comments);
    return this.comments;
  };

  this.render = (i) => {
    const li = document.createElement("li");
    li.className = "book";
    li.id = `${i}`;

    li.textContent = `${this.title} by  ${this.author}`;


    //   const fav = document.createElement("button");
    // fav.id = "favBtn";
    // const heartPlus = `<span
    // class="material-symbols-outlined">
    // heart_plus</span>`;

    // fav.innerHTML = heartPlus;
    
    const comSection = document.createElement("ul");
    comSection.className = "commentList";
    
    
    const delBtn = document.createElement("button");
    delBtn.id = "delBtn";
    delBtn.innerHTML = `<span class="material-symbols-outlined">
    delete
    </span>`;

    delBtn.addEventListener("click", () =>{
      //return parent item of button to a var to id book to delete. 2. call bookshelf to delete specified book 3. re render
      const li = delBtn.parentElement;
      const ul = li.parentElement;
      console.log(ul);
      var dBook = delBtn.parentElement.id;
      dBook = parseInt(dBook);
      bookshelf.removeBook(dBook);
      bookshelf.render();
    bookshelf.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));
    ul.append(li);
    render();
    return 
    });

    const comBtn = document.createElement("button");
    comBtn.id = "comBtn";

    const comIcon = `<span class="material-symbols-outlined">add_comment
    </span>`;
    comBtn.innerHTML = comIcon;

    comBtn.addEventListener('click', () => {
      
      console.log(li);
      const cInput = document.createElement("input");
      cInput.id = "comInput";
      cInput.type = "text";

      //set input capacity max 
      cInput.minLength = "1";
      cInput.maxLength = "280";

      const sendIcon = `<span class="material-symbols-outlined">
      send</span>`;

      const sendCom = document.createElement("button");
      sendCom.id = "sendBtn"
      sendCom.innerHTML = sendIcon;

      sendCom.addEventListener('click', () => {
        const comVal = cInput.value;
        this.addCom(comVal);
        const li = document.createElement("li")
        li.className = "comment";
        li.textContent = comVal;
        console.log(li);

          cInput.value = "";
          cInput.hidden = true;
          sendCom.hidden = true;
          comSection.append(li);
        
      });

      li.append(cInput,sendCom)
    });
    li.append(delBtn, comBtn, comSection);
    return li;
  };
}

    // --------------------------
//#region Comments
// -------------------------

//#endregion Comments