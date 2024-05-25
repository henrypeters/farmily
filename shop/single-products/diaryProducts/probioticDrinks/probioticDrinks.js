const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} probiotic drink has been added to your cart`);
       localStorage.setItem("probioticDrink", "Probiotic Drink");
       localStorage.setItem("probioticNum", input.value)
       localStorage.setItem("probioticPrice", input.value*650);
    }else{
        alert("fill in the fields")
    }
})
