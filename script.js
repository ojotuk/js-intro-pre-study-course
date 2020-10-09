const modal = document.getElementById("modal-section");
const modalBtn = document.getElementById("trigger-modal");
const cancelBtn = document.getElementById("cancel-modal");
const addBtn = document.getElementById("add-note");
const title = document.getElementById("title");
const content = document.getElementById("content");
let articleList = document.getElementsByClassName("article");
let articleCount = document.getElementById("article-count");
const articleContainer = document.getElementById("article-container");

articleCount.innerHTML = `You have ${articleList.length} notes`;

modalBtn.addEventListener("click", () => {
  modal.classList.add("modal-open");
});
cancelBtn.addEventListener("click", () => {
  modal.classList.remove("modal-open");
  // reset modal content
  title.value = "";
  content.value = "";
});

addBtn.addEventListener("click", () => {
  //get value of inputs
  const titleVal = title.value;
  const contentVal = content.value;
  //get date
  const date = new Date().toLocaleDateString();

  //collect previous content
  const prevJournal = articleContainer.innerHTML;
  //set container to prev content and newly added
  articleContainer.innerHTML = `<article class="article">
    <h2>${date}: ${titleVal}</h2>
    <p>${contentVal}</p>
    </article> ${prevJournal}`;

  // close modal
  modal.classList.remove("modal-open");
  // reset modal content
  title.value = "";
  content.value = "";

  //   update note count
  articleCount.innerHTML = `You have ${articleList.length} notes`;
});
