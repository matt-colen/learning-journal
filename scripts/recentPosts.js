import postData from "./postData.js";
import { renderYear } from "./index.js";

const getPostHTML = (data, start, end) => {
  let postsHTML = "";

  for (let i = start; i <= end; i++) {
    console.log("loop");
    postsHTML += `
      <div class="post__container flex flex--column">
        <div class="post-img__container">
          <img class="post-img" src="${data[i].img}">
          <div class="post-img__overlay"></div>
        </div>
        <p class="post-date">${data[i].date}</p>
        <div class="post-details flex flex--column">
          <h2 class="post-title">${data[i].title}</h2>
          <p class="post-preview">
            ${data[i].preview}
          </p>
        </div>
      </div>
      `;
  }

  return postsHTML;
};

const renderPostHTML = () =>
  (document.querySelector("#posts-container").innerHTML = getPostHTML(
    postData,
    1,
    3
  ));

renderPostHTML(postData);

renderYear();
