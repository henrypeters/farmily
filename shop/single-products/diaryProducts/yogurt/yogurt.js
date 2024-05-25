const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} yogurt has been added to your cart`);
       localStorage.setItem("yogurt", "Yogurt");
       localStorage.setItem("yogurtNum", input.value)
       localStorage.setItem("yogurtPrice", input.value*650);
    }else{
        alert("fill in the fields")
    }
})
