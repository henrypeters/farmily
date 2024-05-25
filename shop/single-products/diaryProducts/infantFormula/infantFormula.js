const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} infant formula has been added to your cart`);
       localStorage.setItem("infantFormula", "Infant Formula");
       localStorage.setItem("InfantNum", input.value)
       localStorage.setItem("InfantPrice", input.value*500);
    }else{
        alert("fill in the fields")
    }
})
