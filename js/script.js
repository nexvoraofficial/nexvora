const posts = [
  {
    title: "Top 10 Free AI Tools in 2026",
    content: "ChatGPT, Canva AI, Leonardo AI, Grammarly are powerful free tools that help you work faster and smarter..."
  },
  {
    title: "How to Make Money Online Using AI",
    content: "You can earn money using freelancing, blogging, affiliate marketing, YouTube automation and AI tools..."
  },
  {
    title: "Best AI Websites for Students",
    content: "Students can use ChatGPT, Grammarly, Quillbot, Wolfram Alpha and Notion AI to study better..."
  }
];
// Simple smooth scroll
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
