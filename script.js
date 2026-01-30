// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const mobile = document.querySelector(".nav-mobile");

if (toggle && mobile) {
  toggle.addEventListener("click", () => {
    const isOpen = mobile.classList.toggle("show");
    toggle.setAttribute("aria-expanded", String(isOpen));
    mobile.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close mobile nav when clicking a link
  mobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobile.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
      mobile.setAttribute("aria-hidden", "true");
    });
  });
}

// Reveal on scroll
const reveals = Array.from(document.querySelectorAll(".reveal"));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => io.observe(el));

// Active nav link highlight
const sections = ["about", "case-studies", "experience", "skills", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

function setActive(id) {
  navLinks.forEach((a) => {
    const href = a.getAttribute("href") || "";
    a.classList.toggle("active", href === `#${id}`);
  });
}

const ioActive = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.target.id) setActive(e.target.id);
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach((s) => ioActive.observe(s));
   
