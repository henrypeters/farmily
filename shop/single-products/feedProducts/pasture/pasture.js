const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} pasture has been added to your cart`);
       localStorage.setItem("pasture", "Pasture");
       localStorage.setItem("pastureNum", input.value)
       localStorage.setItem("pasturePrice", input.value*300);
    }else{
        alert("fill in the fields")
    }
})
