const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 16 ? "0 18px 50px rgba(0,0,0,.30)" : "none";
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
