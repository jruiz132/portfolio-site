// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fake contact form handling (frontend-only)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Message sent! (Demo)";
  form.reset();
});
