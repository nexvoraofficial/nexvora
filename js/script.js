// ===============================
// NEXVORA WEBSITE SCRIPT
// ===============================


// 1. SMOOTH SCROLL (navigation links)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});


// 2. BLOG POSTS DATA (mini CMS)
const posts = [
  {
    title: "Top 10 Free AI Tools in 2026",
    content: "ChatGPT, Canva AI, Leonardo AI, Grammarly are powerful tools that help you work faster and smarter."
  },
  {
    title: "How to Make Money Online Using AI",
    content: "You can earn money using freelancing, blogging, affiliate marketing, YouTube automation and AI tools."
  },
  {
    title: "Best AI Websites for Students",
    content: "Students can use ChatGPT, Grammarly, Quillbot, Notion AI and Wolfram Alpha to study better."
  }
];


// 3. RENDER BLOG POSTS (auto display on blog page)
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-container");

  if (container) {
    posts.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <a href="post.html" class="btn primary">Read More</a>
      `;

      container.appendChild(card);
    });
  }
});
