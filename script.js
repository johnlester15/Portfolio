// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll reveal animation
const elements = document.querySelectorAll(".fade-up");

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.animationPlayState = "running";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
