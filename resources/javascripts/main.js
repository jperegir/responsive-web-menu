document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("toggle").addEventListener("click", () => {
    document.querySelector(".nav ul").classList.toggle("active");
  });
});
