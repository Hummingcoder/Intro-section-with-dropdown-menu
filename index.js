const toggleBtn = document.querySelector(".toggleBtn");
const nav = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const dropdown_container = document.querySelectorAll(".dropdown_container");
dropdown_container.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("show");
  });
});

toggleBtn.addEventListener("click", (e) => {
  if (!nav.classList.contains("show")) {
    nav.classList.add("show");
    overlay.classList.add("show");
  } else {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.classList.remove("show");
      overlay.style.opacity = "1";
    }, 300);
    nav.classList.remove("show");
    dropdown_container.forEach((drop) => {
      drop.classList.remove("show");
    });
  }
});
