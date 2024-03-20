import postData from "./postData.js";

const getPostHTML = (data) => {
  let heroHTML = "";
  let postsHTML = "";

  data.forEach((post, i) => {
    if (i === 0) {
      heroHTML += `
      <div class="hero-post grid">
        <img class="post-img hero-post__img" src="${post.img}">
        <div class="hero-post__img-overlay"></div>
        <div class="hero-post__content flex flex--column">
          <p class="post-date post-date--hero">${post.date}</p>
          <h2 class="post-title post-title--hero">${post.title}</h2>
          <p class="post-preview post-preview--hero">
            ${post.preview}
          </p>
        </div>
      </div>
      `;
    } else {
      postsHTML += `
      <div class="post__container flex flex--column">
        <div class="post-img__container">
          <img class="post-img" src="${post.img}">
          <div class="post-img__overlay"></div>
        </div>
        <p class="post-date">${post.date}</p>
        <div class="post-details flex flex--column">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-preview">
            ${post.preview}
          </p>
        </div>
      </div>
      `;
    }
  });

  const combinedHTML = `
    ${heroHTML}
    <div class="additional-posts grid">${postsHTML}</div>
  `;

  return combinedHTML;
};

const renderPostHTML = () =>
  (document.querySelector("#posts-container").innerHTML =
    getPostHTML(postData));

renderPostHTML();

const renderYear = () => {
  document.querySelector(
    "#footer__date"
  ).innerHTML = `Copyright &copy ${new Date().getFullYear()}`;
};

renderYear();

const toggleNavMenu = () => {
  document.querySelector("#nav-menu").classList.toggle("hidden");
};

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn--ham-menu")) {
    toggleNavMenu();
    document.body.classList.toggle("no-scroll");
  }
});
