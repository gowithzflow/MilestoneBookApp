function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;

  this.render = () => {
    const li = document.createElement("li");
    li.textContent = this.title;
    const fav = document.createElement("button");

    const rmv = 
        fav.id = "fav-button";
        fav.textContent = "add favorite";

        const comment = document.createElement("input");
        comment.type = Text;
        comment.size = 30;
        comment.placeholder = "add comment here";

        fav.addEventListener('click', function(){
            fav.textContent = "*";
            const li = fav.parentElement;
            li.className = "fav";
           });

        li.append(fav);
        li.append(comment);
    return li;

  };

}
