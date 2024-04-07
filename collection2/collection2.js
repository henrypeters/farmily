const largeimage = document.querySelector("section");

window.addEventListener("scroll", function() {
    largeimage.classList.toggle("sticky", window.scrollY > 0);
})

const arrayOfPictures = ["../images/logo/productLogo2.png", "../images/milk/cheese2.jpg", "../images/milk/cream-butter.JPG", "../images/milk/infant-formula.JPG", "../images/milk/panner.JPG",
"../images/milk/yogurt2.jpg", "../images/milk/probiotic-drinks.JPG", "../images/milk/ghee.JPG", "../images/milk/milk3.jpg"];

const arraryOfFoodName = ["", "Cheese", "Cream Butter", "Infant Formula", "Panner", "Yogurt", "Probiotic drinks", "Ghee", "Milk"];

const arrayOfURL = ["", "pasta/spaghetti/spaghetti.html", "pasta/fusilli/fusilli.html", "pasta/rhoute/rhuote.html",
"pasta/macaroni/macaroni.html", "pasta/rigate/rigate.html", "pasta/pappardelle/pappardelle.html", "pasta/orzo/orzo.html",
"pasta/indomie/indomie.html", "pasta/tagliatelle/tagliatelle.html", "pasta/radiatore/radiatore.html", "pasta/gnocchi/gnocchi.html",
"pasta/penne/penne.html", "local-food/jollof-rice/jollof-rice.html", "local-food/asaro/asaro.html", "local-food/iyan/iyan.html",
"local-food/nsala/nsala.html", "local-food/boli/boli.html", "local-food/ukpo-oka/ukpo-oka.html", "local-food/amala/amala.html",
"local-food/plantain/plantain.html", "local-food/egusi/egusi.html", "local-food/ogbono/ogbono.html", "local-food/efo-riro/efo-riro.html", 
"local-food/abacha/abacha.html", "snacks/hot-dog/hot-dog.html", "snacks/cookies/cookies.html", "snacks/meat-pie/meat-pie.html",
"snacks/pizza/pizza.html", "snacks/sandwich/sandwich.html", "snacks/chips/chips.html", "snacks/pop-corn/popcorn.html", 
"snacks/corn-dog/corndog.html", "snacks/shawarma/shawarma.html", "snacks/waffles/waffles.html", "snacks/burger/burger.html",
"snacks/donut/donut.html", "drinks/coke/coke.html", "drinks/fanta/fanta.html", "drinks/schweppes/schweppes.html", 
"drinks/mirinda/mirinda.html", "drinks/sprite/sprite.html", "drinks/chapman/chapman.html", "drinks/pepsi/pepsi.html",
"drinks/limca/limca.html", "drinks/lacasera/lacasera.html", "drinks/malt/malt.html", "drinks/lucozade/lucozade.html",
"drinks/5alive/5alive.html"]

const linkPictureHolder = document.getElementById("anchor")
const largePictureHolder = document.getElementById("large-image");
const foodName = document.getElementById("name");

largePictureHolder.src = arrayOfPictures[0];

function setLargeImage(index) {
    largePictureHolder.src = arrayOfPictures[index];
    linkPictureHolder.href = arrayOfURL[index];
    foodName.innerHTML = arraryOfFoodName[index];
}