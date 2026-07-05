// =========================
// NEXVORA FULL ENGINE
// =========================

const posts = [
  {
  id: 9,
  title: "😳 Top 5 Free AI Tools That Can Make You Money in 2026 (Beginner Friendly)",
  content: `
🔥 Introduction

If you want to start making money online in 2026, AI tools are the fastest way to begin — even if you have zero experience.

In this guide, I’ll show you 5 FREE AI tools that people are already using to earn money online.

---

🚀 1. ChatGPT

ChatGPT helps you:
- Write content
- Create business ideas
- Do freelancing work
- Build blogs

👉 Many people use it to earn through Fiverr, blogging, and affiliate marketing.

---

⚡ 2. Canva AI

Canva AI allows you to:
- Design social media posts
- Create logos
- Make YouTube thumbnails

👉 You can sell designs online and earn money easily.

---

💰 3. Grammarly

Grammarly helps you:
- Fix grammar
- Improve writing quality

👉 Freelancers use it to get better-paid writing jobs.

---

🧠 4. Quillbot

Quillbot is used for:
- Paraphrasing content
- Article writing
- Blogging support

👉 Perfect for content creation and blogging income.

---

🔥 5. Notion AI

Notion AI helps you:
- Organize business ideas
- Manage projects
- Write content faster

👉 Many startup owners use it daily.

---

💡 How People Make Money Using These Tools

You can:
✔ Start freelancing
✔ Build a blog
✔ Do affiliate marketing
✔ Create YouTube content

---

🚀 Final Thoughts

You don’t need to be an expert.
You just need to start using these tools consistently.

AI is the fastest way to build online income in 2026.

👉 Start today. Don’t wait.
`,
  category: "AI"
}


];

let currentIndex = 0;
const loadPerScroll = 2;

let currentCategory = "all";
let searchQuery = "";


// =========================
// RENDER POSTS
// =========================
function renderPosts(reset = false) {
  const container = document.getElementById("post-container");
  if (!container) return;

  if (reset) {
    container.innerHTML = "";
    currentIndex = 0;
  }

  let filtered = posts.filter(post => {
    const matchCategory =
      currentCategory === "all" || post.category === currentCategory;

    const matchSearch =
      post.title.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery);

    return matchCategory && matchSearch;
  });

  let nextPosts = filtered.slice(currentIndex, currentIndex + loadPerScroll);

  nextPosts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <a href="post.html?id=${post.id}" class="btn primary">Read More</a>
    `;

    container.appendChild(card);
  });

  currentIndex += loadPerScroll;
}


// =========================
// CATEGORY FILTER
// =========================
function filterCategory(category) {
  currentCategory = category;
  renderPosts(true);
}


// =========================
// SEARCH
// =========================
window.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    searchBox.addEventListener("input", function () {
      searchQuery = this.value.toLowerCase();
      renderPosts(true);
    });
  }

  renderPosts();
});


// =========================
// INFINITE SCROLL
// =========================
window.addEventListener("scroll", () => {
  const scrollPosition = window.innerHeight + window.scrollY;
  const bottom = document.body.offsetHeight - 150;

  if (scrollPosition >= bottom) {
    renderPosts();
  }
});


// =========================
// SINGLE POST PAGE
// =========================
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const titleEl = document.getElementById("post-title");
  const contentEl = document.getElementById("post-content");

  if (id && titleEl && contentEl) {
    const post = posts.find(p => p.id == id);

    if (post) {
      titleEl.innerText = post.title;
      contentEl.innerText = post.content;
    }
  }
});


// smooth scroll
document.documentElement.style.scrollBehavior = "smooth";
