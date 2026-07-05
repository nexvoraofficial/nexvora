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


// CATEGORY FILTER
function filterCategory(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText;

    if (category === "all") {
      card.style.display = "block";
    } else if (text.includes(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

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
