const header = document.querySelector("header");
const word1 = document.getElementById("norm1")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})








const body = document.getElementById("bodyHold");
const head = document.querySelector("header");
const service = document.getElementById("serviceCard")
const viewBtn = document.getElementById("view");


service.style.display = "none"

viewBtn.addEventListener("click", function() {
    body.style.display = "none";
    head.classList.add("newHead");
    service.style.display = "block";
})



const menuBtn = document.getElementById("menu")
const closeBtn = document.getElementById("close");
const menuContent = document.getElementById("menuCover"); 

menuBtn.addEventListener("click", function() {
    menuContent.style.display = "grid";
    menuContent.style.placeItems = "center";
    menuContent.style.marginTop = "100px"
    head.classList.add("miniNewHead");
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    body.style.display = "none";
})



const sr = ScrollReveal ({
    distance: '0',
    duration: 2700,
    reset: true
})

sr.reveal('.content', {delay:350, origin:'left'})
sr.reveal('.service', {delay:350, origin:'bottom'})
sr.reveal('.about', {delay:350, origin:'bottom'})
sr.reveal('.product', {delay:350, origin:'bottom'})
sr.reveal('.distribution', {delay:350, origin:'bottom'})
sr.reveal('.ownership', {delay:350, origin:'bottom'})
sr.reveal('.location', {delay:350, origin:'bottom'})
sr.reveal('.contact', {delay:350, origin:'bottom'})




