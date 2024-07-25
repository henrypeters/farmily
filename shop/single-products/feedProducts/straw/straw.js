const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} straw has been added to your cart`);
       localStorage.setItem("straw", "Straw");
       localStorage.setItem("strawNum", input.value)
       localStorage.setItem("strawPrice", input.value*350);
    }else{
        alert("fill in the fields")
    }
})
