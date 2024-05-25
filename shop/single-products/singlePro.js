const bigImage = document.getElementById("large-image");
const smallImages = document.getElementsByClassName("smallImg");

smallImages[0].onclick = function() {
    bigImage.src = smallImages[0].src;
}

smallImages[1].onclick = function() {
    bigImage.src = smallImages[1].src;
}

smallImages[2].onclick = function() {
    bigImage.src = smallImages[2].src;
}
