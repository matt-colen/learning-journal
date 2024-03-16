import postData from "./postData.js";

const getPostHTML = (data) => {
  let html = "";

  data.forEach((post, i) => {
    if (i === 0) {
      html += `
      <div class="hero-post">
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
      html += `
      <div class="post row-2">
        <img class="post-img" src="${post.img}">
        <p class="post-date">${post.date}</p>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-preview">
          ${post.preview}
        </p>
      </div>
      `;
    }
  });

  return html;
};

const renderPostHTML = () =>
  (document.querySelector("#posts-section").innerHTML = getPostHTML(postData));

renderPostHTML();
