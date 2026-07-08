// ==========================
// Nexvora JavaScript
// ==========================


// Current year in footer
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Highlight active navigation link
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Smooth button animation
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-3px)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
  });
});

console.log("Nexvora Loaded Successfully");

// ==========================
// Blog Render + Search
// ==========================

const blogPosts = document.getElementById("blog-posts");
const searchInput = document.getElementById("article-search");

function renderArticles(list) {

  if (!blogPosts) return;

  blogPosts.innerHTML = list.map(article => `
    <div class="card">

      <h3>${article.title}</h3>

      <p>${article.description}</p>

      <p><strong>${article.category}</strong> • ${article.readTime}</p>

      <a href="article.html?id=${article.id}" class="btn">
        Read Article →
      </a>

    </div>
  `).join("");

}

if (blogPosts && typeof articles !== "undefined") {

  // Show all articles first
  renderArticles(articles);

  // Live Search
  if (searchInput) {

    searchInput.addEventListener("input", () => {

      const keyword = searchInput.value.toLowerCase().trim();

      const filtered = articles.filter(article =>

        article.title.toLowerCase().includes(keyword) ||
        article.category.toLowerCase().includes(keyword) ||
        article.description.toLowerCase().includes(keyword)

      );

      renderArticles(filtered);

    });

  }

}
// ==========================
// Category Filter
// ==========================

document.querySelectorAll("[data-category]").forEach(card => {

  card.style.cursor = "pointer";

  card.addEventListener("click", () => {

    const category = card.dataset.category;

    const filtered = articles.filter(article =>
      article.category === category
    );

    renderArticles(filtered);

    // Search box එක clear කරන්න
    if (searchInput) {
      searchInput.value = "";
    }

    // Latest Articles section එකට scroll කරන්න
    blogPosts.scrollIntoView({
      behavior: "smooth"
    });

  });

});
const toggle = document.getElementById("theme-toggle");

if (toggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        }

    });

}
// ==========================
// Show All Articles
// ==========================

const showAllBtn = document.getElementById("show-all-articles");

if (showAllBtn) {
  showAllBtn.addEventListener("click", () => {

    renderArticles(articles);

    if (searchInput) {
      searchInput.value = "";
    }

    blogPosts.scrollIntoView({
      behavior: "smooth"
    });

  });
}
