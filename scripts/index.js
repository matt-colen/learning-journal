import postData from "./postData.js";

const getPostHTML = (data) => {
  let html = "";

  data.forEach((post, i) => {
    if (i === 0) {
      html += `
      <div class="hero-post">
        <p class="post-date">${post.date}</p>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-preview">
          ${post.preview}
        </p>
      </div>
      `;
    } else {
      html += `
      <div class="post">
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
