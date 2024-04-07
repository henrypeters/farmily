const largeimage = document.querySelector("section");

window.addEventListener("scroll", function() {
    largeimage.classList.toggle("sticky", window.scrollY > 0);
})

const arrayOfPictures = ["../images/logo/productLogo2.png", "../images/diary/diary29.JPG", "../images/diary/newImages/livestock8.jpg", "../images/diary/newImages/livestock3.jpg",
"../images/sheep/ram1.jpg", "../images/poultry/poultry17.jpg"];

const arraryOfFoodName = ["", "Cow", "Pig", "Goat", "Ram", "Chicken"];

const arrayOfURL = []

const linkPictureHolder = document.getElementById("anchor")
const largePictureHolder = document.getElementById("large-image");
const foodName = document.getElementById("name");

largePictureHolder.src = arrayOfPictures[0];

function setLargeImage(index) {
    largePictureHolder.src = arrayOfPictures[index];
    // linkPictureHolder.href = arrayOfURL[index];
    foodName.innerHTML = arraryOfFoodName[index];
}