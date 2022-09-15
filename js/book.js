function Book(author, language, subject, title) {
  this.author = author;
  this.language = language;
  this.subject = subject;
  this.title = title;

  this.render = () => {
    const li = document.createElement("li");
    li.textContent = `${this.title} by  ${this.author} Topics: ${this.subject.length}`;
    const fav = document.createElement("button");

    fav.id = "fav-button";
    const heartPlus = `<span class="material-symbols-outlined">
    heart_plus
    </span>` 
    ;
    fav.innerHTML = heartPlus;
    fav.hidden = false;

    const commnt = document.createElement("button");
    commnt.id = "commBtn";
    const commntIcon = `<span class="material-symbols-outlined">
    add_comment
    </span>`
    commnt.innerHTML = commntIcon;

    const commntInput = document.createElement("input");
    commntInput.hidden = true;

    fav.addEventListener('click', function () {
      const heart = `<span class="material-symbols-outlined">
      favorite
      </span>`;
      fav.innerHTML = heart;
      const li = fav.parentElement;
      li.className = "fav";
    });

    li.append(fav,commnt, commntInput);    
    return li;

  };

}
