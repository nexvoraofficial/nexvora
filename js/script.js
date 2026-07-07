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
const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("subscriberEmail").value;

    fetch("subscribe.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + encodeURIComponent(email),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("subscribeMessage").innerHTML = data;
        subscribeForm.reset();
    })
    .catch(() => {
        document.getElementById("subscribeMessage").innerHTML =
            "Something went wrong.";
    });
});
