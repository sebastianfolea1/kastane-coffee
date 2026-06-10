const header = document.querySelector(".site-header");
const toggle = document.querySelector(".theme-toggle");

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 16 ? "0 18px 50px rgba(0,0,0,.30)" : "none";

  document.querySelectorAll(".parallax").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const movement = (rect.top - window.innerHeight / 2) * -0.025;
    el.style.transform = `translateY(${movement}px)`;
  });
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

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const isDecimal = String(el.dataset.target).includes(".");
  let current = 0;
  const steps = 48;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
  }, 22);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
  });
}
