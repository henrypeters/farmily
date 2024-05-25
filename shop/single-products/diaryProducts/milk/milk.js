const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} milk has been added to your cart`);
       localStorage.setItem("milk", "Milk");
       localStorage.setItem("milkNum", input.value)
       localStorage.setItem("milkPrice", input.value*650);
    }else{
        alert("fill in the fields")
    }
})
