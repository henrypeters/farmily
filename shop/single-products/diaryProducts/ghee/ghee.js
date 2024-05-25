const input = document.getElementById("number");
const addCartButton = document.getElementById("addCartBtn");

addCartButton.addEventListener("click", function() {
    if (input.value >= 1) {
       alert(`${input.value} ghee has been added to your cart`);
       localStorage.setItem("ghee", "Ghee");
       localStorage.setItem("gheeNum", input.value)
       localStorage.setItem("gheePrice", input.value*450);
    }else{
        alert("fill in the fields")
    }
})
