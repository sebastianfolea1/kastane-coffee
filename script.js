document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 12) {
    header.style.boxShadow = "0 16px 40px rgba(0,0,0,0.28)";
  } else {
    header.style.boxShadow = "none";
  }
});
