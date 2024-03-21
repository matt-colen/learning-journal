import postData from "./postData.js";

const createNewPage = (i) => {
  const newPage = document.createElement("html");

  const head = document.createElement("head");
  head.innerHTML = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${postData[i].title}</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../styles/index.css" />
  <link rel="stylesheet" href="../styles/about.css" />
  <script type="module" src="../scripts/recentPosts.js" defer></script>
  `;

  const body = document.createElement("body");
  body.innerHTML = `
  <header class="header">
      <nav class="nav">
        <ul class="nav-list flex flex--align-center">
          <li class="nav-logo__li">
            <a class="nav-logo__link flex flex--align-center" href="index.html">
              <img
                class="nav-logo__icon"
                src="../assets/images/logo.png"
                alt="Learning journal logo"
              />
              <span class="nav-logo__wordmark">My learning journal</span>
            </a>
          </li>
          <li class="nav-li hidden">
            <a class="nav-link" href="../index.html">Home</a>
          </li>
          <li class="nav-li hidden">
            <a class="nav-link" href="about.html">About Me</a>
          </li>
          <li class="ham-btn-li">
            <button class="btn btn--ham-menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </li>
        </ul>

        <ul class="nav-menu flex flex--column hidden" id="nav-menu">
          <li class="ham-btn-li">
            <button class="btn btn--ham-menu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </li>
          <li class="nav-li">
            <a class="nav-link" href="../index.html">Home</a>
          </li>
          <li class="nav-li">
            <a class="nav-link" href="about.html">About Me</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main grid">
      <section class="about-section grid" id="about-section">
        <div class="about-hero grid">
          <div class="about-img__container">
            <img
              class="about-img"
              src="../assets/images/matt-colen-small.png"
              alt="Matt Colen profile pic"
            />
          </div>
          <div class="about-hero__text flex flex--column">
            <h1 class="about-h1">
              Hi there! My name is Matt and welcome to my learning journal.
            </h1>
            <p>
              After several months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects projects and meet like-minded
              peers.
            </p>
          </div>
        </div>
        <div class="about-text flex flex--column">
          <h2>How I stay committed to learning</h2>
          <p>
            I like to think of myself as a lifelong learner. I used to spend
            hours and hours learning, then try to create simple projects using
            what I learned or work new techniques into existing projects.
          </p>
          <p>
            While that was fun, I felt like it would be helpful to share what I
            was learning and most things about my journey with the world.
          </p>
          <h2>How I got started</h2>
          <p>
            I started simple and gradually grew my learning journal site. I
            would take notes about what I was learning. After each learning
            session, I'd use my notes to not only reflect on what I learned but
            also write short summaries of what I learned using my own words.
          </p>
          <p>
            That helped me grow what I was learning, and I realized that posting
            my learning summaries was also helping others learn and stay
            motivated.
          </p>
        </div>
      </section>

      <section id="posts-section" class="posts-section">
        <h2>Recent Posts</h2>
        <div class="posts-container grid" id="posts-container">
          <!-- This is where the post data populates  -->
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p class="footer__text">My Learning Journal</p>
        <p class="footer__date" id="footer__date"></p>
      </div>
    </footer>
  `;

  newPage.appendChild(head);
  newPage.appendChild(body);

  // Converts the new page element to string
  const pageHTML = newPage.outerHTML;

  // Opens a new window and write the HTML content
  const newWindow = window.open();
  newWindow.document.write(pageHTML);
};

export default createNewPage;
