const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} barley has been added to your cart`);
       localStorage.setItem("barley", "Barley");
       localStorage.setItem("barleyNum", input.value)
       localStorage.setItem("barleyPrice", input.value*350);
    }else{
        alert("fill in the fields")
    }
})
