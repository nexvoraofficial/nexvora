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
  }
];

let currentCategory = "all";
let searchQuery = "";


// RENDER POSTS (MAIN ENGINE)
function renderPosts() {
  const container = document.getElementById("post-container");
  if (!container) return;

  container.innerHTML = "";

  const filtered = posts.filter(post => {
    const matchCategory =
      currentCategory === "all" || post.category === currentCategory;

    const matchSearch =
      post.title.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery);

    return matchCategory && matchSearch;
  });

  filtered.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 90)}...</p>
      <a href="post.html?id=${post.id}" class="btn primary">Read More</a>
    `;

    container.appendChild(card);
  });
}


// CATEGORY FILTER (FIXED)
function filterCategory(category) {
  currentCategory = category;
  renderPosts();
}


// SEARCH (FIXED)
window.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    searchBox.addEventListener("input", function () {
      searchQuery = this.value.toLowerCase();
      renderPosts();
    });
  }

  renderPosts();
});


// SINGLE POST PAGE
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
