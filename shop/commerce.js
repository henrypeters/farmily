const header = document.querySelector("header");
const word1 = document.getElementById("norm1")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})