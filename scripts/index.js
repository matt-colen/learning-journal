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
        <div class="hero-post__content">
          <p class="post-date">${post.date}</p>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-preview">
            ${post.preview}
          </p>
        </div>
      </div>
      `;
    } else {
      postsHTML += `
      <div>
        <div class="post-img__container">
          <img class="post-img" src="${post.img}">
          <div class="post-img__overlay"></div>
        </div>
        <p class="post-date">${post.date}</p>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-preview">
          ${post.preview}
        </p>
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
  (document.querySelector("#posts-section").innerHTML = getPostHTML(postData));

renderPostHTML();
