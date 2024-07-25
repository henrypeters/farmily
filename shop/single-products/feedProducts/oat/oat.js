const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} oat has been added to your cart`);
       localStorage.setItem("oat", "Oat");
       localStorage.setItem("oatNum", input.value)
       localStorage.setItem("oatPrice", input.value*450);
    }else{
        alert("fill in the fields")
    }
})
