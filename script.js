
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.textContent = aberto ? "✕" : "☰";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

