// Sticky navbar background on scroll
const nav = document.getElementById("main-nav");
let ticking = false;

function updateNav() {
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.classList.add("bg-surface/90", "backdrop-blur-md", "border-b", "border-border", "shadow-sm");
    nav.classList.remove("nav-over-hero");
  } else {
    nav.classList.remove("bg-surface/90", "backdrop-blur-md", "border-b", "border-border", "shadow-sm");
    nav.classList.add("nav-over-hero");
  }
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateNav);
    ticking = true;
  }
});

// Active section tracking
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("text-text-primary");
            link.classList.remove("text-text-muted");
          } else {
            link.classList.remove("text-text-primary");
            link.classList.add("text-text-muted");
          }
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));

// Mobile menu toggle
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = mobileMenu?.querySelectorAll("a");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});

menuLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
});
