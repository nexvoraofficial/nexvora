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
// Load Blog Articles
// ==========================

const blogPosts = document.getElementById("blog-posts");

if (blogPosts && typeof articles !== "undefined") {

  blogPosts.innerHTML = articles.map(article => `
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
