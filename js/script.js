const posts = [
  {
    id: 1,
    title: "Top 10 Free AI Tools in 2026",
    category: "AI",
    content: "ChatGPT, Canva AI, Leonardo AI..."
  },
  {
    id: 2,
    title: "How to Make Money Online",
    category: "Money",
    content: "Freelancing, blogging, affiliate marketing..."
  },
  {
    id: 3,
    title: "Best AI Websites for Students",
    category: "AI",
    content: "ChatGPT, Grammarly, Notion AI..."
  }
];


// SEARCH FUNCTION
const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}


// BLOG LIST LOAD (blog.html)
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-container");

  if (container) {
    posts.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content.substring(0, 80)}...</p>
        <a href="post.html?id=${post.id}" class="btn primary">Read More</a>
      `;

      container.appendChild(card);
    });
  }

  // SINGLE POST LOAD (post.html)
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id && document.getElementById("post-title")) {
    const post = posts.find(p => p.id == id);

    if (post) {
      document.getElementById("post-title").innerText = post.title;
      document.getElementById("post-content").innerText = post.content;
    }
  }
});
