// =========================
// NEXVORA FULL ENGINE
// =========================

const posts = [
  {
    id: 1,
    title: "😳 This AI tool can replace 5 jobs",
    content: "No coding needed. Free to start. People are already making money with it.",
    category: "AI"
  },
  {
    id: 2,
    title: "💰 Make $10 online in 10 minutes",
    content: "Simple task-based method. Works even for beginners.",
    category: "Money"
  },
  {
    id: 3,
    title: "⚡ Secret AI hack nobody is talking about",
    content: "This workflow saves 3 hours daily using automation tools.",
    category: "AI"
  },
  {
    id: 4,
    title: "🚀 Earn Passive Income with AI",
    content: "Automate simple tasks and build income streams online.",
    category: "Money"
  },
  {
    id: 5,
    title: "🧠 AI Productivity Hack",
    content: "Use AI tools to double your output in half the time.",
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
