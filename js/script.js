const posts = [
  {
    id: 1,
    title: "Top 10 Free AI Tools in 2026",
    content: "ChatGPT, Canva AI, Leonardo AI, Grammarly are powerful tools that help you work faster and smarter."
  },
  {
    id: 2,
    title: "How to Make Money Online Using AI",
    content: "You can earn money using freelancing, blogging, affiliate marketing, YouTube automation and AI tools."
  },
  {
    id: 3,
    title: "Best AI Websites for Students",
    content: "Students can use ChatGPT, Grammarly, Quillbot, Notion AI and Wolfram Alpha to study better."
  }
];


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
